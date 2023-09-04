import { ethers, run } from "hardhat";
import { UnitStorageFacade } from "../../../typechain";
import { StorageHandler } from '../../../StorageHandler';

// working script!
async function main() {
  const [deployer,] = await ethers.getSigners();
  const storageHandler = new StorageHandler();

  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  const unitStorageAddresses = storageHandler.loadStorageDeploymentAddresses('deployment/storage/unit_storage.json')
    // UnitStorage1 = 1 - 20
    // UnitStorage2 = 21 - 39
    // UnitStorage3 = 40 - 58
    // UnitStorage4 = 59 - 77
    // UnitStorage5 = 78 - 96
    // UnitStorage6 = 97 - 116
    // UnitStorage7 = 117 - 135
    // UnitStorage8 = 136 - 154
    // UnitStorage9 = 155 - 173
    // UnitStorage10 = 174 - 192
    // UnitStorage11 = 193 - 211
    // UnitStorage12 = 212 - 230
    // UnitStorage13 = 231 - 249
    // UnitStorage14 = 250 - 268
    // UnitStorage15 = 269 - 287
    // UnitStorage16 = 288 - 306
    // UnitStorage17 = 307 - 326
    // UnitStorage18 = 327 - 345
    // UnitStorage19 = 346 - 364
    // UnitStorage20 = 365 - 383
    // UnitStorage21 = 384 - 402
    // UnitStorage22 = 403 - 421
    // UnitStorage23 = 422 - 440
    // UnitStorage24 = 441 - 459
    // UnitStorage25 = 460 - 478
    // UnitStorage26 = 479 - 497
    // UnitStorage27 = 498 - 517
    // UnitStorage28 = 518 - 536
    // UnitStorage29 = 537 - 555
    // UnitStorage30 = 556 - 574
    // UnitStorage31 = 575 - 593
    // UnitStorage32 = 594 - 612
    // UnitStorage33 = 613 - 635
    // UnitStorage34 = 636 - 654
    // UnitStorage35 = 655 - 674
    // UnitStorage36 = 675 - 693
    // UnitStorage37 = 694 - 714
    // UnitStorage38 = 715 - 735
    // UnitStorage39 = 736 - 739

    // Latest manual remapping

    const startRangeUnit = [
      1, 21, 40, 59, 78, 97, 117, 136, 155, 174, 193, 212, 231, 250, 269, 288, 307, 
      327, 346, 365, 384, 403, 422, 441, 460, 479, 498, 518, 537, 556, 575, 594, 613, 
      636, 655, 675, 694, 715, 736
  ];
  
  const endRangeUnit = [
      20, 39, 58, 77, 96, 116, 135, 154, 173, 192, 211, 230, 249, 268, 287, 306, 326, 
      345, 364, 383, 402, 421, 440, 459, 478, 497, 517, 536, 555, 574, 593, 612, 635, 
      654, 674, 693, 714, 735, 739
  ];

  const unitStorageFacade = await ethers.getContractFactory('UnitStorageFacade')
  const unitStorageFacadeContract = await unitStorageFacade.deploy(unitStorageAddresses, startRangeUnit, endRangeUnit ) as UnitStorageFacade; // as UnitStorageFacade
  await unitStorageFacadeContract.deployed()
  console.log(`💾 Unit Storage Facade contract deployed at ${unitStorageFacadeContract.address}\\n`)

  // ChapterStorage verification
  await new Promise(resolve => setTimeout(resolve, 50000))
  await run("verify:verify", {
    address: unitStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      unitStorageAddresses,
      startRangeUnit,
      endRangeUnit
    ],
    contract: "contracts/facades/UnitStorageFacade.sol:UnitStorageFacade"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
