import { ethers, run } from "hardhat";
import { UnitStorage16 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage16 = await ethers.getContractFactory('UnitStorage16')
  const unitStorage16Contract = await unitStorage16.deploy() as UnitStorage16; // as UnitStorage16
  await unitStorage16Contract.deployed()
  console.log(`🎥 unitStorage16Contract contract deployed at ${unitStorage16Contract.address}\\n`)


  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage16Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage16.sol:UnitStorage16"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
