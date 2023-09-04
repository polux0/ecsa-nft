import { ethers, run } from "hardhat";
import { ZStorage1, ZStorage2 } from "../../../../typechain";
import { StorageHandler } from '../../../StorageHandler';

async function main() {
  const [deployer,] = await ethers.getSigners();
  const storageHandler = new StorageHandler();
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)
  const zStorageContractAddresses: any[] = [];

  // Deploy the ZStorage1
  const zStorage1 = await ethers.getContractFactory('ZStorage1')
  const zStorage1Contract = await zStorage1.deploy() as ZStorage1; // as ZStorage1
  await zStorage1Contract.deployed()
  console.log(`🎥 zStorage1Contract contract deployed at ${zStorage1Contract.address}\\n`)
  zStorageContractAddresses.push(zStorage1Contract.address);

  // Deploy the ZStorage2
  const zStorage2 = await ethers.getContractFactory('ZStorage2')
  const zStorage2Contract = await zStorage2.deploy() as ZStorage2; // as ZStorage2
  await zStorage2Contract.deployed()
  console.log(`🎥 zStorage2Contract contract deployed at ${zStorage2Contract.address}\\n`)
  zStorageContractAddresses.push(zStorage2Contract.address);
  
  const outputFile = 'deployment/z_storage.json';  
  storageHandler.saveStorageDeploymentAddresses(zStorageContractAddresses, outputFile);

  // ZStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: zStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/z/ZStorage1.sol:ZStorage1"
  })

  // ZStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: zStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/z/ZStorage2.sol:ZStorage2"
  })
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
