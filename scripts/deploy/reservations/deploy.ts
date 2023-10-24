import { ethers, hardhatArguments, run } from "hardhat";
import { ReservationStorage } from "../../../typechain";
import { StorageHandler } from '../../StorageHandler';
import { SupabaseManager } from "../../util/SupabaseManager";

// we are working with this one ATM
async function main() {
  const [deployer,] = await ethers.getSigners();

  const outputFileReservations = `deployment/${hardhatArguments.network}/reservations/reservation_storage.json`;

  console.log(`\n🤖 deployer address ${deployer.address}\n`)
  const storageHandler = new StorageHandler();

  const reservations: any = await storageHandler.loadStorageDeploymentAddresses(`deployment/sepolia/reservations/reservations.json`);
  const reservationsHashed: any = await storageHandler.loadStorageDeploymentAddresses(`deployment/sepolia/reservations/reservations_hashed.json`);
  const tokens: any = await storageHandler.loadStorageDeploymentAddresses(`deployment/sepolia/reservations/tokens.json`);

  const reservationStorageAddress = [];

  const reservationStorage = await ethers.getContractFactory('ReservationStorage');

  const reservationStorageContract = await reservationStorage.deploy( { gasLimit: 20000000 }) as ReservationStorage; // as ReservationStorage
  await reservationStorageContract.deployed()
  console.log(`🎥 ReservationStorageContract contract deployed at ${reservationStorageContract.address}\\n`)
  
  reservationStorageAddress.push(reservationStorageContract.address);

  const directoryReservations = `deployment/${hardhatArguments.network}/reservations/`;
  const filenameReservations = 'reservation_storage.json';  
  
  await storageHandler.ensureDirectoryExistence(directoryReservations, filenameReservations);
  await storageHandler.saveStorageDeploymentAddresses(reservationStorageAddress, outputFileReservations);

  // ReservationStorage verification
  await new Promise(resolve => setTimeout(resolve, 30000))
  await run("verify:verify", {
    address: reservationStorageContract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/reservations/ReservationStorage.sol:ReservationStorage"
  })

  // attempt to add reservation data;
  type Reservations = {
    value: string;
    token_id: number;
    used_by_wallet: string;
    created_at: Date;
    updated_at: Date;
  };

  const testReservationStorage = await ethers.getContractAt('ReservationStorage', reservationStorageContract.address);
  console.log(`🎥 loadeded reservation storage contract deployed at ${reservationStorageContract.address}`);

  const reservationsArray: Reservations[] = reservations.map((reservation: any, index: any) => {
    const params = new URLSearchParams(new URL(reservation).search);
    console.log('params', params);
    const reservationId = params.get("reservationId");
    console.log('reservationID:', reservationId)
    return {
        value: reservationId,
        token_id: tokens[index],
        used_by_wallet: "0x",
        created_at: new Date(),
        updated_at: new Date(),
    };
  });
  let tranasction = await testReservationStorage["addData(bytes32[],uint256[])"](reservationsHashed, tokens, {gasLimit: 12000000});
  await tranasction.wait();
  let supabaseManager = new SupabaseManager();
  // supabaseManager.storeMultiple(reservationsArray, 'reservations');


  // // second attempt should be to add it in constructor directly
  let reservation = reservations[0];
  const params = new URLSearchParams(new URL(reservation).search);
  const reservationId = params.get("reservationId");

  // // After we finish with second attempt
  let validityCheckTransaction = await testReservationStorage.isValidReservation(reservationId!, tokens[0]);
  console.log('validityCheckTransaction: ', validityCheckTransaction);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
