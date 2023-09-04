import { ethers, run } from "hardhat";
import { NumFootnotesStorage2 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the NumFootnoteStorageStorage2
  const numFootnotesStorage2 = await ethers.getContractFactory('NumFootnotesStorage2')
  const numFootnotesStorage2Contract = await numFootnotesStorage2.deploy() as NumFootnotesStorage2; // as NumFootnotesStorage2
  await numFootnotesStorage2Contract.deployed()
  console.log(`🎥 NumFootnotesStorage2Contract contract deployed at ${numFootnotesStorage2Contract.address}\\n`)

  //NumFootnoteStorageStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: numFootnotesStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/numfootnotes/NumFootnotesStorage2.sol:NumFootnotesStorage2"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
