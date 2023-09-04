pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later

/// ============ Imports ============
import { ERC721URIStorage } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol"; // OZ: ERC721URIStorage 
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { Counters } from "@openzeppelin/contracts/utils/Counters.sol"; // OZ: Counters
import { Strings } from "@openzeppelin/contracts/utils/Strings.sol"; // OZ: Strings
import { Base64 } from "@openzeppelin/contracts/utils/Base64.sol"; // OZ: Base64
import { ChapterStorageFacade } from "./facades/ChapterStorageFacade.sol";
import { FigureStorageFacade } from "./facades/FigureStorageFacade.sol";
import { FootnoteStorageFacade } from "./facades/FootnoteStorageFacade.sol";
import { HeadingStorageFacade } from "./facades/HeadingStorageFacade.sol";
import { LengthStorageFacade } from "./facades/LengthStorageFacade.sol";
import { NetwordedAStorageFacade } from "./facades/NetwordedAStorageFacade.sol";
import { NetwordedBStorageFacade } from "./facades/NetwordedBStorageFacade.sol";
import { NumFootnotesStorageFacade } from "./facades/NumFootnotesStorageFacade.sol";
import { IncludesFigureStorageFacade } from "./facades/IncludesFigureStorageFacade.sol";
import { SectionStorageFacade } from "./facades/SectionStorageFacade.sol";
import { UnitStorageFacade } from "./facades/UnitStorageFacade.sol";
import { UnitDescriptorStorageFacade } from "./facades/UnitDescriptorStorageFacade.sol";
import { XStorageFacade } from "./facades/XStorageFacade.sol";
import { YStorageFacade } from "./facades/YStorageFacade.sol";
import { ZStorageFacade } from "./facades/ZStorageFacade.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol"; // OZ: Ownable
// libraries
import { SVGGenerator} from "./lib/SVGGenerator.sol";
import { SplitSequence } from "./lib/SplitSequence.sol";

