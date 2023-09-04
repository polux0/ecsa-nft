import { ethers, run } from "hardhat";
import { FigureStorage1, FigureStorage2} from "../../../../typechain";
import { StorageHandler } from '../../../StorageHandler';

async function main() {
  const [deployer,] = await ethers.getSigners();
  const storageHandler = new StorageHandler();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  const figureStorageContractsAddresses: any[] = [];

  // Deploy the FigureStorage1
  const figureStorage1 = await ethers.getContractFactory('FigureStorage1')
  const figureStorage1Contract = await figureStorage1.deploy({ gasLimit: 20000000 }) as FigureStorage1; // as FigureStorage1
  await figureStorage1Contract.deployed()
  console.log(`🎥 figureStorage1Contract contract deployed at ${figureStorage1Contract.address}\\n`)

  // Deploy the FigureStorage2
  const figureStorage2 = await ethers.getContractFactory('FigureStorage2')
  const figureStorage2Contract = await figureStorage2.deploy({ gasLimit: 20000000 }) as FigureStorage2; // as FigureStorage2
  await figureStorage2Contract.deployed()
  console.log(`🎥 figureStorage2Contract contract deployed at ${figureStorage2Contract.address}\\n`)

  const outputFile = 'deployment/figure_storage.json';
  storageHandler.saveStorageDeploymentAddresses(figureStorageContractsAddresses, outputFile);

  //FigureStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: figureStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/figure/FigureStorage1.sol:FigureStorage1"
  })
  //FigureStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: figureStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/figure/FigureStorage2.sol:FigureStorage2"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
