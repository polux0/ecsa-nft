import { ethers, run } from "hardhat";
import { UnitStorage30 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage30 = await ethers.getContractFactory('UnitStorage30')
  const unitStorage30Contract = await unitStorage30.deploy() as UnitStorage30; // as UnitStorage30
  await unitStorage30Contract.deployed()
  console.log(`🎥 unitStorage30Contract contract deployed at ${unitStorage30Contract.address}\\n`)

  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage30Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage30.sol:UnitStorage30"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
