import { ethers, run } from "hardhat";
import { FootnoteStorage17 } from "../../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the FootnoteStorage
  const footnoteStorage17 = await ethers.getContractFactory('FootnoteStorage17')
  const footnoteStorage17Contract = await footnoteStorage17.deploy() as FootnoteStorage17; // as FootnoteStorage
  await footnoteStorage17Contract.deployed()
  console.log(`🎥 footnoteStorage17Contract contract deployed at ${footnoteStorage17Contract.address}\\n`)

  //FootnoteStorage17 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage17Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage17.sol:FootnoteStorage17"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
