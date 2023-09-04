import { ethers, run } from "hardhat";
import { UnitStorage17 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage17 = await ethers.getContractFactory('UnitStorage17')
  const unitStorage17Contract = await unitStorage17.deploy() as UnitStorage17; // as UnitStorage17
  await unitStorage17Contract.deployed()
  console.log(`🎥 unitStorage17Contract contract deployed at ${unitStorage17Contract.address}\\n`)


  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage17Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage17.sol:UnitStorage17"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
