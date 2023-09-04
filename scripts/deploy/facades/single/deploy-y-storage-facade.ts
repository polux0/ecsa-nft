import { ethers, run } from "hardhat";
import { YStorageFacade } from "../../../typechain";

// working script!
async function main() {
  const [deployer,] = await ethers.getSigners();

  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  const yStorageAddresses = [
  "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000"];
  
  // Mapping of current state of the contracts
  // YStorage1 = 1 - 369
  // YStorage2 = 370 - 726

  const startRange = [1, 369];
  const endRange =   [370, 726];

  const yStorageFacade = await ethers.getContractFactory('YStorageFacade')
  const yStorageFacadeContract = await yStorageFacade.deploy(yStorageAddresses, startRange, endRange ) as YStorageFacade; // as YStorageFacade
  await yStorageFacadeContract.deployed()
  console.log(`💾 Unit Storage Facade contract deployed at ${yStorageFacadeContract.address}\\n`)

  // ChapterStorage verification
  await new Promise(resolve => setTimeout(resolve, 50000))
  await run("verify:verify", {
    address: yStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      yStorageAddresses,
      startRange,
      endRange
    ],
    contract: "contracts/facades/YStorageFacade.sol:YStorageFacade"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
