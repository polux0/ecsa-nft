import { ethers, run } from "hardhat";
import { FigureStorage2 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the FigureStorage2
  const figureStorage2 = await ethers.getContractFactory('FigureStorage2')
  const figureStorageContract = await figureStorage2.deploy({ gasLimit: 20000000 }) as FigureStorage2; // as FigureStorage2
  await figureStorageContract.deployed()
  console.log(`🎥 figureStorageContract contract deployed at ${figureStorageContract.address}\\n`)

  //FigureStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: figureStorageContract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/figure/FigureStorage2.sol:FigureStorage2"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
