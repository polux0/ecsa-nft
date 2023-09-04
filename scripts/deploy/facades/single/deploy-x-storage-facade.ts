import { ethers, run } from "hardhat";
import { XStorageFacade } from "../../../typechain";

// working script!
async function main() {
  const [deployer,] = await ethers.getSigners();

  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  const xStorageAddresses = [
  "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000"];
  
  // Mapping of current state of the contracts
  // XStorage1 = 1 - 369
  // XStorage2 = 370 - 726

  const startRange = [1, 369];
  const endRange =   [370, 726];

  const xStorageFacade = await ethers.getContractFactory('XStorageFacade')
  const xStorageFacadeContract = await xStorageFacade.deploy(xStorageAddresses, startRange, endRange ) as XStorageFacade; // as XStorageFacade
  await xStorageFacadeContract.deployed()
  console.log(`💾 Unit Storage Facade contract deployed at ${xStorageFacadeContract.address}\\n`)

  // ChapterStorage verification
  await new Promise(resolve => setTimeout(resolve, 50000))
  await run("verify:verify", {
    address: xStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      xStorageAddresses,
      startRange,
      endRange
    ],
    contract: "contracts/facades/XStorageFacade.sol:XStorageFacade"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
