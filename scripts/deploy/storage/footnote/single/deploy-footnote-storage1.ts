import { ethers, run } from "hardhat";
import { FootnoteStorage1 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const footnoteStorage1 = await ethers.getContractFactory('FootnoteStorage1')
  const footnoteStorage1Contract = await footnoteStorage1.deploy() as FootnoteStorage1; // as UnitStorage2
  await footnoteStorage1Contract.deployed()
  console.log(`🎥 footnoteStorage1Contract contract deployed at ${footnoteStorage1Contract.address}\\n`)

  //FootnoteStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage1.sol:FootnoteStorage1"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
