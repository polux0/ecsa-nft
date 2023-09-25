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
// note - for production enviornment ( e-mails mostly ) we should create full URL
async function main() {

  const storageHandler = new StorageHandler();

  const baseURL = 'https://ecsa-book.vercel.app/';
  const invitationURLs = generateReservationURL(baseURL, 36);

  const reservations = []
  const reservationsHashed = []
  // note - in production enivornment reservedTokens should be manually created
  const reservedTokens = [12, 26, 33, 37, 39, 43, 91, 96, 118, 125, 153, 161, 201, 202, 203, 280, 283, 287, 288, 311, 320,
                          372, 376, 383, 384, 414, 417, 437, 445, 488, 547, 549, 557, 590, 600, 601
                         ];
  const physicalBook = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,
                        true,true, false, true, true, true, true, true, false, true, true, true, true, true, false, true,
                        true, true, true,false 
                       ];

  for (const url of invitationURLs) {
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
  }

  console.log('reservations :\n', reservations);
  console.log('reservationsHashed: \n', reservationsHashed);
  // console.log('reservedTokens:', reservedTokens);

  const outputFileReservations = 'deployment/reservations/reservations.json';
  const outputFileReservationsHashed = 'deployment/reservations/reservations_hashed.json';
  const outputFileTokens = 'deployment/reservations/tokens.json';
  const outputFilePhysicalBook = 'deployment/reservations/physical_book.json';

  storageHandler.saveStorageDeploymentAddresses(reservations, outputFileReservations);
  storageHandler.saveStorageDeploymentAddresses(reservationsHashed, outputFileReservationsHashed);
  storageHandler.saveStorageDeploymentAddresses(reservedTokens, outputFileTokens);
  storageHandler.saveStorageDeploymentAddresses(physicalBook, outputFilePhysicalBook);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
