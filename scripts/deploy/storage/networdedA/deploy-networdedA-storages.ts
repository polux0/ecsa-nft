import { ethers, run } from "hardhat";
import { NetwordedAStorage1, NetwordedAStorage2} from "../../../../typechain";
import { StorageHandler } from '../../../StorageHandler';

async function main() {
  const [deployer,] = await ethers.getSigners();
  const storageHandler = new StorageHandler();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)
  const networdedAStorageContractsAddresses: any[] = [];

  // Deploy the NetwordedAStorage1
  const networdedAStorage1 = await ethers.getContractFactory('NetwordedAStorage1')
  const networdedAStorage1Contract = await networdedAStorage1.deploy() as NetwordedAStorage1; // as NetwordedAStorage1
  await networdedAStorage1Contract.deployed()
  console.log(`🎥 NetwordedAStorage1Contract contract deployed at ${networdedAStorage1Contract.address}\\n`)
  networdedAStorageContractsAddresses.push(networdedAStorage1Contract.address);

  // Deploy the NetwordedAStorage2
  const networdedAStorage2 = await ethers.getContractFactory('NetwordedAStorage2')
  const networdedAStorage2Contract = await networdedAStorage2.deploy() as NetwordedAStorage2; // as NetwordedAStorage2
  await networdedAStorage2Contract.deployed()
  console.log(`🎥 NetwordedAStorage2Contract contract deployed at ${networdedAStorage2Contract.address}\\n`)
  networdedAStorageContractsAddresses.push(networdedAStorage1Contract.address);

  const outputFile = 'deployment/networdedA_storage.json';  
  storageHandler.saveStorageDeploymentAddresses(networdedAStorageContractsAddresses, outputFile);

  // NetwordedAStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: networdedAStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/networdedA/NetwordedAStorage1.sol:NetwordedAStorage1"
  })

  // NetwordedAStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: networdedAStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/networdedA/NetwordedAStorage2.sol:NetwordedAStorage2"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
