import { ethers, run } from "hardhat";
import { TestNFTProblematicOnesIPFSResolution } from "../../typechain";
import { StorageHandler } from '../StorageHandler';

// we are working with this one ATM
async function main() {
  const [deployer,] = await ethers.getSigners();

  const outputFileChapter = 'deployment/nft.json';
  const nftStorageContractsAddresses = [];

  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)
  const storageHandler = new StorageHandler();
  const storageFacadeAddresses: any = storageHandler.loadStorageDeploymentAddresses('deployment/facades/storage_facades.json');
  // Deploy the SplitSequence library
  // const splitSequenceLibraryFactory = await ethers.getContractFactory("SplitSequence");
  // const splitSequenceLibrary = await splitSequenceLibraryFactory.deploy();
  // await splitSequenceLibrary.deployed();
  // console.log(`💾 SplitSequence library deployed at ${splitSequenceLibrary.address}\\n`)

  // // Deploy the SVGGenerator library
  // const svgGeneratorLibrary = await ethers.getContractFactory("SVGGenerator");
  // const svgGeneratorLib = await svgGeneratorLibrary.deploy();
  // await svgGeneratorLib.deployed();
  // console.log(`💾 SVGGenerator library deployed at ${svgGeneratorLib.address}\\n`)
  // Deploy the NFT
  const testNFT = await ethers.getContractFactory('TestNFTProblematicOnesIPFSResolution', 
  // {
  //   libraries: {
  //   SVGGenerator: svgGeneratorLib.address,
  //   },
  // }
  );
  
  const testNFTContract = await testNFT.deploy(storageFacadeAddresses, { gasLimit: 20000000 }) as TestNFTProblematicOnesIPFSResolution; // as TestNFT
  await testNFTContract.deployed()
  console.log(`🎥 TestNFTAnother contract deployed at ${testNFTContract.address}\\n`)
  
  nftStorageContractsAddresses.push(testNFTContract.address);
  storageHandler.saveStorageDeploymentAddresses(nftStorageContractsAddresses, outputFileChapter);

  // NFT verification
  await new Promise(resolve => setTimeout(resolve, 30000))
  await run("verify:verify", {
    address: testNFTContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      storageFacadeAddresses
    ],
    contract: "contracts/TestNFTProblematicOnesIPFSResolution.sol:TestNFTProblematicOnesIPFSResolution"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
