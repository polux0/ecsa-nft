import { ethers, run, hardhatArguments } from "hardhat";
import { ChapterStorageFacade, HeadingStorageFacade, IncludesFigureStorageFacade, LengthStorageFacade, NetwordedAStorageFacade, NetwordedBStorageFacade, NumFootnotesStorageFacade, SectionStorageFacade, UnitDescriptorStorageFacade, UnitStorageFacade, XStorageFacade, YStorageFacade, ZStorageFacade } from "../../../typechain";
import { StorageHandler } from '../../StorageHandler';

// technical debt:
// 1. go trough the mappings again
async function main() {
  const [deployer,] = await ethers.getSigners();
  const storageHandler = new StorageHandler();

  const storageFacadesContractsAddresses = [];

  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)
    // ************************************ FOOTNOTE_STORAGE_FACADE ************************************

  //   const footnoteStorageAddresses = storageHandler.loadStorageDeploymentAddresses('deployment/storage/footnote_storage.json');

  //   // Mapping of current state of the contracts
  //   // FootnoteStorage1 = 1 - 45
  //   // FootnoteStorage2 = 46 - 91
  //   // FootnoteStorage3 = 92 - 137
  //   // FootnoteStorage4 = 138 - 183
  //   // FootnoteStorage5 = 184 - 229
  //   // FootnoteStorage6 = 230 - 275
  //   // FootnoteStorage7 = 276 - 321
  //   // FootnoteStorage8 = 322 - 367
  //   // FootnoteStorage9 = 368 - 413
  //   // FootnoteStorage10 = 414 - 459
  //   // FootnoteStorage11 = 460 - 505
  //   // FootnoteStorage12 = 506 - 551
  //   // FootnoteStorage13 = 552 - 597
  //   // FootnoteStorage14 = 598 - 643
  //   // FootnoteStorage15 = 644 - 689
  //   // FootnoteStorage16 = 690 - 726

  //   // Mapping after Cosmetics of metadata ( 2nd iteration ) ( final for `UnitText`, and should be for `Footnote` as well )
  //   // Double checked
  //   // FootnoteStorage1 = 1 - 46
  //   // FootnoteStorage2 = 47 - 92
  //   // FootnoteStorage3 = 93 - 138
  //   // FootnoteStorage4 = 139 - 184
  //   // FootnoteStorage5 = 185 - 230
  //   // FootnoteStorage6 = 231 - 277
  //   // FootnoteStorage7 = 278 - 324
  //   // FootnoteStorage8 = 325 - 370
  //   // FootnoteStorage9 = 371 - 418
  //   // FootnoteStorage10 = 419 - 465
  //   // FootnoteStorage11 = 466 - 512
  //   // FootnoteStorage12 = 513 - 558
  //   // FootnoteStorage13 = 559 - 604
  //   // FootnoteStorage14 = 605 - 650
  //   // FootnoteStorage15 = 651 - 696
  //   // FootnoteStorage16 = 697 - 733
  //   // FootnoteStorage17 = 734 - 739

  // // const startRangeFootnote = [1, 46, 92, 138, 184, 230, 276, 322, 368, 414, 460, 506, 552, 598, 644, 690];
  // // const endRangeFootnote = [45, 91, 137, 183, 229, 275, 321, 367, 413, 459, 505, 551, 597, 643, 689, 726];

  // const startRangeFootnote = [1, 47, 93, 139, 185, 231, 278, 325, 371, 419, 466, 513, 559, 605, 651, 697, 734];
  // const endRangeFootnote = [46, 92, 138, 184, 230, 277, 324, 370, 418, 465, 512, 558, 604, 650, 696, 733, 739];


  // const FootnoteStorageFacade = await ethers.getContractFactory('FootnoteStorageFacade')
  // const footnoteStorageFacadeContract = await FootnoteStorageFacade.deploy(footnoteStorageAddresses, startRangeFootnote, endRangeFootnote, { gasLimit: 20000000 }); // as FootnoteStorageFacade
  // await footnoteStorageFacadeContract.deployed()
  // console.log(`💾 Footnote Storage Facade contract deployed at ${footnoteStorageFacadeContract.address}\\n`)
  // storageFacadesContractsAddresses.push(footnoteStorageFacadeContract.address);

  // ************************************ FIGURE_STORAGE_FACADE ************************************


  const figureStorageAddresses = await storageHandler.loadStorageDeploymentAddresses(`deployment/${hardhatArguments.network}/storage/figure_storage.json`)


  // Mapping of current state of the contracts ( Should be final )
  // FigureStorage1 = 1 - 367 ( + 2 units, + 4)
  // FigureStorage2 = 368 - 739

  const startRangeFigure = [1, 368];
  const endRangeFigure = [367, 739];


  const figuresStorageFacade = await ethers.getContractFactory('FigureStorageFacade')
  const figuresStorageFacadeContract = await figuresStorageFacade.deploy(figureStorageAddresses, startRangeFigure, endRangeFigure, { gasLimit: 20000000 } ); // as FiguresStorageFacade
  await figuresStorageFacadeContract.deployed()
  console.log(`💾 Figures Storage Facade contract deployed at ${figuresStorageFacadeContract.address}\\n`)
  storageFacadesContractsAddresses.push(figuresStorageFacadeContract.address);

  // ************************************ CHAPTER_STORAGE_FACADE ************************************

  const chapterStorageAddresses = await storageHandler.loadStorageDeploymentAddresses(`deployment/${hardhatArguments.network}/storage/chapter_storage.json`);

  // Mapping of current state of the contracts
  // ChapterStorage1 = 1 - 363
  // ChapterStorage2 = 364 - 726

  // ( Double checked! )
  // Mapping of current state of the contracts ( 2nd iteration of NFT cosmetics - should be final for `Chapter` )
  // ChapterStorage1 = 1 - 366
  // ChapterStorage2 = 367 - 739

  // const startRangeChapter = [1, 364];
  // const endRangeChapter = [363, 726];

  const startRangeChapter = [1, 367];
  const endRangeChapter = [366, 739];


  const chapterStorageFacade = await ethers.getContractFactory('ChapterStorageFacade')
  const chapterStorageFacadeContract = await chapterStorageFacade.deploy(chapterStorageAddresses, startRangeChapter, endRangeChapter, { gasLimit: 20000000 } ) as ChapterStorageFacade; // as ChapterStorageFacade
  await chapterStorageFacadeContract.deployed()
  console.log(`💾 Chapter Storage Facade contract deployed at ${chapterStorageFacadeContract.address}\\n`)
  storageFacadesContractsAddresses.push(chapterStorageFacadeContract.address);

  // ************************************ SECTION_STORAGE_FACADE ************************************

  const SectionStorageAddresses = await storageHandler.loadStorageDeploymentAddresses(`deployment/${hardhatArguments.network}/storage/section_storage.json`)
  // Mapping of current state of the contracts
  // sectionStorage1 = 1 - 363
  // sectionStorage2 = 364 - 726

  // Mapping of current state of the contracts ( after 2nd iteration, should be final! ) [ Double checked ]
  // sectionStorage1 = 1 - 366
  // sectionStorage2 = 367 - 739

  // const startRangeSection = [1, 364];
  // const endRangeSection = [363, 726];

  const startRangeSection = [1, 367];
  const endRangeSection = [366, 739];


  const sectionStorageFacade = await ethers.getContractFactory('SectionStorageFacade')
  const sectionStorageFacadeContract = await sectionStorageFacade.deploy(SectionStorageAddresses, startRangeSection, endRangeSection, { gasLimit: 20000000 } ) as SectionStorageFacade; // as SectionStorageFacade
  await sectionStorageFacadeContract.deployed()
  console.log(`💾 Section Storage Facade contract deployed at ${sectionStorageFacadeContract.address}\\n`)
  storageFacadesContractsAddresses.push(sectionStorageFacadeContract.address);

  // ************************************ HEADING_STORAGE_FACADE ************************************

  const HeadingStorageAddresses = await storageHandler.loadStorageDeploymentAddresses(`deployment/${hardhatArguments.network}/storage/heading_storage.json`);

  // Mapping of current state of the contracts
  // HeadingStorage1 = 1 - 359
  // HeadingStorage2 = 360 - 726

  // Mapping of current state of the contracts ( after 2nd iteration, should be final )
  // HeadingStorage1 = 1 - 360
  // HeadingStorage2 = 361 - 739

  // const startRangeHeading = [1, 360];
  // const endRangeHeading = [359, 726];

  const startRangeHeading = [1, 361];
  const endRangeHeading = [360, 739];


  const headingStorageFacade = await ethers.getContractFactory('HeadingStorageFacade')
  const headingStorageFacadeContract = await headingStorageFacade.deploy(HeadingStorageAddresses, startRangeHeading, endRangeHeading, { gasLimit: 20000000 } ) as HeadingStorageFacade; // as HeadingStorageFacade
  await headingStorageFacadeContract.deployed()
  console.log(`💾 Heading Storage Facade contract deployed at ${headingStorageFacadeContract.address}\\n`)
  storageFacadesContractsAddresses.push(headingStorageFacadeContract.address);

  // ************************************ NUMFOOTNOTES_STORAGE_FACADE ************************************

  const numFootnotesStorageAddresses = await storageHandler.loadStorageDeploymentAddresses(`deployment/${hardhatArguments.network}/storage/numfootnotes_storage.json`);

  // Mapping of current state of the contracts
  // NumFootnotesStorage1 = 1 - 360
  // NumFootnotesStorage2 = 361 - 726

  // Mapping of current state of the contracts ( should be finalized )
  // NumFootnotesStorage1 = 1 - 360
  // NumFootnotesStorage2 = 361 - 739

  // const startRangeNumFootnotes = [1, 361];
  // const endRangeNumFootnotes = [360, 726];
  
  const startRangeNumFootnotes = [1, 361];
  const endRangeNumFootnotes = [360, 739];


  const numFootnotesStorageFacade = await ethers.getContractFactory('NumFootnotesStorageFacade')
  const numFootnotesStorageFacadeContract = await numFootnotesStorageFacade.deploy(numFootnotesStorageAddresses, startRangeNumFootnotes, endRangeNumFootnotes, { gasLimit: 20000000 } ) as NumFootnotesStorageFacade; // as NumFootnotesStorageFacade
  await numFootnotesStorageFacadeContract.deployed()
  console.log(`💾 NumFootnotes Storage Facade contract deployed at ${numFootnotesStorageFacadeContract.address}\\n`)
  storageFacadesContractsAddresses.push(numFootnotesStorageFacadeContract.address);

  // ************************************ INCLUDESFIGURE_STORAGE_FACADE ************************************

  const includesFigureStorageAddresses = await storageHandler.loadStorageDeploymentAddresses(`deployment/${hardhatArguments.network}/storage/includesfigure_storage.json`);

  // Mapping of current state of the contracts
  // IncludesFigureStorage1 = 1 - 359
  // IncludesFigureStorage2 = 360 - 726

  // Mapping of current state of the contracts ( should be final )
  // IncludesFigureStorage1 = 1 - 350
  // IncludesFigureStorage2 = 351 - 739

  // const startRangeIncludesFigure = [1, 360];
  // const endRangeIncludesFigure = [359, 726];

  const startRangeIncludesFigure = [1, 351];
  const endRangeIncludesFigure = [350, 739];


  const includesFigureStorageFacade = await ethers.getContractFactory('IncludesFigureStorageFacade')
  const includesFigureStorageFacadeContract = await includesFigureStorageFacade.deploy(includesFigureStorageAddresses, startRangeIncludesFigure, endRangeIncludesFigure, { gasLimit: 20000000 } ) as IncludesFigureStorageFacade; // as IncludesFigureStorageFacade
  await includesFigureStorageFacadeContract.deployed()
  console.log(`💾 IncludesFigure Storage Facade contract deployed at ${includesFigureStorageFacadeContract.address}\\n`)
  storageFacadesContractsAddresses.push(includesFigureStorageFacadeContract.address);

  // ************************************ LENGTH_STORAGE_FACADE ************************************

  const lengthStorageAddresses = await storageHandler.loadStorageDeploymentAddresses(`deployment/${hardhatArguments.network}/storage/length_storage.json`)

  // Mapping of current state of the contracts ( should be finalized )
  // LengthStorage1 = 1 - 369
  // LengthStorage2 = 370 - 739

  const startRangeLength = [1, 370];
  const endRangeLength = [369, 739];


  const lengthStorageFacade = await ethers.getContractFactory('LengthStorageFacade')
  const lengthStorageFacadeContract = await lengthStorageFacade.deploy(lengthStorageAddresses, startRangeLength, endRangeLength, { gasLimit: 20000000 } ) as LengthStorageFacade; // as LengthStorageFacade
  await lengthStorageFacadeContract.deployed()
  console.log(`💾 Length Storage Facade contract deployed at ${lengthStorageFacadeContract.address}\\n`)
  storageFacadesContractsAddresses.push(lengthStorageFacadeContract.address);

  // ************************************ X_STORAGE_FACADE ************************************
  const xStorageAddresses = await storageHandler.loadStorageDeploymentAddresses(`deployment/${hardhatArguments.network}/storage/x_storage.json`);
  

  // Mapping of current state of the contracts ( should be finalized! )
  // XStorage1 = 1 - 370
  // XStorage2 = 371 - 729

  const startRangeX = [1, 371];
  const endRangeX = [370, 739];


  const xStorageFacade = await ethers.getContractFactory('XStorageFacade')
  const xStorageFacadeContract = await xStorageFacade.deploy(xStorageAddresses, startRangeX, endRangeX, { gasLimit: 20000000 } ) as XStorageFacade; // as XStorageFacade
  await xStorageFacadeContract.deployed()
  console.log(`💾 X Storage Facade contract deployed at ${xStorageFacadeContract.address}\\n`)
  storageFacadesContractsAddresses.push(xStorageFacadeContract.address);                  

  // ************************************ Y_STORAGE_FACADE ************************************
  const yStorageAddresses = await storageHandler.loadStorageDeploymentAddresses(`deployment/${hardhatArguments.network}/storage/y_storage.json`);
    
  // Mapping of current state of the contracts ( should be finalized !)
  // yStorage1 = 1 - 370
  // yStorage2 = 371 - 739

  const startRangeY = [1, 371];
  const endRangeY = [370, 739];


  const yStorageFacade = await ethers.getContractFactory('YStorageFacade')
  const yStorageFacadeContract = await yStorageFacade.deploy(yStorageAddresses, startRangeY, endRangeY, { gasLimit: 20000000 }) as YStorageFacade; // as YStorageFacade
  await yStorageFacadeContract.deployed()
  console.log(`💾 Y Storage Facade contract deployed at ${yStorageFacadeContract.address}\\n`)
  storageFacadesContractsAddresses.push(yStorageFacadeContract.address);            

  // ************************************ Z_STORAGE_FACADE ************************************
  const zStorageAddresses = await storageHandler.loadStorageDeploymentAddresses(`deployment/${hardhatArguments.network}/storage/z_storage.json`)
    
  // Mapping of current state of the contracts ( should be finalized! )
  // yStorage1 = 1 - 370
  // yStorage2 = 371 - 739

  const startRangeZ = [1, 371];
  const endRangeZ = [370, 739];


  const zStorageFacade = await ethers.getContractFactory('ZStorageFacade')
  const zStorageFacadeContract = await zStorageFacade.deploy(zStorageAddresses, startRangeZ, endRangeZ, { gasLimit: 20000000 } ) as ZStorageFacade; // as ZStorageFacade
  await zStorageFacadeContract.deployed()
  console.log(`💾 Z Storage Facade contract deployed at ${zStorageFacadeContract.address}\\n`)
  storageFacadesContractsAddresses.push(zStorageFacadeContract.address);

  // ************************************ UNITDESCRIPTOR_STORAGE_FACADE ************************************
  const unitDescriptorStorageAddresses = await storageHandler.loadStorageDeploymentAddresses(`deployment/${hardhatArguments.network}/storage/unitdescriptornodewords_storage.json`);
  // Mapping of current state of the contracts
  // UnitDescriptorStorage1 = 1 - 359
  // UnitDescriptorStorage2 = 360 - 726

  // Mapping of current state of the contracts ( should be final! )
  // UnitDescriptorStorage1 = 1 - 365
  // UnitDescriptorStorage2 = 366 - 739

  // const startRangeUnitDescriptor = [1, 360];
  // const endRangeUnitDescriptor = [359, 726];

  const startRangeUnitDescriptor = [1, 366];
  const endRangeUnitDescriptor = [365, 739];

  const unitDescriptorStorageFacade = await ethers.getContractFactory('UnitDescriptorStorageFacade')
  const unitDescriptorStorageFacadeContract = await unitDescriptorStorageFacade.deploy(unitDescriptorStorageAddresses, startRangeUnitDescriptor, endRangeUnitDescriptor, { gasLimit: 20000000 } ) as UnitDescriptorStorageFacade; // as UnitDescriptorStorageFacade
  await unitDescriptorStorageFacadeContract.deployed()
  console.log(`💾 UnitDescriptor Storage Facade contract deployed at ${unitDescriptorStorageFacadeContract.address}\\n`)
  storageFacadesContractsAddresses.push(unitDescriptorStorageFacadeContract.address);   

  // ************************************ NETWORDEDA_STORAGE_FACADE ************************************

  const networdedAStorageAddresses = await storageHandler.loadStorageDeploymentAddresses(`deployment/${hardhatArguments.network}/storage/networdedA_storage.json`);


  // Mapping of current state of the contracts ( should be final! ) ( good )
  // NetwordedAStorage1 = 1 - 370
  // NetwordedAStorage2 = 371 - 739

  const startRangeNetwordedA = [1, 371];
  const endRangeNetwordedA = [370, 739];

  const networdedAStorageFacade = await ethers.getContractFactory('NetwordedAStorageFacade')
  const networdedAStorageFacadeContract = await networdedAStorageFacade.deploy(networdedAStorageAddresses, startRangeNetwordedA, endRangeNetwordedA, { gasLimit: 20000000 } ) as NetwordedAStorageFacade; // as NetwordedAStorageFacade
  await networdedAStorageFacadeContract.deployed()
  console.log(`💾 NetwordedA Storage Facade contract deployed at ${networdedAStorageFacadeContract.address}\\n`)
  storageFacadesContractsAddresses.push(networdedAStorageFacadeContract.address);

  // ************************************ NETWORDEDB_STORAGE_FACADE ************************************

  const networdedBStorageAddresses = await storageHandler.loadStorageDeploymentAddresses(`deployment/${hardhatArguments.network}/storage/networdedB_storage.json`);
    
  // Mapping of current state of the contracts ( should be final! )
  // NetwordedBStorage1 = 1 - 370
  // NetwordedBStorage2 = 371 - 729

  const startRangeNetwordedB = [1, 371];
  const endRangeNetwordedB = [370, 739];

  const networdedBStorageFacade = await ethers.getContractFactory('NetwordedBStorageFacade')
  const networdedBStorageFacadeContract = await networdedBStorageFacade.deploy(networdedBStorageAddresses, startRangeNetwordedB, endRangeNetwordedB, { gasLimit: 20000000 } ) as NetwordedBStorageFacade; // as NetwordedBStorageFacade
  await networdedBStorageFacadeContract.deployed()
  console.log(`💾 NetwordedB Storage Facade contract deployed at ${networdedBStorageFacadeContract.address}\\n`)
  storageFacadesContractsAddresses.push(networdedBStorageFacadeContract.address);


  // ************************************ UNITSTORAGE_STORAGE_FACADE ************************************
  const unitStorageAddresses = await storageHandler.loadStorageDeploymentAddresses(`deployment/${hardhatArguments.network}/storage/unit_storage.json`)

  // Latest manual remapping

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
  storageFacadesContractsAddresses.push(unitStorageFacadeContract.address);   
    
    
  const outputFileStorageFacadesCollective = `deployment/${hardhatArguments.network}/facades/storage_facades.json`;

  const directoryChapter = `deployment/${hardhatArguments.network}/facades/`;
  const filenameChapter = 'storage_facades.json';  

  await storageHandler.ensureDirectoryExistence(directoryChapter, filenameChapter);
  await storageHandler.saveStorageDeploymentAddresses(storageFacadesContractsAddresses, outputFileStorageFacadesCollective);
    
  // ************************************ Verification ************************************

  // ************************************ CHAPTER_STORAGE_FACADE_VERIFICATION ************************************


  // ChapterStorageFacade verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: chapterStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      chapterStorageAddresses,
      startRangeChapter,
      endRangeChapter
    ],
    contract: "contracts/facades/ChapterStorageFacade.sol:ChapterStorageFacade"
  })

  // ************************************ FIGURE_STORAGE_FACADE_VERIFICATION ************************************
  // FiguresStorage verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: figuresStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      figureStorageAddresses,
      startRangeFigure,
      endRangeFigure
    ],
    contract: "contracts/facades/FigureStorageFacade.sol:FigureStorageFacade"
  })

  // ************************************ FOOTNOTE_STORAGE_FACADE_VERIFICATION ************************************
  // FootnoteStorage verification
  // await new Promise(resolve => setTimeout(resolve, 20000))
  // await run("verify:verify", {
  //   address: footnoteStorageFacadeContract.address,
  //   network: ethers.provider.network,
  //   constructorArguments: [
  //     footnoteStorageAddresses,
  //     startRangeFootnote,
  //     endRangeFootnote
  //   ],
  //   contract: "contracts/facades/FootnoteStorageFacade.sol:FootnoteStorageFacade"
  // })

  // ************************************ HEADING_STORAGE_FACADE_VERIFICATION ************************************
  // HeadingStorage verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: headingStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      HeadingStorageAddresses,
      startRangeHeading,
      endRangeHeading
    ],
    contract: "contracts/facades/HeadingStorageFacade.sol:HeadingStorageFacade"
  })

  // ************************************ INCLUDESFIGURE_STORAGE_FACADE_VERIFICATION ************************************
  // IncludesFigureStorage verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: includesFigureStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      includesFigureStorageAddresses,
      startRangeIncludesFigure,
      endRangeIncludesFigure
    ],
    contract: "contracts/facades/IncludesFigureStorageFacade.sol:IncludesFigureStorageFacade"
  })

  // ************************************ LENGTH_STORAGE_FACADE_VERIFICATION ************************************
  // LengthStorage verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: lengthStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      lengthStorageAddresses,
      startRangeLength,
      endRangeLength
    ],
    contract: "contracts/facades/LengthStorageFacade.sol:LengthStorageFacade"
  })
  // ************************************ NETWORDEDA_STORAGE_FACADE_VERIFICATION ************************************

  // NetwordedAStorage verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: networdedAStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      networdedAStorageAddresses,
      startRangeNetwordedA,
      endRangeNetwordedA
    ],
    contract: "contracts/facades/NetwordedAStorageFacade.sol:NetwordedAStorageFacade"
  })
  // ************************************ NETWORDEDB_STORAGE_FACADE_VERIFICATION ************************************

  // NetwordedBStorage verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: networdedBStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      networdedBStorageAddresses,
      startRangeNetwordedB,
      endRangeNetwordedB
    ],
    contract: "contracts/facades/NetwordedBStorageFacade.sol:NetwordedBStorageFacade"
  })

  // ************************************ NUMFOOTNOTES_STORAGE_FACADE_VERIFICATION ************************************

  // NumFootnotesStorage verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: numFootnotesStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      numFootnotesStorageAddresses,
      startRangeNumFootnotes,
      endRangeNumFootnotes
    ],
    contract: "contracts/facades/NumFootnotesStorageFacade.sol:NumFootnotesStorageFacade"
  })

  // ************************************ SECTION_STORAGE_FACADE_VERIFICATION ************************************

  // SectionStorage verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: sectionStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      SectionStorageAddresses,
      startRangeSection,
      endRangeSection
    ],
    contract: "contracts/facades/SectionStorageFacade.sol:SectionStorageFacade"
  })
  // ************************************ UNIT_STORAGE_FACADE_VERIFICATION ************************************
  
  // UnitStorageFacade verification
  await new Promise(resolve => setTimeout(resolve, 20000))
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
  // ************************************ UNITDESCRIPTOR_STORAGE_FACADE_VERIFICATION ************************************
  // UnitDescriptorStorage verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: unitDescriptorStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      unitDescriptorStorageAddresses,
      startRangeUnitDescriptor,
      endRangeUnitDescriptor
    ],
    contract: "contracts/facades/UnitDescriptorStorageFacade.sol:UnitDescriptorStorageFacade"
  })
  // ************************************ X_STORAGE_FACADE_VERIFICATION ************************************
  // XStorageFacade verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: xStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      xStorageAddresses,
      startRangeX,
      endRangeX
    ],
    contract: "contracts/facades/XStorageFacade.sol:XStorageFacade"
  })
  // ************************************ Y_STORAGE_FACADE_VERIFICATION ************************************
  // ChapterStorage verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: yStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      yStorageAddresses,
      startRangeY,
      endRangeY
    ],
    contract: "contracts/facades/YStorageFacade.sol:YStorageFacade"
  })
  // ************************************ Z_STORAGE_FACADE_VERIFICATION ************************************
  // ChapterStorage verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: zStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      zStorageAddresses,
      startRangeZ,
      endRangeZ
    ],
    contract: "contracts/facades/ZStorageFacade.sol:ZStorageFacade"
  })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
