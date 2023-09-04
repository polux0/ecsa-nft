import { ethers, run } from "hardhat";
import { XStorage1 } from "../../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the XStorage1
  const xStorage1 = await ethers.getContractFactory('XStorage1')
  const xStorage1Contract = await xStorage1.deploy() as XStorage1; // as XStorage1
  await xStorage1Contract.deployed()
  console.log(`🎥 xStorage1Contract contract deployed at ${xStorage1Contract.address}\\n`)

  // XStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: xStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/x/XStorage1.sol:XStorage1"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
