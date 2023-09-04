import { ethers, run } from "hardhat";
import { SelfReferentiallityStorageFacade } from "../../../typechain";

// working script!
async function main() {
  const [deployer,] = await ethers.getSigners();

  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  const selfReferentiallityStorageAddresses = ["0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000"];

  // Mapping of current state of the contracts
  // SelfReferentiallityStorage1 = 1 - 369
  // SelfReferentiallityStorage2 = 370 - 759

  const startRange = [1, 369];
  const endRange = [370, 759];

  const selfReferentiallityStorageFacade = await ethers.getContractFactory('SelfReferentiallityStorageFacade')
  const selfReferentiallityStorageFacadeContract = await selfReferentiallityStorageFacade.deploy(selfReferentiallityStorageAddresses, startRange, endRange ) as SelfReferentiallityStorageFacade; // as SelfReferentiallityStorageFacade
  await selfReferentiallityStorageFacadeContract.deployed()
  console.log(`💾 SelfReferentiallity Storage Facade contract deployed at ${selfReferentiallityStorageFacadeContract.address}\\n`)

  // SelfReferentiallityStorage verification
  await new Promise(resolve => setTimeout(resolve, 50000))
  await run("verify:verify", {
    address: selfReferentiallityStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      selfReferentiallityStorageAddresses,
      startRange,
      endRange
    ],
    contract: "contracts/facades/SelfReferentiallityStorageFacade.sol:SelfReferentiallityStorageFacade"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
