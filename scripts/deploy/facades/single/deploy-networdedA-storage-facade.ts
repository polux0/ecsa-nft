import { ethers, run } from "hardhat";
import { NetwordedAStorageFacade } from "../../../typechain";

// working script!
async function main() {
  const [deployer,] = await ethers.getSigners();

  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  const networdedAStorageAddresses = ["0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000"];

  // Mapping of current state of the contracts
  // NetwordedAStorage1 = 1 - 369
  // NetwordedAStorage2 = 370 - 726

  const startRange = [1, 370];
  const endRange = [369, 726];

  const networdedAStorageFacade = await ethers.getContractFactory('NetwordedAStorageFacade')
  const networdedAStorageFacadeContract = await networdedAStorageFacade.deploy(networdedAStorageAddresses, startRange, endRange ) as NetwordedAStorageFacade; // as NetwordedAStorageFacade
  await networdedAStorageFacadeContract.deployed()
  console.log(`💾 NetwordedA Storage Facade contract deployed at ${networdedAStorageFacadeContract.address}\\n`)

  // NetwordedAStorage verification
  await new Promise(resolve => setTimeout(resolve, 50000))
  await run("verify:verify", {
    address: networdedAStorageFacadeContract.address,
    network: ethers.provider.network,
    constructorArguments: [
      networdedAStorageAddresses,
      startRange,
      endRange
    ],
    contract: "contracts/facades/NetwordedAStorageFacade.sol:NetwordedAStorageFacade"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
