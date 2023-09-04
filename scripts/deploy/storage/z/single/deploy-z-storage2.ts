import { ethers, run } from "hardhat";
import { ZStorage2 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the ZStorage2
  const zStorage2 = await ethers.getContractFactory('ZStorage2')
  const zStorage2Contract = await zStorage2.deploy() as ZStorage2; // as ZStorage2
  await zStorage2Contract.deployed()
  console.log(`🎥 zStorage2Contract contract deployed at ${zStorage2Contract.address}\\n`)

  // ZStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: zStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/z/ZStorage2.sol:ZStorage2"
  })
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
