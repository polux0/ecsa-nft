import { ethers, run } from "hardhat";
import { YStorage1 } from "../../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the YStorage1
  const yStorage1 = await ethers.getContractFactory('YStorage1')
  const yStorage1Contract = await yStorage1.deploy() as YStorage1; // as YStorage1
  await yStorage1Contract.deployed()
  console.log(`🎥 yStorage1Contract contract deployed at ${yStorage1Contract.address}\\n`)

  // YStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: yStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/y/YStorage1.sol:YStorage1"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
