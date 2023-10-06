pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later
import "../IStorage.sol";

// 46 per contract
contract FootnoteStorage10 is IStorage{
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
	// 418 
           footnotes.push("[122] See the condition of recognition, described in relation to outputs, but applying in the same way to credit, in Chapter 4.3.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[123] Although this phrase could describe a Local Exchange Trading Systems (LETS), where the term \\u2018mutual credit\\u2019 is used to describe the creation of IOUs, we are referring to scalable, tokenized credit.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[124] This isn\\u2019t the skeptic\\u2019s view of banks and money creation, it is the view of the Bank of England. See McLeay, et al (2014) and Bank of England (2014).");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[125] Note the definition of shadow banking in footnote 24.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[126] Fleischman et al.(2020) offers an interesting twist on this proposition: the identification of credit loops which could be cleared by the temporary injection of an agreed monetary unit.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[127] It is only an appearance, and should always be acknowledged as such.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	// adding missing unit
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[128] Reference here is to a value theory of performance (Chapter 4.5).");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[129] The standard source of this critique is Graeber (2011).");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[130] His view was that while money could logically be denominated in any unit that has its own rate of interest (for example corn or coal, where the rate of interest is the change in its own price), the state\\u2019s money is superior for it is generally accepted. See Keynes 1936: Ch.17.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[131] See L\\u00F3pez, J. \\u2018Market offers: Distributed trading protocol.\\u2019 http://marketoffers.manifold.one");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[132] Here we are in parallel with Marx (1939: 259), explaining the development of the concept of capital:\\n . . . it is necessary to begin not with labor but with value, and, precisely, with exchange value as an already developed movement of circulation.");
       footnotes.push("[133] But note the caution expressed in Chapter 2.2.");

	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[134] This and the following chapter \\u2013 indeed the whole framing of token markets \\u2013 draws on the \\u2018money view\\u2019 of economic analysis of Perry Mehrling (n.d.). For a summary see Saeidinezhad (2020).");
	footnotes.push("N/a");
	       footnotes.push("[135] See L\\u00F3pez, J. \\u2018Market offers: Distributed trading protocol.\\u2019 http://marketoffers.manifold.one\\n [136] Liquidity comes with the capacity of the matching algorithm to increase matching opportunities.");
    // 464
	}
    function set(uint256 location, string calldata _unit) external {
        footnotes[location] = _unit;
    }
    function getById(uint256 id) external override returns (string memory unit) {
		return footnotes[id];
	}

}