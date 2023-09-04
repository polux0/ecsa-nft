import { ethers, run } from "hardhat";
import { UnitStorage34 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage34 = await ethers.getContractFactory('UnitStorage34')
  const unitStorage34Contract = await unitStorage34.deploy() as UnitStorage34; // as UnitStorage34
  await unitStorage34Contract.deployed()
  console.log(`🎥 unitStorage34Contract contract deployed at ${unitStorage34Contract.address}\\n`)

  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage34Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage34.sol:UnitStorage34"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
