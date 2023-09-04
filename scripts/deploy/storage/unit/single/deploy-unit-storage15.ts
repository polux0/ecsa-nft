import { ethers, run } from "hardhat";
import { UnitStorage15 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage15 = await ethers.getContractFactory('UnitStorage15')
  const unitStorage15Contract = await unitStorage15.deploy() as UnitStorage15; // as UnitStorage15
  await unitStorage15Contract.deployed()
  console.log(`🎥 unitStorage15Contract contract deployed at ${unitStorage15Contract.address}\\n`)


  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage15Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage15.sol:UnitStorage15"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
