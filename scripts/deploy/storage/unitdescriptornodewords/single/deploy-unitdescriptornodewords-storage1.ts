import { ethers, run } from "hardhat";
import { UnitDescriptorNodewordsStorage1 } from "../../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the UnitDescriptorNodewordsStorage1
  const UnitDescriptorNodewordsStorage1 = await ethers.getContractFactory('UnitDescriptorNodewordsStorage1')
  const UnitDescriptorNodewordsStorage1Contract = await UnitDescriptorNodewordsStorage1.deploy() as UnitDescriptorNodewordsStorage1; // as UnitDescriptorNodewordsStorage1
  await UnitDescriptorNodewordsStorage1Contract.deployed()
  console.log(`🎥 UnitDescriptorNodewordsStorage1Contract contract deployed at ${UnitDescriptorNodewordsStorage1Contract.address}\\n`)

  // UnitDescriptorNodewordsStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: UnitDescriptorNodewordsStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unitdescriptornodewords/UnitDescriptiorNodewordsStorage1.sol:UnitDescriptorNodewordsStorage1"
  })
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
