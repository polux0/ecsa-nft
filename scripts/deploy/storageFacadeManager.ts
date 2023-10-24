import { ethers, run, hardhatArguments } from "hardhat";
import { StorageFacadeManager } from "../../typechain";
import { StorageHandler } from '../StorageHandler';

import * as dotenv from 'dotenv'
dotenv.config()
// we are working with this one ATM
async function main() {
  const [deployer,] = await ethers.getSigners();
  const owner = process.env.OWNER || "0x3C44e5692B73e04Cffb0BDa06e28c7cd754E6bf6";

  const outputFileStorageFacadeManager = `deployment/${hardhatArguments.network}/storage_facade_manager.json`;
  const storageFacadeManagerContractsAddresses = [];

  console.log(`\n🤖 deployer address ${deployer.address}\n`)
  const storageHandler = new StorageHandler();
  const storageFacadeAddresses: any = await storageHandler.loadStorageDeploymentAddresses(`deployment/${hardhatArguments.network}/facades/storage_facades.json`);
  
  const storageFacadeManagerFactory = await ethers.getContractFactory("StorageFacadeManager");
  const storageFacadeManagerContract = await storageFacadeManagerFactory.deploy(storageFacadeAddresses, { gasLimit: 20000000 }) as StorageFacadeManager; // as TestNFT
  await storageFacadeManagerContract.deployed()
  console.log(`🎥 storageFacadeManagerContract contract deployed at ${storageFacadeManagerContract.address}\\n`)
  
  storageFacadeManagerContractsAddresses.push(storageFacadeManagerContract.address);
  await storageHandler.saveStorageDeploymentAddresses(storageFacadeManagerContractsAddresses, outputFileStorageFacadeManager);

  // StorageFacadeManager verification
  await new Promise(resolve => setTimeout(resolve, 30000))
  await run("verify:verify", {
    address: storageFacadeManagerContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      storageFacadeAddresses,
    ],
    contract: "contracts/StorageFacadeManager.sol:StorageFacadeManager"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
