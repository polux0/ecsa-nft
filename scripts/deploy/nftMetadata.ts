import { ethers, hardhatArguments, run } from "hardhat";
import { NFTMetadata } from "../../typechain";
import { StorageHandler } from '../StorageHandler';

import * as dotenv from 'dotenv'
dotenv.config()
// we are working with this one ATM
async function main() {
  const [deployer,] = await ethers.getSigners();
  const owner = process.env.OWNER || "0x3C44e5692B73e04Cffb0BDa06e28c7cd754E6bf6";

  const imageURL1 = "ipfs://QmUi3oEmEeDc8SqV8NxSyew9fg1QZKGp3fCeSiN7DszNHn/";
  const imageURL2 = "ipfs://QmZrYrnmrztBcXg4GdWkjMmdCkaeMPWvXprNMp8o4AoYWL/";

  const outputFileNftMetadata = `deployment/${hardhatArguments.network}/nft_metadata.json`;
  const nftMetadataContractsAddresses = [];

  console.log(`\n🤖 deployer address ${deployer.address}\n`)
  const storageHandler = new StorageHandler();
  const storageFacadeManagerAddresses: any = await storageHandler.loadStorageDeploymentAddresses(`deployment/${hardhatArguments.network}/storage_facade_manager.json`);
  
  // Deploy the SplitSequence library
  const splitSequenceLibraryFactory = await ethers.getContractFactory("SplitSequence");
  const splitSequenceLibrary = await splitSequenceLibraryFactory.deploy();
  await splitSequenceLibrary.deployed();
  console.log(`💾 SplitSequence library deployed at ${splitSequenceLibrary.address}\n`)

  // Deploy the SVGGenerator library
  const svgGeneratorLibrary = await ethers.getContractFactory("SVGGenerator");
  const svgGeneratorLib = await svgGeneratorLibrary.deploy();
  await svgGeneratorLib.deployed();
  console.log(`💾 SVGGenerator library deployed at ${svgGeneratorLib.address}\n`)
  // Deploy the NFT
  const nftMetadata = await ethers.getContractFactory('NFTMetadata', {
    libraries: {
    SVGGenerator: svgGeneratorLib.address,
    },
  });
  
  const nftMetadataContract = await nftMetadata.deploy(storageFacadeManagerAddresses[0], imageURL1, imageURL2, { gasLimit: 20000000 }) as NFTMetadata; // as NFTMetadata
  await nftMetadataContract.deployed()
  console.log(`🎥 NFTMetadata contract deployed at ${nftMetadataContract.address}\\n`)
  
  nftMetadataContractsAddresses.push(nftMetadataContract.address);
  await storageHandler.saveStorageDeploymentAddresses(nftMetadataContractsAddresses, outputFileNftMetadata);

  // NFTMetadata verification
  await new Promise(resolve => setTimeout(resolve, 30000))
  await run("verify:verify", {
    address: nftMetadataContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      storageFacadeManagerAddresses[0],
      imageURL1,
      imageURL2
    ],
    contract: "contracts/NFTMetadata.sol:NFTMetadata"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
