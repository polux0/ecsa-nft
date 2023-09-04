import { ethers, run } from "hardhat";
import { UnitStorage36 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage36 = await ethers.getContractFactory('UnitStorage36')
  const unitStorage36Contract = await unitStorage36.deploy() as UnitStorage36; // as UnitStorage36
  await unitStorage36Contract.deployed()
  console.log(`🎥 unitStorage36Contract contract deployed at ${unitStorage36Contract.address}\\n`)

  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage36Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage36.sol:UnitStorage36"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
