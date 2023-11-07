import { ethers, run, hardhatArguments } from "hardhat";
import { MultiSender } from "../../typechain";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('\\n🤖 minter: ', deployer.address);


  const multiSenderAddress = "0x258F6236372e0a8BaCb141b41DbD4d7987d8e8de";
  // Mint the test NFT
  const multiSender = await ethers.getContractAt('MultiSender', multiSenderAddress);
  console.log(`🎥 loadeded multi sender contract deployed at ${multiSender.address}\\n`);


  const addresses = ['0x0f46D83A1E53829453262AAb4DB70144d364D25f', '0x70997970C51812dc3A010C7d01b50e0d17dc79C8', '0x2E1493555DBdb58Bb61589fBeE718286d7e690bA'];
  const amounts = [ethers.utils.parseEther('0.2'), ethers.utils.parseEther('0.2'), ethers.utils.parseEther('0.2')];
  
  const totalAmount = amounts.reduce((acc, amount) => acc.add(ethers.BigNumber.from(amount)), ethers.BigNumber.from(0));

  let tranasction = await multiSender.sendEther(addresses, amounts, {value: totalAmount});
  await tranasction.wait();
 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 2;
});
