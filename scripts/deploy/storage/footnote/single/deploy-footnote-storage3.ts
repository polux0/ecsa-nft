import { ethers, run } from "hardhat";
import { FootnoteStorage3 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the FootnoteStorage3 
  const footnoteStorage3 = await ethers.getContractFactory('FootnoteStorage3')
  const footnoteStorage3Contract = await footnoteStorage3.deploy() as FootnoteStorage3; // as UnitStorage2
  await footnoteStorage3Contract.deployed()
  console.log(`🎥 footnoteStorage3Contract contract deployed at ${footnoteStorage3Contract.address}\\n`)

  //FootnoteStorage3 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage3Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage3.sol:FootnoteStorage3"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
