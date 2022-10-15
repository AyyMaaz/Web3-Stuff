const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });


async function main() {
  // Address of the whitelist contract that you deployed in the previous module
  const whitelistContract = '0x5eEBe94E976304F6b7cC7eFDf7d10d3073b7b21f';
  // URL from where we can extract the metadata for a Crypto Dev NFT
  const metadataURL = 'ipfs://QmUHQzkQM3GwQhqSm6u2bjgjm3EQKAMgH4FQGZoaLcM1PZ/';
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
  */
  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

  // deploy the contract
  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );

  // print the address of the deployed contract
  console.log(
    "Crypto Devs Contract Address:",
    deployedCryptoDevsContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  //0xa25dc87316B5b0ac9428C9986e07e0A73e6EdCB5