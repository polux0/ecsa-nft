import { ethers, run } from "hardhat";
import { UnitStorage13 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage13 = await ethers.getContractFactory('UnitStorage13')
  const unitStorage13Contract = await unitStorage13.deploy() as UnitStorage13; // as UnitStorage13
  await unitStorage13Contract.deployed()
  console.log(`🎥 unitStorage13Contract contract deployed at ${unitStorage13Contract.address}\\n`)


  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage13Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage13.sol:UnitStorage13"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
