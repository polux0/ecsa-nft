import { ethers, hardhatArguments, run } from "hardhat";
import { StorageHandler } from '../../StorageHandler';

function generateReservationCode(length: number = 10): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
function generateReservationURL(baseURL: string, numInvitations: number = 100, codeLength: number = 64): string[] {
  const urls: string[] = [];
  for (let i = 0; i < numInvitations; i++) {
      const code = generateReservationCode(codeLength);
      urls.push(`${baseURL}?reservationId=${code}`);
      // urls.push(code)
  }
  return urls;
}
// note - for production enviornment ( e-mails mostly ) we should create full URL
async function main() {

  const storageHandler = new StorageHandler();

  const baseURL = 'https://postcapitalist.agency/';
  const invitationURLs = generateReservationURL(baseURL, 97);

  const reservations = []
  const reservationsHashed = []
  // note - in production enivornment reservedTokens should be manually created

  const reservedTokens = [1,11, 12, 21, 26, 31, 33, 37, 39, 41, 43, 51, 61, 71, 81, 91, 92,96,101,111,118,121,125,131,141,151,153,161,162,171,181,191,201,202,203,204,211,221,231,241,251,261,271,280,281,283,287,288,291,301,311,312,320,321,331,341,351,361,371,372,376,381,383,384,391,401,411,414,417,421,431,437,441,445,488,451,461,471,481,491,501,511,521,531,541,547,549,551,557,561,571,581,590,591,599,600,601];

  for (const [index, url] of invitationURLs.entries()) {
      reservations.push(url+`#${reservedTokens[index]}`);
      // now hash is whole invitation, we need to modify this:
      const params = new URLSearchParams(new URL(url).search);
      const reservationId = params.get("reservationId");
      console.log('whole url: ', url);
      console.log('reservation part:', reservationId);
      const hash = ethers.utils.solidityKeccak256(['string'], [reservationId]); 
      reservationsHashed.push(hash);
      const hashToBytes = ethers.utils.arrayify(hash);
      // note - in production enivornment reservedTokens should be manually created
  }

  console.log('reservations :\n', reservations);
  console.log('reservationsHashed: \n', reservationsHashed);
  // console.log('reservedTokens:', reservedTokens);

  const outputFileReservations = `deployment/${hardhatArguments.network}/reservations/reservations.json`;
  const outputFileReservationsHashed = `deployment/${hardhatArguments.network}/reservations/reservations_hashed.json`;
  const outputFileTokens = `deployment/${hardhatArguments.network}/reservations/tokens.json`;

  storageHandler.saveStorageDeploymentAddresses(reservations, outputFileReservations);
  storageHandler.saveStorageDeploymentAddresses(reservationsHashed, outputFileReservationsHashed);
  storageHandler.saveStorageDeploymentAddresses(reservedTokens, outputFileTokens);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
