import { ethers, run } from "hardhat";
import { ZStorage1 } from "../../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the ZStorage1
  const zStorage1 = await ethers.getContractFactory('ZStorage1')
  const zStorage1Contract = await zStorage1.deploy() as ZStorage1; // as ZStorage1
  await zStorage1Contract.deployed()
  console.log(`🎥 zStorage1Contract contract deployed at ${zStorage1Contract.address}\\n`)

  // ZStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: zStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/z/ZStorage1.sol:ZStorage1"
  })
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
