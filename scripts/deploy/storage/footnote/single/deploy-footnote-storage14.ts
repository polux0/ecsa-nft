import { ethers, run } from "hardhat";
import { FootnoteStorage14 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const footnoteStorage14 = await ethers.getContractFactory('FootnoteStorage14')
  const footnoteStorage14Contract = await footnoteStorage14.deploy() as FootnoteStorage14; // as UnitStorage2
  await footnoteStorage14Contract.deployed()
  console.log(`🎥 footnoteStorage14Contract contract deployed at ${footnoteStorage14Contract.address}\\n`)

  //FootnoteStorage14 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage14Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage14.sol:FootnoteStorage14"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
