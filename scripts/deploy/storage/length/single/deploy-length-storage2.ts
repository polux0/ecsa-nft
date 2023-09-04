import { ethers, run } from "hardhat";
import { LengthStorage2 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the LengthStorage2
  const lengthStorage2 = await ethers.getContractFactory('LengthStorage2')
  const lengthStorage2Contract = await lengthStorage2.deploy() as LengthStorage2; // as LengthStorage2
  await lengthStorage2Contract.deployed()
  console.log(`🎥 lengthStorage2Contract contract deployed at ${lengthStorage2Contract.address}\\n`)

  //NumFootnoteStorageStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: lengthStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/length/LengthStorage2.sol:LengthStorage2"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
