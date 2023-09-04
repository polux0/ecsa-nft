import { ethers, run } from "hardhat";
import { UnitStorage28 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage28 = await ethers.getContractFactory('UnitStorage28')
  const unitStorage28Contract = await unitStorage28.deploy() as UnitStorage28; // as UnitStorage28
  await unitStorage28Contract.deployed()
  console.log(`🎥 unitStorage28Contract contract deployed at ${unitStorage28Contract.address}\\n`)

  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage28Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage28.sol:UnitStorage28"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
