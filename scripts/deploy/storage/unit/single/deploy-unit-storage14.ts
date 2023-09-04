import { ethers, run } from "hardhat";
import { UnitStorage14 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage14 = await ethers.getContractFactory('UnitStorage14')
  const unitStorage14Contract = await unitStorage14.deploy() as UnitStorage14; // as UnitStorage14
  await unitStorage14Contract.deployed()
  console.log(`🎥 unitStorage14Contract contract deployed at ${unitStorage14Contract.address}\\n`)


  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage14Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage14.sol:UnitStorage14"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
