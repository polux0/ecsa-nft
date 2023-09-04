import { ethers, run } from "hardhat";
import { UnitStorage22 } from "../../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage22 = await ethers.getContractFactory('UnitStorage22')
  const unitStorage22Contract = await unitStorage22.deploy() as UnitStorage22; // as UnitStorage22
  await unitStorage22Contract.deployed()
  console.log(`🎥 unitStorage22Contract contract deployed at ${unitStorage22Contract.address}\\n`)

  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage22Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage22.sol:UnitStorage22"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
