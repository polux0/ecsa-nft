import { ethers, run } from "hardhat";
import { UnitStorage18 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage18 = await ethers.getContractFactory('UnitStorage18')
  const unitStorage18Contract = await unitStorage18.deploy() as UnitStorage18; // as UnitStorage18
  await unitStorage18Contract.deployed()
  console.log(`🎥 unitStorage18Contract contract deployed at ${unitStorage18Contract.address}\\n`)

  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage18Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage18.sol:UnitStorage18"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
