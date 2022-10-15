const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });


async function main() {
  const cryptoDevTokenAddress = '0xf8e81D47203A594245E36C48e151709F0C19fBe8';
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so exchangeContract here is a factory for instances of our Exchange contract.
  */
  const exchangeContract = await ethers.getContractFactory("Exchange");

  // here we deploy the contract
  const deployedExchangeContract = await exchangeContract.deploy(
    cryptoDevTokenAddress
  );
  await deployedExchangeContract.deployed();

  // print the address of the deployed contract
  console.log("Exchange Contract Address:", deployedExchangeContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//0x4693168F3Ac4Ff5BFeE987430fE230138d211d9B
//Exchange Contract Address: 0x508Cb803f26A3c6A0c2F05301f3cd708F2058269