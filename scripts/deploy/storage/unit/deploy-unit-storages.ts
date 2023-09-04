import { ethers, run } from "hardhat";
import { UnitStorage1, UnitStorage10, UnitStorage11, UnitStorage12, UnitStorage13, UnitStorage14, UnitStorage15, UnitStorage16, UnitStorage17, UnitStorage18, UnitStorage19, UnitStorage20, UnitStorage21, UnitStorage22, UnitStorage23, UnitStorage24, UnitStorage25, UnitStorage26, UnitStorage27, UnitStorage28, UnitStorage29, UnitStorage3, UnitStorage30, UnitStorage31, UnitStorage32, UnitStorage33, UnitStorage34, UnitStorage35, UnitStorage36, UnitStorage37, UnitStorage38, UnitStorage39, UnitStorage4, UnitStorage5, UnitStorage6, UnitStorage7, UnitStorage8, UnitStorage9 } from "../../../../typechain";
import { StorageHandler } from '../../../StorageHandler';

async function main() {
  const [deployer,] = await ethers.getSigners();
  const storageHandler = new StorageHandler();

  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)
  const unitStorageContractsAddresses: any[] = [];

  // Deploy the UnitStorage1
  const unitStorage1 = await ethers.getContractFactory('UnitStorage1')
  const unitStorage1Contract = await unitStorage1.deploy() as UnitStorage1; // as VisionTreasury
  await unitStorage1Contract.deployed()
  console.log(`🎥 unitStorage1Contract contract deployed at ${unitStorage1Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage1Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage2
  const unitStorage2 = await ethers.getContractFactory('UnitStorage2')
  const unitStorage2Contract = await unitStorage2.deploy() as UnitStorage1; // as VisionTreasury
  await unitStorage2Contract.deployed()
  console.log(`🎥 unitStorage2Contract contract deployed at ${unitStorage2Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage2Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage3
  const unitStorage3 = await ethers.getContractFactory('UnitStorage3')
  const unitStorage3Contract = await unitStorage3.deploy() as UnitStorage3; // as VisionTreasury
  await unitStorage3Contract.deployed()
  console.log(`🎥 unitStorage3Contract contract deployed at ${unitStorage3Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage3Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage4
  const unitStorage4 = await ethers.getContractFactory('UnitStorage4')
  const unitStorage4Contract = await unitStorage4.deploy() as UnitStorage4; // as VisionTreasury
  await unitStorage4Contract.deployed()
  console.log(`🎥 unitStorage4Contract contract deployed at ${unitStorage4Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage4Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage5
  const unitStorage5 = await ethers.getContractFactory('UnitStorage5')
  const unitStorage5Contract = await unitStorage5.deploy() as UnitStorage5; // as VisionTreasury
  await unitStorage5Contract.deployed()
  console.log(`🎥 unitStorage5Contract contract deployed at ${unitStorage5Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage5Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage6
  const unitStorage6 = await ethers.getContractFactory('UnitStorage6')
  const unitStorage6Contract = await unitStorage6.deploy() as UnitStorage6; // as VisionTreasury
  await unitStorage6Contract.deployed()
  console.log(`🎥 unitStorage6Contract contract deployed at ${unitStorage6Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage6Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage7
  const unitStorage7 = await ethers.getContractFactory('UnitStorage7')
  const unitStorage7Contract = await unitStorage7.deploy() as UnitStorage7; // as VisionTreasury
  await unitStorage7Contract.deployed()
  console.log(`🎥 unitStorage7Contract contract deployed at ${unitStorage7Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage7Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))
  
  // Deploy the UnitStorage8
  const unitStorage8 = await ethers.getContractFactory('UnitStorage8')
  const unitStorage8Contract = await unitStorage8.deploy() as UnitStorage8; // as VisionTreasury
  await unitStorage8Contract.deployed()
  console.log(`🎥 unitStorage8Contract contract deployed at ${unitStorage8Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage8Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage9
  const unitStorage9 = await ethers.getContractFactory('UnitStorage9')
  const unitStorage9Contract = await unitStorage9.deploy() as UnitStorage9; // as VisionTreasury
  await unitStorage9Contract.deployed()
  console.log(`🎥 unitStorage9Contract contract deployed at ${unitStorage9Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage9Contract.address)
  
  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage10
  const unitStorage10 = await ethers.getContractFactory('UnitStorage10')
  const unitStorage10Contract = await unitStorage10.deploy() as UnitStorage10; // as VisionTreasury
  await unitStorage10Contract.deployed()
  console.log(`🎥 unitStorage10Contract contract deployed at ${unitStorage10Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage10Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage11
  const unitStorage11 = await ethers.getContractFactory('UnitStorage11')
  const unitStorage11Contract = await unitStorage11.deploy() as UnitStorage11; // as VisionTreasury
  await unitStorage11Contract.deployed()
  console.log(`🎥 unitStorage11Contract contract deployed at ${unitStorage11Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage11Contract.address)
 
   await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage12
  const unitStorage12 = await ethers.getContractFactory('UnitStorage12')
  const unitStorage12Contract = await unitStorage12.deploy() as UnitStorage12; // as VisionTreasury
  await unitStorage12Contract.deployed()
  console.log(`🎥 unitStorage12Contract contract deployed at ${unitStorage12Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage12Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))


  // Deploy the UnitStorage13
  const unitStorage13 = await ethers.getContractFactory('UnitStorage13')
  const unitStorage13Contract = await unitStorage13.deploy() as UnitStorage13; // as VisionTreasury
  await unitStorage13Contract.deployed()
  console.log(`🎥 unitStorage13Contract contract deployed at ${unitStorage13Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage13Contract.address)
  
  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage14
  const unitStorage14 = await ethers.getContractFactory('UnitStorage14')
  const unitStorage14Contract = await unitStorage14.deploy() as UnitStorage14; // as VisionTreasury
  await unitStorage14Contract.deployed()
  console.log(`🎥 unitStorage14Contract contract deployed at ${unitStorage14Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage14Contract.address)
 
   await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage15
  const unitStorage15 = await ethers.getContractFactory('UnitStorage15')
  const unitStorage15Contract = await unitStorage15.deploy() as UnitStorage15; // as VisionTreasury
  await unitStorage15Contract.deployed()
  console.log(`🎥 unitStorage15Contract contract deployed at ${unitStorage15Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage15Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage16
  const unitStorage16 = await ethers.getContractFactory('UnitStorage16')
  const unitStorage16Contract = await unitStorage16.deploy() as UnitStorage16; // as VisionTreasury
  await unitStorage16Contract.deployed()
  console.log(`🎥 unitStorage16Contract contract deployed at ${unitStorage16Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage16Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage17
  const unitStorage17 = await ethers.getContractFactory('UnitStorage17')
  const unitStorage17Contract = await unitStorage17.deploy() as UnitStorage17; // as VisionTreasury
  await unitStorage17Contract.deployed()
  console.log(`🎥 unitStorage17Contract contract deployed at ${unitStorage17Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage17Contract.address)
 
  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage18
  const unitStorage18 = await ethers.getContractFactory('UnitStorage18')
  const unitStorage18Contract = await unitStorage18.deploy() as UnitStorage18; // as VisionTreasury
  await unitStorage18Contract.deployed()
  console.log(`🎥 unitStorage18Contract contract deployed at ${unitStorage18Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage18Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage19
  const unitStorage19 = await ethers.getContractFactory('UnitStorage19')
  const unitStorage19Contract = await unitStorage19.deploy() as UnitStorage19; // as VisionTreasury
  await unitStorage19Contract.deployed()
  console.log(`🎥 unitStorage19Contract contract deployed at ${unitStorage19Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage19Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage20
  const unitStorage20 = await ethers.getContractFactory('UnitStorage20')
  const unitStorage20Contract = await unitStorage20.deploy() as UnitStorage20; // as VisionTreasury
  await unitStorage20Contract.deployed()
  console.log(`🎥 unitStorage20Contract contract deployed at ${unitStorage20Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage20Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage21
  const unitStorage21 = await ethers.getContractFactory('UnitStorage21')
  const unitStorage21Contract = await unitStorage21.deploy() as UnitStorage21; // as VisionTreasury
  await unitStorage21Contract.deployed()
  console.log(`🎥 unitStorage21Contract contract deployed at ${unitStorage21Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage21Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage22
  const unitStorage22 = await ethers.getContractFactory('UnitStorage22')
  const unitStorage22Contract = await unitStorage22.deploy() as UnitStorage22; // as VisionTreasury
  await unitStorage22Contract.deployed()
  console.log(`🎥 unitStorage22Contract contract deployed at ${unitStorage22Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage22Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage23
  const unitStorage23 = await ethers.getContractFactory('UnitStorage23')
  const unitStorage23Contract = await unitStorage23.deploy() as UnitStorage23; // as VisionTreasury
  await unitStorage23Contract.deployed()
  console.log(`🎥 unitStorage23Contract contract deployed at ${unitStorage23Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage23Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage24
  const unitStorage24 = await ethers.getContractFactory('UnitStorage24')
  const unitStorage24Contract = await unitStorage24.deploy() as UnitStorage24; // as VisionTreasury
  await unitStorage24Contract.deployed()
  console.log(`🎥 unitStorage24Contract contract deployed at ${unitStorage24Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage24Contract.address)

  // Deploy the UnitStorage25
  const unitStorage25 = await ethers.getContractFactory('UnitStorage25')
  const unitStorage25Contract = await unitStorage25.deploy() as UnitStorage25; // as VisionTreasury
  await unitStorage25Contract.deployed()
  console.log(`🎥 unitStorage25Contract contract deployed at ${unitStorage25Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage25Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage26
  const unitStorage26 = await ethers.getContractFactory('UnitStorage26')
  const unitStorage26Contract = await unitStorage26.deploy() as UnitStorage26; // as VisionTreasury
  await unitStorage26Contract.deployed()
  console.log(`🎥 unitStorage26Contract contract deployed at ${unitStorage26Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage26Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage27
  const unitStorage27 = await ethers.getContractFactory('UnitStorage27')
  const unitStorage27Contract = await unitStorage27.deploy() as UnitStorage27; // as VisionTreasury
  await unitStorage27Contract.deployed()
  console.log(`🎥 unitStorage27Contract contract deployed at ${unitStorage27Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage27Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage28
  const unitStorage28 = await ethers.getContractFactory('UnitStorage28')
  const unitStorage28Contract = await unitStorage28.deploy() as UnitStorage28; // as VisionTreasury
  await unitStorage28Contract.deployed()
  console.log(`🎥 unitStorage28Contract contract deployed at ${unitStorage28Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage28Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage29
  const unitStorage29 = await ethers.getContractFactory('UnitStorage29')
  const unitStorage29Contract = await unitStorage29.deploy() as UnitStorage29; // as VisionTreasury
  await unitStorage29Contract.deployed()
  console.log(`🎥 unitStorage29Contract contract deployed at ${unitStorage29Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage29Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage30
  const unitStorage30 = await ethers.getContractFactory('UnitStorage30')
  const unitStorage30Contract = await unitStorage30.deploy() as UnitStorage30; // as VisionTreasury
  await unitStorage30Contract.deployed()
  console.log(`🎥 unitStorage30Contract contract deployed at ${unitStorage30Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage30Contract.address)

  // Deploy the UnitStorage31
  const unitStorage31 = await ethers.getContractFactory('UnitStorage31')
  const unitStorage31Contract = await unitStorage31.deploy() as UnitStorage31; // as VisionTreasury
  await unitStorage31Contract.deployed()
  console.log(`🎥 unitStorage31Contract contract deployed at ${unitStorage31Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage31Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage32
  const unitStorage32 = await ethers.getContractFactory('UnitStorage32')
  const unitStorage32Contract = await unitStorage32.deploy() as UnitStorage32; // as VisionTreasury
  await unitStorage32Contract.deployed()
  console.log(`🎥 unitStorage32Contract contract deployed at ${unitStorage32Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage32Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage33
  const unitStorage33 = await ethers.getContractFactory('UnitStorage33')
  const unitStorage33Contract = await unitStorage33.deploy() as UnitStorage33; // as VisionTreasury
  await unitStorage33Contract.deployed()
  console.log(`🎥 unitStorage33Contract contract deployed at ${unitStorage33Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage33Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage34
  const unitStorage34 = await ethers.getContractFactory('UnitStorage34')
  const unitStorage34Contract = await unitStorage34.deploy() as UnitStorage34; // as VisionTreasury
  await unitStorage34Contract.deployed()
  console.log(`🎥 unitStorage34Contract contract deployed at ${unitStorage34Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage34Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage35
  const unitStorage35 = await ethers.getContractFactory('UnitStorage35')
  const unitStorage35Contract = await unitStorage35.deploy() as UnitStorage35; // as VisionTreasury
  await unitStorage35Contract.deployed()
  console.log(`🎥 unitStorage35Contract contract deployed at ${unitStorage35Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage35Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage36
  const unitStorage36 = await ethers.getContractFactory('UnitStorage36')
  const unitStorage36Contract = await unitStorage36.deploy() as UnitStorage36; // as VisionTreasury
  await unitStorage36Contract.deployed()
  console.log(`🎥 unitStorage36Contract contract deployed at ${unitStorage36Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage36Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage37
  const unitStorage37 = await ethers.getContractFactory('UnitStorage37')
  const unitStorage37Contract = await unitStorage37.deploy() as UnitStorage37; // as VisionTreasury
  await unitStorage37Contract.deployed()
  console.log(`🎥 unitStorage37Contract contract deployed at ${unitStorage37Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage37Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage38
  const unitStorage38 = await ethers.getContractFactory('UnitStorage38')
  const unitStorage38Contract = await unitStorage38.deploy() as UnitStorage38; // as VisionTreasury
  await unitStorage38Contract.deployed()
  console.log(`🎥 unitStorage38Contract contract deployed at ${unitStorage38Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage38Contract.address)

  await new Promise(resolve => setTimeout(resolve, 20000))

  // Deploy the UnitStorage39
  const unitStorage39 = await ethers.getContractFactory('UnitStorage39')
  const unitStorage39Contract = await unitStorage39.deploy() as UnitStorage39; // as VisionTreasury
  await unitStorage39Contract.deployed()
  console.log(`🎥 unitStorage39Contract contract deployed at ${unitStorage39Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage39Contract.address)
  
  const outputFile = 'deployment/unit_storage.json';
  storageHandler.saveStorageDeploymentAddresses(unitStorageContractsAddresses, outputFile)

  await new Promise(resolve => setTimeout(resolve, 20000))


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
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage2.sol:UnitStorage2"
  })
  // UnitStorage3 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage3Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage3.sol:UnitStorage3"
  })
  // UnitStorage4 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage4Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage4.sol:UnitStorage4"
  })

  // UnitStorage5 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage5Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage5.sol:UnitStorage5"
  })
  // UnitStorage6 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage6Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage6.sol:UnitStorage6"
  })
  // UnitStorage7 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage7Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage7.sol:UnitStorage7"
  })
  // UnitStorage8 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage8Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage8.sol:UnitStorage8"
  })
  // UnitStorage9 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage9Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage9.sol:UnitStorage9"
  })
  // UnitStorage10 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage10Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage10.sol:UnitStorage10"
  })

  // UnitStorage11 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage11Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage11.sol:UnitStorage11"
  })
  // UnitStorage12 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage12Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage12.sol:UnitStorage12"
  })
  // UnitStorage13 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage13Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage13.sol:UnitStorage13"
  })
  // UnitStorage14 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage14Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage14.sol:UnitStorage14"
  })
  // UnitStorage15 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage15Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage15.sol:UnitStorage15"
  })
  // UnitStorage16 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage16Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage16.sol:UnitStorage16"
  })
  // UnitStorage17 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage17Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage17.sol:UnitStorage17"
  })
  // UnitStorage18 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage18Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage18.sol:UnitStorage18"
  })
  // UnitStorage19 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage19Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage19.sol:UnitStorage19"
  })
  // UnitStorage20 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitStorage20Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage20.sol:UnitStorage20"
  })
  // UnitStorage21 verification
  await new Promise(resolve => setTimeout(resolve, 21000))
  await run("verify:verify", {
    address: unitStorage21Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage21.sol:UnitStorage21"
  })
  // UnitStorage22 verification
  await new Promise(resolve => setTimeout(resolve, 21000))
  await run("verify:verify", {
    address: unitStorage22Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage22.sol:UnitStorage22"
  })
  // UnitStorage23 verification
  await new Promise(resolve => setTimeout(resolve, 21000))
  await run("verify:verify", {
    address: unitStorage23Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage23.sol:UnitStorage23"
  })
  // UnitStorage24 verification
  await new Promise(resolve => setTimeout(resolve, 21000))
  await run("verify:verify", {
    address: unitStorage24Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage24.sol:UnitStorage24"
  })
  // UnitStorage25 verification
  await new Promise(resolve => setTimeout(resolve, 21000))
  await run("verify:verify", {
    address: unitStorage25Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage25.sol:UnitStorage25"
  })
  // UnitStorage26 verification
  await new Promise(resolve => setTimeout(resolve, 21000))
  await run("verify:verify", {
    address: unitStorage26Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage26.sol:UnitStorage26"
  })
  // UnitStorage27 verification
  await new Promise(resolve => setTimeout(resolve, 21000))
  await run("verify:verify", {
    address: unitStorage27Contract.address,
    network: ethers.provider.network,
    constructorArguments: [
    ],
    contract: "contracts/storage/unit/UnitStorage27.sol:UnitStorage27"
  })
   // UnitStorage28 verification
   await new Promise(resolve => setTimeout(resolve, 21000))
   await run("verify:verify", {
     address: unitStorage28Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage28.sol:UnitStorage28"
   })
   // UnitStorage29 verification
   await new Promise(resolve => setTimeout(resolve, 21000))
   await run("verify:verify", {
     address: unitStorage29Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage29.sol:UnitStorage29"
   })
   // UnitStorage30 verification
   await new Promise(resolve => setTimeout(resolve, 21000))
   await run("verify:verify", {
     address: unitStorage30Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage30.sol:UnitStorage30"
   })
   // UnitStorage31 verification
   await new Promise(resolve => setTimeout(resolve, 21000))
   await run("verify:verify", {
     address: unitStorage31Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage31.sol:UnitStorage31"
   })
   // UnitStorage32 verification
   await new Promise(resolve => setTimeout(resolve, 21000))
   await run("verify:verify", {
     address: unitStorage32Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage32.sol:UnitStorage32"
   })
   // UnitStorage33 verification
   await new Promise(resolve => setTimeout(resolve, 21000))
   await run("verify:verify", {
     address: unitStorage33Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage33.sol:UnitStorage33"
   })
   // UnitStorage34 verification
   await new Promise(resolve => setTimeout(resolve, 21000))
   await run("verify:verify", {
     address: unitStorage34Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage34.sol:UnitStorage34"
   })
   // UnitStorage35 verification
   await new Promise(resolve => setTimeout(resolve, 21000))
   await run("verify:verify", {
     address: unitStorage35Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage35.sol:UnitStorage35"
   })
   // UnitStorage36 verification
   await new Promise(resolve => setTimeout(resolve, 21000))
   await run("verify:verify", {
     address: unitStorage36Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage36.sol:UnitStorage36"
   })
   // UnitStorage37 verification
   await new Promise(resolve => setTimeout(resolve, 21000))
   await run("verify:verify", {
     address: unitStorage37Contract.address,
     network: ethers.provider.network,
     constructorArguments: [
     ],
     contract: "contracts/storage/unit/UnitStorage37.sol:UnitStorage37"
   })
    // UnitStorage38 verification
    await new Promise(resolve => setTimeout(resolve, 21000))
    await run("verify:verify", {
      address: unitStorage38Contract.address,
      network: ethers.provider.network,
      constructorArguments: [
      ],
      contract: "contracts/storage/unit/UnitStorage38.sol:UnitStorage38"
    })
    // UnitStorage39 verification
    await new Promise(resolve => setTimeout(resolve, 21000))
    await run("verify:verify", {
      address: unitStorage39Contract.address,
      network: ethers.provider.network,
      constructorArguments: [
      ],
      contract: "contracts/storage/unit/UnitStorage39.sol:UnitStorage39"
    })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
