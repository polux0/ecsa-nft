import { ethers, run } from "hardhat";
import { UnitDescriptorNodewordsStorage2 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the UnitDescriptorNodewordsStorage2
  const UnitDescriptorNodewordsStorage2 = await ethers.getContractFactory('UnitDescriptorNodewordsStorage2')
  const UnitDescriptorNodewordsStorage2Contract = await UnitDescriptorNodewordsStorage2.deploy() as UnitDescriptorNodewordsStorage2; // as UnitDescriptorNodewordsStorage2
  await UnitDescriptorNodewordsStorage2Contract.deployed()
  console.log(`🎥 UnitDescriptorNodewordsStorage2Contract contract deployed at ${UnitDescriptorNodewordsStorage2Contract.address}\\n`)

  // UnitDescriptorNodewordsStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: UnitDescriptorNodewordsStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unitdescriptornodewords/UnitDescriptiorNodewordsStorage2.sol:UnitDescriptorNodewordsStorage2"
  })
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
