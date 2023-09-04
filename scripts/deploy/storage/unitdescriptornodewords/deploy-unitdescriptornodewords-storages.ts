import { ethers, run } from "hardhat";
import { UnitDescriptorNodewordsStorage1, UnitDescriptorNodewordsStorage2} from "../../../../typechain";
import { StorageHandler } from '../../../StorageHandler';

async function main() {
  const [deployer,] = await ethers.getSigners();
  const storageHandler = new StorageHandler();
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)
  const unitDescriptorNodewordsContractsAddresses: any[] = [];

  // Deploy the UnitDescriptorNodewordsStorage1
  const UnitDescriptorNodewordsStorage1 = await ethers.getContractFactory('UnitDescriptorNodewordsStorage1')
  const UnitDescriptorNodewordsStorage1Contract = await UnitDescriptorNodewordsStorage1.deploy() as UnitDescriptorNodewordsStorage1; // as UnitDescriptorNodewordsStorage1
  await UnitDescriptorNodewordsStorage1Contract.deployed()
  console.log(`🎥 UnitDescriptorNodewordsStorage1Contract contract deployed at ${UnitDescriptorNodewordsStorage1Contract.address}\\n`)
  unitDescriptorNodewordsContractsAddresses.push(UnitDescriptorNodewordsStorage1Contract.address)

  // Deploy the UnitDescriptorNodewordsStorage2
  const UnitDescriptorNodewordsStorage2 = await ethers.getContractFactory('UnitDescriptorNodewordsStorage2')
  const UnitDescriptorNodewordsStorage2Contract = await UnitDescriptorNodewordsStorage2.deploy() as UnitDescriptorNodewordsStorage2; // as UnitDescriptorNodewordsStorage2
  await UnitDescriptorNodewordsStorage2Contract.deployed()
  console.log(`🎥 UnitDescriptorNodewordsStorage2Contract contract deployed at ${UnitDescriptorNodewordsStorage2Contract.address}\\n`)
  unitDescriptorNodewordsContractsAddresses.push(UnitDescriptorNodewordsStorage2Contract.address)

  const outputFile = 'deployment/unitdescriptornodewords_storage.json';  
  storageHandler.saveStorageDeploymentAddresses(unitDescriptorNodewordsContractsAddresses, outputFile);

  // UnitDescriptorNodewordsStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: UnitDescriptorNodewordsStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unitdescriptornodewords/UnitDescriptiorNodewordsStorage1.sol:UnitDescriptorNodewordsStorage1"
  })

  // UnitDescriptorNodewordsStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: UnitDescriptorNodewordsStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/unitdescriptornodewords/UnitDescriptiorNodewordsStorage2.sol:UnitDescriptorNodewordsStorage2"
  })
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
