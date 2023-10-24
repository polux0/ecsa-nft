import { ethers, hardhatArguments, run } from "hardhat";
import { InvitationStorage } from "../../../typechain";
import { StorageHandler } from '../../StorageHandler';
import { SupabaseManager } from "../../util/SupabaseManager";

// we are working with this one ATM
async function main() {
  const [deployer,] = await ethers.getSigners();

  const outputFileInvitations = `deployment/${hardhatArguments.network}/invitations/invitation_storage.json`;

  console.log(`\n🤖 deployer address ${deployer.address}\n`)
  const storageHandler = new StorageHandler();

  const invitations: any = await storageHandler.loadStorageDeploymentAddresses(`deployment/sepolia/invitations/invitations.json`);
  const invitationsHashed: any =  await storageHandler.loadStorageDeploymentAddresses(`deployment/sepolia/invitations/invitations_hashed.json`);

  const invitationStorageAddress = [];

  const invitationStorage = await ethers.getContractFactory('InvitationStorage');

  const invitationStorageContract = await invitationStorage.deploy( { gasLimit: 20000000 }) as InvitationStorage; // as InvitationStorage
  await invitationStorageContract.deployed()
  console.log(`🎥 InvitationStorageContract contract deployed at ${invitationStorageContract.address}\\n`)
  
  invitationStorageAddress.push(invitationStorageContract.address);

  const directoryInvitations = `deployment/${hardhatArguments.network}/invitations/`;
  const filenameInvitations = 'invitation_storage.json';  

  await storageHandler.ensureDirectoryExistence(directoryInvitations, filenameInvitations);
  await storageHandler.saveStorageDeploymentAddresses(invitationStorageAddress, outputFileInvitations);

  // InvitationStorage verification
  await new Promise(resolve => setTimeout(resolve, 30000))
  await run("verify:verify", {
    address: invitationStorageContract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/invitations/InvitationStorage.sol:InvitationStorage"
  })

  // attempt to add invitation data;

  const testInvitationStorage = await ethers.getContractAt('InvitationStorage', invitationStorageContract.address);
  console.log(`🎥 loadeded invitation storage contract deployed at ${invitationStorageContract.address}`);

  type Invitations = {
    invited_by_invitation_id: number;
    invited_by_reservation_id: number;
    value: string; // character varying or varchar maps to string in TypeScript
    used_by_wallet: string;
    created_at: Date; // timestamp without time zone can be represented as a Date in TypeScript
    updated_at: Date; // same as above
  };

  // we need ~ 16 transactions to insert 2199 invitations
  const chunkSize = Math.ceil(invitationsHashed.length / 16);
  for (let i = 0; i < 16; i++) {
    const start = i * chunkSize;
    const end = start + chunkSize;
    const chunk = invitationsHashed.slice(start, end);
    let transaction = await testInvitationStorage.addDataBulk(chunk, {gasLimit: 12000000});
    await transaction.wait();
}
    // supabase
  const invitationsArray: Invitations[] = invitations.map((invitation: any, index: any) => {
    const params = new URLSearchParams(new URL(invitation).search);
    const invitationId = params.get("invitationId");
      return {
          invited_by_invitation_id: 0,
          invited_by_reservation_id: 0,
          value: invitationId,
          used_by_wallet: "0x",
          created_at: new Date(),
          updated_at: new Date(),
      };
  });
  let supabaseManager = new SupabaseManager();
  // let postgresTransactions = await supabaseManager.storeMultiple(invitationsArray, 'invitations');

  // second attempt should be to add it in constructor directly
  let invitation = invitations[0];
  const params = new URLSearchParams(new URL(invitation).search);
  const invitationId = params.get("invitationId");
  // // After we finish with second attempt
  let validityCheckTransaction = await testInvitationStorage.isValidInvitation(invitationId!);
  console.log('validityCheckTransaction: ', validityCheckTransaction);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
