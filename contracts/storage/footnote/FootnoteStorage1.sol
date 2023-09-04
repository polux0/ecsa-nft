pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later
import "../IStorage.sol";

// 46 per contract
contract FootnoteStorage1 is IStorage {
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
    constructor() {
        footnotes.push(" ");
        //added missing unit
        footnotes.push("N/a");//1
        footnotes.push("N/a");
        footnotes.push("N/a");
        footnotes.push("N/a");
        footnotes.push("N/a");
        footnotes.push("N/a");
        footnotes.push("N/a");
        footnotes.push("N/a");
        footnotes.push("[1] Information has emerged dialectically as the most general form for the products of capitalism defined as having both use-value and exchange value. Because of its abstract character, it is often forgotten that information must have a material substrate, be it the standard commodity or an array of atoms on a computer chip. For the briefest of sketches, consider that the commodity was always composed of readable material differences, differences in matter created through labor. As a wager to get from M to M\\u2032, the commodity\\u2019s market legibility as a significant state of informed matter (a \\u2018hieroglyph\\u2019) has become increasingly computational. For my take on the networked commodity and the intimate connections between computing and capital see Beller (2017 and 2021). In each text I develop the argument that the general formula for capital can be rewritten M-I-M\\u2032, where M is money and I is information: Information replaces the commodity \\u2018C\\u2019 in Marx\\u2019s classic formulation M-C-M\\u2032.");        footnotes.push("N/a");
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
        footnotes.push("[2] Whatever its specific embodiment, the sovereign subject that dominates Western philosophy is the subject of property. 'He' is semiotically, psychologically ideologically, and materially constituted through 'his' whiteness and cis-masculinity, the outputs of the representational and material systems that are among his dividends from colonization and slavery.");
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
        footnotes.push("N/a");
        footnotes.push("N/a");// 46
        // END OF 1st DEPLOYMENT
    }

    function set(uint256 location, string calldata _unit) external {
        footnotes[location] = _unit;
    }

    function getById(uint256 id) external override returns (string memory unit) {
		return footnotes[id];
	}
}