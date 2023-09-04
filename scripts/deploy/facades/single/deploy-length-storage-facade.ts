import { ethers, run } from "hardhat";
import { LengthStorageFacade } from "../../../typechain";

// working script!
async function main() {
  const [deployer,] = await ethers.getSigners();

  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  const lengthStorageAddresses = ["0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000"];

  // Mapping of current state of the contracts
  // LengthStorage1 = 1 - 369
  // LengthStorage2 = 370 - 726

  const startRange = [1, 370];
  const endRange = [369, 726];

  const lengthStorageFacade = await ethers.getContractFactory('LengthStorageFacade')
  const lengthStorageFacadeContract = await lengthStorageFacade.deploy(lengthStorageAddresses, startRange, endRange ) as LengthStorageFacade; // as LengthStorageFacade
  await lengthStorageFacadeContract.deployed()
  console.log(`💾 Length Storage Facade contract deployed at ${lengthStorageFacadeContract.address}\\n`)

  // LengthStorage verification
  await new Promise(resolve => setTimeout(resolve, 50000))
  await run("verify:verify", {
    address: lengthStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      lengthStorageAddresses,
      startRange,
      endRange
    ],
    contract: "contracts/facades/LengthStorageFacade.sol:LengthStorageFacade"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
