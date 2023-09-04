import { ethers, run } from "hardhat";
import { NetwordedBStorage1 } from "../../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the NetwordedBStorage1
  const networdedBStorage1 = await ethers.getContractFactory('NetwordedBStorage1')
  const networdedBStorage1Contract = await networdedBStorage1.deploy() as NetwordedBStorage1; // as NetwordedBStorage1
  await networdedBStorage1Contract.deployed()
  console.log(`🎥 NetwordedBStorage1Contract contract deployed at ${networdedBStorage1Contract.address}\\n`)

  // NetwordedBStorage1 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: networdedBStorage1Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/networdedB/NetwordedBStorage1.sol:NetwordedBStorage1"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
