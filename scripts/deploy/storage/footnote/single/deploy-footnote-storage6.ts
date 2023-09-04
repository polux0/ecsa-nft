import { ethers, run } from "hardhat";
import { FootnoteStorage6 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const footnoteStorage6 = await ethers.getContractFactory('FootnoteStorage6')
  const footnoteStorage6Contract = await footnoteStorage6.deploy() as FootnoteStorage6; // as UnitStorage2
  await footnoteStorage6Contract.deployed()
  console.log(`🎥 footnoteStorage6Contract contract deployed at ${footnoteStorage6Contract.address}\\n`)

  //FootnoteStorage6 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage6Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage6.sol:FootnoteStorage6"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
