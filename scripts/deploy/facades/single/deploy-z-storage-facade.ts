import { ethers, run } from "hardhat";
import { ZStorageFacade } from "../../../../typechain";

// working script!
async function main() {
  const [deployer,] = await ethers.getSigners();

  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  const zStorageAddresses = [
  "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000"];
  
  // Mapping of current state of the contracts
  // ZStorage1 = 1 - 369
  // ZStorage2 = 370 - 726

  const startRange = [1, 369];
  const endRange =   [370, 726];

  const zStorageFacade = await ethers.getContractFactory('ZStorageFacade')
  const zStorageFacadeContract = await zStorageFacade.deploy(zStorageAddresses, startRange, endRange ) as ZStorageFacade; // as ZStorageFacade
  await zStorageFacadeContract.deployed()
  console.log(`💾 Unit Storage Facade contract deployed at ${zStorageFacadeContract.address}\\n`)

  // ChapterStorage verification
  await new Promise(resolve => setTimeout(resolve, 50000))
  await run("verify:verify", {
    address: zStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      zStorageAddresses,
      startRange,
      endRange
    ],
    contract: "contracts/facades/ZStorageFacade.sol:ZStorageFacade"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
