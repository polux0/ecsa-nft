import { ethers, run } from "hardhat";
import { ChapterStorage2 } from "../../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the ChapterStorage2
  const chapterStorage2 = await ethers.getContractFactory('ChapterStorage2')
  const chapterStorage2Contract = await chapterStorage2.deploy() as ChapterStorage2; // as ChapterStorage2
  await chapterStorage2Contract.deployed()
  console.log(`🎥 chapterStorage2Contract contract deployed at ${chapterStorage2Contract.address}\\n`)

  // ChapterStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: chapterStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/chapter/ChapterStorage2.sol:ChapterStorage2"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
