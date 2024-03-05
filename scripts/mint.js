// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const hre = require("hardhat");
const nftContractJSON = require("../artifacts/contracts/LiteBitTokenERC721A.sol/LiteBitTokenERC721A.json");
const {nftAddress} = require("../nftData/contractAddress.js");
require('dotenv').config();

const nftABI = nftContractJSON.abi;

async function main() {

  const nft = await hre.ethers.getContractAt(nftABI, nftAddress);
  const tx = await nft.mint(10); 
  await tx.wait();
  console.log("Minted 5 nfts"); 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode =  1;
});
