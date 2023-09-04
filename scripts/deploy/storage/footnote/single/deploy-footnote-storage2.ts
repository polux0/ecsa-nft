import { ethers, run } from "hardhat";
import { FootnoteStorage2 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const footnoteStorage2 = await ethers.getContractFactory('FootnoteStorage2')
  const footnoteStorage2Contract = await footnoteStorage2.deploy() as FootnoteStorage2; // as FootnoteStorage2
  await footnoteStorage2Contract.deployed()
  console.log(`🎥 footnoteStorage2Contract contract deployed at ${footnoteStorage2Contract.address}\\n`)

  //FootnoteStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage2.sol:FootnoteStorage2"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
