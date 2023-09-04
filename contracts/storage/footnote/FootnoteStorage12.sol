pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later
import "../IStorage.sol";

// 46 per contract
contract FootnoteStorage12 is IStorage{
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
	//512
           footnotes.push("[148] Marx saw these circuits as describing the path of individual companies and also the economy as a whole. The latter would be seen as a set of intersecting circuits where the output of one company is the input of another; the money revenue of one industrial process is shifted to fund another, etc.. These intersections are the focus of Leontiev\\u2019s input-output analysis. We will not extend our analysis in this way, but it is consistent with that project.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[149] In the Marxian circuit, the return to the \\u2018starting point\\u2019 designates expanded value, acquired by the extraction of surplus value from labor. In our terms it would be a Pe\\u2013Pe circuit. But in the circuit of the new economic space, there is no process of surplus extraction from producers, so the circuit\\u2019s growth is via replication, not extraction.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[150] \\u2018Modern portfolio theory\\u2019 tells us that the value of the whole is not simply found in adding up component prices: the composite risk profile impacts valuation.");
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
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[151] Outside money (Gurley and Shaw, 1960) could be fiat currencies or other forms like bitcoin. For simplicity we will represent outside money as \\u2019 dollars.\\u2019");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[152] In effect, the distinction between \\u2018noise\\u2019 and \\u2018real information\\u2019 (Black, 1986) cannot be known in advance.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a"); // 557
    }
    function set(uint256 location, string calldata _unit) external {
        footnotes[location] = _unit;
    }
    function getById(uint256 id) external override returns (string memory unit) {
		return footnotes[id];
	}

}