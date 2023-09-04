pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later
import "../IStorage.sol";

// 46 per contract
contract FootnoteStorage8 is IStorage{
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
    footnotes.push("N/a"); //324
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[94] Something approximating this statement appears in Graham and David Dodd\\u2019s 1934 book _Security Analysis_: the original text on investing according to a company\\u2019s \\u2018fundamentals.\\u2019 The specific statement, however, is not in the book. It is often simply attributed to Graham, most notably by one of his students, Warren Buffett. See also Appendix 5.1 for elaboration.");
       footnotes.push("[95] The focus here is on outputs (for they are what is recorded in the ledger) although reference is to outputs whose outcomes have been validated by the network.");

	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[96] See Appendix 5.2 for elaboration.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[97] See Chapter 1.4 for this differentiation.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[98] Graham was Warren Buffett\\u2019s teacher/mentor. Buffett has written an introduction to later editions of _Security Analysis_.");
	footnotes.push("N/a");
	       footnotes.push("[99] Tesla did not turn a profit between 2002 and 2019 yet its capital value was greater than Toyota, despite the fact that it produced less than 5 percent of the number of vehicles produced by Toyota.");
       footnotes.push("[100] The proportion of these companies\\u2019 assets classified as intangible is: Alphabet, 73 percent; Amazon, 81 percent; Apple, 96 percent; Microsoft, 93 percent; and Tesla 94 percent. See Brand Finance (2022).\\n [101] Reference here is to the emergence of so-called ESG accounting to sit along profit and loss accounts. But as ESG accounts are scarcely quantified, they sit largely as ethical qualifiers to standard accounts; not as an alternative way of measuring.");

	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[102] Sraffa was not particularly an advocate of \\u2018market socialism\\u2019: a term which arose in the context of the 1920s Socialist Calculation Debate which Hayek claimed to have mastered (see Chapter 2.4). The proposition here is simply that he describes a surplus that could be framed in the context of \\u2018market socialism.\\u2019");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a"); //369
    // END OF 1st DEPLOYMENT
    }
    function set(uint256 location, string calldata _unit) external {
        footnotes[location] = _unit;
    }
    function getById(uint256 id) external override returns (string memory unit) {
		return footnotes[id];
	}

}