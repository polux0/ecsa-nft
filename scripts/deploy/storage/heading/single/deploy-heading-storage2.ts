import { ethers, run } from "hardhat";
import { HeadingStorage2 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the HeadingStorage2
  const headingStorage2 = await ethers.getContractFactory('HeadingStorage2')
  const headingStorage2Contract = await headingStorage2.deploy() as HeadingStorage2; // as HeadingStorage2
  await headingStorage2Contract.deployed()
  console.log(`🎥 HeadingStorage2Contract contract deployed at ${headingStorage2Contract.address}\\n`)

  //HeadingStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: headingStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/heading/HeadingStorage2.sol:HeadingStorage2"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
