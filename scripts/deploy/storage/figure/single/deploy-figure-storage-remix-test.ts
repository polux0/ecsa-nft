import { ethers, run } from "hardhat";
import { FigureStorageRemixTest } from "../../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the FigureStorage
  const figureStorageRemixTest = await ethers.getContractFactory('FigureStorageRemixTest')
  const figureStorageRemixTestContract = await figureStorageRemixTest.deploy({ gasLimit: 20000000 }) as FigureStorageRemixTest; // as UnitStorage5
  await figureStorageRemixTestContract.deployed()
  console.log(`🎥 figureStorageRemixTestContract contract deployed at ${figureStorageRemixTestContract.address}\\n`)


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
