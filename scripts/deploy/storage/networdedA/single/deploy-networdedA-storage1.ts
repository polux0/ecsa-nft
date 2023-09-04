import { ethers, run } from "hardhat";
import { NetwordedAStorage1 } from "../../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the NetwordedAStorage1
  const networdedAStorage1 = await ethers.getContractFactory('NetwordedAStorage1')
  const networdedAStorage1Contract = await networdedAStorage1.deploy() as NetwordedAStorage1; // as NetwordedAStorage1
  await networdedAStorage1Contract.deployed()
  console.log(`🎥 NetwordedAStorage1Contract contract deployed at ${networdedAStorage1Contract.address}\\n`)

  // NetwordedAStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: networdedAStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/networdedA/NetwordedAStorage1.sol:NetwordedAStorage1"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
