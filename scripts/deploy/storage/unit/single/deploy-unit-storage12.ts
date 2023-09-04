import { ethers, run } from "hardhat";
import { UnitStorage12 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage12 = await ethers.getContractFactory('UnitStorage12')
  const unitStorage12Contract = await unitStorage12.deploy() as UnitStorage12; // as UnitStorage12
  await unitStorage12Contract.deployed()
  console.log(`🎥 unitStorage12Contract contract deployed at ${unitStorage12Contract.address}\\n`)


  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage12Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage12.sol:UnitStorage12"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
