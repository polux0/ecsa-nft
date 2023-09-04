import { ethers, run } from "hardhat";
import { UnitStorage23 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage23 = await ethers.getContractFactory('UnitStorage23')
  const unitStorage23Contract = await unitStorage23.deploy() as UnitStorage23; // as UnitStorage23
  await unitStorage23Contract.deployed()
  console.log(`🎥 unitStorage23Contract contract deployed at ${unitStorage23Contract.address}\\n`)

  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage23Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage23.sol:UnitStorage23"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
