import { ethers, run } from "hardhat";
import { HeadingStorage1, HeadingStorage2 } from "../../../../typechain";
import { StorageHandler } from '../../../StorageHandler';

async function main() {
  const [deployer,] = await ethers.getSigners();
  const storageHandler = new StorageHandler();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)
  const headingStorageContractAddresses: any[] = [];

  // Deploy the HeadingStorage1
  const headingStorage1 = await ethers.getContractFactory('HeadingStorage1')
  const headingStorage1Contract = await headingStorage1.deploy() as HeadingStorage1; // as HeadingStorage1
  await headingStorage1Contract.deployed()
  console.log(`🎥 HeadingStorage1Contract contract deployed at ${headingStorage1Contract.address}\\n`)
  headingStorageContractAddresses.push(headingStorage1Contract.address);

  // Deploy the HeadingStorage2
  const headingStorage2 = await ethers.getContractFactory('HeadingStorage2')
  const headingStorage2Contract = await headingStorage2.deploy() as HeadingStorage2; // as HeadingStorage2
  await headingStorage2Contract.deployed()
  console.log(`🎥 HeadingStorage2Contract contract deployed at ${headingStorage2Contract.address}\\n`)
  headingStorageContractAddresses.push(headingStorage2Contract.address);

  const outputFile = 'deployment/heading_storage.json';  
  storageHandler.saveStorageDeploymentAddresses(headingStorageContractAddresses, outputFile);

  //HeadingStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: headingStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/heading/HeadingStorage1.sol:HeadingStorage1"
  })
  //HeadingStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: headingStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/heading/HeadingStorage2.sol:HeadingStorage2"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
