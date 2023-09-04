import { ethers, run } from "hardhat";
import { UnitStorage32 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage32 = await ethers.getContractFactory('UnitStorage32')
  const unitStorage32Contract = await unitStorage32.deploy() as UnitStorage32; // as UnitStorage32
  await unitStorage32Contract.deployed()
  console.log(`🎥 unitStorage32Contract contract deployed at ${unitStorage32Contract.address}\\n`)

  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage32Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage32.sol:UnitStorage32"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
