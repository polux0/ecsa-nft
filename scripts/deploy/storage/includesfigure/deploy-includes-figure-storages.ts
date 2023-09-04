import { ethers, run } from "hardhat";
import { IncludesFigureStorage1, IncludesFigureStorage2 } from "../../../../typechain";
import { StorageHandler } from '../../../StorageHandler';

async function main() {
  const [deployer,] = await ethers.getSigners();
  const storageHandler = new StorageHandler();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)
  const includesFigureStorageContractsAddresses: any[] = [];

  // Deploy the IncludesFigureStorage1
  const includesFigureStorage1 = await ethers.getContractFactory('IncludesFigureStorage1')
  const includesFigureStorage1Contract = await includesFigureStorage1.deploy() as IncludesFigureStorage1; // as IncludesFigureStorage1
  await includesFigureStorage1Contract.deployed()
  console.log(`🎥 includesFigureStorage1Contract contract deployed at ${includesFigureStorage1Contract.address}\\n`)
  includesFigureStorageContractsAddresses.push(includesFigureStorage1Contract.address);

  // Deploy the IncludesFigureStorage2
  const includesFigureStorage2 = await ethers.getContractFactory('IncludesFigureStorage2')
  const includesFigureStorage2Contract = await includesFigureStorage2.deploy() as IncludesFigureStorage2; // as IncludesFigureStorage2
  await includesFigureStorage2Contract.deployed()
  console.log(`🎥 includesFigureStorage2Contract contract deployed at ${includesFigureStorage2Contract.address}\\n`)
  includesFigureStorageContractsAddresses.push(includesFigureStorage2Contract.address)

  const outputFile = 'deployment/includesfigure_storage.json';  
  storageHandler.saveStorageDeploymentAddresses(includesFigureStorageContractsAddresses, outputFile);

  //IncludesFigureStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: includesFigureStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/includesfigure/IncludesFigureStorage1.sol:IncludesFigureStorage1"
  })
  //IncludesFigureStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: includesFigureStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/includesfigure/IncludesFigureStorage2.sol:IncludesFigureStorage2"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
