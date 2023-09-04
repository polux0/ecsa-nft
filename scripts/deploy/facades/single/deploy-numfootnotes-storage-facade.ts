import { ethers, run } from "hardhat";
import { NumFootnotesStorageFacade } from "../../../typechain";

// working script!
async function main() {
  const [deployer,] = await ethers.getSigners();

  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  const numFootnotesStorageAddresses = ["0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000"];

  // Mapping of current state of the contracts
  // NumFootnotesStorage1 = 1 - 360
  // NumFootnotesStorage2 = 361 - 726

  const startRange = [1, 360];
  const endRange = [361, 726];

  const numFootnotesStorageFacade = await ethers.getContractFactory('NumFootnotesStorageFacade')
  const numFootnotesStorageFacadeContract = await numFootnotesStorageFacade.deploy(numFootnotesStorageAddresses, startRange, endRange ) as NumFootnotesStorageFacade; // as NumFootnotesStorageFacade
  await numFootnotesStorageFacadeContract.deployed()
  console.log(`💾 NumFootnotes Storage Facade contract deployed at ${numFootnotesStorageFacadeContract.address}\\n`)

  // NumFootnotesStorage verification
  await new Promise(resolve => setTimeout(resolve, 50000))
  await run("verify:verify", {
    address: numFootnotesStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      numFootnotesStorageAddresses,
      startRange,
      endRange
    ],
    contract: "contracts/facades/NumFootnotesStorageFacade.sol:NumFootnotesStorageFacade"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
