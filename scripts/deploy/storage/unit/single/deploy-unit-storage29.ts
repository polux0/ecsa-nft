import { ethers, run } from "hardhat";
import { UnitStorage29 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage29 = await ethers.getContractFactory('UnitStorage29')
  const unitStorage29Contract = await unitStorage29.deploy() as UnitStorage29; // as UnitStorage29
  await unitStorage29Contract.deployed()
  console.log(`🎥 unitStorage29Contract contract deployed at ${unitStorage29Contract.address}\\n`)

  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage29Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage29.sol:UnitStorage29"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
