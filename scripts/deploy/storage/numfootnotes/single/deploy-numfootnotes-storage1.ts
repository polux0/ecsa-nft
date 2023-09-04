import { ethers, run } from "hardhat";
import { NumFootnotesStorage1 } from "../../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the NumFootnoteStorageStorage1
  const numFootnotesStorage1 = await ethers.getContractFactory('NumFootnotesStorage1')
  const numFootnotesStorage1Contract = await numFootnotesStorage1.deploy() as NumFootnotesStorage1; // as NumFootnotesStorage1
  await numFootnotesStorage1Contract.deployed()
  console.log(`🎥 NumFootnotesStorage1Contract contract deployed at ${numFootnotesStorage1Contract.address}\\n`)

  //NumFootnoteStorageStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: numFootnotesStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/numfootnotes/NumFootnotesStorage1.sol:NumFootnotesStorage1"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
