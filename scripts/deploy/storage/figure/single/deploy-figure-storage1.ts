import { ethers, run } from "hardhat";
import { FigureStorage1 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the FigureStorage1
  const figureStorage1 = await ethers.getContractFactory('FigureStorage1')
  const figureStorageContract = await figureStorage1.deploy({ gasLimit: 20000000 }) as FigureStorage1; // as FigureStorage1
  await figureStorageContract.deployed()
  console.log(`🎥 figureStorageContract contract deployed at ${figureStorageContract.address}\\n`)

  //FigureStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: figureStorageContract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/figure/FigureStorage1.sol:FigureStorage1"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
