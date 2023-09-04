import { ethers, run } from "hardhat";
import { UnitStorage19 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage19 = await ethers.getContractFactory('UnitStorage19')
  const unitStorage19Contract = await unitStorage19.deploy() as UnitStorage19; // as UnitStorage19
  await unitStorage19Contract.deployed()
  console.log(`🎥 unitStorage19Contract contract deployed at ${unitStorage19Contract.address}\\n`)

  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage19Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage19.sol:UnitStorage19"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
