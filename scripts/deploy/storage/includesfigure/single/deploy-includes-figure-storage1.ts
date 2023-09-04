import { ethers, run } from "hardhat";
import { IncludesFigureStorage1 } from "../../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the IncludesFigureStorage1
  const includesFigureStorage1 = await ethers.getContractFactory('IncludesFigureStorage1')
  const includesFigureStorage1Contract = await includesFigureStorage1.deploy() as IncludesFigureStorage1; // as IncludesFigureStorage1
  await includesFigureStorage1Contract.deployed()
  console.log(`🎥 includesFigureStorage1Contract contract deployed at ${includesFigureStorage1Contract.address}\\n`)

  //IncludesFigureStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: includesFigureStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/includesfigure/IncludesFigureStorage1.sol:IncludesFigureStorage1"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
