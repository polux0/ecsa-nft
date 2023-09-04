import { ethers, run } from "hardhat";
import { YStorage1, YStorage2 } from "../../../../typechain";
import { StorageHandler } from '../../../StorageHandler';

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  const storageHandler = new StorageHandler();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)
  const yStorageContractAddresses: any[] = [];

  // Deploy the YStorage1
  const yStorage1 = await ethers.getContractFactory('YStorage1')
  const yStorage1Contract = await yStorage1.deploy() as YStorage1; // as YStorage1
  await yStorage1Contract.deployed()
  console.log(`🎥 yStorage1Contract contract deployed at ${yStorage1Contract.address}\\n`)
  yStorageContractAddresses.push(yStorage1Contract.address)

  // Deploy the YStorage2
  const yStorage2 = await ethers.getContractFactory('YStorage2')
  const yStorage2Contract = await yStorage2.deploy() as YStorage2; // as YStorage2
  await yStorage2Contract.deployed()
  console.log(`🎥 yStorage2Contract contract deployed at ${yStorage2Contract.address}\\n`)
  yStorageContractAddresses.push(yStorage2Contract.address)

  const outputFile = 'deployment/y_storage.json';  
  storageHandler.saveStorageDeploymentAddresses(yStorageContractAddresses, outputFile);

  // YStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: yStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/y/YStorage1.sol:YStorage1"
  })
  // YStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: yStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/y/YStorage2.sol:YStorage2"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
