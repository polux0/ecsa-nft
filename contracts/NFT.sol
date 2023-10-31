pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later

/// ============ Imports ============
import { ERC721URIStorage } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol"; // OZ: ERC721URIStorage 
// import { ERC721Enumerable } from "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { Counters } from "@openzeppelin/contracts/utils/Counters.sol"; // OZ: Counters
import { Strings } from "@openzeppelin/contracts/utils/Strings.sol"; // OZ: Strings
import { Base64 } from "@openzeppelin/contracts/utils/Base64.sol"; // OZ: Base64
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol"; // OZ: Ownable
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol"; // OZ: IERC20
import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol"; // OZ: IERC721;
// metadata
import { NFTMetadata } from "./NFTMetadata.sol";
// reservation
import { ReservationStorage } from "./reservations/ReservationStorage.sol";
// invitation
import { InvitationStorage } from "./invitations/InvitationStorage.sol";
// libraries

contract NFT is ERC721URIStorage, Ownable{
    using Strings for uint256;
    using Counters for Counters.Counter;
    NFTMetadata public nftMetadata;
    uint256[] public _alreadyMintedTokenIds;
    Counters.Counter private _tokenIds;
    uint256 private peripheryPrice = 16 ether;
    uint256 private peripheryBookPrice = 90 ether;
    uint256 private imperialCorePrice = 32 ether;
    uint256 private imperialCoreBookPrice = 180 ether;
    mapping(uint256 => uint256) public tokenPurchasePrice;
    mapping(address => bool) public hasMinted;
    ReservationStorage reservationContract;
    InvitationStorage invitationsContract;
    bool reservationsActive = true;
    bool invitationsActive = true;
    bool public isOwnerOnlyMode = true;

    modifier canChangeAttributes() {
        if (isOwnerOnlyMode) {
            require(msg.sender == owner(), "Only the owner can call this function in owner-only mode");
        }
        _;
    }
    constructor(address _nftMetadata, address reservationContractAddress, address invitationsContractAddress) ERC721("PROTOCOLS FOR POST-CAPITALIST ECONOMIC EXPRESSION04.10.2023", "ECSANFT"){
        //transferOwnership(owner);
        nftMetadata = NFTMetadata(_nftMetadata);
        reservationContract = ReservationStorage(reservationContractAddress);
        invitationsContract = InvitationStorage(invitationsContractAddress);
    }
    function changeAttributes(uint256 tokenId, string memory newTokenURI) public canChangeAttributes{
    require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: caller is not owner nor approved");
        _setTokenURI(tokenId, newTokenURI); 
    }
    function getAlreadyMintedTokenIds() public view returns (uint256[] memory){
        return _alreadyMintedTokenIds;
    }
    function mintByReservation(uint256 tokenId, string memory reservationId, uint256 chosenPrice) public payable{
        require(reservationsActive, "Reservations are not active");
        require(reservationContract.isValidReservation(reservationId, tokenId), "Invalid reservation");
        reservationContract.setIsUsed(tokenId);
        mintBase(tokenId, chosenPrice);
    }
    function mintByInvitation(uint256 tokenId, string memory invitationId, uint256 chosenPrice) public payable{
        require(invitationsActive, "Invitations are not active");
        if(reservationContract.isReserved(tokenId)){
            require(!reservationsActive, "Token is reserved");
        }
        require(invitationsContract.isValidInvitation(invitationId), "Invalid invitation");
        invitationsContract.setIsUsed(invitationId);
        mintBase(tokenId, chosenPrice);
    }
    function mintById(uint256 tokenId, uint256 chosenPrice) public payable {
        // was before
        // require(!reservationsActive && !invitationsActive, "Invitations & Reservations are still active");
        // added now
        if(reservationContract.isReserved(tokenId)){
            require(!reservationsActive, "Token is reserved");
        }
        require(!invitationsActive, "Invitations are still active");
        require(validPrice(chosenPrice), "Invalid chosen price");
        require(msg.value >= chosenPrice, "Ether value sent is not correct");
        require(!_exists(tokenId), "Token with this ID already exists");
        require(!hasMinted[msg.sender], "You have already minted an NFT from this collection.");

        _alreadyMintedTokenIds.push(tokenId);
        hasMinted[msg.sender] = true;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, nftMetadata.getTokenURI(tokenId));
    }
    // mint base
    function mintBase(uint256 tokenId, uint256 chosenPrice) internal {
        require(!_exists(tokenId), "Token with this ID already exists");
        require(validPrice(chosenPrice), "Invalid chosen price");
        require(msg.value >= chosenPrice, "Ether value sent is not correct");
        require(tokenId <= 601, "Token ID greater than allowed maximum");
        require(!hasMinted[msg.sender], "You have already minted an NFT from this collection.");

        tokenPurchasePrice[tokenId] = chosenPrice;
        _alreadyMintedTokenIds.push(tokenId);
         hasMinted[msg.sender] = true;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, nftMetadata.getTokenURI(tokenId));
    }
    // function mintBaseTest(uint256 tokenId) public {
    //     require(!_exists(tokenId), "Token with this ID already exists");
    //     // require(validPrice(chosenPrice), "Invalid chosen price");
    //     // require(msg.value >= chosenPrice, "Ether value sent is not correct");
    //     require(tokenId <= 601, "Token ID greater than allowed maximum");
    //     // require(!hasMinted[msg.sender], "You have already minted an NFT from this collection.");

    //     // tokenPurchasePrice[tokenId] = chosenPrice;
    //     _alreadyMintedTokenIds.push(tokenId);
    //      hasMinted[msg.sender] = true;
    //     _safeMint(msg.sender, tokenId);
    //     _setTokenURI(tokenId, nftMetadata.getTokenURI(tokenId));
    // }
    
    function getReservationsActive() external view returns(bool) {
        return reservationsActive;
    }

    function setReservationsActive(bool _status) external onlyOwner {
        reservationsActive = _status;
    }

    function getInvitationsActive() external view returns(bool) {
        return invitationsActive;
    }

    function setInvitationsActive(bool _status) external onlyOwner {
        invitationsActive = _status;
     }

    function validPrice(uint256 price) internal view returns (bool) {
        return price == peripheryPrice || price == peripheryPrice + peripheryBookPrice || price == imperialCorePrice || price == imperialCorePrice + imperialCoreBookPrice; 
    }

    function getPriceForTokenId(uint256 tokenId) public view returns (uint256) {
        return tokenPurchasePrice[tokenId];
    }
    function getPeripheryPrice() external view returns(uint256) {
        return peripheryPrice;
    }
    function getPeripheryBookPrice() external view returns(uint256) {
        return peripheryBookPrice;
    }
    function getImperialCorePrice() external view returns(uint256) {
        return peripheryPrice;
    }
    function getImperialCoreBookPrice() external view returns(uint256) {
        return peripheryPrice;
    }  
    function setPeripheryPrice(uint256 _peripheryPrice) external onlyOwner {
        peripheryPrice = _peripheryPrice;
    }
    function setPeripheryBookPrice(uint256 _peripheryBookPrice) external onlyOwner {
        peripheryBookPrice = _peripheryBookPrice;
    }
    function setImperialCorePrice(uint256 _peripheryPrice) external onlyOwner {
        peripheryPrice = _peripheryPrice;
    }
    function setImperialCoreBookPrice(uint256 _peripheryPrice) external onlyOwner {
        peripheryPrice = _peripheryPrice;
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
    function withdrawEther(address to) public onlyOwner{
        address payable recipient = payable(to);
        (bool succeed, bytes memory data) = recipient.call{value: address(this).balance}(""); 
        require(succeed, "Failed to withdraw Ether");
    }
    
}