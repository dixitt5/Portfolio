const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {

  const Fundme = await ethers.getContractFactory("FundMe");
  const deployedFund = await Fundme.deploy();
  await deployedFund.deployed();

  console.log("FundMe Contract Address:", deployedFund.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
