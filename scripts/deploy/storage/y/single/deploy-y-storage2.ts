import { ethers, run } from "hardhat";
import { YStorage2 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the YStorage2
  const yStorage2 = await ethers.getContractFactory('YStorage2')
  const yStorage2Contract = await yStorage2.deploy() as YStorage2; // as YStorage2
  await yStorage2Contract.deployed()
  console.log(`🎥 yStorage2Contract contract deployed at ${yStorage2Contract.address}\\n`)

  // YStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: yStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/y/YStorage2.sol:YStorage2"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
