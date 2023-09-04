import { ethers, run } from "hardhat";
import { FootnoteStorage10 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const footnoteStorage10 = await ethers.getContractFactory('FootnoteStorage10')
  const footnoteStorage10Contract = await footnoteStorage10.deploy() as FootnoteStorage10; // as UnitStorage2
  await footnoteStorage10Contract.deployed()
  console.log(`🎥 footnoteStorage10Contract contract deployed at ${footnoteStorage10Contract.address}\\n`)

  //FootnoteStorage10 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage10Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage10.sol:FootnoteStorage10"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
