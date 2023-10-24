import { ethers, hardhatArguments, run } from "hardhat";
import { NFT } from "../../typechain";
import { StorageHandler } from '../StorageHandler';

import * as dotenv from 'dotenv'
dotenv.config()
// we are working with this one ATM
async function main() {
  const [deployer,] = await ethers.getSigners();
  const owner = process.env.OWNER || "0x3C44e5692B73e04Cffb0BDa06e28c7cd754E6bf6";

  const outputFileNFT = `deployment/${hardhatArguments.network}/nft.json`;
  const nftStorageContractsAddresses = [];

  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)
  const storageHandler = new StorageHandler();
  const nftMetadataAddresses: any = await storageHandler.loadStorageDeploymentAddresses(`deployment/${hardhatArguments.network}/nft_metadata.json`);

  // Deploy the NFT
  const testNFT = await ethers.getContractFactory('NFT');

  const reservationStorageLocation = `deployment/${hardhatArguments.network}/reservations/reservation_storage.json`;
  const reservationStorageContractAddress: any = await storageHandler.loadStorageDeploymentAddresses(reservationStorageLocation);

  const invitationStorageLocation = `deployment/${hardhatArguments.network}/invitations/invitation_storage.json`;
  const invitationStorageContractAddress: any = await storageHandler.loadStorageDeploymentAddresses(invitationStorageLocation);

  const testNFTContract = await testNFT.deploy(nftMetadataAddresses[0], reservationStorageContractAddress[0], invitationStorageContractAddress[0], { gasLimit: 20000000 }) as NFT; // as TestNFT
  await testNFTContract.deployed()
  console.log(`🎥 NFT contract deployed at ${testNFTContract.address}\\n`)
  
  nftStorageContractsAddresses.push(testNFTContract.address);

  const directoryNFT = `deployment/${hardhatArguments.network}/`;
  const filenameNFT = 'nft.json';
  
  await storageHandler.ensureDirectoryExistence(directoryNFT, filenameNFT);
  await storageHandler.saveStorageDeploymentAddresses(nftStorageContractsAddresses, outputFileNFT);

  // NFT verification
  await new Promise(resolve => setTimeout(resolve, 30000))
  await run("verify:verify", {
    address: testNFTContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      nftMetadataAddresses[0],
      reservationStorageContractAddress[0],
      invitationStorageContractAddress[0]
    ],
    contract: "contracts/NFT.sol:NFT"
  })


  // update Reservations by setting authorizedContract = NFT ( this )
  const reservationStorage = await ethers.getContractAt('ReservationStorage', reservationStorageContractAddress[0]);
  console.log(`🎥 loadeded reservation storage contract deployed at ${reservationStorageContractAddress[0]}`);

  let reservationUpdateAuthorizedContractTransaction = await reservationStorage.setAuthorizedContract(testNFTContract.address, {gasLimit: 12000000});
  // update Invitations by setting authorizedContract = NFT ( this )
  const isReservationUpdateSuccesfull = await reservationUpdateAuthorizedContractTransaction.wait();
  console.log('reservation update status: ', isReservationUpdateSuccesfull);
  const invitationStorage = await ethers.getContractAt('InvitationStorage', invitationStorageContractAddress[0]);
  console.log(`🎥 loadeded invitation storage contract deployed at ${invitationStorageContractAddress[0]}`);
  let invitationUpdateAuthorizedContractTransaction = await invitationStorage.setAuthorizedContract(testNFTContract.address, {gasLimit: 12000000});
  const isInvitationUpdateSuccesfull = await invitationUpdateAuthorizedContractTransaction.wait();
  console.log('invitation update status: ', isInvitationUpdateSuccesfull);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
