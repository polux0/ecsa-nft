import { ethers, run, hardhatArguments } from "hardhat";
import { UnitStorage1, UnitStorage10, UnitStorage11, UnitStorage12, UnitStorage13, UnitStorage14, UnitStorage15, UnitStorage16, UnitStorage17, UnitStorage18, UnitStorage19, UnitStorage20, UnitStorage3, UnitStorage4, UnitStorage5, UnitStorage6, UnitStorage7, UnitStorage8, UnitStorage9 } from "../../../typechain";
import { StorageHandler } from '../../StorageHandler';

async function main() {
  const [deployer,] = await ethers.getSigners();
  const storageHandler = new StorageHandler();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // after every 5th storage deployed we store the address

  // *************************************** UNIT_STORAGE *************************************************

  const unitStorageContractsAddresses: any[] = [];
  
  //
  const outputFile = `deployment/${hardhatArguments.network}/storage/unit_storage.json`;

  const directory = `deployment/${hardhatArguments.network}/storage/`;
  const filename = 'unit_storage.json';


  // Deploy the UnitStorage1
  const unitStorage1 = await ethers.getContractFactory('UnitStorage1')
  const unitStorage1Contract = await unitStorage1.deploy({ gasLimit: 20000000 }) as UnitStorage1; // as VisionTreasury
  await unitStorage1Contract.deployed()
  console.log(`🎥 unitStorage1Contract contract deployed at ${unitStorage1Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage1Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage2
  const unitStorage2 = await ethers.getContractFactory('UnitStorage2')
  const unitStorage2Contract = await unitStorage2.deploy({ gasLimit: 20000000 }) as UnitStorage1; // as VisionTreasury
  await unitStorage2Contract.deployed()
  console.log(`🎥 unitStorage2Contract contract deployed at ${unitStorage2Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage2Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage3
  const unitStorage3 = await ethers.getContractFactory('UnitStorage3')
  const unitStorage3Contract = await unitStorage3.deploy({ gasLimit: 20000000 }) as UnitStorage3; // as VisionTreasury
  await unitStorage3Contract.deployed()
  console.log(`🎥 unitStorage3Contract contract deployed at ${unitStorage3Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage3Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage4
  const unitStorage4 = await ethers.getContractFactory('UnitStorage4')
  const unitStorage4Contract = await unitStorage4.deploy({ gasLimit: 20000000 }) as UnitStorage4; // as VisionTreasury
  await unitStorage4Contract.deployed()
  console.log(`🎥 unitStorage4Contract contract deployed at ${unitStorage4Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage4Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage5
  const unitStorage5 = await ethers.getContractFactory('UnitStorage5')
  const unitStorage5Contract = await unitStorage5.deploy({ gasLimit: 20000000 }) as UnitStorage5; // as VisionTreasury
  await unitStorage5Contract.deployed()
  console.log(`🎥 unitStorage5Contract contract deployed at ${unitStorage5Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage5Contract.address)

  // save 
  await storageHandler.ensureDirectoryExistence(directory, filename);
  await storageHandler.saveStorageDeploymentAddresses(unitStorageContractsAddresses, outputFile)


  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage6
  const unitStorage6 = await ethers.getContractFactory('UnitStorage6')
  const unitStorage6Contract = await unitStorage6.deploy({ gasLimit: 20000000 }) as UnitStorage6; // as VisionTreasury
  await unitStorage6Contract.deployed()
  console.log(`🎥 unitStorage6Contract contract deployed at ${unitStorage6Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage6Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage7
  const unitStorage7 = await ethers.getContractFactory('UnitStorage7')
  const unitStorage7Contract = await unitStorage7.deploy({ gasLimit: 20000000 }) as UnitStorage7; // as VisionTreasury
  await unitStorage7Contract.deployed()
  console.log(`🎥 unitStorage7Contract contract deployed at ${unitStorage7Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage7Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))
  
  // Deploy the UnitStorage8
  const unitStorage8 = await ethers.getContractFactory('UnitStorage8')
  const unitStorage8Contract = await unitStorage8.deploy({ gasLimit: 20000000 }) as UnitStorage8; // as VisionTreasury
  await unitStorage8Contract.deployed()
  console.log(`🎥 unitStorage8Contract contract deployed at ${unitStorage8Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage8Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage9
  const unitStorage9 = await ethers.getContractFactory('UnitStorage9')
  const unitStorage9Contract = await unitStorage9.deploy({ gasLimit: 20000000 }) as UnitStorage9; // as VisionTreasury
  await unitStorage9Contract.deployed()
  console.log(`🎥 unitStorage9Contract contract deployed at ${unitStorage9Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage9Contract.address)
  
  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage10
  const unitStorage10 = await ethers.getContractFactory('UnitStorage10')
  const unitStorage10Contract = await unitStorage10.deploy({ gasLimit: 20000000 }) as UnitStorage10; // as VisionTreasury
  await unitStorage10Contract.deployed()
  console.log(`🎥 unitStorage10Contract contract deployed at ${unitStorage10Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage10Contract.address)

  // save 
  await storageHandler.ensureDirectoryExistence(directory, filename);
  await storageHandler.saveStorageDeploymentAddresses(unitStorageContractsAddresses, outputFile)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage11
  const unitStorage11 = await ethers.getContractFactory('UnitStorage11')
  const unitStorage11Contract = await unitStorage11.deploy({ gasLimit: 20000000 }) as UnitStorage11; // as VisionTreasury
  await unitStorage11Contract.deployed()
  console.log(`🎥 unitStorage11Contract contract deployed at ${unitStorage11Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage11Contract.address)
 
   await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage12
  const unitStorage12 = await ethers.getContractFactory('UnitStorage12')
  const unitStorage12Contract = await unitStorage12.deploy({ gasLimit: 20000000 }) as UnitStorage12; // as VisionTreasury
  await unitStorage12Contract.deployed()
  console.log(`🎥 unitStorage12Contract contract deployed at ${unitStorage12Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage12Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))


  // Deploy the UnitStorage13
  const unitStorage13 = await ethers.getContractFactory('UnitStorage13')
  const unitStorage13Contract = await unitStorage13.deploy({ gasLimit: 20000000 }) as UnitStorage13; // as VisionTreasury
  await unitStorage13Contract.deployed()
  console.log(`🎥 unitStorage13Contract contract deployed at ${unitStorage13Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage13Contract.address)
  
  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage14
  const unitStorage14 = await ethers.getContractFactory('UnitStorage14')
  const unitStorage14Contract = await unitStorage14.deploy({ gasLimit: 20000000 }) as UnitStorage14; // as VisionTreasury
  await unitStorage14Contract.deployed()
  console.log(`🎥 unitStorage14Contract contract deployed at ${unitStorage14Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage14Contract.address)
 
   await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage15
  const unitStorage15 = await ethers.getContractFactory('UnitStorage15')
  const unitStorage15Contract = await unitStorage15.deploy({ gasLimit: 20000000 }) as UnitStorage15; // as VisionTreasury
  await unitStorage15Contract.deployed()
  console.log(`🎥 unitStorage15Contract contract deployed at ${unitStorage15Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage15Contract.address)

  // save 
  await storageHandler.ensureDirectoryExistence(directory, filename);
  await storageHandler.saveStorageDeploymentAddresses(unitStorageContractsAddresses, outputFile)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage16
  const unitStorage16 = await ethers.getContractFactory('UnitStorage16')
  const unitStorage16Contract = await unitStorage16.deploy({ gasLimit: 20000000 }) as UnitStorage16; // as VisionTreasury
  await unitStorage16Contract.deployed()
  console.log(`🎥 unitStorage16Contract contract deployed at ${unitStorage16Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage16Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage17
  const unitStorage17 = await ethers.getContractFactory('UnitStorage17')
  const unitStorage17Contract = await unitStorage17.deploy({ gasLimit: 20000000 }) as UnitStorage17; // as VisionTreasury
  await unitStorage17Contract.deployed()
  console.log(`🎥 unitStorage17Contract contract deployed at ${unitStorage17Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage17Contract.address)
 
  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage18
  const unitStorage18 = await ethers.getContractFactory('UnitStorage18')
  const unitStorage18Contract = await unitStorage18.deploy({ gasLimit: 20000000 }) as UnitStorage18; // as VisionTreasury
  await unitStorage18Contract.deployed()
  console.log(`🎥 unitStorage18Contract contract deployed at ${unitStorage18Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage18Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage19
  const unitStorage19 = await ethers.getContractFactory('UnitStorage19')
  const unitStorage19Contract = await unitStorage19.deploy({ gasLimit: 20000000 }) as UnitStorage19; // as VisionTreasury
  await unitStorage19Contract.deployed()
  console.log(`🎥 unitStorage19Contract contract deployed at ${unitStorage19Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage19Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage20
  const unitStorage20 = await ethers.getContractFactory('UnitStorage20')
  const unitStorage20Contract = await unitStorage20.deploy({ gasLimit: 20000000 }) as UnitStorage20; // as VisionTreasury
  await unitStorage20Contract.deployed()
  console.log(`🎥 unitStorage20Contract contract deployed at ${unitStorage20Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage20Contract.address)

  await storageHandler.ensureDirectoryExistence(directory, filename);
  await storageHandler.saveStorageDeploymentAddresses(unitStorageContractsAddresses, outputFile)


  // ************************************ Verification ************************************

  

  // *************************************** UNIT_STORAGE_VERIFICATION *************************************************
  
  // UnitStorage1 verification
   await new Promise(resolve => setTimeout(resolve, 20000))
   await run("verify:verify", {
     address: unitStorage1Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage1.sol:UnitStorage1"
   })
   // UnitStorage2 verification
   await new Promise(resolve => setTimeout(resolve, 10000))
   await run("verify:verify", {
     address: unitStorage2Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage2.sol:UnitStorage2"
   })
   // UnitStorage3 verification
   await new Promise(resolve => setTimeout(resolve, 10000))
   await run("verify:verify", {
     address: unitStorage3Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage3.sol:UnitStorage3"
   })
   // UnitStorage4 verification
   await new Promise(resolve => setTimeout(resolve, 10000))
   await run("verify:verify", {
     address: unitStorage4Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage4.sol:UnitStorage4"
   })
 
   // UnitStorage5 verification
   await new Promise(resolve => setTimeout(resolve, 10000))
   await run("verify:verify", {
     address: unitStorage5Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage5.sol:UnitStorage5"
   })
   // UnitStorage6 verification
   await new Promise(resolve => setTimeout(resolve, 10000))
   await run("verify:verify", {
     address: unitStorage6Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage6.sol:UnitStorage6"
   })
   // UnitStorage7 verification
   await new Promise(resolve => setTimeout(resolve, 10000))
   await run("verify:verify", {
     address: unitStorage7Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage7.sol:UnitStorage7"
   })
   // UnitStorage8 verification
   await new Promise(resolve => setTimeout(resolve, 10000))
   await run("verify:verify", {
     address: unitStorage8Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage8.sol:UnitStorage8"
   })
   // UnitStorage9 verification
   await new Promise(resolve => setTimeout(resolve, 10000))
   await run("verify:verify", {
     address: unitStorage9Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage9.sol:UnitStorage9"
   })
   // UnitStorage10 verification
   await new Promise(resolve => setTimeout(resolve, 10000))
   await run("verify:verify", {
     address: unitStorage10Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage10.sol:UnitStorage10"
   })
 
   // UnitStorage11 verification
   await new Promise(resolve => setTimeout(resolve, 10000))
   await run("verify:verify", {
     address: unitStorage11Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage11.sol:UnitStorage11"
   })
   // UnitStorage12 verification
   await new Promise(resolve => setTimeout(resolve, 10000))
   await run("verify:verify", {
     address: unitStorage12Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage12.sol:UnitStorage12"
   })
   // UnitStorage13 verification
   await new Promise(resolve => setTimeout(resolve, 10000))
   await run("verify:verify", {
     address: unitStorage13Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage13.sol:UnitStorage13"
   })
   // UnitStorage14 verification
   await new Promise(resolve => setTimeout(resolve, 10000))
   await run("verify:verify", {
     address: unitStorage14Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage14.sol:UnitStorage14"
   })
   // UnitStorage15 verification
   await new Promise(resolve => setTimeout(resolve, 10000))
   await run("verify:verify", {
     address: unitStorage15Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage15.sol:UnitStorage15"
   })
   // UnitStorage16 verification
   await new Promise(resolve => setTimeout(resolve, 10000))
   await run("verify:verify", {
     address: unitStorage16Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage16.sol:UnitStorage16"
   })
   // UnitStorage17 verification
   await new Promise(resolve => setTimeout(resolve, 10000))
   await run("verify:verify", {
     address: unitStorage17Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage17.sol:UnitStorage17"
   })
   // UnitStorage18 verification
   await new Promise(resolve => setTimeout(resolve, 10000))
   await run("verify:verify", {
     address: unitStorage18Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage18.sol:UnitStorage18"
   })
   // UnitStorage19 verification
   await new Promise(resolve => setTimeout(resolve, 10000))
   await run("verify:verify", {
     address: unitStorage19Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage19.sol:UnitStorage19"
   })
   // UnitStorage20 verification
   await new Promise(resolve => setTimeout(resolve, 10000))
   await run("verify:verify", {
     address: unitStorage20Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage20.sol:UnitStorage20"
   })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
