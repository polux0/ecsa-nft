import { ethers, run } from "hardhat";
import { FootnoteStorage4 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the FootnoteStorage4
  const footnoteStorage4 = await ethers.getContractFactory('FootnoteStorage4')
  const footnoteStorage4Contract = await footnoteStorage4.deploy() as FootnoteStorage4; // as UnitStorage2
  await footnoteStorage4Contract.deployed()
  console.log(`🎥 footnoteStorage4Contract contract deployed at ${footnoteStorage4Contract.address}\\n`)

  //FootnoteStorage4 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage4Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage4.sol:FootnoteStorage4"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
