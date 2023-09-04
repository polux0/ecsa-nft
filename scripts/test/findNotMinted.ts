import { ethers, run } from "hardhat";
import { StorageHandler } from '../StorageHandler';

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('\\n🤖 minter: ', deployer.address);

  const storageHandler = new StorageHandler();
  const nftContractAddress: any = storageHandler.loadStorageDeploymentAddresses('deployment/nft.json');

  // Mint the test NFT
  const testNFT = await ethers.getContractAt('NFT', nftContractAddress[0]);
  console.log(`🎥 loadeded contract deployed at ${testNFT.address}\\n`);

  let notMintedOnes = await testNFT.getAlreadyMintedTokenIds();
  let nonMintedOnesFormated = notMintedOnes
  .map((id: { toNumber: () => any; }) => id.toNumber())
  .sort((a: any, b: any) => Number(a) - (Number(b)));
  let shouldBeMinted = [];
  for (let index = 1; index < 739; index++) {
    shouldBeMinted.push(index);
    
  }
  const diff1 = shouldBeMinted.filter(item => !nonMintedOnesFormated.includes(item));

  console.log('non minted ones: ', diff1);
  storageHandler.saveStorageDeploymentAddresses(nonMintedOnesFormated, './scripts/test/non_minted.json');

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
