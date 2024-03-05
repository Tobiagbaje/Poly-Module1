// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "erc721a/contracts/ERC721A.sol";

contract LiteBitTokenERC721A is ERC721A {

    // Maximum number of tokens that can be minted
    uint256 public maxQuantity = 5;

    // Mapping of token ID to favFood string
    mapping (uint256 => string) public favFoods;

    // Constructor with additional parameters
    constructor() ERC721A('LiteBitToken', 'LBTK') {}

    // Function to mint NFT, which only owner can perform
    function mint(uint256 quantity) external payable {
        require(totalSupply() + quantity <= maxQuantity, "You can not mint more than 5");
        _mint(msg.sender, quantity);
    }

    // Function to set a new favFood for a token
    function setFavFood(uint256 _tokenId, string calldata _favFood) external {
        favFoods[_tokenId] = _favFood;
    }

    // Override the baseURI function to return the base URL for the NFTs
    function _baseURI() internal pure override returns (string memory) {
        return "https://gateway.pinata.cloud/ipfs/QmQD92sFM956BbdLZn4s1Th8CAgfCvMhJL9Dsv95Rm6sBc/";
    }

    // Return the URL for the prompt description
    function promptDescription() external pure returns (string memory) {
        return "5 LiteBit Token images";
    }
}