contract TestNFTProblematicOnes is ERC721URIStorage, Ownable{
    using Strings for uint256;
    using Counters for Counters.Counter;
    uint256[] public _alreadyMintedTokenIds;
    Counters.Counter private _tokenIds;
    address []storageFacades;
    FootnoteStorageFacade foonoteStorageFacade;
    FigureStorageFacade  figureStorageFacade;
    ChapterStorageFacade chapterStorageFacade;
    SectionStorageFacade sectionStorageFacade;
    HeadingStorageFacade headingStorageFacade;
    NumFootnotesStorageFacade numFootnotesStorageFacade;
    IncludesFigureStorageFacade includesFigureStorageFacade;
    LengthStorageFacade lengthStorageFacade;
    XStorageFacade xStorageFacade;
    YStorageFacade yStorageFacade;
    ZStorageFacade zStorageFacade;
    UnitDescriptorStorageFacade unitDescriptorStorageFacade;
    NetwordedAStorageFacade networdedAStorageFacade;
    NetwordedBStorageFacade networdedBStorageFacade;
    UnitStorageFacade unitStorageFacade;
    string[] internal TRAIT_TYPES;
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

    constructor(address[] memory _storageFacades) ERC721("ECSANFTProblematicOnes", "NFT"){
        TRAIT_TYPES = initializeTraitTypes();
        storageFacades = _storageFacades;
        foonoteStorageFacade = FootnoteStorageFacade(storageFacades[0]); 
        figureStorageFacade = FigureStorageFacade(storageFacades[1]); 
        chapterStorageFacade = ChapterStorageFacade(storageFacades[2]); 
        sectionStorageFacade = SectionStorageFacade(storageFacades[3]); 
        headingStorageFacade = HeadingStorageFacade(storageFacades[4]); 
        numFootnotesStorageFacade = NumFootnotesStorageFacade(storageFacades[5]); 
        includesFigureStorageFacade = IncludesFigureStorageFacade(storageFacades[6]); 
        lengthStorageFacade = LengthStorageFacade(storageFacades[7]); 
        xStorageFacade = XStorageFacade(storageFacades[8]); 
        yStorageFacade = YStorageFacade(storageFacades[9]); 
        zStorageFacade = ZStorageFacade(storageFacades[10]); 
        unitDescriptorStorageFacade = UnitDescriptorStorageFacade(storageFacades[11]);
        networdedAStorageFacade = NetwordedAStorageFacade(storageFacades[12]); 
        networdedBStorageFacade = NetwordedBStorageFacade(storageFacades[13]); 
        unitStorageFacade = UnitStorageFacade(storageFacades[14]);
    }
        // Enable withdrawal of ETH
    function sendViaCall(address payable _to, uint256 amount) public payable onlyOwner{
        require(address(this).balance >= amount, "Insufficient balance");
        // Call returns a boolean value indicating success or failure.
        // This is the current recommended method to use.
        (bool sent, ) = _to.call{value: address(this).balance}("");
        require(sent, "Failed to send Ether");
    }
    function sendViaSend(address payable _to) public payable {
        // Send returns a boolean value indicating success or failure.
        // This function is not recommended for sending Ether.
        bool sent = _to.send(msg.value);
        require(sent, "Failed to send Ether");
    }
    function withdrawEther(address to) public {
        address payable recipient = payable(to);
        (bool succeed, bytes memory data) = recipient.call{value: address(this).balance}(""); 
        require(succeed, "Failed to withdraw Ether");
    }

    // for nodewords
    function generateUnit(uint256 tokenId) public returns (string memory){
        string memory sentence = unitDescriptorStorageFacade.getUnitBasedOnId(tokenId);
        bytes memory svg = abi.encodePacked(SVGGenerator.generateSVG(sentence));
        return string(
            abi.encodePacked(
                "data:image/svg+xml;base64,",
                Base64.encode(svg)
            )
        );
    }
    receive() external payable {}
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
    function getTokenURI(uint256 tokenId) public returns (string memory) {
        string memory name = string(abi.encodePacked("#", tokenId.toString(), 'Ecsa Book Discourse Unit'));
        // should be like this
        string memory problematicOne = "The Economic Space Protocol sees different tokens having different roles in the network. But there will also be exchange relations across token types and a selection warrants particular note, as shown in Figure 10.4, to illustrate the meanings of cross-token transactions.\\\n-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\\\nAgent A Agent B Operation Definition Use\\\n---------- ---- ----------- ---------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------\\\nStake \\u2190\\u2B95 Stake Mutual stake holding creation Entering shared risk positions / Creating liquidity / Appreciating relationship.\\\nStake \\u2B95\\u2190 Stake Mutual stake holding dissolution Exiting shared risk positions / Reducing liquidity / Depreciating or relocating relationship.\\\nLiquidity \\u2190\\u2B95 Stake Stake buying / selling Issuer clearing debt by converting to stake. Shifts risk to stake holder.\\\nStake \\u2B95\\u2190 Liquidity Stake transfer Issuer selling stake to acquire liquidity, reducing risk. No net change in total network liquidity.\\\nLiquidity \\u2190\\u2B95 Liquidity Liquidity transfer May occur automatically when an agent reduces a credit line with one agent, or increases a credit line with another.\\\nLiquidity \\u2B95\\u2190 Liquidity Distributed clearing Occurs when the matching algorithm finds a path to clear credit across two or more parties to settle a trade.\\\nCommodity \\u2190\\u2B95 Liquidity Credit issuance Opens and extends trade time intervals. Exchanging a commodity for credit, to be redeemed later.\\\nLiquidity \\u2B95\\u2190 Commodity Credit clearing Closes the trade time interval. Credit is exchanged for a commodity, clearing previously issued credit.\\\nCommodity \\u2190\\u2B95 Commodity (Monetized) Barter Exchange between two commodities with complete match: no time interval. Netting might be used, but without issuance of liquidity tokens.\\\nCommodity \\u2190\\u2B95 Stake Stake on kind Agent A exchanges its own commodity for a stake.\\\nStake \\u2B95\\u2190 Commodity In kind cash out Used to simultaneously exit a risk position and purchase a commodity. It is the only way in which wealth can leave the network (as commodities).\\\nNote: The cases above are post-netting trades. There may be one or more intermediate trades, or a combination of the above as the matching algorithm attempts to find offer matching routes.\\\n-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\\\n: Figure 10.14 Cross-token exchanges\\\nTwo simple points, among many, can be drawn from Figure 10.4. First, commodity tokens can be used for the acquisition of stake or other commodities, or they can be used to clear credit. The latter is the closest to a commodity token being thought of as 'money.' The network validation of an output does not generate cash, but the clearing of credit. Second, exogenous money (fiat or cryptocoins) can enter and leave the network as commodities. This means that fiat can be used indirectly for the purchase of stake or commodities or the clearing of credit, and commodity outputs can be conveyed to fiat. The exchange rate will be determined by offers on the network, and this will regulate the incentives to move assets between fiat and the Economic Space Protocol unit of exchange.";
        string memory description = problematicOne;
        string memory image = generateUnit(tokenId);

        string[] memory traitValues = new string[](TRAIT_TYPES.length);
        for (uint256 i = 0; i < TRAIT_TYPES.length; i++) {
            traitValues[i] = getTraitValue(i, tokenId);
        }

        string memory attributes = buildAttributes(TRAIT_TYPES, traitValues);

        string memory metadata = encodeMetadata(name, description, image, attributes);
        emit TokenURI(metadata);
        return metadata;
    }
    function getAlreadyMintedTokenIds() public view returns (uint256[] memory){
        return _alreadyMintedTokenIds;
    }

    function mintById(uint256 tokenId) public {
        require(!_exists(tokenId), "Token with this ID already exists"); // Make sure this token hasn't been minted yet
        _alreadyMintedTokenIds.push(tokenId);
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, getTokenURI(tokenId));
    }
    function buildAttributes(string[] memory traitTypes, string[] memory traitValues) internal pure returns (string memory) {
        string memory attributes = "[";

        for (uint256 i = 0; i < traitTypes.length; i++) {
            // if (i == 5 && keccak256(abi.encodePacked(traitValues[i])) == keccak256(abi.encodePacked("0"))) {
            //     // Don't append the "FOOTNOTE" trait
            //     continue;
            // }
            // if (i == 1 && keccak256(abi.encodePacked(traitValues[6])) == keccak256(abi.encodePacked("No"))) {
            //     // Don't append the "FIGURE" trait
            //     continue;
            // }
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
        if (index == 0) return "0";
        if (index == 1) return "N/a";
        if (index == 2) return "10";
        if (index == 3) return "10.5";
        if (index == 4) return "N/a";
        if (index == 5) return "0";
        if (index == 6) return "N/a";
        if (index == 7) return "Very Long";
        if (index == 8) return "-2";
        if (index == 9) return "4";
        if (index == 10) return "-2";
        if (index == 11) return "financial autonomy";
        if (index == 12) return "financial option";
        if (index == 13) return "postcapitalistic autonomy";
        return ""; // Handle the default case
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