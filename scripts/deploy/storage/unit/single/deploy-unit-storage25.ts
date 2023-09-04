import { ethers, run } from "hardhat";
import { UnitStorage25 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage25 = await ethers.getContractFactory('UnitStorage25')
  const unitStorage25Contract = await unitStorage25.deploy() as UnitStorage25; // as UnitStorage25
  await unitStorage25Contract.deployed()
  console.log(`🎥 unitStorage25Contract contract deployed at ${unitStorage25Contract.address}\\n`)

  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage25Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage25.sol:UnitStorage25"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
