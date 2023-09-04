import { ethers, run } from "hardhat";
import { SectionStorage1 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the SectionStorage1
  const sectionStorage1 = await ethers.getContractFactory('SectionStorage1')
  const sectionStorage1Contract = await sectionStorage1.deploy() as SectionStorage1; // as SectionStorage1
  await sectionStorage1Contract.deployed()
  console.log(`🎥 sectionStorage1Contract contract deployed at ${sectionStorage1Contract.address}\\n`)

  //SectionStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: sectionStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/section/SectionStorage1.sol:SectionStorage1"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
