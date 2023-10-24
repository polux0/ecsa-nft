// SPDX-License-Identifier: MIT

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

pragma solidity ^0.8.0;

contract InvitationStorage is Ownable{
    
    struct Data {
        bytes32 invitationId;
        uint256 isUsed;
    }
    event InvitationUsed(bytes32 invitationId);

    address public authorizedContract; 
    Data[] public dataArray;
    mapping(bytes32 => Data) public dataMapping;

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

    function addData(bytes32 _invitationData) public onlyOwner{
        Data memory newData = Data({
            invitationId: _invitationData,
            isUsed: 0
        });
        dataArray.push(newData);
        dataMapping[_invitationData] = newData;
    }

    function addDataBulk(bytes32[] memory _invitationDataArray) public onlyOwner{
        for (uint256 i = 0; i < _invitationDataArray.length; i++) {
            addData(_invitationDataArray[i]);
        }
    }
    function updateDataByIndex(uint256 index, bytes32 _newInvitationId) public onlyOwner {
        require(index < dataArray.length, "reservation.updateDataByIndex: Index out of bounds");
        dataArray[index].invitationId = _newInvitationId;
    }

    function getDataByInvitationId(bytes32 _invitationId) public view returns (bool) {
        Data memory dataItem = dataMapping[_invitationId];
        require(dataItem.invitationId != 0, "Invitation not found");
        return dataItem.isUsed >= 5;
    }

    function isValidInvitation(string memory data) public view returns (bool) {
        bytes32 hashedData = keccak256(abi.encodePacked(data));
        Data storage dataItem = dataMapping[hashedData];

        if(dataItem.invitationId == 0){
            return false;
        }
        if (dataItem.isUsed <= 5) {
            return true;
        }
        return false;
    }

    function setIsUsed(string memory data) public onlyAuthorizedContract {
        bytes32 hashedData = keccak256(abi.encodePacked(data));
        Data storage dataItem = dataMapping[hashedData];

        require(dataItem.invitationId != 0, "Invitation not found");

        dataItem.isUsed += 1;
        emit InvitationUsed(dataItem.invitationId);
    }
}
