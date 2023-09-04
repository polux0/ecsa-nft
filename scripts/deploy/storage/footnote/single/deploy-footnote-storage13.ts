import { ethers, run } from "hardhat";
import { FootnoteStorage13 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const footnoteStorage13 = await ethers.getContractFactory('FootnoteStorage13')
  const footnoteStorage13Contract = await footnoteStorage13.deploy() as FootnoteStorage13; // as UnitStorage2
  await footnoteStorage13Contract.deployed()
  console.log(`🎥 footnoteStorage13Contract contract deployed at ${footnoteStorage13Contract.address}\\n`)

  //FootnoteStorage13 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage13Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage13.sol:FootnoteStorage13"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
