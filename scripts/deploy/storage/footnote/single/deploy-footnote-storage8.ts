import { ethers, run } from "hardhat";
import { FootnoteStorage8 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const footnoteStorage8 = await ethers.getContractFactory('FootnoteStorage8')
  const footnoteStorage8Contract = await footnoteStorage8.deploy() as FootnoteStorage8; // as UnitStorage2
  await footnoteStorage8Contract.deployed()
  console.log(`🎥 footnoteStorage8Contract contract deployed at ${footnoteStorage8Contract.address}\\n`)

  //FootnoteStorage8 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage8Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage8.sol:FootnoteStorage8"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
