pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later
import "../IStorage.sol";

// 46 per contract
contract FootnoteStorage6 is IStorage{
    string[] public footnotes;
    
    // set to onlyOwner()
    // check if value exists - 
    // dont't forget to include SPECIAL CHARACTERS IN SVGENERATOR FROM THIS FILE! 
    // characters:
    // § (unicode -  \u00A7 ), check SVG compatible thing! 
    // Š ( unicode - \u0160 ), check SVG compatible thing!
    // ó ( unicode - \u00F3), check SVG compatible thing!
    //               \u2019
    //              \u00A72
    constructor(){
    footnotes.push("N/a"); //230
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	// added missing unit here
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[77] The effect is a distributed _economic intellect_, referring to Marx\\u2019s notion of the _general intellect_, which in its turn refers to the final phase of capitalism, where capital itself generates the seed of its destruction when knowledge and social powers of interaction replace direct labor and labor time at the core of the production of wealth. See Virtanen (2006).");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[78] Stakers could, for this purpose, be considered participants. They could make their staking conditional on the performance offer having a certain structure, including its social relations in production. Furthermore, we expect performing relations to become a new value layer: a critical performance outcome.");
       footnotes.push("[79] See L\\u00F3pez, J. \\u2018Network Performance: Distributed Computing Protocol.\\u2019 http://network-performance.manifold.one");

	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[80] The network holds all records, of which the ledger is just one type; for example, records of offers made, even if they do not get a match. Moreover, it warrants emphasizing that it is performances that encode information with meaning.\\n [81] By \\u2018+\\u2019 in this context we mean simply \\u2018in combination with,\\u2019 where combinations may be expressed in any way that is deemed to have economic significance.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[82] Sraffa (1960) proposes a Marx-compatible approach to value that is not centered on labor time. We admire this work as opening a way of framing value in a postcapitalist economy. In acknowledging Sraffa, we might call our own approach \\u2018production of performances by means of performances.\\u2019");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a"); //276
    }
    function set(uint256 location, string calldata _unit) external {
        footnotes[location] = _unit;
    }
    function getById(uint256 id) external override returns (string memory unit) {
		return footnotes[id];
	}

}