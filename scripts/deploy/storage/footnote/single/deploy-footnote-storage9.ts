import { ethers, run } from "hardhat";
import { FootnoteStorage9 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const footnoteStorage9 = await ethers.getContractFactory('FootnoteStorage9')
  const footnoteStorage9Contract = await footnoteStorage9.deploy() as FootnoteStorage9; // as UnitStorage2
  await footnoteStorage9Contract.deployed()
  console.log(`🎥 footnoteStorage9Contract contract deployed at ${footnoteStorage9Contract.address}\\n`)

  //FootnoteStorage9 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage9Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage9.sol:FootnoteStorage9"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
