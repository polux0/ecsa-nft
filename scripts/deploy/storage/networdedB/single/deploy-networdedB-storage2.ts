import { ethers, run } from "hardhat";
import { NetwordedBStorage2 } from "../../../../typechain";

async function main() {
  const [deployer,] = await ethers.getSigners();
  
  console.log(`\\n🤖 deployer address ${deployer.address}\\n`)

  // Deploy the NetwordedBStorage2
  const networdedBStorage2 = await ethers.getContractFactory('NetwordedBStorage2')
  const networdedBStorage2Contract = await networdedBStorage2.deploy() as NetwordedBStorage2; // as NetwordedBStorage2
  await networdedBStorage2Contract.deployed()
  console.log(`🎥 NetwordedBStorage2Contract contract deployed at ${networdedBStorage2Contract.address}\\n`)

  // NetwordedBStorage2 verification
  await new Promise(resolve => setTimeout(resolve, 20000))
  await run("verify:verify", {
    address: networdedBStorage2Contract.address,
    network: ethers.provider.network,
    constructorArguments: [],
    contract: "contracts/storage/networdedB/NetwordedBStorage2.sol:NetwordedBStorage2"
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
