import { ethers, run, hardhatArguments } from "hardhat";
import { ChapterStorage1, ChapterStorage2, FigureStorage1, FigureStorage2, FootnoteStorage1, FootnoteStorage10, FootnoteStorage11, FootnoteStorage12, FootnoteStorage13, FootnoteStorage14, FootnoteStorage15, FootnoteStorage16, FootnoteStorage17, FootnoteStorage2, FootnoteStorage3, FootnoteStorage4, FootnoteStorage5, FootnoteStorage6, FootnoteStorage7, FootnoteStorage8, FootnoteStorage9, HeadingStorage1, HeadingStorage2, IncludesFigureStorage1, IncludesFigureStorage2, LengthStorage1, LengthStorage2, NetwordedAStorage1, NetwordedAStorage2, NetwordedBStorage1, NetwordedBStorage2, NumFootnotesStorage1, NumFootnotesStorage2, SectionStorage1, SectionStorage2, XStorage1, XStorage2, YStorage1, YStorage2, ZStorage1, ZStorage2 } from "../../../typechain";
import { StorageHandler } from '../../StorageHandler';

async function main() {
  const [deployer,] = await ethers.getSigners();
  const storageHandler = new StorageHandler();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // *************************************** CHAPTER_STORAGE ************************************************
  const chapterStorageContractsAddresses = [];

  //
  const outputFileChapter = `deployment/${hardhatArguments.network}/storage/chapter_storage.json`;


  const directoryChapter = `deployment/${hardhatArguments.network}/storage/`;
  const filenameChapter = 'chapter_storage.json';  
  //

  // Deploy the ChapterStorage1
  const chapterStorage1 = await ethers.getContractFactory('ChapterStorage1')
  const chapterStorage1Contract = await chapterStorage1.deploy({ gasLimit: 20000000 }) as ChapterStorage1; // as ChapterStorage1
  await chapterStorage1Contract.deployed()
  console.log(`🎥 chapterStorage1Contract contract deployed at ${chapterStorage1Contract.address}\\n`)
  
  chapterStorageContractsAddresses.push(chapterStorage1Contract.address);
  
  // Deploy the ChapterStorage2
  const chapterStorage2 = await ethers.getContractFactory('ChapterStorage2')
  const chapterStorage2Contract = await chapterStorage2.deploy({ gasLimit: 20000000 }) as ChapterStorage2; // as ChapterStorage2
  await chapterStorage2Contract.deployed()
  console.log(`🎥 chapterStorage2Contract contract deployed at ${chapterStorage2Contract.address}\\n`)

  chapterStorageContractsAddresses.push(chapterStorage2Contract.address);
  

  await storageHandler.ensureDirectoryExistence(directoryChapter, filenameChapter);
  await storageHandler.saveStorageDeploymentAddresses(chapterStorageContractsAddresses, outputFileChapter);

  // *************************************** FIGURE_STORAGE *************************************************

  const figureStorageContractsAddresses: any[] = [];

  // Deploy the FigureStorage1
  const figureStorage1 = await ethers.getContractFactory('FigureStorage1')
  const figureStorage1Contract = await figureStorage1.deploy({ gasLimit: 20000000 }) as FigureStorage1; // as FigureStorage1
  await figureStorage1Contract.deployed()
  console.log(`🎥 figureStorage1Contract contract deployed at ${figureStorage1Contract.address}\\n`)
  figureStorageContractsAddresses.push(figureStorage1Contract.address);

  // Deploy the FigureStorage2
  const figureStorage2 = await ethers.getContractFactory('FigureStorage2')
  const figureStorage2Contract = await figureStorage2.deploy({ gasLimit: 20000000 }) as FigureStorage2; // as FigureStorage2
  await figureStorage2Contract.deployed()
  console.log(`🎥 figureStorage2Contract contract deployed at ${figureStorage2Contract.address}\\n`)
  figureStorageContractsAddresses.push(figureStorage2Contract.address);


  const outputFileFigure = `deployment/${hardhatArguments.network}/storage/figure_storage.json`;


  const directoryFigure = `deployment/${hardhatArguments.network}/storage/`;
  const filenameFigure = 'figure_storage.json';  

  await storageHandler.ensureDirectoryExistence(directoryFigure, filenameFigure);
  await storageHandler.saveStorageDeploymentAddresses(figureStorageContractsAddresses, outputFileFigure);

  // *************************************** FOOTNOTE_STORAGE *************************************************

  // const footnoteStorageContractsAddresses: any[] = [];

  // const outputFileFootnote = 'deployment/storage/footnote_storage.json';

  // // Deploy the FootnoteStorage1
  // const footnoteStorage1 = await ethers.getContractFactory('FootnoteStorage1')
  // const footnoteStorage1Contract = await footnoteStorage1.deploy({ gasLimit: 20000000 }) as FootnoteStorage1; // as FootnoteStorage1
  // await footnoteStorage1Contract.deployed()
  // console.log(`🎥 footnoteStorage1Contract contract deployed at ${footnoteStorage1Contract.address}\\n`)
  // footnoteStorageContractsAddresses.push(footnoteStorage1Contract.address)
  // await new Promise(resolve => setTimeout(resolve, 20000))

  // // Deploy the FootnoteStorage2
  // const footnoteStorage2 = await ethers.getContractFactory('FootnoteStorage2')
  // const footnoteStorage2Contract = await footnoteStorage2.deploy({ gasLimit: 20000000 }) as FootnoteStorage2; // as FootnoteStorage2
  // await footnoteStorage2Contract.deployed()
  // console.log(`🎥 footnoteStorage2Contract contract deployed at ${footnoteStorage2Contract.address}\\n`)
  // footnoteStorageContractsAddresses.push(footnoteStorage2Contract.address)
 
  // await new Promise(resolve => setTimeout(resolve, 20000))
  // // Deploy the FootnoteStorage3 
  // const footnoteStorage3 = await ethers.getContractFactory('FootnoteStorage3')
  // const footnoteStorage3Contract = await footnoteStorage3.deploy({ gasLimit: 20000000 }) as FootnoteStorage3; // as FootnoteStorage3
  // await footnoteStorage3Contract.deployed()
  // footnoteStorageContractsAddresses.push(footnoteStorage3Contract.address)
  // console.log(`🎥 footnoteStorage3Contract contract deployed at ${footnoteStorage3Contract.address}\\n`)
  
  // await new Promise(resolve => setTimeout(resolve, 20000))
  // // Deploy the FootnoteStorage4 
  // const footnoteStorage4 = await ethers.getContractFactory('FootnoteStorage4')
  // const footnoteStorage4Contract = await footnoteStorage4.deploy({ gasLimit: 20000000 }) as FootnoteStorage4; // as FootnoteStorage4
  // await footnoteStorage4Contract.deployed()
  // footnoteStorageContractsAddresses.push(footnoteStorage4Contract.address)
  // console.log(`🎥 footnoteStorage4Contract contract deployed at ${footnoteStorage4Contract.address}\\n`)

  // await new Promise(resolve => setTimeout(resolve, 20000))
  // // Deploy the FootnoteStorage5 
  // const footnoteStorage5 = await ethers.getContractFactory('FootnoteStorage5')
  // const footnoteStorage5Contract = await footnoteStorage5.deploy({ gasLimit: 20000000 }) as FootnoteStorage5; // as FootnoteStorage5
  // await footnoteStorage5Contract.deployed()
  // footnoteStorageContractsAddresses.push(footnoteStorage5Contract.address)
  // console.log(`🎥 footnoteStorage5Contract contract deployed at ${footnoteStorage5Contract.address}\\n`)

  // //save
  // await storageHandler.saveStorageDeploymentAddresses(footnoteStorageContractsAddresses, outputFileFootnote);

  // await new Promise(resolve => setTimeout(resolve, 20000))
  // // Deploy the FootnoteStorage6 
  // const footnoteStorage6 = await ethers.getContractFactory('FootnoteStorage6')
  // const footnoteStorage6Contract = await footnoteStorage6.deploy({ gasLimit: 20000000 }) as FootnoteStorage6; // as FootnoteStorage6
  // await footnoteStorage6Contract.deployed()
  // footnoteStorageContractsAddresses.push(footnoteStorage6Contract.address)
  // console.log(`🎥 footnoteStorage6Contract contract deployed at ${footnoteStorage6Contract.address}\\n`)

  // await new Promise(resolve => setTimeout(resolve, 20000))
  // // Deploy the FootnoteStorage7 
  // const footnoteStorage7 = await ethers.getContractFactory('FootnoteStorage7')
  // const footnoteStorage7Contract = await footnoteStorage7.deploy({ gasLimit: 20000000 }) as FootnoteStorage7; // as FootnoteStorage7
  // await footnoteStorage7Contract.deployed()
  // footnoteStorageContractsAddresses.push(footnoteStorage7Contract.address)
  // console.log(`🎥 footnoteStorage7Contract contract deployed at ${footnoteStorage7Contract.address}\\n`)

  // await new Promise(resolve => setTimeout(resolve, 20000))
  // // Deploy the FootnoteStorage8 
  // const footnoteStorage8 = await ethers.getContractFactory('FootnoteStorage8')
  // const footnoteStorage8Contract = await footnoteStorage8.deploy({ gasLimit: 20000000 }) as FootnoteStorage8; // as FootnoteStorage8
  // await footnoteStorage8Contract.deployed()
  // footnoteStorageContractsAddresses.push(footnoteStorage8Contract.address)
  // console.log(`🎥 footnoteStorage8Contract contract deployed at ${footnoteStorage8Contract.address}\\n`)

  // await new Promise(resolve => setTimeout(resolve, 20000))
  // // Deploy the FootnoteStorage9 
  // const footnoteStorage9 = await ethers.getContractFactory('FootnoteStorage9')
  // const footnoteStorage9Contract = await footnoteStorage9.deploy({ gasLimit: 20000000 }) as FootnoteStorage9; // as FootnoteStorage9
  // await footnoteStorage9Contract.deployed()
  // footnoteStorageContractsAddresses.push(footnoteStorage9Contract.address)
  // console.log(`🎥 footnoteStorage9Contract contract deployed at ${footnoteStorage9Contract.address}\\n`)

  // await new Promise(resolve => setTimeout(resolve, 20000))
  // // Deploy the FootnoteStorage10 
  // const footnoteStorage10 = await ethers.getContractFactory('FootnoteStorage10')
  // const footnoteStorage10Contract = await footnoteStorage10.deploy({ gasLimit: 20000000 }) as FootnoteStorage10; // as FootnoteStorage10
  // await footnoteStorage10Contract.deployed()
  // footnoteStorageContractsAddresses.push(footnoteStorage10Contract.address)
  // console.log(`🎥 footnoteStorage10Contract contract deployed at ${footnoteStorage10Contract.address}\\n`)

  // //save
  // await storageHandler.saveStorageDeploymentAddresses(footnoteStorageContractsAddresses, outputFileFootnote);

  // await new Promise(resolve => setTimeout(resolve, 20000))
  // // Deploy the FootnoteStorage11 
  // const footnoteStorage11 = await ethers.getContractFactory('FootnoteStorage11')
  // const footnoteStorage11Contract = await footnoteStorage11.deploy({ gasLimit: 20000000 }) as FootnoteStorage11; // as FootnoteStorage11
  // await footnoteStorage11Contract.deployed()
  // footnoteStorageContractsAddresses.push(footnoteStorage11Contract.address)
  // console.log(`🎥 footnoteStorage11Contract contract deployed at ${footnoteStorage11Contract.address}\\n`)

  // await new Promise(resolve => setTimeout(resolve, 20000))
  // // Deploy the FootnoteStorage12 
  // const footnoteStorage12 = await ethers.getContractFactory('FootnoteStorage12')
  // const footnoteStorage12Contract = await footnoteStorage12.deploy({ gasLimit: 20000000 }) as FootnoteStorage12; // as FootnoteStorage12
  // await footnoteStorage12Contract.deployed()
  // footnoteStorageContractsAddresses.push(footnoteStorage12Contract.address)
  // console.log(`🎥 footnoteStorage12Contract contract deployed at ${footnoteStorage12Contract.address}\\n`)


  // await new Promise(resolve => setTimeout(resolve, 20000))
  // // Deploy the FootnoteStorage13 
  // const footnoteStorage13 = await ethers.getContractFactory('FootnoteStorage13')
  // const footnoteStorage13Contract = await footnoteStorage13.deploy({ gasLimit: 20000000 }) as FootnoteStorage13; // as FootnoteStorage13
  // await footnoteStorage13Contract.deployed()
  // footnoteStorageContractsAddresses.push(footnoteStorage13Contract.address)
  // console.log(`🎥 footnoteStorage13Contract contract deployed at ${footnoteStorage13Contract.address}\\n`)

  // await new Promise(resolve => setTimeout(resolve, 20000))
  // // Deploy the FootnoteStorage14 
  // const footnoteStorage14 = await ethers.getContractFactory('FootnoteStorage14')
  // const footnoteStorage14Contract = await footnoteStorage14.deploy({ gasLimit: 20000000 }) as FootnoteStorage14; // as FootnoteStorage14
  // await footnoteStorage14Contract.deployed()
  // footnoteStorageContractsAddresses.push(footnoteStorage14Contract.address)
  // console.log(`🎥 footnoteStorage14Contract contract deployed at ${footnoteStorage14Contract.address}\\n`)

  // await new Promise(resolve => setTimeout(resolve, 20000))
  // // Deploy the FootnoteStorage15 
  // const footnoteStorage15 = await ethers.getContractFactory('FootnoteStorage15')
  // const footnoteStorage15Contract = await footnoteStorage15.deploy({ gasLimit: 20000000 }) as FootnoteStorage15; // as FootnoteStorage15
  // await footnoteStorage15Contract.deployed()
  // footnoteStorageContractsAddresses.push(footnoteStorage15Contract.address)
  // console.log(`🎥 footnoteStorage15Contract contract deployed at ${footnoteStorage15Contract.address}\\n`)

  // //save
  // await storageHandler.saveStorageDeploymentAddresses(footnoteStorageContractsAddresses, outputFileFootnote);

  // await new Promise(resolve => setTimeout(resolve, 20000))
  // // Deploy the FootnoteStorage16 
  // const footnoteStorage16 = await ethers.getContractFactory('FootnoteStorage16')
  // const footnoteStorage16Contract = await footnoteStorage16.deploy({ gasLimit: 20000000 }) as FootnoteStorage16; // as FootnoteStorage16
  // await footnoteStorage16Contract.deployed()
  // footnoteStorageContractsAddresses.push(footnoteStorage16Contract.address)
  // console.log(`🎥 footnoteStorage16Contract contract deployed at ${footnoteStorage16Contract.address}\\n`)

  // await new Promise(resolve => setTimeout(resolve, 20000))
  // // Deploy the FootnoteStorage17 
  // const footnoteStorage17 = await ethers.getContractFactory('FootnoteStorage17')
  // const footnoteStorage17Contract = await footnoteStorage17.deploy({ gasLimit: 20000000 }) as FootnoteStorage17; // as FootnoteStorage17
  // await footnoteStorage17Contract.deployed()
  // footnoteStorageContractsAddresses.push(footnoteStorage17Contract.address)
  // console.log(`🎥 footnoteStorage17Contract contract deployed at ${footnoteStorage17Contract.address}\\n`)

  // await storageHandler.saveStorageDeploymentAddresses(footnoteStorageContractsAddresses, outputFileFootnote);

  // *************************************** HEADING_STORAGE *************************************************

  const headingStorageContractAddresses: any[] = [];

  // Deploy the HeadingStorage1
  const headingStorage1 = await ethers.getContractFactory('HeadingStorage1')
  const headingStorage1Contract = await headingStorage1.deploy({ gasLimit: 20000000 }) as HeadingStorage1; // as HeadingStorage1
  await headingStorage1Contract.deployed()
  console.log(`🎥 HeadingStorage1Contract contract deployed at ${headingStorage1Contract.address}\\n`)

  
  headingStorageContractAddresses.push(headingStorage1Contract.address);

  // Deploy the HeadingStorage2
  const headingStorage2 = await ethers.getContractFactory('HeadingStorage2')
  const headingStorage2Contract = await headingStorage2.deploy({ gasLimit: 20000000 }) as HeadingStorage2; // as HeadingStorage2
  await headingStorage2Contract.deployed()
  console.log(`🎥 HeadingStorage2Contract contract deployed at ${headingStorage2Contract.address}\\n`)
  headingStorageContractAddresses.push(headingStorage2Contract.address);


  const outputFileHeading = `deployment/${hardhatArguments.network}/storage/heading_storage.json`;
  const directoryHeading = `deployment/${hardhatArguments.network}/storage/`;
  const filenameHeading = 'heading_storage.json';  

  await storageHandler.ensureDirectoryExistence(directoryHeading, filenameHeading);
  await storageHandler.saveStorageDeploymentAddresses(headingStorageContractAddresses, outputFileHeading);

  // *************************************** INCLUDESFIGURE_STORAGE *************************************************

  const includesFigureStorageContractsAddresses: any[] = [];

  // Deploy the IncludesFigureStorage1
  const includesFigureStorage1 = await ethers.getContractFactory('IncludesFigureStorage1')
  const includesFigureStorage1Contract = await includesFigureStorage1.deploy({ gasLimit: 20000000 }) as IncludesFigureStorage1; // as IncludesFigureStorage1
  await includesFigureStorage1Contract.deployed()
  console.log(`🎥 includesFigureStorage1Contract contract deployed at ${includesFigureStorage1Contract.address}\\n`)
  includesFigureStorageContractsAddresses.push(includesFigureStorage1Contract.address);

  // Deploy the IncludesFigureStorage2
  const includesFigureStorage2 = await ethers.getContractFactory('IncludesFigureStorage2')
  const includesFigureStorage2Contract = await includesFigureStorage2.deploy({ gasLimit: 20000000 }) as IncludesFigureStorage2; // as IncludesFigureStorage2
  await includesFigureStorage2Contract.deployed()
  console.log(`🎥 includesFigureStorage2Contract contract deployed at ${includesFigureStorage2Contract.address}\\n`)
  includesFigureStorageContractsAddresses.push(includesFigureStorage2Contract.address)


  const outputFileIncludesFigure = `deployment/${hardhatArguments.network}/storage/includesfigure_storage.json`;
  const directoryIncludesFigure = `deployment/${hardhatArguments.network}/storage/`;
  const filenameIncludesFigure = 'includesfigure_storage.json';  

  await storageHandler.ensureDirectoryExistence(directoryIncludesFigure, filenameIncludesFigure);
  await storageHandler.saveStorageDeploymentAddresses(includesFigureStorageContractsAddresses, outputFileIncludesFigure);

  // *************************************** LENGTH_STORAGE *************************************************

  const lengthStorageContractsAddresses: any[] = [];

  // Deploy the LengthStorage1
  const lengthStorage1 = await ethers.getContractFactory('LengthStorage1')
  const lengthStorage1Contract = await lengthStorage1.deploy({ gasLimit: 20000000 }) as LengthStorage1; // as LengthStorage1
  await lengthStorage1Contract.deployed()
  console.log(`🎥 lengthStorage1Contract contract deployed at ${lengthStorage1Contract.address}\\n`)
  lengthStorageContractsAddresses.push(lengthStorage1Contract.address)

  // Deploy the LengthStorage2
  const lengthStorage2 = await ethers.getContractFactory('LengthStorage2')
  const lengthStorage2Contract = await lengthStorage2.deploy({ gasLimit: 20000000 }) as LengthStorage2; // as LengthStorage2
  await lengthStorage2Contract.deployed()
  console.log(`🎥 lengthStorage2Contract contract deployed at ${lengthStorage2Contract.address}\\n`)
  lengthStorageContractsAddresses.push(lengthStorage2Contract.address)


  const outputFileLength = `deployment/${hardhatArguments.network}/storage/length_storage.json`;
  const directoryLength = `deployment/${hardhatArguments.network}/storage/`;
  const filenameLength = 'length_storage.json';  

  await storageHandler.ensureDirectoryExistence(directoryLength, filenameLength);

  await storageHandler.saveStorageDeploymentAddresses(lengthStorageContractsAddresses, outputFileLength);
 

  // *************************************** NETWORDEDA_STORAGE *************************************************

  const networdedAStorageContractsAddresses: any[] = [];

  // Deploy the NetwordedAStorage1
  const networdedAStorage1 = await ethers.getContractFactory('NetwordedAStorage1')
  const networdedAStorage1Contract = await networdedAStorage1.deploy({ gasLimit: 20000000 }) as NetwordedAStorage1; // as NetwordedAStorage1
  await networdedAStorage1Contract.deployed()
  console.log(`🎥 NetwordedAStorage1Contract contract deployed at ${networdedAStorage1Contract.address}\\n`)
  networdedAStorageContractsAddresses.push(networdedAStorage1Contract.address);

  // Deploy the NetwordedAStorage2
  const networdedAStorage2 = await ethers.getContractFactory('NetwordedAStorage2')
  const networdedAStorage2Contract = await networdedAStorage2.deploy({ gasLimit: 20000000 }) as NetwordedAStorage2; // as NetwordedAStorage2
  await networdedAStorage2Contract.deployed()
  console.log(`🎥 NetwordedAStorage2Contract contract deployed at ${networdedAStorage2Contract.address}\\n`)
  networdedAStorageContractsAddresses.push(networdedAStorage1Contract.address);

  const outputFileNetwordedA = `deployment/${hardhatArguments.network}/storage/networdedA_storage.json`;
  const directoryNetwordedA = `deployment/${hardhatArguments.network}/storage/`;
  const filenameNetwordedA = 'networdedA_storage.json';  

  await storageHandler.ensureDirectoryExistence(directoryNetwordedA, filenameNetwordedA);

  await storageHandler.saveStorageDeploymentAddresses(networdedAStorageContractsAddresses, outputFileNetwordedA);

  // *************************************** NETWORDEDB_STORAGE *************************************************
  const networdedBStorageContractsAddresses: any[] = [];

  // Deploy the NetwordedBStorage1
  const networdedBStorage1 = await ethers.getContractFactory('NetwordedBStorage1')
  const networdedBStorage1Contract = await networdedBStorage1.deploy({ gasLimit: 20000000 }) as NetwordedBStorage1; // as NetwordedBStorage1
  await networdedBStorage1Contract.deployed()
  console.log(`🎥 NetwordedBStorage1Contract contract deployed at ${networdedBStorage1Contract.address}\\n`)
  networdedBStorageContractsAddresses.push(networdedBStorage1Contract.address);

  // Deploy the NetwordedBStorage2
  const networdedBStorage2 = await ethers.getContractFactory('NetwordedBStorage2')
  const networdedBStorage2Contract = await networdedBStorage2.deploy({ gasLimit: 20000000 }) as NetwordedBStorage2; // as NetwordedBStorage2
  await networdedBStorage2Contract.deployed()
  console.log(`🎥 NetwordedBStorage2Contract contract deployed at ${networdedBStorage2Contract.address}\\n`)
  networdedBStorageContractsAddresses.push(networdedBStorage2Contract.address);


  const outputFileNetwordedB = `deployment/${hardhatArguments.network}/storage/networdedB_storage.json`;
  const directoryNetwordedB = `deployment/${hardhatArguments.network}/storage/`;
  const filenameNetwordedB = 'networdedB_storage.json';  

  await storageHandler.ensureDirectoryExistence(directoryNetwordedB, filenameNetwordedB);
  await storageHandler.saveStorageDeploymentAddresses(networdedBStorageContractsAddresses, outputFileNetwordedB);

  // *************************************** NUMFOOTNOTES_STORAGE *************************************************
  const numFootnotesStorageContractsAddresses: any[] = [];

  // Deploy the NumFootnoteStorageStorage1
  const numFootnotesStorage1 = await ethers.getContractFactory('NumFootnotesStorage1')
  const numFootnotesStorage1Contract = await numFootnotesStorage1.deploy({ gasLimit: 20000000 }) as NumFootnotesStorage1; // as NumFootnotesStorage1
  await numFootnotesStorage1Contract.deployed()
  console.log(`🎥 NumFootnotesStorage1Contract contract deployed at ${numFootnotesStorage1Contract.address}\\n`)
  numFootnotesStorageContractsAddresses.push(numFootnotesStorage1Contract.address);

  // Deploy the NumFootnoteStorageStorage2
  const numFootnotesStorage2 = await ethers.getContractFactory('NumFootnotesStorage2')
  const numFootnotesStorage2Contract = await numFootnotesStorage2.deploy({ gasLimit: 20000000 }) as NumFootnotesStorage2; // as NumFootnotesStorage2
  await numFootnotesStorage2Contract.deployed()
  console.log(`🎥 NumFootnotesStorage2Contract contract deployed at ${numFootnotesStorage2Contract.address}\\n`)
  
  numFootnotesStorageContractsAddresses.push(numFootnotesStorage2Contract.address);


  const outputFileNumFootnotes = `deployment/${hardhatArguments.network}/storage/numfootnotes_storage.json`;
  const directoryNumFootnotes = `deployment/${hardhatArguments.network}/storage/`;
  const filenameNumFootnotes = 'numfootnotes_storage.json';  

  await storageHandler.ensureDirectoryExistence(directoryNumFootnotes, filenameNumFootnotes);
  await storageHandler.saveStorageDeploymentAddresses(numFootnotesStorageContractsAddresses, outputFileNumFootnotes);

  // *************************************** SECTION_STORAGE *************************************************
  
  const sectionStorageContractsAddresses: any[] = [];

  // Deploy the SectionStorage1
  const sectionStorage1 = await ethers.getContractFactory('SectionStorage1')
  const sectionStorage1Contract = await sectionStorage1.deploy({ gasLimit: 20000000 }) as SectionStorage1; // as SectionStorage1
  await sectionStorage1Contract.deployed()
  console.log(`🎥 sectionStorage1Contract contract deployed at ${sectionStorage1Contract.address}\\n`)
  sectionStorageContractsAddresses.push(sectionStorage1Contract.address);

  // Deploy the SectionStorage2
  const sectionStorage2 = await ethers.getContractFactory('SectionStorage2')
  const sectionStorage2Contract = await sectionStorage2.deploy({ gasLimit: 20000000 }) as SectionStorage2; // as SectionStorage2
  await sectionStorage2Contract.deployed()
  console.log(`🎥 sectionStorage2Contract contract deployed at ${sectionStorage2Contract.address}\\n`)
  sectionStorageContractsAddresses.push(sectionStorage2Contract.address);


  const outputFileSection = `deployment/${hardhatArguments.network}/storage/section_storage.json`;
  const directorySection = `deployment/${hardhatArguments.network}/storage/`;
  const filenameSection = 'section_storage.json';  

  await storageHandler.ensureDirectoryExistence(directorySection, filenameSection);
  await storageHandler.saveStorageDeploymentAddresses(sectionStorageContractsAddresses, outputFileSection);
  
  // *************************************** UNITDESCRIPTORNODEWORDS_STORAGE *************************************************

  const unitDescriptorNodewordsContractsAddresses: any[] = [];

  // Deploy the UnitDescriptorNodewordsStorage1
  const UnitDescriptorNodewordsStorage1 = await ethers.getContractFactory('UnitDescriptorNodewordsStorage1')
  const UnitDescriptorNodewordsStorage1Contract = await UnitDescriptorNodewordsStorage1.deploy({ gasLimit: 20000000 }); // as UnitDescriptorNodewordsStorage1
  await UnitDescriptorNodewordsStorage1Contract.deployed()
  console.log(`🎥 UnitDescriptorNodewordsStorage1Contract contract deployed at ${UnitDescriptorNodewordsStorage1Contract.address}\\n`)
  unitDescriptorNodewordsContractsAddresses.push(UnitDescriptorNodewordsStorage1Contract.address)

  // Deploy the UnitDescriptorNodewordsStorage2
  const UnitDescriptorNodewordsStorage2 = await ethers.getContractFactory('UnitDescriptorNodewordsStorage2')
  const UnitDescriptorNodewordsStorage2Contract = await UnitDescriptorNodewordsStorage2.deploy({ gasLimit: 20000000 }); // as UnitDescriptorNodewordsStorage2
  await UnitDescriptorNodewordsStorage2Contract.deployed()
  console.log(`🎥 UnitDescriptorNodewordsStorage2Contract contract deployed at ${UnitDescriptorNodewordsStorage2Contract.address}\\n`)
  unitDescriptorNodewordsContractsAddresses.push(UnitDescriptorNodewordsStorage2Contract.address)


  const outputFileUnitDescriptorNodewords = `deployment/${hardhatArguments.network}/storage/unitdescriptornodewords_storage.json`;
  const directoryUnitDescriptorNodewords = `deployment/${hardhatArguments.network}/storage/`;
  const filenameUnitDescriptorNodewords = 'unitdescriptornodewords_storage.json';  

  await storageHandler.ensureDirectoryExistence(directoryUnitDescriptorNodewords, filenameUnitDescriptorNodewords);

  await storageHandler.saveStorageDeploymentAddresses(unitDescriptorNodewordsContractsAddresses, outputFileUnitDescriptorNodewords);

  // *************************************** X_STORAGE *************************************************

  const xStorageContractAddresses: any[] = [];

  // Deploy the XStorage1
  const xStorage1 = await ethers.getContractFactory('XStorage1')
  const xStorage1Contract = await xStorage1.deploy({ gasLimit: 20000000 }) as XStorage1; // as XStorage1
  await xStorage1Contract.deployed()
  console.log(`🎥 xStorage1Contract contract deployed at ${xStorage1Contract.address}\\n`)
  xStorageContractAddresses.push(xStorage1Contract.address);

  // Deploy the XStorage2
  const xStorage2 = await ethers.getContractFactory('XStorage2')
  const xStorage2Contract = await xStorage2.deploy({ gasLimit: 20000000 }) as XStorage2; // as XStorage2
  await xStorage2Contract.deployed()
  console.log(`🎥 xStorage2Contract contract deployed at ${xStorage2Contract.address}\\n`)
  xStorageContractAddresses.push(xStorage2Contract.address);


  const outputFileXStorage = `deployment/${hardhatArguments.network}/storage/x_storage.json`;
  const directoryXStorage = `deployment/${hardhatArguments.network}/storage/`;
  const filenameXStorage = 'x_storage.json';  

  await storageHandler.ensureDirectoryExistence(directoryXStorage, filenameXStorage);  
  await storageHandler.saveStorageDeploymentAddresses(xStorageContractAddresses, outputFileXStorage);


  // *************************************** Y_STORAGE *************************************************

  const yStorageContractAddresses: any[] = [];

  // Deploy the YStorage1
  const yStorage1 = await ethers.getContractFactory('YStorage1')
  const yStorage1Contract = await yStorage1.deploy({ gasLimit: 20000000 }) as YStorage1; // as YStorage1
  await yStorage1Contract.deployed()
  console.log(`🎥 yStorage1Contract contract deployed at ${yStorage1Contract.address}\\n`)
  yStorageContractAddresses.push(yStorage1Contract.address)

  // Deploy the YStorage2
  const yStorage2 = await ethers.getContractFactory('YStorage2')
  const yStorage2Contract = await yStorage2.deploy({ gasLimit: 20000000 }) as YStorage2; // as YStorage2
  await yStorage2Contract.deployed()
  console.log(`🎥 yStorage2Contract contract deployed at ${yStorage2Contract.address}\\n`)
  yStorageContractAddresses.push(yStorage2Contract.address)


  const outputFileYStorage = `deployment/${hardhatArguments.network}/storage/y_storage.json`;
  const directoryYStorage = `deployment/${hardhatArguments.network}/storage/`;
  const filenameYStorage = 'y_storage.json';  

  await storageHandler.ensureDirectoryExistence(directoryYStorage, filenameYStorage);  

  await storageHandler.saveStorageDeploymentAddresses(yStorageContractAddresses, outputFileYStorage);


  // *************************************** Z_STORAGE *************************************************
  const zStorageContractAddresses: any[] = [];

  // Deploy the ZStorage1
  const zStorage1 = await ethers.getContractFactory('ZStorage1')
  const zStorage1Contract = await zStorage1.deploy({ gasLimit: 20000000 }) as ZStorage1; // as ZStorage1
  await zStorage1Contract.deployed()
  console.log(`🎥 zStorage1Contract contract deployed at ${zStorage1Contract.address}\\n`)
  zStorageContractAddresses.push(zStorage1Contract.address);

  // Deploy the ZStorage2
  const zStorage2 = await ethers.getContractFactory('ZStorage2')
  const zStorage2Contract = await zStorage2.deploy({ gasLimit: 20000000 }) as ZStorage2; // as ZStorage2
  await zStorage2Contract.deployed()
  console.log(`🎥 zStorage2Contract contract deployed at ${zStorage2Contract.address}\\n`)
  zStorageContractAddresses.push(zStorage2Contract.address);
  
  const outputFileZStorage = `deployment/${hardhatArguments.network}/storage/z_storage.json`;
  const directoryZStorage = `deployment/${hardhatArguments.network}/storage/`;
  const filenameZStorage = 'z_storage.json';  

  await storageHandler.ensureDirectoryExistence(directoryZStorage, filenameZStorage);  
  await storageHandler.saveStorageDeploymentAddresses(zStorageContractAddresses, outputFileZStorage);



  // ************************************ Verification ************************************

  // // *************************************** CHAPTER_STORAGE_VERIFICATION ************************************************

  // ChapterStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: chapterStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/chapter/ChapterStorage1.sol:ChapterStorage1"
  })
  // ChapterStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: chapterStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/chapter/ChapterStorage2.sol:ChapterStorage2"
  })
  
  // *************************************** FIGURE_STORAGE_VERIFICATION ************************************************

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

  // *************************************** FOOTNOTE_STORAGE_VERIFICATION ************************************************

  //FootnoteStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  // await run("verify:verify", {
  //   address: footnoteStorage1Contract.address,
  //   network: ethers.provider.network,
  //   constructorArguments: [],
  //   contract: "contracts/storage/footnote/FootnoteStorage1.sol:FootnoteStorage1"
  // })
  // //FootnoteStorage2 verification
  // await new Promise(resolve => setTimeout(resolve, 20000))
  // await run("verify:verify", {
  //   address: footnoteStorage2Contract.address,
  //   network: ethers.provider.network,
  //   constructorArguments: [],
  //   contract: "contracts/storage/footnote/FootnoteStorage2.sol:FootnoteStorage2"
  // })
  // //FootnoteStorage3 verification
  // await new Promise(resolve => setTimeout(resolve, 20000))
  // await run("verify:verify", {
  //   address: footnoteStorage3Contract.address,
  //   network: ethers.provider.network,
  //   constructorArguments: [],
  //   contract: "contracts/storage/footnote/FootnoteStorage3.sol:FootnoteStorage3"
  // })
  // //FootnoteStorage4 verification
  // await new Promise(resolve => setTimeout(resolve, 20000))
  // await run("verify:verify", {
  //   address: footnoteStorage4Contract.address,
  //   network: ethers.provider.network,
  //   constructorArguments: [],
  //   contract: "contracts/storage/footnote/FootnoteStorage4.sol:FootnoteStorage4"
  // })
  // //FootnoteStorage5 verification
  // await new Promise(resolve => setTimeout(resolve, 20000))
  // await run("verify:verify", {
  //   address: footnoteStorage5Contract.address,
  //   network: ethers.provider.network,
  //   constructorArguments: [],
  //   contract: "contracts/storage/footnote/FootnoteStorage5.sol:FootnoteStorage5"
  // })
  // //FootnoteStorage6 verification
  // await new Promise(resolve => setTimeout(resolve, 20000))
  // await run("verify:verify", {
  //   address: footnoteStorage6Contract.address,
  //   network: ethers.provider.network,
  //   constructorArguments: [],
  //   contract: "contracts/storage/footnote/FootnoteStorage6.sol:FootnoteStorage6"
  // })
  // //FootnoteStorage7 verification
  // await new Promise(resolve => setTimeout(resolve, 20000))
  // await run("verify:verify", {
  //   address: footnoteStorage7Contract.address,
  //   network: ethers.provider.network,
  //   constructorArguments: [],
  //   contract: "contracts/storage/footnote/FootnoteStorage7.sol:FootnoteStorage7"
  // })
  // //FootnoteStorage8 verification
  // await new Promise(resolve => setTimeout(resolve, 20000))
  // await run("verify:verify", {
  //   address: footnoteStorage8Contract.address,
  //   network: ethers.provider.network,
  //   constructorArguments: [],
  //   contract: "contracts/storage/footnote/FootnoteStorage8.sol:FootnoteStorage8"
  // })
  // //FootnoteStorage9 verification
  // await new Promise(resolve => setTimeout(resolve, 20000))
  // await run("verify:verify", {
  //   address: footnoteStorage9Contract.address,
  //   network: ethers.provider.network,
  //   constructorArguments: [],
  //   contract: "contracts/storage/footnote/FootnoteStorage9.sol:FootnoteStorage9"
  // })
  // //FootnoteStorage10 verification
  // await new Promise(resolve => setTimeout(resolve, 20000))
  // await run("verify:verify", {
  //   address: footnoteStorage10Contract.address,
  //   network: ethers.provider.network,
  //   constructorArguments: [],
  //   contract: "contracts/storage/footnote/FootnoteStorage10.sol:FootnoteStorage10"
  // })
  // //FootnoteStorage11 verification
  // await new Promise(resolve => setTimeout(resolve, 20000))
  // await run("verify:verify", {
  //   address: footnoteStorage11Contract.address,
  //   network: ethers.provider.network,
  //   constructorArguments: [],
  //   contract: "contracts/storage/footnote/FootnoteStorage11.sol:FootnoteStorage11"
  // })
  // //FootnoteStorage12 verification
  // await new Promise(resolve => setTimeout(resolve, 20000))
  // await run("verify:verify", {
  //   address: footnoteStorage12Contract.address,
  //   network: ethers.provider.network,
  //   constructorArguments: [],
  //   contract: "contracts/storage/footnote/FootnoteStorage12.sol:FootnoteStorage12"
  // })
  // //FootnoteStorage13 verification
  // await new Promise(resolve => setTimeout(resolve, 20000))
  // await run("verify:verify", {
  //   address: footnoteStorage13Contract.address,
  //   network: ethers.provider.network,
  //   constructorArguments: [],
  //   contract: "contracts/storage/footnote/FootnoteStorage13.sol:FootnoteStorage13"
  // })
  // //FootnoteStorage14 verification
  // await new Promise(resolve => setTimeout(resolve, 20000))
  // await run("verify:verify", {
  //   address: footnoteStorage14Contract.address,
  //   network: ethers.provider.network,
  //   constructorArguments: [],
  //   contract: "contracts/storage/footnote/FootnoteStorage14.sol:FootnoteStorage14"
  // })
  // //FootnoteStorage15 verification
  // await new Promise(resolve => setTimeout(resolve, 20000))
  // await run("verify:verify", {
  //   address: footnoteStorage15Contract.address,
  //   network: ethers.provider.network,
  //   constructorArguments: [],
  //   contract: "contracts/storage/footnote/FootnoteStorage15.sol:FootnoteStorage15"
  // })
  // //FootnoteStorage16 verification
  // await new Promise(resolve => setTimeout(resolve, 20000))
  // await run("verify:verify", {
  //   address: footnoteStorage16Contract.address,
  //   network: ethers.provider.network,
  //   constructorArguments: [],
  //   contract: "contracts/storage/footnote/FootnoteStorage16.sol:FootnoteStorage16"
  // })

  // //FootnoteStorage17 verification
  // await new Promise(resolve => setTimeout(resolve, 20000))
  // await run("verify:verify", {
  //   address: footnoteStorage17Contract.address,
  //   network: ethers.provider.network,
  //   constructorArguments: [],
  //   contract: "contracts/storage/footnote/FootnoteStorage17.sol:FootnoteStorage17"
  // })

  // *************************************** HEADING_STORAGE_VERIFICATION ************************************************

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

  // *************************************** INCLUDESFIGURE_STORAGE_VERIFICATION ************************************************

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
    
  // *************************************** LENGTH_STORAGE_VERIFICATION ************************************************

  //LengthStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: lengthStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/length/LengthStorage1.sol:LengthStorage1"
  })
  //LengthStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: lengthStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/length/LengthStorage2.sol:LengthStorage2"
  })

  // *************************************** NETWORDEDA_STORAGE_VERIFICATION ************************************************

  // NetwordedAStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: networdedAStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/networdedA/NetwordedAStorage1.sol:NetwordedAStorage1"
  })

  // NetwordedAStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: networdedAStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/networdedA/NetwordedAStorage2.sol:NetwordedAStorage2"
  })

  // *************************************** NETWORDEDB_STORAGE_VERIFICATION ************************************************
  // NetwordedBStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: networdedBStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/networdedB/NetwordedBStorage1.sol:NetwordedBStorage1"
  })
  // NetwordedBStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: networdedBStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/networdedB/NetwordedBStorage2.sol:NetwordedBStorage2"
  })
  // *************************************** NUMFOOTNOTES_STORAGE_VERIFICATION ************************************************

  //NumFootnoteStorageStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: numFootnotesStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/numfootnotes/NumFootnotesStorage1.sol:NumFootnotesStorage1"
  })
  //NumFootnoteStorageStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: numFootnotesStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/numfootnotes/NumFootnotesStorage2.sol:NumFootnotesStorage2"
  })

  // *************************************** SECTION_STORAGE_VERIFICATION *************************************************

  //SectionStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: sectionStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/section/SectionStorage1.sol:SectionStorage1"
  })
  //SectionStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: sectionStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/section/SectionStorage2.sol:SectionStorage2"
  })
  

    // *************************************** UNITDESCRIPTORNODEWORDS_VERIFICATION *************************************************
    
    // UnitDescriptorNodewordsStorage1 verification
    await new Promise(resolve => setTimeout(resolve, 20000))
    await run("verify:verify", {
      address: UnitDescriptorNodewordsStorage1Contract.address,
      network: ethers.provider.network,
      constructorArguments: [],
      contract: "contracts/storage/unitdescriptornodewords/UnitDescriptiorNodewordsStorage1.sol:UnitDescriptorNodewordsStorage1"
    })

    // UnitDescriptorNodewordsStorage2 verification
    await new Promise(resolve => setTimeout(resolve, 20000))
    await run("verify:verify", {
      address: UnitDescriptorNodewordsStorage2Contract.address,
      network: ethers.provider.network,
      constructorArguments: [],
      contract: "contracts/storage/unitdescriptornodewords/UnitDescriptiorNodewordsStorage2.sol:UnitDescriptorNodewordsStorage2"
    })

    // *************************************** X_VERIFICATION *************************************************
    
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

    // *************************************** Y_VERIFICATION *************************************************
    
    // YStorage1 verification
    await new Promise(resolve => setTimeout(resolve, 20000))
    await run("verify:verify", {
      address: yStorage1Contract.address,
      network: ethers.provider.network,
      constructorArguments: [],
      contract: "contracts/storage/y/YStorage1.sol:YStorage1"
    })
    // YStorage2 verification
    await new Promise(resolve => setTimeout(resolve, 20000))
    await run("verify:verify", {
      address: yStorage2Contract.address,
      network: ethers.provider.network,
      constructorArguments: [],
      contract: "contracts/storage/y/YStorage2.sol:YStorage2"
    })

    // *************************************** Z_VERIFICATION *************************************************

    // ZStorage1 verification
    await new Promise(resolve => setTimeout(resolve, 20000))
    await run("verify:verify", {
      address: zStorage1Contract.address,
      network: ethers.provider.network,
      constructorArguments: [],
      contract: "contracts/storage/z/ZStorage1.sol:ZStorage1"
    })

    // ZStorage2 verification
    await new Promise(resolve => setTimeout(resolve, 20000))
    await run("verify:verify", {
      address: zStorage2Contract.address,
      network: ethers.provider.network,
      constructorArguments: [],
      contract: "contracts/storage/z/ZStorage2.sol:ZStorage2"
    })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
