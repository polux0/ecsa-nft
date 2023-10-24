import { ethers, run, hardhatArguments } from "hardhat";
import { UnitStorage21, UnitStorage22, UnitStorage23, UnitStorage24, UnitStorage25, UnitStorage26, UnitStorage27, UnitStorage28, UnitStorage29, UnitStorage30, UnitStorage31, UnitStorage32, UnitStorage33, UnitStorage34, UnitStorage35, UnitStorage36, UnitStorage37, UnitStorage38, UnitStorage39 } from "../../../typechain";
import { StorageHandler } from '../../StorageHandler';

async function main() {
  const [deployer,] = await ethers.getSigners();
  const storageHandler = new StorageHandler();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // *************************************** UNIT_STORAGE *************************************************

  const outputFile = `deployment/${hardhatArguments.network}/storage/unit_storage.json`;
  const unitStorageContractsAddresses: any[] = await storageHandler.loadStorageDeploymentAddresses(outputFile);

  //
  const directory = `deployment/${hardhatArguments.network}/storage/`;
  const filename = 'unit_storage.json';
  //

  // Deploy the UnitStorage21
  const unitStorage21 = await ethers.getContractFactory('UnitStorage21')
  const unitStorage21Contract = await unitStorage21.deploy({ gasLimit: 27000000 }) as UnitStorage21; // as VisionTreasury
  await unitStorage21Contract.deployed()
  console.log(`🎥 unitStorage21Contract contract deployed at ${unitStorage21Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage21Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage22
  const unitStorage22 = await ethers.getContractFactory('UnitStorage22')
  const unitStorage22Contract = await unitStorage22.deploy({ gasLimit: 27000000 }) as UnitStorage22; // as VisionTreasury
  await unitStorage22Contract.deployed()
  console.log(`🎥 unitStorage22Contract contract deployed at ${unitStorage22Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage22Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage23
  const unitStorage23 = await ethers.getContractFactory('UnitStorage23')
  const unitStorage23Contract = await unitStorage23.deploy({ gasLimit: 27000000 }) as UnitStorage23; // as VisionTreasury
  await unitStorage23Contract.deployed()
  console.log(`🎥 unitStorage23Contract contract deployed at ${unitStorage23Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage23Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage24
  const unitStorage24 = await ethers.getContractFactory('UnitStorage24')
  const unitStorage24Contract = await unitStorage24.deploy({ gasLimit: 27000000 }) as UnitStorage24; // as VisionTreasury
  await unitStorage24Contract.deployed()
  console.log(`🎥 unitStorage24Contract contract deployed at ${unitStorage24Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage24Contract.address)

  // Deploy the UnitStorage25
  const unitStorage25 = await ethers.getContractFactory('UnitStorage25')
  const unitStorage25Contract = await unitStorage25.deploy({ gasLimit: 27000000 }) as UnitStorage25; // as VisionTreasury
  await unitStorage25Contract.deployed()
  console.log(`🎥 unitStorage25Contract contract deployed at ${unitStorage25Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage25Contract.address)

  //save
  await storageHandler.ensureDirectoryExistence(directory, filename);
  await storageHandler.saveStorageDeploymentAddresses(unitStorageContractsAddresses, outputFile)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage26
  const unitStorage26 = await ethers.getContractFactory('UnitStorage26')
  const unitStorage26Contract = await unitStorage26.deploy({ gasLimit: 27000000 }) as UnitStorage26; // as VisionTreasury
  await unitStorage26Contract.deployed()
  console.log(`🎥 unitStorage26Contract contract deployed at ${unitStorage26Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage26Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage27
  const unitStorage27 = await ethers.getContractFactory('UnitStorage27')
  const unitStorage27Contract = await unitStorage27.deploy({ gasLimit: 27000000 }) as UnitStorage27; // as VisionTreasury
  await unitStorage27Contract.deployed()
  console.log(`🎥 unitStorage27Contract contract deployed at ${unitStorage27Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage27Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage28
  const unitStorage28 = await ethers.getContractFactory('UnitStorage28')
  const unitStorage28Contract = await unitStorage28.deploy({ gasLimit: 27000000 }) as UnitStorage28; // as VisionTreasury
  await unitStorage28Contract.deployed()
  console.log(`🎥 unitStorage28Contract contract deployed at ${unitStorage28Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage28Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage29
  const unitStorage29 = await ethers.getContractFactory('UnitStorage29')
  const unitStorage29Contract = await unitStorage29.deploy({ gasLimit: 27000000 }) as UnitStorage29; // as VisionTreasury
  await unitStorage29Contract.deployed()
  console.log(`🎥 unitStorage29Contract contract deployed at ${unitStorage29Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage29Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage30
  const unitStorage30 = await ethers.getContractFactory('UnitStorage30')
  const unitStorage30Contract = await unitStorage30.deploy({ gasLimit: 27000000 }) as UnitStorage30; // as VisionTreasury
  await unitStorage30Contract.deployed()
  console.log(`🎥 unitStorage30Contract contract deployed at ${unitStorage30Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage30Contract.address)

  //save
  await storageHandler.saveStorageDeploymentAddresses(unitStorageContractsAddresses, outputFile)

  // Deploy the UnitStorage31
  const unitStorage31 = await ethers.getContractFactory('UnitStorage31')
  const unitStorage31Contract = await unitStorage31.deploy({ gasLimit: 27000000 }) as UnitStorage31; // as VisionTreasury
  await unitStorage31Contract.deployed()
  console.log(`🎥 unitStorage31Contract contract deployed at ${unitStorage31Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage31Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage32
  const unitStorage32 = await ethers.getContractFactory('UnitStorage32')
  const unitStorage32Contract = await unitStorage32.deploy({ gasLimit: 27000000 }) as UnitStorage32; // as VisionTreasury
  await unitStorage32Contract.deployed()
  console.log(`🎥 unitStorage32Contract contract deployed at ${unitStorage32Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage32Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage33
  const unitStorage33 = await ethers.getContractFactory('UnitStorage33')
  const unitStorage33Contract = await unitStorage33.deploy({ gasLimit: 27000000 }) as UnitStorage33; // as VisionTreasury
  await unitStorage33Contract.deployed()
  console.log(`🎥 unitStorage33Contract contract deployed at ${unitStorage33Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage33Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage34
  const unitStorage34 = await ethers.getContractFactory('UnitStorage34')
  const unitStorage34Contract = await unitStorage34.deploy({ gasLimit: 27000000 }) as UnitStorage34; // as VisionTreasury
  await unitStorage34Contract.deployed()
  console.log(`🎥 unitStorage34Contract contract deployed at ${unitStorage34Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage34Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage35
  const unitStorage35 = await ethers.getContractFactory('UnitStorage35')
  const unitStorage35Contract = await unitStorage35.deploy({ gasLimit: 27000000 }) as UnitStorage35; // as VisionTreasury
  await unitStorage35Contract.deployed()
  console.log(`🎥 unitStorage35Contract contract deployed at ${unitStorage35Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage35Contract.address)

  //save
  await storageHandler.saveStorageDeploymentAddresses(unitStorageContractsAddresses, outputFile)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage36
  const unitStorage36 = await ethers.getContractFactory('UnitStorage36')
  const unitStorage36Contract = await unitStorage36.deploy({ gasLimit: 28000000 }) as UnitStorage36; // as VisionTreasury
  await unitStorage36Contract.deployed()
  console.log(`🎥 unitStorage36Contract contract deployed at ${unitStorage36Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage36Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage37
  const unitStorage37 = await ethers.getContractFactory('UnitStorage37')
  const unitStorage37Contract = await unitStorage37.deploy({ gasLimit: 28000000 }) as UnitStorage37; // as VisionTreasury
  await unitStorage37Contract.deployed()
  console.log(`🎥 unitStorage37Contract contract deployed at ${unitStorage37Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage37Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage38
  const unitStorage38 = await ethers.getContractFactory('UnitStorage38')
  const unitStorage38Contract = await unitStorage38.deploy({ gasLimit: 28000000 }) as UnitStorage38; // as VisionTreasury
  await unitStorage38Contract.deployed()
  console.log(`🎥 unitStorage38Contract contract deployed at ${unitStorage38Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage38Contract.address)

  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the UnitStorage39
  const unitStorage39 = await ethers.getContractFactory('UnitStorage39')
  const unitStorage39Contract = await unitStorage39.deploy({ gasLimit: 28000000 }) as UnitStorage39; // as VisionTreasury
  await unitStorage39Contract.deployed()
  console.log(`🎥 unitStorage39Contract contract deployed at ${unitStorage39Contract.address}\\n`)
  unitStorageContractsAddresses.push(unitStorage39Contract.address)
  
  //save
  await storageHandler.saveStorageDeploymentAddresses(unitStorageContractsAddresses, outputFile)


  // ************************************ Verification ************************************

  

  // *************************************** UNIT_STORAGE_VERIFICATION *************************************************

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
  process.exitCode = 2;
});
