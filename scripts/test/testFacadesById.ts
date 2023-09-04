import { ethers, run } from "hardhat";
import { StorageHandler } from '../StorageHandler';

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('\\n🤖 minter: ', deployer.address);

  const storageHandler = new StorageHandler();
  const facadeAddresses: any = storageHandler.loadStorageDeploymentAddresses('deployment/facades/storage_facades.json');


  const facades = ['FootnoteStorageFacade', 'FigureStorageFacade', 'ChapterStorageFacade', 
                   'SectionStorageFacade', 'HeadingStorageFacade', 'NumFootnotesStorageFacade', 'IncludesFigureStorageFacade',
                   'LengthStorageFacade', 'XStorageFacade', 'YStorageFacade', 'ZStorageFacade', 'UnitDescriptorStorageFacade',
                   'NetwordedAStorageFacade', 'NetwordedBStorageFacade', 'UnitStorageFacade'];

  const problematicIds = [326];

//   for( let j = 0; j < problematicIds.length; j++){
    for(let i = 0; i < facadeAddresses.length; i++){
        const facade = await ethers.getContractAt(facades[i], facadeAddresses[i]);
        let tranasction = await facade.getUnitBasedOnId(326, {gasLimit: 12000000});
        await tranasction.wait();
        console.log('facade: ', facades[i], 'response: ', tranasction);
      } 
//   }

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
