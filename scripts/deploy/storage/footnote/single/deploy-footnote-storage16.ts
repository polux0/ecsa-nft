import { ethers, run } from "hardhat";
import { FootnoteStorage16 } from "../../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const footnoteStorage16 = await ethers.getContractFactory('FootnoteStorage16')
  const footnoteStorage16Contract = await footnoteStorage16.deploy() as FootnoteStorage16; // as UnitStorage2
  await footnoteStorage16Contract.deployed()
  console.log(`🎥 footnoteStorage16Contract contract deployed at ${footnoteStorage16Contract.address}\\n`)

  //FootnoteStorage16 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage16Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage16.sol:FootnoteStorage16"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
