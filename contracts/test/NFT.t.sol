// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.10;

import "forge-std/Test.sol";
import "../src/NFT.sol";

contract NFTTest is Test {
    NFT private nft;

    function setUp() public {
        // Deploy NFT contract
        nft = new NFT();
    }

    function testMint() public {
        nft.safeMint(address(1), "URI");
    }
}
