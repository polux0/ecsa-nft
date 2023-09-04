import { ethers, run } from "hardhat";
import { NetwordedBStorageFacade } from "../../../typechain";

// working script!
async function main() {
  const [deployer,] = await ethers.getSigners();

  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  const networdedBStorageAddresses = ["0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000"];

  // Mapping of current state of the contracts
  // NetwordedBStorage1 = 1 - 359
  // NetwordedBStorage2 = 360 - 726

  const startRange = [1, 359];
  const endRange = [360, 726];

  const networdedBStorageFacade = await ethers.getContractFactory('NetwordedBStorageFacade')
  const networdedBStorageFacadeContract = await networdedBStorageFacade.deploy(networdedBStorageAddresses, startRange, endRange ) as NetwordedBStorageFacade; // as NetwordedBStorageFacade
  await networdedBStorageFacadeContract.deployed()
  console.log(`💾 NetwordedB Storage Facade contract deployed at ${networdedBStorageFacadeContract.address}\\n`)

  // NetwordedBStorage verification
  await new Promise(resolve => setTimeout(resolve, 50000))
  await run("verify:verify", {
    address: networdedBStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      networdedBStorageAddresses,
      startRange,
      endRange
    ],
    contract: "contracts/facades/NetwordedBStorageFacade.sol:NetwordedBStorageFacade"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
