import { ethers, run } from "hardhat";
import { NetwordedBStorage1, NetwordedBStorage2 } from "../../../../typechain";
import { StorageHandler } from '../../../StorageHandler';

async function main() {
  const [deployer,] = await ethers.getSigners();
  const storageHandler = new StorageHandler();
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)
  const networdedBStorageContractsAddresses: any[] = [];

  // Deploy the NetwordedBStorage1
  const networdedBStorage1 = await ethers.getContractFactory('NetwordedBStorage1')
  const networdedBStorage1Contract = await networdedBStorage1.deploy() as NetwordedBStorage1; // as NetwordedBStorage1
  await networdedBStorage1Contract.deployed()
  console.log(`🎥 NetwordedBStorage1Contract contract deployed at ${networdedBStorage1Contract.address}\\n`)
  networdedBStorageContractsAddresses.push(networdedBStorage1Contract.address);

  // Deploy the NetwordedBStorage2
  const networdedBStorage2 = await ethers.getContractFactory('NetwordedBStorage2')
  const networdedBStorage2Contract = await networdedBStorage2.deploy() as NetwordedBStorage2; // as NetwordedBStorage2
  await networdedBStorage2Contract.deployed()
  console.log(`🎥 NetwordedBStorage2Contract contract deployed at ${networdedBStorage2Contract.address}\\n`)
  networdedBStorageContractsAddresses.push(networdedBStorage2Contract.address);

  const outputFile = 'deployment/networdedB_storage.json';  
  storageHandler.saveStorageDeploymentAddresses(networdedBStorageContractsAddresses, outputFile);

  // NetwordedBStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: networdedBStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/networdedB/NetwordedBStorage1.sol:NetwordedBStorage1"
  })
  // NetwordedBStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: networdedBStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/networdedB/NetwordedBStorage2.sol:NetwordedBStorage2"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
