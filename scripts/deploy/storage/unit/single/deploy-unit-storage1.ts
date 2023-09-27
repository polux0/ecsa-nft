import { ethers, run } from "hardhat";
import { UnitStorage1 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage1 = await ethers.getContractFactory('UnitStorage1')
  const unitStorage1Contract = await unitStorage1.deploy() as UnitStorage1; // as VisionTreasury
  await unitStorage1Contract.deployed()
  console.log(`🎥 unitStorage1Contract contract deployed at ${unitStorage1Contract.address}\\n`)

  // UnitStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 60000))
  await run("verify:verify", {
    address: unitStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage1.sol:UnitStorage1"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
