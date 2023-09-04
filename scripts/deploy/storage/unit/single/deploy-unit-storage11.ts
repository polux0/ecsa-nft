import { ethers, run } from "hardhat";
import { UnitStorage11 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorage11 = await ethers.getContractFactory('UnitStorage11')
  const unitStorage11Contract = await unitStorage11.deploy() as UnitStorage11; // as UnitStorage11
  await unitStorage11Contract.deployed()
  console.log(`🎥 unitStorage11Contract contract deployed at ${unitStorage11Contract.address}\\n`)


  // VisionTreasury verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage11Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unit/UnitStorage11.sol:UnitStorage11"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
