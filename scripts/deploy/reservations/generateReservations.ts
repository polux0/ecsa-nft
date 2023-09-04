import { ethers, run } from "hardhat";
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
// note - in production enivornment reservedTokens should be manually created
// note - for production enviornment ( e-mails mostly ) we should create full URL
async function main() {

  const storageHandler = new StorageHandler();

  const baseURL = 'https://ecsa-book.vercel.app/';
  const invitationURLs = generateReservationURL(baseURL);

  const reservations = []
  const reservationsHashed = []
  // note - in production enivornment reservedTokens should be manually created
  const reservedTokens = []
  let i = 0;

  for (const url of invitationURLs) {
      i++;
      reservations.push(url);
      // now hash is whole invitation, we need to modify this:
      const params = new URLSearchParams(new URL(url).search);
      const reservationId = params.get("reservationId");
      console.log('whole url: ', url);
      console.log('reservation part:', reservationId);
      const hash = ethers.utils.solidityKeccak256(['string'], [reservationId]); 
      reservationsHashed.push(hash);
      const hashToBytes = ethers.utils.arrayify(hash);
      // note - in production enivornment reservedTokens should be manually created
      reservedTokens.push(i);
  }
  console.log('reservations :\n', reservations)
  console.log('reservationsHashed: \n', reservationsHashed);
  // console.log('reservedTokens:', reservedTokens);

  const outputFileReservations = 'deployment/reservations/reservations.json';
  const outputFileReservationsHashed = 'deployment/reservations/reservations_hashed.json';
  const outputFileTokens = 'deployment/reservations/tokens.json';

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
