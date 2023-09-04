pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later
import "../storage/IStorage.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract UnitStorageFacade is Ownable{
    struct Range {
        // rename this
        address storageContract;
        uint256 start;
        uint256 end;
    }

    // Mapping after Cosmetics of metadata ( 3rd iteration ) ( final for `UnitText` )
    // UnitStorage1 = 1 - 20
    // UnitStorage2 = 21 - 39
    // UnitStorage3 = 40 - 58
    // UnitStorage4 = 59 - 77
    // UnitStorage5 = 78 - 96
    // UnitStorage6 = 97 - 116
    // UnitStorage7 = 117 - 135
    // UnitStorage8 = 136 - 154
    // UnitStorage9 = 155 - 173
    // UnitStorage10 = 174 - 192
    // UnitStorage11 = 193 - 211
    // UnitStorage12 = 212 - 230
    // UnitStorage13 = 231 - 249
    // UnitStorage14 = 250 - 268
    // UnitStorage15 = 269 - 287
    // UnitStorage16 = 288 - 306
    // UnitStorage17 = 307 - 326
    // UnitStorage18 = 327 - 345
    // UnitStorage19 = 346 - 364
    // UnitStorage20 = 365 - 383
    // UnitStorage21 = 384 - 402
    // UnitStorage22 = 403 - 421
    // UnitStorage23 = 422 - 440
    // UnitStorage24 = 441 - 459
    // UnitStorage25 = 460 - 478
    // UnitStorage26 = 479 - 497
    // UnitStorage27 = 498 - 517
    // UnitStorage28 = 518 - 536
    // UnitStorage29 = 537 - 555
    // UnitStorage30 = 556 - 574
    // UnitStorage31 = 575 - 593
    // UnitStorage32 = 594 - 612
    // UnitStorage33 = 613 - 635
    // UnitStorage34 = 636 - 654
    // UnitStorage35 = 655 - 674
    // UnitStorage36 = 675 - 693
    // UnitStorage37 = 694 - 714
    // UnitStorage38 = 715 - 735
    // UnitStorage39 = 736 - 739

    // Logic: 

    // ... examples - id = 456
    // for eachStorageContract get it's range
    // if `id` ( 456 ) fits the range, we first can store address of a contract ( unitStorage7 ).
    // contract found - address unitStorage7; // 410 - 489
    // then for range 410-489 ( difference is 79 ), ids are actually ( 0 - 79 )
    // so if it's not first contract ( it starts with 1 ), requested id = 456, in actual range of ids ( 0 - 79 ) is 33 ( if deduced by - toRange ), 46 if it is desired - from range  
    
    // set to onlyOwner()
    // check if value exists - 

    // this must be replaced by arrays unitStorageAddress[], startRange[], endRange[]
    // and then for...


    // ! previously working mapping -> Currently organizing mapping!
    
    Range[] ranges;

    constructor(address[] memory unitStorage, uint256[] memory startRange, uint256[] memory endRange){
        for (uint256 i = 0; i < unitStorage.length; i++) 
        {
            Range memory unitStorageRange = Range({storageContract:unitStorage[i], start:startRange[i], end: endRange[i] });
            ranges.push(unitStorageRange);
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