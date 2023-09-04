pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later

/// ============ Imports ============
import { ERC721URIStorage } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol"; // OZ: ERC721URIStorage 
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { Counters } from "@openzeppelin/contracts/utils/Counters.sol"; // OZ: Counters
import { Strings } from "@openzeppelin/contracts/utils/Strings.sol"; // OZ: Strings
import { Base64 } from "@openzeppelin/contracts/utils/Base64.sol"; // OZ: Base64

// libraries
import { SVGGenerator} from "./lib/SVGGenerator.sol";
import { SplitSequence } from "./lib/SplitSequence.sol";

contract TestNFTProblematicOnesIPFSResolution is ERC721URIStorage{
    using Strings for uint256;
    using Counters for Counters.Counter;
    uint256[] public _alreadyMintedTokenIds;
    Counters.Counter private _tokenIds;
    uint256 constant PRICE_1 = 0.0001 ether; 
    uint256 constant PRICE_2 = 0.0002 ether;
    mapping(uint256 => uint256) public tokenPurchasePrice;
    event TokenURI(string uri);


    // Unit ( Not a metadata )
    // Metadata:
    // - Footnote 
    // - Figure
    // - Chapter
    // - Section
    // - Heading
    // - Num Footnotes
    // - Inlcudes figure
    // - Length
    // - X
    // - Y
    // - Z
    // - Unit descriptor: Nodewords
    // - Networded A
    // - Networded B

    constructor(address[] memory _storageFacades) ERC721("ECSANFTProblematicOnesIPFSResolution", "NFT"){
        
    }

    function getAlreadyMintedTokenIds() public view returns (uint256[] memory){
        return _alreadyMintedTokenIds;
    }

    function setTokenURIFromIPFS(uint256 tokenId, string memory cid) public {
        string memory ipfsURI = string(abi.encodePacked("ipfs://", cid));
        _setTokenURI(tokenId, ipfsURI);
    }

    function mintById(uint256 tokenId) public {
        require(!_exists(tokenId), "Token with this ID already exists"); // Make sure this token hasn't been minted yet
        _alreadyMintedTokenIds.push(tokenId);
        _safeMint(msg.sender, tokenId);
        setTokenURIFromIPFS(tokenId, "Qmdg7DZj6qLFyAUdEmK11q39FjZH3z3ZadLp9ME52WkB8S");
    }


    // Tiers / pricing related ( to be tested after deployment )

    // function validPrice(uint256 price) internal pure returns (bool) {
    //     return price == PRICE_1 || price == PRICE_2;
    // }

    // function mintById(uint256 tokenId, uint256 chosenPrice) public payable {
    //     require(!_exists(tokenId), "Token with this ID already exists"); 
    //     require(validPrice(chosenPrice), "Invalid chosen price");
    //     require(msg.value >= chosenPrice, "Ether value sent is not correct");
        
    //     tokenPurchasePrice[tokenId] = chosenPrice;
    //     _alreadyMintedTokenIds.push(tokenId);
    //     _safeMint(msg.sender, tokenId);
    //     _setTokenURI(tokenId, getTokenURI(tokenId));

    //     // If the user has sent more Ether than required, refund them
    //     if (msg.value > chosenPrice) {
    //         payable(msg.sender).transfer(msg.value - chosenPrice);
    //     }
    // }

    // function getPriceForTokenId(uint256 tokenId) public view returns (uint256) {
    //     return tokenPurchasePrice[tokenId];
    // }
    
}