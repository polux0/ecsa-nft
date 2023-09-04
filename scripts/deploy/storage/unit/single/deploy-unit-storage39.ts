import { ethers, run } from "hardhat";
import { UnitStorage39 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage39 = await ethers.getContractFactory('UnitStorage39')
  const unitStorage39Contract = await unitStorage39.deploy() as UnitStorage39; // as UnitStorage39
  await unitStorage39Contract.deployed()
  console.log(`🎥 unitStorage39Contract contract deployed at ${unitStorage39Contract.address}\\n`)

  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage39Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage39.sol:UnitStorage39"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
