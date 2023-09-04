import { ethers, run } from "hardhat";
import { IncludesFigureStorageFacade } from "../../../typechain";

// working script!
async function main() {
  const [deployer,] = await ethers.getSigners();

  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  const includesFigureStorageAddresses = ["0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000"];

  // Mapping of current state of the contracts
  // IncludesFigureStorage1 = 1 - 359
  // IncludesFigureStorage2 = 360 - 726

  const startRange = [1, 360];
  const endRange = [359, 726];

  const includesFigureStorageFacade = await ethers.getContractFactory('IncludesFigureStorageFacade')
  const includesFigureStorageFacadeContract = await includesFigureStorageFacade.deploy(includesFigureStorageAddresses, startRange, endRange ) as IncludesFigureStorageFacade; // as IncludesFigureStorageFacade
  await includesFigureStorageFacadeContract.deployed()
  console.log(`💾 IncludesFigure Storage Facade contract deployed at ${includesFigureStorageFacadeContract.address}\\n`)

  // IncludesFigureStorage verification
  await new Promise(resolve => setTimeout(resolve, 50000))
  await run("verify:verify", {
    address: includesFigureStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      includesFigureStorageAddresses,
      startRange,
      endRange
    ],
    contract: "contracts/facades/IncludesFigureStorageFacade.sol:IncludesFigureStorageFacade"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
