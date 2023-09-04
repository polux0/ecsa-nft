import { ethers, run } from "hardhat";
import { UnitStorage37 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage37 = await ethers.getContractFactory('UnitStorage37')
  const unitStorage37Contract = await unitStorage37.deploy() as UnitStorage37; // as UnitStorage37
  await unitStorage37Contract.deployed()
  console.log(`🎥 unitStorage37Contract contract deployed at ${unitStorage37Contract.address}\\n`)

  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage37Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage37.sol:UnitStorage37"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
