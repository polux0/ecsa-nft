import { ethers, run } from "hardhat";
import { FootnoteStorage11 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const footnoteStorage11 = await ethers.getContractFactory('FootnoteStorage11')
  const footnoteStorage11Contract = await footnoteStorage11.deploy() as FootnoteStorage11; // as UnitStorage2
  await footnoteStorage11Contract.deployed()
  console.log(`🎥 footnoteStorage11Contract contract deployed at ${footnoteStorage11Contract.address}\\n`)

  //FootnoteStorage11 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage11Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage11.sol:FootnoteStorage11"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
