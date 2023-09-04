import { ethers, run } from "hardhat";
import { FootnoteStorage12 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the VisionTreasury
  const footnoteStorage12 = await ethers.getContractFactory('FootnoteStorage12')
  const footnoteStorage12Contract = await footnoteStorage12.deploy() as FootnoteStorage12; // as UnitStorage2
  await footnoteStorage12Contract.deployed()
  console.log(`🎥 footnoteStorage12Contract contract deployed at ${footnoteStorage12Contract.address}\\n`)

  //FootnoteStorage12 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage12Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage12.sol:FootnoteStorage12"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
