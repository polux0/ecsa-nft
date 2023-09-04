import { ethers, run } from "hardhat";
import { UnitStorage21 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage21 = await ethers.getContractFactory('UnitStorage21')
  const unitStorage21Contract = await unitStorage21.deploy() as UnitStorage21; // as UnitStorage21
  await unitStorage21Contract.deployed()
  console.log(`🎥 unitStorage21Contract contract deployed at ${unitStorage21Contract.address}\\n`)

  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage21Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage21.sol:UnitStorage21"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
