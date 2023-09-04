import { ethers, run } from "hardhat";
import { XStorage1, XStorage2 } from "../../../../typechain";
import { StorageHandler } from '../../../StorageHandler';

async function main() {
  const [deployer,] = await ethers.getSigners();
  const storageHandler = new StorageHandler();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)
  const xStorageContractAddresses: any[] = [];

  // Deploy the XStorage1
  const xStorage1 = await ethers.getContractFactory('XStorage1')
  const xStorage1Contract = await xStorage1.deploy() as XStorage1; // as XStorage1
  await xStorage1Contract.deployed()
  console.log(`🎥 xStorage1Contract contract deployed at ${xStorage1Contract.address}\\n`)
  xStorageContractAddresses.push(xStorage1Contract.address);

  // Deploy the XStorage2
  const xStorage2 = await ethers.getContractFactory('XStorage2')
  const xStorage2Contract = await xStorage2.deploy() as XStorage2; // as XStorage2
  await xStorage2Contract.deployed()
  console.log(`🎥 xStorage2Contract contract deployed at ${xStorage2Contract.address}\\n`)
  xStorageContractAddresses.push(xStorage2Contract.address);

  const outputFile = 'deployment/x_storage.json';  
  storageHandler.saveStorageDeploymentAddresses(xStorageContractAddresses, outputFile);

  // XStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: xStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/x/XStorage1.sol:XStorage1"
  })
  // XStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: xStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/x/XStorage2.sol:XStorage2"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
