import { ethers, run } from "hardhat";
import { FootnoteStorage1, FootnoteStorage2, FootnoteStorage3, FootnoteStorage4, FootnoteStorage5, FootnoteStorage6, FootnoteStorage7, FootnoteStorage8, FootnoteStorage9, FootnoteStorage10, FootnoteStorage11, FootnoteStorage12, FootnoteStorage13, FootnoteStorage14, FootnoteStorage15, FootnoteStorage16, FootnoteStorage17} from "../../../../typechain";
import { StorageHandler } from '../../../StorageHandler';

async function main() {
  const [deployer,] = await ethers.getSigners();
  const storageHandler = new StorageHandler();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  const footnoteStorageContractsAddresses: any[] = [];

  // Deploy the FootnoteStorage1
  const footnoteStorage1 = await ethers.getContractFactory('FootnoteStorage1')
  const footnoteStorage1Contract = await footnoteStorage1.deploy() as FootnoteStorage1; // as FootnoteStorage1
  await footnoteStorage1Contract.deployed()
  console.log(`🎥 footnoteStorage1Contract contract deployed at ${footnoteStorage1Contract.address}\\n`)
  footnoteStorageContractsAddresses.push(footnoteStorage1Contract.address)
  await new Promise(resolve => setTimeout(resolve, 10000))

  // Deploy the FootnoteStorage2
  const footnoteStorage2 = await ethers.getContractFactory('FootnoteStorage2')
  const footnoteStorage2Contract = await footnoteStorage2.deploy() as FootnoteStorage2; // as FootnoteStorage2
  await footnoteStorage2Contract.deployed()
  console.log(`🎥 footnoteStorage2Contract contract deployed at ${footnoteStorage2Contract.address}\\n`)
  footnoteStorageContractsAddresses.push(footnoteStorage2Contract.address)
 
  await new Promise(resolve => setTimeout(resolve, 10000))
  // Deploy the FootnoteStorage3 
  const footnoteStorage3 = await ethers.getContractFactory('FootnoteStorage3')
  const footnoteStorage3Contract = await footnoteStorage3.deploy() as FootnoteStorage3; // as FootnoteStorage3
  await footnoteStorage3Contract.deployed()
  footnoteStorageContractsAddresses.push(footnoteStorage3Contract.address)
  console.log(`🎥 footnoteStorage3Contract contract deployed at ${footnoteStorage3Contract.address}\\n`)
  
  await new Promise(resolve => setTimeout(resolve, 10000))
  // Deploy the FootnoteStorage4 
  const footnoteStorage4 = await ethers.getContractFactory('FootnoteStorage4')
  const footnoteStorage4Contract = await footnoteStorage4.deploy() as FootnoteStorage4; // as FootnoteStorage4
  await footnoteStorage4Contract.deployed()
  footnoteStorageContractsAddresses.push(footnoteStorage4Contract.address)
  console.log(`🎥 footnoteStorage4Contract contract deployed at ${footnoteStorage4Contract.address}\\n`)

  await new Promise(resolve => setTimeout(resolve, 10000))
  // Deploy the FootnoteStorage5 
  const footnoteStorage5 = await ethers.getContractFactory('FootnoteStorage5')
  const footnoteStorage5Contract = await footnoteStorage5.deploy() as FootnoteStorage5; // as FootnoteStorage5
  await footnoteStorage5Contract.deployed()
  footnoteStorageContractsAddresses.push(footnoteStorage5Contract.address)
  console.log(`🎥 footnoteStorage5Contract contract deployed at ${footnoteStorage5Contract.address}\\n`)

  await new Promise(resolve => setTimeout(resolve, 10000))
  // Deploy the FootnoteStorage6 
  const footnoteStorage6 = await ethers.getContractFactory('FootnoteStorage6')
  const footnoteStorage6Contract = await footnoteStorage6.deploy() as FootnoteStorage6; // as FootnoteStorage6
  await footnoteStorage6Contract.deployed()
  footnoteStorageContractsAddresses.push(footnoteStorage6Contract.address)
  console.log(`🎥 footnoteStorage6Contract contract deployed at ${footnoteStorage6Contract.address}\\n`)

  await new Promise(resolve => setTimeout(resolve, 10000))
  // Deploy the FootnoteStorage7 
  const footnoteStorage7 = await ethers.getContractFactory('FootnoteStorage7')
  const footnoteStorage7Contract = await footnoteStorage7.deploy() as FootnoteStorage7; // as FootnoteStorage7
  await footnoteStorage7Contract.deployed()
  footnoteStorageContractsAddresses.push(footnoteStorage7Contract.address)
  console.log(`🎥 footnoteStorage7Contract contract deployed at ${footnoteStorage7Contract.address}\\n`)

  await new Promise(resolve => setTimeout(resolve, 10000))
  // Deploy the FootnoteStorage8 
  const footnoteStorage8 = await ethers.getContractFactory('FootnoteStorage8')
  const footnoteStorage8Contract = await footnoteStorage8.deploy() as FootnoteStorage8; // as FootnoteStorage8
  await footnoteStorage8Contract.deployed()
  footnoteStorageContractsAddresses.push(footnoteStorage8Contract.address)
  console.log(`🎥 footnoteStorage8Contract contract deployed at ${footnoteStorage8Contract.address}\\n`)

  await new Promise(resolve => setTimeout(resolve, 10000))
  // Deploy the FootnoteStorage9 
  const footnoteStorage9 = await ethers.getContractFactory('FootnoteStorage9')
  const footnoteStorage9Contract = await footnoteStorage9.deploy() as FootnoteStorage9; // as FootnoteStorage9
  await footnoteStorage9Contract.deployed()
  footnoteStorageContractsAddresses.push(footnoteStorage9Contract.address)
  console.log(`🎥 footnoteStorage9Contract contract deployed at ${footnoteStorage9Contract.address}\\n`)

  await new Promise(resolve => setTimeout(resolve, 10000))
  // Deploy the FootnoteStorage10 
  const footnoteStorage10 = await ethers.getContractFactory('FootnoteStorage10')
  const footnoteStorage10Contract = await footnoteStorage10.deploy() as FootnoteStorage10; // as FootnoteStorage10
  await footnoteStorage10Contract.deployed()
  footnoteStorageContractsAddresses.push(footnoteStorage10Contract.address)
  console.log(`🎥 footnoteStorage10Contract contract deployed at ${footnoteStorage10Contract.address}\\n`)

  await new Promise(resolve => setTimeout(resolve, 10000))
  // Deploy the FootnoteStorage11 
  const footnoteStorage11 = await ethers.getContractFactory('FootnoteStorage11')
  const footnoteStorage11Contract = await footnoteStorage11.deploy() as FootnoteStorage11; // as FootnoteStorage11
  await footnoteStorage11Contract.deployed()
  footnoteStorageContractsAddresses.push(footnoteStorage11Contract.address)
  console.log(`🎥 footnoteStorage11Contract contract deployed at ${footnoteStorage11Contract.address}\\n`)

  await new Promise(resolve => setTimeout(resolve, 10000))
  // Deploy the FootnoteStorage12 
  const footnoteStorage12 = await ethers.getContractFactory('FootnoteStorage12')
  const footnoteStorage12Contract = await footnoteStorage12.deploy() as FootnoteStorage12; // as FootnoteStorage12
  await footnoteStorage12Contract.deployed()
  footnoteStorageContractsAddresses.push(footnoteStorage12Contract.address)
  console.log(`🎥 footnoteStorage12Contract contract deployed at ${footnoteStorage12Contract.address}\\n`)

  await new Promise(resolve => setTimeout(resolve, 10000))
  // Deploy the FootnoteStorage13 
  const footnoteStorage13 = await ethers.getContractFactory('FootnoteStorage13')
  const footnoteStorage13Contract = await footnoteStorage13.deploy() as FootnoteStorage13; // as FootnoteStorage13
  await footnoteStorage13Contract.deployed()
  footnoteStorageContractsAddresses.push(footnoteStorage13Contract.address)
  console.log(`🎥 footnoteStorage13Contract contract deployed at ${footnoteStorage13Contract.address}\\n`)

  await new Promise(resolve => setTimeout(resolve, 10000))
  // Deploy the FootnoteStorage14 
  const footnoteStorage14 = await ethers.getContractFactory('FootnoteStorage14')
  const footnoteStorage14Contract = await footnoteStorage14.deploy() as FootnoteStorage14; // as FootnoteStorage14
  await footnoteStorage14Contract.deployed()
  footnoteStorageContractsAddresses.push(footnoteStorage14Contract.address)
  console.log(`🎥 footnoteStorage14Contract contract deployed at ${footnoteStorage14Contract.address}\\n`)

  await new Promise(resolve => setTimeout(resolve, 10000))
  // Deploy the FootnoteStorage15 
  const footnoteStorage15 = await ethers.getContractFactory('FootnoteStorage15')
  const footnoteStorage15Contract = await footnoteStorage15.deploy() as FootnoteStorage15; // as FootnoteStorage15
  await footnoteStorage15Contract.deployed()
  footnoteStorageContractsAddresses.push(footnoteStorage15Contract.address)
  console.log(`🎥 footnoteStorage15Contract contract deployed at ${footnoteStorage15Contract.address}\\n`)

  await new Promise(resolve => setTimeout(resolve, 10000))
  // Deploy the FootnoteStorage16 
  const footnoteStorage16 = await ethers.getContractFactory('FootnoteStorage16')
  const footnoteStorage16Contract = await footnoteStorage16.deploy() as FootnoteStorage16; // as FootnoteStorage16
  await footnoteStorage16Contract.deployed()
  footnoteStorageContractsAddresses.push(footnoteStorage16Contract.address)
  console.log(`🎥 footnoteStorage16Contract contract deployed at ${footnoteStorage16Contract.address}\\n`)

  // Deploy the FootnoteStorage
  const footnoteStorage17 = await ethers.getContractFactory('FootnoteStorage17')
  const footnoteStorage17Contract = await footnoteStorage17.deploy() as FootnoteStorage17; // as FootnoteStorage
  await footnoteStorage17Contract.deployed()
  footnoteStorageContractsAddresses.push(footnoteStorage17Contract.address)
  console.log(`🎥 footnoteStorage17Contract contract deployed at ${footnoteStorage17Contract.address}\\n`)


  const outputFile = 'deployment/footnote_storage.json';
  storageHandler.saveStorageDeploymentAddresses(footnoteStorageContractsAddresses, outputFile);
  //FootnoteStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage1.sol:FootnoteStorage1"
  })
  //FootnoteStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage2.sol:FootnoteStorage2"
  })
  //FootnoteStorage3 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage3Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage3.sol:FootnoteStorage3"
  })
  //FootnoteStorage4 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage4Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage4.sol:FootnoteStorage4"
  })
  //FootnoteStorage5 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage5Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage5.sol:FootnoteStorage5"
  })
  //FootnoteStorage6 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage6Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage6.sol:FootnoteStorage6"
  })
  //FootnoteStorage7 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage7Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage7.sol:FootnoteStorage7"
  })
  //FootnoteStorage8 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage8Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage8.sol:FootnoteStorage8"
  })
  //FootnoteStorage9 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage9Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage9.sol:FootnoteStorage9"
  })
  //FootnoteStorage10 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage10Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage10.sol:FootnoteStorage10"
  })
  //FootnoteStorage11 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage11Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage11.sol:FootnoteStorage11"
  })
  //FootnoteStorage12 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage12Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage12.sol:FootnoteStorage12"
  })
  //FootnoteStorage13 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage13Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage13.sol:FootnoteStorage13"
  })
  //FootnoteStorage14 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage14Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage14.sol:FootnoteStorage14"
  })
  //FootnoteStorage15 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage15Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage15.sol:FootnoteStorage15"
  })
  //FootnoteStorage16 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage16Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage16.sol:FootnoteStorage16"
  })
  //FootnoteStorage17 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: footnoteStorage17Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/footnote/FootnoteStorage17.sol:FootnoteStorage17"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
