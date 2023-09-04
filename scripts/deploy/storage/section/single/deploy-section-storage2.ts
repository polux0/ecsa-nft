import { ethers, run } from "hardhat";
import { SectionStorage2 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the SectionStorage2
  const sectionStorage2 = await ethers.getContractFactory('SectionStorage2')
  const sectionStorage2Contract = await sectionStorage2.deploy() as SectionStorage2; // as SectionStorage2
  await sectionStorage2Contract.deployed()
  console.log(`🎥 sectionStorage2Contract contract deployed at ${sectionStorage2Contract.address}\\n`)

  //SectionStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: sectionStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/section/SectionStorage2.sol:SectionStorage2"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
