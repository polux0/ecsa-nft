import { ethers, run } from "hardhat";
import { IncludesFigureStorage2 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the IncludesFigureStorage2
  const includesFigureStorage2 = await ethers.getContractFactory('IncludesFigureStorage2')
  const includesFigureStorage2Contract = await includesFigureStorage2.deploy() as IncludesFigureStorage2; // as IncludesFigureStorage2
  await includesFigureStorage2Contract.deployed()
  console.log(`🎥 includesFigureStorage2Contract contract deployed at ${includesFigureStorage2Contract.address}\\n`)

  //IncludesFigureStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: includesFigureStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/includesfigure/IncludesFigureStorage2.sol:IncludesFigureStorage2"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
