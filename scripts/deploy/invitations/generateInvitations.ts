import { ethers, hardhatArguments, run  } from "hardhat";
import { StorageHandler } from '../../StorageHandler';

function generateInvitationCode(length: number = 10): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
function generateInvitationURL(baseURL: string, numInvitations: number = 2199, codeLength: number = 64): string[] {
  const urls: string[] = [];
  for (let i = 0; i < numInvitations; i++) {
      const code = generateInvitationCode(codeLength);
      urls.push(`${baseURL}?invitationId=${code}`);
      // urls.push(code)
  }
  return urls;
}

async function main() {

  const storageHandler = new StorageHandler();

  const baseURL = 'https://postcapitalist.agency/';
  const invitationURLs = generateInvitationURL(baseURL);

  const invitations = []
  const invitationsHashed = []
  // note - for production enviornment ( e-mails mostly ) we should create full URL
  let i = 0;

  for (const url of invitationURLs) {
      i++;
      invitations.push(url);
      // now hash is whole invitation, we need to modify this:
      const params = new URLSearchParams(new URL(url).search);
      const invitationId = params.get("invitationId");
      const hash = ethers.utils.solidityKeccak256(['string'], [invitationId]);
      invitationsHashed.push(hash);
      const hashToBytes = ethers.utils.arrayify(hash);
      // note - in production enivornment  should be manually created
  }
  // console.log('invitations :\n', invitations)
  // console.log('invitationsHashed: \n', invitationsHashed);

  const outputFileReservations = `deployment/${hardhatArguments.network}/invitations/invitations.json`;
  const outputFileReservationsHashed = `deployment/${hardhatArguments.network}/invitations/invitations_hashed.json`;

  storageHandler.saveStorageDeploymentAddresses(invitations, outputFileReservations);
  storageHandler.saveStorageDeploymentAddresses(invitationsHashed, outputFileReservationsHashed);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
