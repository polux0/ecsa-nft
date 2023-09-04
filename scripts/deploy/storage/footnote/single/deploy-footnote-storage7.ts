import { ethers, run } from "hardhat";
import { FootnoteStorage7 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const footnoteStorage7 = await ethers.getContractFactory('FootnoteStorage7')
  const footnoteStorage7Contract = await footnoteStorage7.deploy() as FootnoteStorage7; // as UnitStorage2
  await footnoteStorage7Contract.deployed()
  console.log(`🎥 footnoteStorage7Contract contract deployed at ${footnoteStorage7Contract.address}\\n`)

  //FootnoteStorage7 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage7Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage7.sol:FootnoteStorage7"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
