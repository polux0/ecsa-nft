import { ethers, run } from "hardhat";
import { FootnoteStorage15 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const footnoteStorage15 = await ethers.getContractFactory('FootnoteStorage15')
  const footnoteStorage15Contract = await footnoteStorage15.deploy() as FootnoteStorage15; // as UnitStorage2
  await footnoteStorage15Contract.deployed()
  console.log(`🎥 footnoteStorage15Contract contract deployed at ${footnoteStorage15Contract.address}\\n`)

  //FootnoteStorage15 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage15Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage15.sol:FootnoteStorage15"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
