import { ethers, run, hardhatArguments } from "hardhat";
import { StorageHandler } from '../StorageHandler';

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('\\n🤖 minter: ', deployer.address);

  const storageHandler = new StorageHandler();
  const nftContractAddress: any = await storageHandler.loadStorageDeploymentAddresses(`deployment/${hardhatArguments.network}/nft.json`);

  // Mint the test NFT
  const testNFT = await ethers.getContractAt('NFT', nftContractAddress[0]);
  console.log(`🎥 loadeded contract deployed at ${testNFT.address}\\n`);

  // 9, 12, 14, 15, 18, 19, 21, 22, 23, 25, 26, 27, 29, 30
  // const notMinted = [31, 32, 34, 37, 38, 39, 43, 45, 52];
  
  for (let i = 2; i <= 601; i++) {
      console.log(`Minting for number: ${i}`);
      let tranasction = await testNFT.mintBaseTest(i, {gasLimit: 12000000});
      await tranasction.wait();
  }

  // minting ones that were not minted for some reason:

//   for (let i = 0; i <= notMinted.length; i++) {
//     console.log(`Minting for number: ${i}`);
//     let tranasction = await testNFT.mintById(notMinted[i], {gasLimit: 12000000});
//     await tranasction.wait();
//     // If it's not the last iteration, then wait for 45 seconds
//     // if (i < 739) {
//     //     console.log(`Waiting for 45 seconds...`);
//     //     await new Promise(resolve => setTimeout(resolve, 45000));
//     // }
// }

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
