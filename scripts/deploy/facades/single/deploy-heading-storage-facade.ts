import { ethers, run } from "hardhat";
import { FootnoteStorageFacade } from "../../../typechain";

// working script!
async function main() {
  const [deployer,] = await ethers.getSigners();

  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  const footnoteStorageAddresses = ["0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000"];

  // Mapping of current state of the contracts
  // HeadingStorage1 = 1 - 359
  // HeadingStorage2 = 360 - 726

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
