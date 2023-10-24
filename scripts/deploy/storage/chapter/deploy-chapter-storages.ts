import { ethers, run, hardhatArguments } from "hardhat";
import { ChapterStorage1, ChapterStorage2 } from "../../../../typechain";
import { StorageHandler } from '../../../StorageHandler';

async function main() {
  const [deployer,] = await ethers.getSigners();
  const storageHandler = new StorageHandler();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)
  console.log("Network name=", hardhatArguments.network);

  const chapterStorageContractsAddresses = [];

  // Deploy the ChapterStorage1
  // const chapterStorage1 = await ethers.getContractFactory('ChapterStorage1')
  // const chapterStorage1Contract = await chapterStorage1.deploy() as ChapterStorage1; // as ChapterStorage1
  // await chapterStorage1Contract.deployed()
  // console.log(`🎥 chapterStorage1Contract contract deployed at ${chapterStorage1Contract.address}\\n`)
  
  // chapterStorageContractsAddresses.push(chapterStorage1Contract.address);
  
  // // Deploy the ChapterStorage2
  // const chapterStorage2 = await ethers.getContractFactory('ChapterStorage2')
  // const chapterStorage2Contract = await chapterStorage2.deploy() as ChapterStorage2; // as ChapterStorage2
  // await chapterStorage2Contract.deployed()
  // console.log(`🎥 chapterStorage2Contract contract deployed at ${chapterStorage2Contract.address}\\n`)

  // chapterStorageContractsAddresses.push(chapterStorage2Contract.address);
  chapterStorageContractsAddresses.push("0x");
  
  const outputFile = `deployment/${hardhatArguments.network}/chapter_storage.json`;
  const directory = `deployment/${hardhatArguments.network}/`;
  const filename = 'chapter_storage.json';

  storageHandler.ensureDirectoryExistence(directory, filename);
  storageHandler.saveStorageDeploymentAddresses(chapterStorageContractsAddresses, outputFile);

  // Load data from the file
  // const loadedArray = storageHandler.loadStorageDeploymentAddresses(outputFile);

  // console.log('Loaded JSON array:', loadedArray);

  // ChapterStorage1 verification
  // await new Promise(resolve => setTimeout(resolve, 10000))
  // await run("verify:verify", {
  //   address: chapterStorage1Contract.address,
  //   network: ethers.provider.network,
  //   constructorArguments: [],
  //   contract: "contracts/storage/chapter/ChapterStorage1.sol:ChapterStorage1"
  // })
  // // ChapterStorage2 verification
  // await new Promise(resolve => setTimeout(resolve, 20000))
  // await run("verify:verify", {
  //   address: chapterStorage2Contract.address,
  //   network: ethers.provider.network,
  //   constructorArguments: [],
  //   contract: "contracts/storage/chapter/ChapterStorage2.sol:ChapterStorage2"
  // })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
