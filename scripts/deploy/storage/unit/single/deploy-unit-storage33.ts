import { ethers, run } from "hardhat";
import { UnitStorage33 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage33 = await ethers.getContractFactory('UnitStorage33')
  const unitStorage33Contract = await unitStorage33.deploy() as UnitStorage33; // as UnitStorage33
  await unitStorage33Contract.deployed()
  console.log(`🎥 unitStorage33Contract contract deployed at ${unitStorage33Contract.address}\\n`)

  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage33Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage33.sol:UnitStorage33"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
