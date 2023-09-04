import { ethers, run } from "hardhat";
import { FootnoteStorage5 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const footnoteStorage5 = await ethers.getContractFactory('FootnoteStorage5')
  const footnoteStorage5Contract = await footnoteStorage5.deploy() as FootnoteStorage5; // as UnitStorage2
  await footnoteStorage5Contract.deployed()
  console.log(`🎥 footnoteStorage5Contract contract deployed at ${footnoteStorage5Contract.address}\\n`)

  //FootnoteStorage5 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage5Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage5.sol:FootnoteStorage5"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
