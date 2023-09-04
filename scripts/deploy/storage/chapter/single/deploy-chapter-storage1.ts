import { ethers, run } from "hardhat";
import { ChapterStorage1 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the ChapterStorage1
  const chapterStorage1 = await ethers.getContractFactory('ChapterStorage1')
  const chapterStorage1Contract = await chapterStorage1.deploy() as ChapterStorage1; // as ChapterStorage1
  await chapterStorage1Contract.deployed()
  console.log(`🎥 chapterStorage1Contract contract deployed at ${chapterStorage1Contract.address}\\n`)

  // ChapterStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: chapterStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/chapter/ChapterStorage1.sol:ChapterStorage1"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  // process.exitCode = 1;
});
