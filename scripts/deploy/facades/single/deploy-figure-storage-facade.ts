import { ethers, run } from "hardhat";
import { FiguresStorageFacade } from "../../../typechain";

// working script!
async function main() {
  const [deployer,] = await ethers.getSigners();

  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  const figureStorageAddresses = ["0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000"];

  // Mapping of current state of the contracts
  // FigureStorage1 = 1 - 360
  // FigureStorage2 = 361 - 726

  const startRange = [1, 364];
  const endRange =   [363, 726];

  const figuresStorageFacade = await ethers.getContractFactory('FiguresStorageFacade')
  const figuresStorageFacadeContract = await figuresStorageFacade.deploy(figureStorageAddresses, startRange, endRange ) as FiguresStorageFacade; // as FiguresStorageFacade
  await figuresStorageFacadeContract.deployed()
  console.log(`💾 Figures Storage Facade contract deployed at ${figuresStorageFacadeContract.address}\\n`)

  // FiguresStorage verification
  await new Promise(resolve => setTimeout(resolve, 50000))
  await run("verify:verify", {
    address: figuresStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      figureStorageAddresses,
      startRange,
      endRange
    ],
    contract: "contracts/facades/FiguresStorageFacade.sol:FiguresStorageFacade"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
