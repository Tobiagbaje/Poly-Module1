

const hre = require("hardhat");
const fs = require('fs');

async function main() {
  // Change the contract name to the one you want to deploy
  const NFT = await hre.ethers.getContractFactory("LiteBitTokenERC721A");

  const nft = await NFT.deploy();
  await nft.deployed();

  console.log("NFT address:", nft.address);
  // Export the addresses
  fs.writeFileSync('nftData/contractAddress.js', `
    module.exports = { nftAddress: "${nft.address}" };
  `);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
