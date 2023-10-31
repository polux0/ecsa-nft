import '@nomiclabs/hardhat-waffle';
import "@nomiclabs/hardhat-etherscan";
import '@typechain/hardhat';
import "solidity-coverage"
import "hardhat-contract-sizer"
import "hardhat-gas-reporter"

import * as fs from 'fs';
import * as dotenv from 'dotenv'

require('hardhat-abi-exporter');
// require('hardhat-ethernal');

dotenv.config()

const mnemonic = fs.existsSync('.secret')
  ? fs
      .readFileSync('.secret')
      .toString()
      .trim()
  : "test test test test test test test test test test test junk"

const infuraKey = process.env.INFURA_KEY
const etherscanKey = process.env.ETHERSCAN_KEY
const polyscanKey = process.env.POLYSCAN_KEY
const otpimismScanKey = process.env.OPTIMISTIC_ETHERSCAN_API_KEY
const alchemyKey  = process.env.ALCHEMY_KEY

export default {
  networks: {
    hardhat: {
      forking: {
        url: `https://mainnet.infura.io/v3/${infuraKey}`,
        enabled: process.env.FORK === 'true'
      },
      // gas: 12000000,
      // blockGasLimit: 0x1fffffffffffff,
      // allowUnlimitedContractSize: true,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${infuraKey}`,
      accounts: {
        mnemonic: mnemonic,
      },
    },
    optimism: {
      url: 'https://optimism.meowrpc.com',
      accounts: {
        mnemonic: mnemonic,
      },
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${infuraKey}`,
      accounts: {
        mnemonic: mnemonic,
      },
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${infuraKey}`,
      // gasPrice: 5000000000,
      accounts: {
        mnemonic: mnemonic,
      },
    },
    zoratestnet: {
      url: `https://testnet.rpc.zora.co/`,
      gasPrice: 5000000000,
      accounts: {
        mnemonic: mnemonic,
      },
    },
    zora: {
      url: `https://testnet.rpc.zora.co/`,
      // gasPrice: 5000000000,
      accounts: {
        mnemonic: mnemonic,
      },
    },
    mumbai: {
      url: `https://polygon-testnet.public.blastapi.io`,
      accounts: {
        mnemonic: mnemonic,
      },
    },
    polygon: {
      gasPrice: 90000000000,
      url: `https://polygon-mainnet.g.alchemy.com/v2/${alchemyKey}`,
      accounts: {
        mnemonic: mnemonic,
      },
    },
  },
  solidity: '0.8.4',
  settings: {
    optimizer: {  
      enabled: true,
      runs: 1
    }
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
  contractSizer: {
    alphaSort: true,
  },
  etherscan: {
    // remove comment for polygon ecosystem ( mumbai, polygon network )
    apiKey: polyscanKey,
    // apiKey: etherscanKey,
    customChains: [
      {
        network: "zoratestnet",
        chainId: 999,
        urls: {
          apiURL: "https://testnet.explorer.zora.energy/api",
          browserURL: "https://testnet.explorer.zora.energy/"
        }
      }
    ],
  },
  mocha: {
    timeout: 150000
  },

  abiExporter: [
    {
      path: './abi/json',
      format: "json",
    },
    {
      path: './abi/minimal',
      format: "minimal",
    },
    {
      path: './abi/fullName',
      format: "fullName",
    },
  ]
  
};
