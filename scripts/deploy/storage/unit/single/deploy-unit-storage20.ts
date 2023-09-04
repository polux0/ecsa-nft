import { ethers, run } from "hardhat";
import { UnitStorage20 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage20 = await ethers.getContractFactory('UnitStorage20')
  const unitStorage20Contract = await unitStorage20.deploy() as UnitStorage20; // as UnitStorage20
  await unitStorage20Contract.deployed()
  console.log(`🎥 unitStorage20Contract contract deployed at ${unitStorage20Contract.address}\\n`)

  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage20Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage20.sol:UnitStorage20"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
