import { ethers, run } from "hardhat";
import { XStorage2 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the XStorage2
  const xStorage2 = await ethers.getContractFactory('XStorage2')
  const xStorage2Contract = await xStorage2.deploy() as XStorage2; // as XStorage2
  await xStorage2Contract.deployed()
  console.log(`🎥 xStorage2Contract contract deployed at ${xStorage2Contract.address}\\n`)

  // XStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: xStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/x/XStorage2.sol:XStorage2"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
