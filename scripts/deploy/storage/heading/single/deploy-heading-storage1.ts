import { ethers, run } from "hardhat";
import { HeadingStorage1 } from "../../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the HeadingStorage1
  const headingStorage1 = await ethers.getContractFactory('HeadingStorage1')
  const headingStorage1Contract = await headingStorage1.deploy() as HeadingStorage1; // as HeadingStorage1
  await headingStorage1Contract.deployed()
  console.log(`🎥 HeadingStorage1Contract contract deployed at ${headingStorage1Contract.address}\\n`)

  //HeadingStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: headingStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/heading/HeadingStorage1.sol:HeadingStorage1"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
