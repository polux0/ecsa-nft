import { ethers, run } from "hardhat";
import { UnitStorage26 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage26 = await ethers.getContractFactory('UnitStorage26')
  const unitStorage26Contract = await unitStorage26.deploy() as UnitStorage26; // as UnitStorage26
  await unitStorage26Contract.deployed()
  console.log(`🎥 unitStorage26Contract contract deployed at ${unitStorage26Contract.address}\\n`)

  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage26Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage26.sol:UnitStorage26"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
