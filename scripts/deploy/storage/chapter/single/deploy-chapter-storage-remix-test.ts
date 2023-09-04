import { ethers, run } from "hardhat";
import { ChapterStorageRemixTest } from "../../../../typechain";

async function main() { 
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the ChapterStorageRemixTest
  const chapterStorageRemixTest = await ethers.getContractFactory('ChapterStorageRemixTest')
  const chapterStorageRemixTestContract = await chapterStorageRemixTest.deploy() as ChapterStorageRemixTest; // as UnitStorage2
  await chapterStorageRemixTestContract.deployed()
  console.log(`🎥 chapterStorageRemixTestContract contract deployed at ${chapterStorageRemixTestContract.address}\\n`)


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
