const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {

  // const Fundme = await ethers.getContractFactory("FundMe");
  // const deployedFund = await Fundme.deploy();
  // await deployedFund.deployed();

  // console.log("FundMe Contract Address:", deployedFund.address);

  // const Certificate = await ethers.getContractFactory("Certificate");
  // const deployedCerti = await Certificate.deploy();
  // await deployedCerti.deployed();

  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  const deployedStorage = await SimpleStorage.deploy();
  await deployedStorage.deployed();

  console.log("Certificate Contract Address:", deployedStorage.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
