pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later
import '../IStorage.sol';

contract SectionStorage1 is IStorage{
    string[] public sections;
    
    // set to onlyOwner()
    // check if value exists - 
    constructor(){
    sections.push("");
    sections.push("N/a"); // 1
    // added missing unit
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a"); //41
    // added missing unit
    sections.push("1.1");
    sections.push("1.1");
    sections.push("1.1");
    sections.push("1.1");
    sections.push("1.1");
    sections.push("1.1");
    sections.push("1.1");
    sections.push("1.1");
    sections.push("1.1");
    sections.push("1.1");
    sections.push("1.1");
    sections.push("1.1");
    sections.push("1.1");
    sections.push("1.1");
    sections.push("1.1");
    sections.push("1.1");
    sections.push("1.1");
    sections.push("1.1");
    sections.push("1.1");
    sections.push("1.1"); // 61
    // removed unit
    sections.push("1.2");
    sections.push("1.2");
    sections.push("1.2");
    sections.push("1.2");
    sections.push("1.2");
    sections.push("1.2");
    sections.push("1.2");
    sections.push("1.2");
    sections.push("1.2");
    sections.push("1.2");
    sections.push("1.2");
    sections.push("1.2");
    sections.push("1.2");
    sections.push("1.2"); // 75
    sections.push("1.3");
    sections.push("1.3");
    sections.push("1.3");
    sections.push("1.3");
    sections.push("1.3");
    sections.push("1.3");
    sections.push("1.3");
    sections.push("1.3");
    sections.push("1.3");
    sections.push("1.3"); // 85
    sections.push("1.4");
    sections.push("1.4");
    sections.push("1.4");
    sections.push("1.4");
    sections.push("1.4");
    sections.push("1.4");
    sections.push("1.4");
    sections.push("1.4"); // 93
    sections.push("1.5");
    sections.push("1.5");
    sections.push("1.5");
    sections.push("1.5");
    sections.push("1.5");
    sections.push("1.5");
    sections.push("1.5");
    sections.push("1.5");
    sections.push("1.5");
    sections.push("1.5");
    sections.push("1.5");
    sections.push("1.5"); // 105
    sections.push("1.6");
    sections.push("1.6");
    sections.push("1.6");
    sections.push("1.6");
    sections.push("1.6");
    sections.push("1.6"); // 111
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a"); //123
    sections.push("2.1");
    sections.push("2.1");
    sections.push("2.1");
    sections.push("2.1"); // 127
    sections.push("2.2");
    sections.push("2.2");
    sections.push("2.2");
    sections.push("2.2");
    sections.push("2.2");
    sections.push("2.2");
    sections.push("2.2");
    sections.push("2.2");
    sections.push("2.2"); // 136
    sections.push("2.3");
    sections.push("2.3");
    sections.push("2.3");
    sections.push("2.3");
    sections.push("2.3");
    sections.push("2.3");
    sections.push("2.3");
    sections.push("2.3");
    sections.push("2.3");
    sections.push("2.3");
    sections.push("2.3");
    sections.push("2.3");
    sections.push("2.3"); // 149
    sections.push("2.4");
    sections.push("2.4");
    sections.push("2.4");
    sections.push("2.4");
    sections.push("2.4");
    sections.push("2.4");
    sections.push("2.4");
    sections.push("2.4");
    sections.push("2.4");
    sections.push("2.4");
    sections.push("2.4");
    sections.push("2.4");
    sections.push("2.4"); // 162
    sections.push("2.5");
    sections.push("2.5");
    sections.push("2.5");
    sections.push("2.5");
    sections.push("2.5");
    sections.push("2.5");
    sections.push("2.5"); // 169
    sections.push("2.6");
    sections.push("2.6");
    sections.push("2.6");
    sections.push("2.6");
    sections.push("2.6");
    sections.push("2.6");
    sections.push("2.6");
    sections.push("2.6");
    sections.push("2.6");
    sections.push("2.6");
    sections.push("2.6");
    sections.push("2.6"); //181
    sections.push("2.7");
    sections.push("2.7"); //183
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a"); // 191
    sections.push("3.1");
    sections.push("3.1");
    sections.push("3.1");
    sections.push("3.1");
    sections.push("3.1");
    sections.push("3.1");
    // added missing unit
    sections.push("3.1"); // 198
    sections.push("3.2");
    sections.push("3.2");
    sections.push("3.2");
    sections.push("3.2");
    sections.push("3.2");
    sections.push("3.2");
    sections.push("3.2"); // 205
    sections.push("3.3");
    sections.push("3.3");
    sections.push("3.3"); // 208
    sections.push("3.4");
    sections.push("3.4");
    sections.push("3.4");
    sections.push("3.4");
    sections.push("3.4");
    sections.push("3.4");
    sections.push("3.4");
    sections.push("3.4");
    sections.push("3.4"); // 217
    sections.push("3.5");
    sections.push("3.5");
    sections.push("3.5");
    sections.push("3.5"); // 221
    sections.push("3.6");
    sections.push("3.6");
    sections.push("3.6");
    sections.push("3.6");
    sections.push("3.6"); // 226
    sections.push("3.7");
    sections.push("3.7");
    sections.push("3.7");
    sections.push("3.7");
    sections.push("3.7");
    sections.push("3.7");
    sections.push("3.7");
    sections.push("3.7");
    sections.push("3.7"); // 235
    sections.push("3.8");
    sections.push("3.8");
    sections.push("3.8");
    sections.push("3.8");
    sections.push("3.8");
    sections.push("3.8");
    sections.push("3.8"); // 242
    sections.push("3.9");
    sections.push("3.9");
    sections.push("3.9");
    sections.push("3.9");
    sections.push("3.9"); // 247
    sections.push("N/a"); //248
    sections.push("4.1");
    sections.push("4.1");
    sections.push("4.1");
    sections.push("4.1");
    sections.push("4.1"); // 253
    sections.push("4.2");
    sections.push("4.2");
    sections.push("4.2");
    sections.push("4.2"); // 257
    sections.push("4.3");
    sections.push("4.3");
    sections.push("4.3");
    sections.push("4.3");
    sections.push("4.3");
    sections.push("4.3");
    sections.push("4.3"); // 264
    sections.push("4.4");
    sections.push("4.4");
    sections.push("4.4");
    sections.push("4.4");
    sections.push("4.4");
    sections.push("4.4"); // 270
    sections.push("4.5");
    sections.push("4.5");
    sections.push("4.5");
    sections.push("4.5");
    sections.push("4.5");
    sections.push("4.5");
    sections.push("4.5");
    sections.push("4.5");
    sections.push("4.5");
    sections.push("4.5");
    sections.push("4.5");
    sections.push("4.5");
    sections.push("4.5"); // 283
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a"); // 309
    sections.push("5.1");
    sections.push("5.1");
    sections.push("5.1");
    sections.push("5.1");
    sections.push("5.1");
    sections.push("5.1");
    sections.push("5.1");
    sections.push("5.1");
    // added missing unit
    sections.push("5.1"); // 318
    sections.push("5.2");
    sections.push("5.2");
    sections.push("5.2");
    sections.push("5.2");
    sections.push("5.2");
    sections.push("5.2");
    sections.push("5.2");
    sections.push("5.2");
    sections.push("5.2");
    sections.push("5.2");
    sections.push("5.2");
    sections.push("5.2");
    sections.push("5.2");
    sections.push("5.2"); // 332
    sections.push("5.3");
    sections.push("5.3");
    sections.push("5.3");
    sections.push("5.3");
    sections.push("5.3"); //337
    sections.push("5.4");
    sections.push("5.4"); // 339
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a"); //366
    }
    function set(uint256 location, string calldata _unit) external {
        sections[location] = _unit;
    }
    function getById(uint256 id) external override returns (string memory unit) {
		return sections[id];
	}


}