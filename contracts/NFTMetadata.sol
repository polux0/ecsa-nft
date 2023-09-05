pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later

/// ============ Imports ============
import { ERC721URIStorage } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol"; // OZ: ERC721URIStorage 
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { Counters } from "@openzeppelin/contracts/utils/Counters.sol"; // OZ: Counters
import { Strings } from "@openzeppelin/contracts/utils/Strings.sol"; // OZ: Strings
import { Base64 } from "@openzeppelin/contracts/utils/Base64.sol"; // OZ: Base64
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol"; // OZ: Ownable
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol"; // OZ: IERC20
import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol"; // OZ: IERC721;
// libraries
import { SVGGenerator} from "./lib/SVGGenerator.sol";
import { SplitSequence } from "./lib/SplitSequence.sol";
import { StorageFacadeManager } from "./StorageFacadeManager.sol";

contract NFTMetadata is Ownable{
    using Strings for uint256;
    using Counters for Counters.Counter;
    string[] internal TRAIT_TYPES;
    StorageFacadeManager storageFacadeManager;
    address public authorizedContract; 
    event NFTMetadataDebugging(string message);

    constructor(address _storageFacadeManager) {
        storageFacadeManager = StorageFacadeManager(_storageFacadeManager);
        authorizedContract = _storageFacadeManager;
        TRAIT_TYPES = initializeTraitTypes();
    }
    modifier onlyAuthorizedContract() {
        require(msg.sender == authorizedContract, "Caller is not the authorized contract");
        _;
    }
    function setAuthorizedContract(address _authorizedContract) external onlyOwner {
        authorizedContract = _authorizedContract;
    }
    // works well with units
    // function generateUnit(uint256 tokenId) public returns (string memory){
    // string memory sentence = unitStorageFacade.getUnitBasedOnId(tokenId);
    // string[] memory sequence = SplitSequence.splitSentence(sentence, 95);
    // bytes memory svg = abi.encodePacked(SVGGenerator.generateSVG(sequence));
    //     return string(
    //         abi.encodePacked(
    //             "data:image/svg+xml;base64,",
    //             Base64.encode(svg)
    //         )
    //     );
    // }
    function initializeTraitTypes() internal pure returns (string[] memory) {
        string[] memory traitTypes = new string[](15);
        traitTypes[0] = "Footnote";
        traitTypes[1] = "Figure";
        traitTypes[2] = "Chapter";
        traitTypes[3] = "Section";
        traitTypes[4] = "Heading";
        traitTypes[5] = "Num Footnotes";
        traitTypes[6] = "Includes figure";
        traitTypes[7] = "Length";
        traitTypes[8] = "X";
        traitTypes[9] = "Y";
        traitTypes[10] = "Z";
        traitTypes[11] = "Nodewords";
        traitTypes[12] = "Netword A";
        traitTypes[13] = "Netword B";
        return traitTypes;
    }
    function buildAttributes(string[] memory traitTypes, string[] memory traitValues) internal pure returns (string memory) {
        string memory attributes = "[";

        for (uint256 i = 0; i < traitTypes.length; i++) {
            attributes = string(
                abi.encodePacked(
                    attributes,
                    i > 0 ? "," : "",
                    '{"trait_type":"',
                    traitTypes[i],
                    '","value":"',
                    traitValues[i],
                    '"}'
                )
            );
        }

        attributes = string(abi.encodePacked(attributes, "]"));
        return attributes;
    }
    function encodeMetadata(
        string memory name,
        string memory description,
        string memory image,
        string memory attributes
    ) internal pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(
                        abi.encodePacked(
                            '{"name":"',
                            name,
                            '","description":"',
                            description,
                            '","image":"',
                            image,
                            '","attributes":',
                            attributes,
                            '}'
                        )
                    )
                )
            );
    }
    function getTraitValue(uint256 index, uint256 tokenId) internal returns (string memory) {
        if (index == 1) return storageFacadeManager.getFigureStorageFacade().getUnitBasedOnId(tokenId);
        if (index == 2) return storageFacadeManager.getChapterStorageFacade().getUnitBasedOnId(tokenId);
        if (index == 3) return storageFacadeManager.getSectionStorageFacade().getUnitBasedOnId(tokenId);
        if (index == 4) return storageFacadeManager.getHeadingStorageFacade().getUnitBasedOnId(tokenId);
        if (index == 5) return storageFacadeManager.getNumFootnotesStorageFacade().getUnitBasedOnId(tokenId);
        if (index == 6) return storageFacadeManager.getIncludesFigureStorageFacade().getUnitBasedOnId(tokenId);
        if (index == 7) return storageFacadeManager.getLengthStorageFacade().getUnitBasedOnId(tokenId);
        if (index == 8) return storageFacadeManager.getXStorageFacade().getUnitBasedOnId(tokenId);
        if (index == 9) return storageFacadeManager.getYStorageFacade().getUnitBasedOnId(tokenId);
        if (index == 10) return storageFacadeManager.getZStorageFacade().getUnitBasedOnId(tokenId);
        if (index == 11) return storageFacadeManager.getUnitDescriptorStorageFacade().getUnitBasedOnId(tokenId);
        if (index == 12) return storageFacadeManager.getNetwordedAStorageFacade().getUnitBasedOnId(tokenId);
        if (index == 13) return storageFacadeManager.getNetwordedBStorageFacade().getUnitBasedOnId(tokenId);

        return ""; // Handle the default case
    }
    // gnosis safe withdrawal test
    // function getTraitValue(uint256 index, uint256 tokenId) internal returns (string memory) {
    //     if (index == 1) "1";
    //     if (index == 2) "1";
    //     if (index == 3) "1";
    //     if (index == 4) "1";
    //     if (index == 5) "1";
    //     if (index == 6) "1";
    //     if (index == 7) "1";
    //     if (index == 8) "1";
    //     if (index == 9) "1";
    //     if (index == 10) "1";
    //     if (index == 11) "1";
    //     if (index == 12) "1";
    //     if (index == 13) "1";

    //     return ""; // Handle the default case
    // }
    function generateUnit(uint256 tokenId) public returns (string memory){
        string memory sentence = storageFacadeManager.getUnitDescriptorStorageFacade().getUnitBasedOnId(tokenId);
        bytes memory svg = abi.encodePacked(SVGGenerator.generateSVG(sentence));
        return string(
            abi.encodePacked(
                "data:image/svg+xml;base64,",
                Base64.encode(svg)
            )
        );
    }
    function getTokenURI(uint256 tokenId) public returns (string memory) {
        string memory name = string(abi.encodePacked("#", tokenId.toString(), 'Ecsa Book Discourse Unit'));
        // should be like this
        emit NFTMetadataDebugging("before description");
        string memory description = storageFacadeManager.getUnitStorageFacade().getUnitBasedOnId(tokenId);
        emit NFTMetadataDebugging("after description");
        emit NFTMetadataDebugging(description);
        string memory image = generateUnit(tokenId);

        string[] memory traitValues = new string[](TRAIT_TYPES.length);
        for (uint256 i = 0; i < TRAIT_TYPES.length; i++) {
            traitValues[i] = getTraitValue(i, tokenId);
        }
        emit NFTMetadataDebugging("after trait values");
        string memory attributes = buildAttributes(TRAIT_TYPES, traitValues);
        emit NFTMetadataDebugging(attributes);
        string memory metadata = encodeMetadata(name, description, image, attributes);
        emit NFTMetadataDebugging(metadata);
        return metadata;
    }
    // Withdraw ERC20
    function withdrawERC20(address tokenAddress, address to, uint256 amount) external onlyOwner {
        IERC20(tokenAddress).transfer(to, amount);
    }
    // Withdraw ERC721
    function withdrawERC721(address tokenAddress, address to, uint256 tokenId) external onlyOwner {
        IERC721(tokenAddress).safeTransferFrom(address(this), to, tokenId);
    }
    // Enable withdrawal of ETH
    function sendViaCall(address payable _to, uint256 amount) public payable onlyOwner{
        require(address(this).balance >= amount, "Insufficient balance");
        // Call returns a boolean value indicating success or failure.
        // This is the current recommended method to use.
        (bool sent, ) = _to.call{value: address(this).balance}("");
        require(sent, "Failed to send Ether");
    }
    
}