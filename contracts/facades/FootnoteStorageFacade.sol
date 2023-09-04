pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later
import "../storage/IStorage.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";


contract FootnoteStorageFacade is Ownable{
    struct Range {
        // rename this
        address storageContract;
        uint256 start;
        uint256 end;
    }

    // Mapping after Cosmetics of metadata ( 2nd iteration ) ( final for `UnitText`, and should be for `Footnote` as well )
    // Double checked
    // FootnoteStorage1 = 1 - 46
    // FootnoteStorage2 = 47 - 92
    // FootnoteStorage3 = 93 - 138
    // FootnoteStorage4 = 139 - 184
    // FootnoteStorage5 = 185 - 230
    // FootnoteStorage6 = 231 - 277
    // FootnoteStorage7 = 278 - 324
    // FootnoteStorage8 = 325 - 370
    // FootnoteStorage9 = 371 - 418
    // FootnoteStorage10 = 419 - 465
    // FootnoteStorage11 = 466 - 512
    // FootnoteStorage12 = 513 - 558
    // FootnoteStorage13 = 559 - 604
    // FootnoteStorage14 = 605 - 650
    // FootnoteStorage15 = 651 - 696
    // FootnoteStorage16 = 697 - 733
    // FootnoteStorage17 = 734 - 739
 

    Range[] ranges;

    constructor(address[] memory footnoteStorage, uint256[] memory startRange, uint256[] memory endRange){
        for (uint256 i = 0; i < footnoteStorage.length; i++) 
        {
            Range memory footnoteStorageRange = Range({storageContract:footnoteStorage[i], start:startRange[i], end: endRange[i] });
            ranges.push(footnoteStorageRange);
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
        // Check if storageAddress is the zero address
        (address storageAddress, uint256 storageInterpolatedId) = _getBasedOnId(id);
        // Check if storageAddress is the zero address
        if (storageAddress == address(0)) {
        // Handle the case when id doesn't match any range
        revert("No suitable range found for the given id");
        }
        IStorage unit = IStorage(storageAddress);
        return unit.getById(storageInterpolatedId);
    }


}