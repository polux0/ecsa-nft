// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol"; // OZ: Ownable

contract ReservationStorage is Ownable{
    
    struct Data {
        bytes32 reservationId;
        uint256 tokenId;
        bool isUsed;
    }
    event ReservationUsed(bytes32 reservationId);
    address public authorizedContract; 

    Data[] public dataArray;
    mapping(uint256 => Data) public dataMapping;

    constructor() {
        authorizedContract = _msgSender();
    }
    modifier onlyAuthorizedContract() {
        require(msg.sender == authorizedContract, "Caller is not the authorized contract");
        _;
    }
    function setAuthorizedContract(address _authorizedContract) external onlyOwner {
        authorizedContract = _authorizedContract;
    }
    function addData(bytes32 _reservationId, uint256 _tokenId) public {
        Data memory newData = Data({
            reservationId: _reservationId,
            tokenId: _tokenId,
            isUsed: false
        });
        dataArray.push(newData);
    }
    function addData(bytes32[] memory _reservationIds, uint256[] memory _tokenIds) public onlyOwner {
    require(_reservationIds.length == _tokenIds.length, "Mismatched arrays length");
        for (uint256 i = 0; i < _reservationIds.length; i++) {
            Data memory newData = Data({
                reservationId: _reservationIds[i],
                tokenId: _tokenIds[i],
                isUsed: false
            });
            dataArray.push(newData);
            // Update the mapping with the same data
            dataMapping[_tokenIds[i]] = newData;
        }
    }
    function updateDataByIndex(uint256 index, bytes32 _newReservationId, uint256 _newTokenId) public onlyOwner {
        require(index < dataArray.length, "reservation.updateDataByIndex: Index out of bounds");
        dataArray[index].reservationId = _newReservationId;
        dataArray[index].tokenId = _newTokenId;
    }

    function getData(uint256 index) public view returns (bytes32, uint256, bool) {
        require(index < dataArray.length, "reservation.getData: Index out of bounds");
        Data memory dataItem = dataArray[index];
        return (dataItem.reservationId, dataItem.tokenId, dataItem.isUsed);
    }
    function isReserved(uint256 _tokenId) public view returns (bool) {
        Data memory dataItem = dataMapping[_tokenId];
        if(dataItem.tokenId == 0){
            return false;
        }
        return !dataItem.isUsed;
    }
    function isValidReservation(string memory data, uint256 _tokenId) public view returns (bool) {
        bytes32 hashedData = keccak256(abi.encodePacked(data));
        Data storage dataItem = dataMapping[_tokenId]; // Use storage to modify the original data

        if(dataItem.tokenId == 0){
            return false;
        }
        if (hashedData == dataItem.reservationId && !dataItem.isUsed) {
            return true;
        }
        return false;
    }
    function setIsUsed(uint256 _tokenId) public onlyAuthorizedContract {
        Data storage dataItem = dataMapping[_tokenId];
        require(dataItem.tokenId != 0, "reservation.setIsUsed: Token ID not found");
        dataItem.isUsed = true;
        emit ReservationUsed(dataItem.reservationId);
    }
}
