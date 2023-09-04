import { ethers, run } from "hardhat";
import { SectionStorageFacade } from "../../../typechain";

// working script!
async function main() {
  const [deployer,] = await ethers.getSigners();

  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  const SectionStorageAddresses = ["0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000"];

  // Mapping of current state of the contracts
  // sectionStorage1 = 1 - 363
  // sectionStorage2 = 364 - 726

  const startRange = [1, 363];
  const endRange = [364, 726];

  const sectionStorageFacade = await ethers.getContractFactory('SectionStorageFacade')
  const sectionStorageFacadeContract = await sectionStorageFacade.deploy(SectionStorageAddresses, startRange, endRange ) as SectionStorageFacade; // as SectionStorageFacade
  await sectionStorageFacadeContract.deployed()
  console.log(`💾 Section Storage Facade contract deployed at ${sectionStorageFacadeContract.address}\\n`)

  // SectionStorage verification
  await new Promise(resolve => setTimeout(resolve, 50000))
  await run("verify:verify", {
    address: sectionStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      SectionStorageAddresses,
      startRange,
      endRange
    ],
    contract: "contracts/facades/SectionStorageFacade.sol:SectionStorageFacade"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
