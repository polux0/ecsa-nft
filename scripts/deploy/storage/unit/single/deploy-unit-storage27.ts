import { ethers, run } from "hardhat";
import { UnitStorage27 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage27 = await ethers.getContractFactory('UnitStorage27')
  const unitStorage27Contract = await unitStorage27.deploy() as UnitStorage27; // as UnitStorage27
  await unitStorage27Contract.deployed()
  console.log(`🎥 unitStorage27Contract contract deployed at ${unitStorage27Contract.address}\\n`)

  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage27Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage27.sol:UnitStorage27"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
