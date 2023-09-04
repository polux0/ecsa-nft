import { ethers, run } from "hardhat";
import { SectionStorage1, SectionStorage2 } from "../../../../typechain";
import { StorageHandler } from '../../../StorageHandler';

async function main() {
  const [deployer,] = await ethers.getSigners();
  const storageHandler = new StorageHandler();

  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)
  const sectionStorageContractsAddresses: any[] = [];
  
  // Deploy the SectionStorage1
  const sectionStorage1 = await ethers.getContractFactory('SectionStorage1')
  const sectionStorage1Contract = await sectionStorage1.deploy() as SectionStorage1; // as SectionStorage1
  await sectionStorage1Contract.deployed()
  console.log(`🎥 sectionStorage1Contract contract deployed at ${sectionStorage1Contract.address}\\n`)

  // Deploy the SectionStorage2
  const sectionStorage2 = await ethers.getContractFactory('SectionStorage2')
  const sectionStorage2Contract = await sectionStorage2.deploy() as SectionStorage2; // as SectionStorage2
  await sectionStorage2Contract.deployed()
  console.log(`🎥 sectionStorage2Contract contract deployed at ${sectionStorage2Contract.address}\\n`)

  const outputFile = 'deployment/section_storage.json';  
  storageHandler.saveStorageDeploymentAddresses(sectionStorageContractsAddresses, outputFile);
  
  //SectionStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: sectionStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/section/SectionStorage1.sol:SectionStorage1"
  })
  //SectionStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: sectionStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/section/SectionStorage2.sol:SectionStorage2"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
