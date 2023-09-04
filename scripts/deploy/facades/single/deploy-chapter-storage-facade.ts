import { ethers, run } from "hardhat";
import { ChapterStorageFacade } from "../../../typechain";

// working script!
async function main() {
  const [deployer,] = await ethers.getSigners();

  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  const chapterStorageAddresses = ["0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000"];

  // Mapping of current state of the contracts
  // ChapterStorage1 = 1 - 363
  // ChapterStorage2 = 364 - 726

  // Mapping of current state of the contracts ( 2nd iteration of NFT cosmetics - should be final for `Chapter` )
  // ChapterStorage1 = 1 - 365
  // ChapterStorage2 = 366 - 739

  // do this as well later
  const startRange = [1, 364];
  const endRange =   [365, 726];

  const chapterStorageFacade = await ethers.getContractFactory('ChapterStorageFacade')
  const chapterStorageFacadeContract = await chapterStorageFacade.deploy(chapterStorageAddresses, startRange, endRange ) as ChapterStorageFacade; // as ChapterStorageFacade
  await chapterStorageFacadeContract.deployed()
  console.log(`💾 Chapter Storage Facade contract deployed at ${chapterStorageFacadeContract.address}\\n`)

  // ChapterStorage verification
  await new Promise(resolve => setTimeout(resolve, 50000))
  await run("verify:verify", {
    address: chapterStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      chapterStorageAddresses,
      startRange,
      endRange
    ],
    contract: "contracts/facades/ChapterStorageFacade.sol:ChapterStorageFacade"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
