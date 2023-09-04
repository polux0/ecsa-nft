import { ethers, run } from "hardhat";
import { SectionStorageRemixTest } from "../../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the SectionStorageRemixTest
  const SectionStorageRemixTest = await ethers.getContractFactory('SectionStorageRemixTest')
  const SectionStorageRemixTestContract = await SectionStorageRemixTest.deploy() as SectionStorageRemixTest; // as SectionStorageRemixTest
  await SectionStorageRemixTestContract.deployed()
  console.log(`🎥 SectionStorageRemixTestContract contract deployed at ${SectionStorageRemixTestContract.address}\\n`)


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
