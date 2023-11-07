import { ethers, hardhatArguments, run } from "hardhat";
import { MultiSender } from "../../typechain";

import * as dotenv from 'dotenv'
dotenv.config()
// we are working with this one ATM
async function main() {
  const [deployer,] = await ethers.getSigners();
  const owner = process.env.OWNER || "0x3C44e5692B73e04Cffb0BDa06e28c7cd754E6bf6";

  const multiSender = await ethers.getContractFactory('MultiSender');

  const multiSenderContract = await multiSender.deploy() as MultiSender; // as MultiSender
  await multiSenderContract.deployed()
  console.log(`🎥 Multisender contract deployed at ${multiSenderContract.address}\\n`)
  

  // NFT verification
  await new Promise(resolve => setTimeout(resolve, 30000))
  await run("verify:verify", {
    address: multiSenderContract.address,
    network: ethers.provider.network,
    constructorArguments: [
    //   nftMetadataAddresses[0],
    //   reservationStorageContractAddress[0],
    //   invitationStorageContractAddress[0]
    ],
    contract: "contracts/MultiSender.sol:MultiSender"
  })

}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
