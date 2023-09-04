import { ethers, run } from "hardhat";
import { LengthStorage1, LengthStorage2 } from "../../../../typechain";
import { StorageHandler } from '../../../StorageHandler';

async function main() {
  const [deployer,] = await ethers.getSigners();
  const storageHandler = new StorageHandler();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)
  const lengthStorageContractsAddresses: any[] = [];

  // Deploy the LengthStorage1
  const lengthStorage1 = await ethers.getContractFactory('LengthStorage1')
  const lengthStorage1Contract = await lengthStorage1.deploy() as LengthStorage1; // as LengthStorage1
  await lengthStorage1Contract.deployed()
  console.log(`🎥 lengthStorage1Contract contract deployed at ${lengthStorage1Contract.address}\\n`)
  lengthStorageContractsAddresses.push(lengthStorage1Contract.address)

  // Deploy the LengthStorage2
  const lengthStorage2 = await ethers.getContractFactory('LengthStorage2')
  const lengthStorage2Contract = await lengthStorage2.deploy() as LengthStorage2; // as LengthStorage2
  await lengthStorage2Contract.deployed()
  console.log(`🎥 lengthStorage2Contract contract deployed at ${lengthStorage2Contract.address}\\n`)
  lengthStorageContractsAddresses.push(lengthStorage2Contract.address)

  const outputFile = 'deployment/length_storage.json';  
  storageHandler.saveStorageDeploymentAddresses(lengthStorageContractsAddresses, outputFile);
 
  //LengthStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: lengthStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/length/LengthStorage1.sol:LengthStorage1"
  })
  //LengthStorage2 verification
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
