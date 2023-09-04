import { ethers, run } from "hardhat";
import { UnitStorageRemixTest6 } from "../../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const unitStorageRemixTest6 = await ethers.getContractFactory('UnitStorageRemixTest6')
  const unitStorageRemixTest6Contract = await unitStorageRemixTest6.deploy({ gasLimit: 20000000 }) as UnitStorageRemixTest6; // as UnitStorage5
  await unitStorageRemixTest6Contract.deployed()
  console.log(`🎥 UnitStorageRemixTest6 contract deployed at ${unitStorageRemixTest6Contract.address}\\n`)


  // VisionTreasury verification
  // await new Promise(resolve => setTimeout(resolve, 20000))
  // await run("verify:verify", {
  //   address: visionTreasuryContract.address,
  //   network: ethers.provider.network,
  //   constructorArguments: [
  //     // ecsaERC20Address,
  //     // root,
  //     // adminWithdrawalTimestamp
  //   ],
  //   contract: "contracts/VisionTreasury.sol:VisionTreasury"
  // })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
