pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later
import "../IStorage.sol";

contract ChapterStorage2 is IStorage{
    string[] public chapters;
    // technical debt
    // set to onlyOwner()
    // check if value exists - 
    constructor(){
        chapters.push("Appendix 5.2"); //366
        chapters.push("Appendix 5.2");
        chapters.push("Appendix 5.2");
        chapters.push("6");
        chapters.push("6");
        chapters.push("6");
        chapters.push("6");
        chapters.push("6");
        chapters.push("6");
        chapters.push("6");
        chapters.push("6");
        chapters.push("6");
        chapters.push("6");
        chapters.push("6");
        chapters.push("6");
        chapters.push("6");
        chapters.push("6");
        chapters.push("6");
        chapters.push("6");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        chapters.push("7");
        //added missing unit
        chapters.push("7");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        chapters.push("8");
        // added missing unit
        chapters.push("8");
        // added missing unit
        chapters.push("8");
        chapters.push("Appendix 8.1");
        chapters.push("Appendix 8.1");
        chapters.push("Appendix 8.1");
        chapters.push("Appendix 8.1");
        chapters.push("Appendix 8.1");
        chapters.push("Appendix 8.1");
        chapters.push("Appendix 8.1");
        chapters.push("Appendix 8.1");
        chapters.push("Appendix 8.1");
        chapters.push("9");
        chapters.push("9");
        chapters.push("9");
        chapters.push("9");
        chapters.push("9");
        chapters.push("9");
        chapters.push("9");
        chapters.push("9");
        chapters.push("9");
        chapters.push("9");
        chapters.push("9");
        chapters.push("9");
        chapters.push("9");
        chapters.push("9");
        chapters.push("9");
        chapters.push("9");
        chapters.push("9");
        chapters.push("9");
        chapters.push("9");
        chapters.push("9");
        chapters.push("Appendix 9.1");
        chapters.push("Appendix 9.1");
        chapters.push("Appendix 9.1");
        chapters.push("Appendix 9.1");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        chapters.push("10");
        // added missing unit
        chapters.push("10");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("11");
        chapters.push("12");
        chapters.push("12");
        chapters.push("12");
        chapters.push("12");
        chapters.push("12");
        chapters.push("12");
        chapters.push("12");
        chapters.push("12");
        chapters.push("12");
        chapters.push("12");
        chapters.push("12");
        chapters.push("12");
        chapters.push("12");
        chapters.push("12");
        chapters.push("12");
        chapters.push("12");
        chapters.push("12");
        chapters.push("12");
        chapters.push("12");
        chapters.push("12");
        chapters.push("12");
        chapters.push("Appendix 12.1");
        chapters.push("Appendix 12.1");
        chapters.push("Appendix 12.1");
        chapters.push("Appendix 12.1");
        chapters.push("Appendix 12.1");
        chapters.push("Appendix 12.2");
        chapters.push("Appendix 12.2");
        chapters.push("Appendix 12.2");
        chapters.push("Appendix 12.2");
        chapters.push("Appendix 12.2");
        chapters.push("Appendix 12.2");
        chapters.push("Appendix 12.2");
        chapters.push("Appendix 12.2");
        chapters.push("Appendix 12.2");
        chapters.push("Appendix 12.2");
        chapters.push("Appendix 12.2");
        chapters.push("Appendix 12.2");
        chapters.push("Appendix 12.2");
        chapters.push("13");
        chapters.push("13");
        chapters.push("13");
        chapters.push("13");
        chapters.push("13");
        chapters.push("13");
        chapters.push("13");
        chapters.push("13");
        chapters.push("13");
        chapters.push("13");
        chapters.push("13");
        chapters.push("13");
        chapters.push("13");
        chapters.push("13");
        chapters.push("13");
        chapters.push("13");
        chapters.push("13");
        chapters.push("13");
        chapters.push("13");
        chapters.push("13");
        chapters.push("13");
        chapters.push("13");
        chapters.push("13");
        chapters.push("13");
        // added missing unit
        chapters.push("13");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
        chapters.push("Glossary");
    }
    // technical debt
    // modifier
    function set(uint256 location, string calldata _unit) external {
        chapters[location] = _unit;
    }
    function getById(uint256 location) external override returns (string memory chapter) {
        return chapters[location];
    }
}