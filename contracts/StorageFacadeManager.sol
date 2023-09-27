pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later

/// ============ Imports ============
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol"; // OZ: Ownable
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol"; // OZ: IERC20
import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol"; // OZ: IERC721;
import { ChapterStorageFacade } from "./facades/ChapterStorageFacade.sol";
import { FigureStorageFacade } from "./facades/FigureStorageFacade.sol";
// import { FootnoteStorageFacade } from "./facades/FootnoteStorageFacade.sol";
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

contract StorageFacadeManager is Ownable{
    address []storageFacades;
    // FootnoteStorageFacade foonoteStorageFacade;
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

    // Unit ( Not a metadata )
    // Metadata:
    // - Footnote 
    // - Figure
    // - Chapter
    // - Section
    // - Heading
    // - NumFootnotes
    // - Inlcudes figure
    // - Length
    // - X
    // - Y
    // - Z
    // - Unit descriptor: Nodewords
    // - NetwordedA
    // - Networded B

    constructor(address[] memory _storageFacades){
        storageFacades = _storageFacades;
        // foonoteStorageFacade = FootnoteStorageFacade(storageFacades[0]); 
        figureStorageFacade = FigureStorageFacade(storageFacades[0]); 
        chapterStorageFacade = ChapterStorageFacade(storageFacades[1]); 
        sectionStorageFacade = SectionStorageFacade(storageFacades[2]); 
        headingStorageFacade = HeadingStorageFacade(storageFacades[3]); 
        numFootnotesStorageFacade = NumFootnotesStorageFacade(storageFacades[4]); 
        includesFigureStorageFacade = IncludesFigureStorageFacade(storageFacades[5]); 
        lengthStorageFacade = LengthStorageFacade(storageFacades[6]); 
        xStorageFacade = XStorageFacade(storageFacades[7]); 
        yStorageFacade = YStorageFacade(storageFacades[8]); 
        zStorageFacade = ZStorageFacade(storageFacades[9]); 
        unitDescriptorStorageFacade = UnitDescriptorStorageFacade(storageFacades[10]);
        networdedAStorageFacade = NetwordedAStorageFacade(storageFacades[11]); 
        networdedBStorageFacade = NetwordedBStorageFacade(storageFacades[12]); 
        unitStorageFacade = UnitStorageFacade(storageFacades[13]);
    }
    // Getter for the entire array
    function getStorageFacades() external view returns (address[] memory) {
        return storageFacades;
    }

    // Getter for a specific index in the array
    function getStorageFacadeAt(uint256 index) external view returns (address) {
        require(index < storageFacades.length, "Index out of bounds");
        return storageFacades[index];
    }

    // Setter for the entire array
    function setStorageFacades(address[] memory _storageFacades) external onlyOwner {
        storageFacades = _storageFacades;
    }

    // Setter to update a specific index in the array
    function setStorageFacadeAt(uint256 index, address _storageFacade) external onlyOwner {
        require(index < storageFacades.length, "Index out of bounds");
        storageFacades[index] = _storageFacade;
    }

    // Function to add a new address to the array
    function addStorageFacade(address _storageFacade) external onlyOwner {
        storageFacades.push(_storageFacade);
    }

    // Function to remove the last address from the array
    function removeLastStorageFacade() external onlyOwner {
        require(storageFacades.length > 0, "No items to remove");
        storageFacades.pop();
    }
    // Getters
    // function getFootnoteStorageFacade() external view returns (FootnoteStorageFacade) {
    //     return foonoteStorageFacade;
    // }
    function getFigureStorageFacade() external view returns (FigureStorageFacade) {
        return figureStorageFacade;
    }

    function getChapterStorageFacade() external view returns (ChapterStorageFacade) {
        return chapterStorageFacade;
    }

    function getSectionStorageFacade() external view returns (SectionStorageFacade) {
        return sectionStorageFacade;
    }

    function getHeadingStorageFacade() external view returns (HeadingStorageFacade) {
        return headingStorageFacade;
    }

    function getNumFootnotesStorageFacade() external view returns (NumFootnotesStorageFacade) {
        return numFootnotesStorageFacade;
    }

    function getIncludesFigureStorageFacade() external view returns (IncludesFigureStorageFacade) {
        return includesFigureStorageFacade;
    }

    function getLengthStorageFacade() external view returns (LengthStorageFacade) {
        return lengthStorageFacade;
    }

    function getXStorageFacade() external view returns (XStorageFacade) {
        return xStorageFacade;
    }

    function getYStorageFacade() external view returns (YStorageFacade) {
        return yStorageFacade;
    }

    function getZStorageFacade() external view returns (ZStorageFacade) {
        return zStorageFacade;
    }

    function getUnitDescriptorStorageFacade() external view returns (UnitDescriptorStorageFacade) {
        return unitDescriptorStorageFacade;
    }

    function getNetwordedAStorageFacade() external view returns (NetwordedAStorageFacade) {
        return networdedAStorageFacade;
    }

    function getNetwordedBStorageFacade() external view returns (NetwordedBStorageFacade) {
        return networdedBStorageFacade;
    }

    function getUnitStorageFacade() external view returns (UnitStorageFacade) {
        return unitStorageFacade;
    }
    // Setters

    function setFigureStorageFacade(address _figureStorageFacade) external onlyOwner {
        figureStorageFacade = FigureStorageFacade(_figureStorageFacade);
    }

    function setChapterStorageFacade(address _chapterStorageFacade) external onlyOwner {
        chapterStorageFacade = ChapterStorageFacade(_chapterStorageFacade);
    }

    function setSectionStorageFacade(address _sectionStorageFacade) external onlyOwner {
        sectionStorageFacade = SectionStorageFacade(_sectionStorageFacade);
    }

    function setHeadingStorageFacade(address _headingStorageFacade) external onlyOwner {
        headingStorageFacade = HeadingStorageFacade(_headingStorageFacade);
    }

    function setNumFootnotesStorageFacade(address _numFootnotesStorageFacade) external onlyOwner {
        numFootnotesStorageFacade = NumFootnotesStorageFacade(_numFootnotesStorageFacade);
    }

    function setIncludesFigureStorageFacade(address _includesFigureStorageFacade) external onlyOwner {
        includesFigureStorageFacade = IncludesFigureStorageFacade(_includesFigureStorageFacade);
    }

    function setLengthStorageFacade(address _lengthStorageFacade) external onlyOwner {
        lengthStorageFacade = LengthStorageFacade(_lengthStorageFacade);
    }

    function setXStorageFacade(address _xStorageFacade) external onlyOwner {
        xStorageFacade = XStorageFacade(_xStorageFacade);
    }

    function setYStorageFacade(address _yStorageFacade) external onlyOwner {
        yStorageFacade = YStorageFacade(_yStorageFacade);
    }

    function setZStorageFacade(address _zStorageFacade) external onlyOwner {
        zStorageFacade = ZStorageFacade(_zStorageFacade);
    }

    function setUnitDescriptorStorageFacade(address _unitDescriptorStorageFacade) external onlyOwner {
        unitDescriptorStorageFacade = UnitDescriptorStorageFacade(_unitDescriptorStorageFacade);
    }

    function setNetwordedAStorageFacade(address _networdedAStorageFacade) external onlyOwner {
        networdedAStorageFacade = NetwordedAStorageFacade(_networdedAStorageFacade);
    }

    function setNetwordedBStorageFacade(address _networdedBStorageFacade) external onlyOwner {
        networdedBStorageFacade = NetwordedBStorageFacade(_networdedBStorageFacade);
    }

    function setUnitStorageFacade(address _unitStorageFacade) external onlyOwner {
        unitStorageFacade = UnitStorageFacade(_unitStorageFacade);
    }
}