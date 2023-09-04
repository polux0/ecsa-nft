import { ethers, run } from "hardhat";
import { LengthStorage1 } from "../../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the LengthStorage1
  const lengthStorage1 = await ethers.getContractFactory('LengthStorage1')
  const lengthStorage1Contract = await lengthStorage1.deploy() as LengthStorage1; // as LengthStorage1
  await lengthStorage1Contract.deployed()
  console.log(`🎥 lengthStorage1Contract contract deployed at ${lengthStorage1Contract.address}\\n`)

  //NumFootnoteStorageStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: lengthStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/length/LengthStorage1.sol:LengthStorage1"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
