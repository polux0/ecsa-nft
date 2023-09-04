import { ethers, run } from "hardhat";
import { UnitStorage31 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage31 = await ethers.getContractFactory('UnitStorage31')
  const unitStorage31Contract = await unitStorage31.deploy() as UnitStorage31; // as UnitStorage31
  await unitStorage31Contract.deployed()
  console.log(`🎥 unitStorage31Contract contract deployed at ${unitStorage31Contract.address}\\n`)

  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage31Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage31.sol:UnitStorage31"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
