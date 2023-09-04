import { ethers, run } from "hardhat";
import { UnitStorage24 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage24 = await ethers.getContractFactory('UnitStorage24')
  const unitStorage24Contract = await unitStorage24.deploy() as UnitStorage24; // as UnitStorage24
  await unitStorage24Contract.deployed()
  console.log(`🎥 unitStorage24Contract contract deployed at ${unitStorage24Contract.address}\\n`)

  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage24Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage24.sol:UnitStorage24"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
