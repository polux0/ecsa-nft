import { ethers, run } from "hardhat";
import { UnitDescriptorStorageFacade } from "../../../typechain";

// working script!
async function main() {
  const [deployer,] = await ethers.getSigners();

  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  const unitDescriptorStorageAddresses = ["0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000"];

  // Mapping of current state of the contracts
  // UnitDescriptorStorage1 = 1 - 359
  // UnitDescriptorStorage2 = 360 - 726

  const startRange = [1, 359];
  const endRange = [360, 726];

  const unitDescriptorStorageFacade = await ethers.getContractFactory('UnitDescriptorStorageFacade')
  const unitDescriptorStorageFacadeContract = await unitDescriptorStorageFacade.deploy(unitDescriptorStorageAddresses, startRange, endRange ) as UnitDescriptorStorageFacade; // as UnitDescriptorStorageFacade
  await unitDescriptorStorageFacadeContract.deployed()
  console.log(`💾 UnitDescriptor Storage Facade contract deployed at ${unitDescriptorStorageFacadeContract.address}\\n`)

  // UnitDescriptorStorage verification
  await new Promise(resolve => setTimeout(resolve, 50000))
  await run("verify:verify", {
    address: unitDescriptorStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      unitDescriptorStorageAddresses,
      startRange,
      endRange
    ],
    contract: "contracts/facades/UnitDescriptorStorageFacade.sol:UnitDescriptorStorageFacade"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
