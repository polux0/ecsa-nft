pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later
import "../storage/IStorage.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract ChapterStorageFacade is Ownable{
    struct Range {
        // rename this
        address storageContract;
        uint256 start;
        uint256 end;
    }

    // ( Double checked! )
    // Mapping of current state of the contracts ( 2nd iteration of NFT cosmetics - should be final for `Chapter` )
    // ChapterStorage1 = 1 - 366
    // ChapterStorage2 = 367 - 739

    Range[] ranges;

    constructor(address[] memory chapterStorage, uint256[] memory startRange, uint256[] memory endRange){
        for (uint256 i = 0; i < chapterStorage.length; i++) 
        {
            Range memory chapterStorageRange = Range({storageContract:chapterStorage[i], start:startRange[i], end: endRange[i] });
            ranges.push(chapterStorageRange);
        }
    }
    function updateRange(uint256 index, address newStorageContract, uint256 newStart, uint256 newEnd) public onlyOwner {
        require(index < ranges.length, "Invalid index");

        ranges[index].storageContract = newStorageContract;
        ranges[index].start = newStart;
        ranges[index].end = newEnd;
    }
    function _getBasedOnId(uint256 id) public view returns (address storageAddress, uint256 storageInterpolatedId){
    

    // only if it's 2nd, 3rd or nth contract - there is no need for idInterpolation for the first contract
    if(id > ranges[0].end){
        for(uint256 i = 0; i < ranges.length; i++){
            if(id >= ranges[i].start && id <= ranges[i].end){
                // return the address
                storageAddress = ranges[i].storageContract;
                storageInterpolatedId = id - ranges[i].start;
            }
        }
        // Add a return statement here to handle the case when id doesn't match any range
        return (storageAddress, storageInterpolatedId);
    } else {
        return (ranges[0].storageContract, id);
    }
    }

    function getUnitBasedOnId(uint256 id) public returns (string memory){
        (address storageAddress, uint256 storageInterpolatedId) = _getBasedOnId(id);
        IStorage unit = IStorage(storageAddress);
        return unit.getById(storageInterpolatedId);
    }


}