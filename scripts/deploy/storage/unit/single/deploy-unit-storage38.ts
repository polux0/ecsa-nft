import { ethers, run } from "hardhat";
import { UnitStorage38 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage38 = await ethers.getContractFactory('UnitStorage38')
  const unitStorage38Contract = await unitStorage38.deploy() as UnitStorage38; // as UnitStorage38
  await unitStorage38Contract.deployed()
  console.log(`🎥 unitStorage38Contract contract deployed at ${unitStorage38Contract.address}\\n`)

  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage38Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage38.sol:UnitStorage38"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
