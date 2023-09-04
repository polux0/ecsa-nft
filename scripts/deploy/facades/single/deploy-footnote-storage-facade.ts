import { ethers, run } from "hardhat";
import { FootnoteStorageFacade } from "../../../../typechain";
import { StorageHandler } from '../../../StorageHandler';

// working script!
async function main() {
  const [deployer,] = await ethers.getSigners();
  const storageHandler = new StorageHandler();

  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  const footnoteStorageAddresses = storageHandler.loadStorageDeploymentAddresses('deployment/storage/footnote_storage.json');
  console.log('addresses that will be passed to constructor of FootnoteStorageFacade: ', footnoteStorageAddresses);
    // Mapping of current state of the contracts
    // FootnoteStorage1 = 1 - 45
    // FootnoteStorage2 = 46 - 91
    // FootnoteStorage3 = 92 - 137
    // FootnoteStorage4 = 138 - 183
    // FootnoteStorage5 = 184 - 229
    // FootnoteStorage6 = 230 - 275
    // FootnoteStorage7 = 276 - 321
    // FootnoteStorage8 = 322 - 367
    // FootnoteStorage9 = 368 - 413
    // FootnoteStorage10 = 414 - 459
    // FootnoteStorage11 = 460 - 505
    // FootnoteStorage12 = 506 - 551
    // FootnoteStorage13 = 552 - 597
    // FootnoteStorage14 = 598 - 643
    // FootnoteStorage15 = 644 - 689
    // FootnoteStorage16 = 690 - 726

  const startRange = [1, 46, 92, 138, 184, 230, 276, 322, 368, 414, 460, 506, 552, 598, 644, 690];
  const endRange = [45, 91, 137, 183, 229, 275, 321, 367, 413, 459, 505, 551, 597, 643, 689, 726];

  const FootnoteStorageFacade = await ethers.getContractFactory('FootnoteStorageFacade')
  const FootnoteStorageFacadeContract = await FootnoteStorageFacade.deploy(footnoteStorageAddresses, startRange, endRange ) as FootnoteStorageFacade; // as FootnoteStorageFacade
  await FootnoteStorageFacadeContract.deployed()
  console.log(`💾 Footnote Storage Facade contract deployed at ${FootnoteStorageFacadeContract.address}\\n`)

  // FootnoteStorage verification
  await new Promise(resolve => setTimeout(resolve, 50000))
  await run("verify:verify", {
    address: FootnoteStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      footnoteStorageAddresses,
      startRange,
      endRange
    ],
    contract: "contracts/facades/FootnoteStorageFacade.sol:FootnoteStorageFacade"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
