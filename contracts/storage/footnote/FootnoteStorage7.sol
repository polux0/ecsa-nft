pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later
import "../IStorage.sol";

// 46 per contract
contract FootnoteStorage7 is IStorage{
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
    // 277
	footnotes.push("[83] The proposition is not that labor theories of value cannot explain intangibles like software, for the labor of the software designer could indeed be counted. It is that little about the significance of software in value formation is going to be explained by this attribution.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[84] We are aware of Marx\\u2019s concept of _socially necessary_ labor time, making acceptance of a commodity in the market a condition of value. The point here is consistent with that condition of value.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[85] We acknowledge here the contribution of Pamela Hansford who brought this literature to our attention and advised on its application.");
	footnotes.push("N/a");
	       footnotes.push("[86] Social impact bonds are said to have been first invented by a New Zealand economist Ronnie Horesh in 1988.");
       footnotes.push("[87] In practice, the investors do not lose all their money. Governments\\u2019 desires to promote the policy have tended to set generous terms for investors.");

	footnotes.push("N/a");
	       footnotes.push("[88] Social impact bonds involve the government funding an experimental intervention to determine whether it should receive on-going state funding. They were never designed to be on-going modes of service provision, for a repeat of the same intervention involves no calculation of investor risk, and hence no rationale for investor return.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[89] The questions of how, when and how often to measure outcomes have become big questions in public sector use of the evaluation framework, as they will be in a new economic space.");
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
	// added missing unit
	footnotes.push("N/a");
	       footnotes.push("[90] For Marx, this stage was directly contingent on advanced technology developed in capitalism and involved the proletariat freeing itself of capitalist class relations so that this individual expressiveness and free association could flourish. This technological development and its social conditions Marx referred to the \\u2018force of production\\u2019 or \\u2018productive forces.\\u2019 In the words of Marx:\\n The appropriation of these forces [of production] is itself nothing more than the development of the individual capacities corresponding to the material instruments of production. The appropriation of a totality of instruments of production is, for this very reason, the development of a totality of capacities in the individuals themselves . . . .\\n This appropriation is further determined by the manner in which it must be effected through a union Only at this stage does self-activity coincide with material life, which corresponds with the development of individuals into complete individuals and the casting off of all natural limitations. (Marx 1854, Part 1, Section D)");
       footnotes.push("[91] There is nonetheless ambiguity here, especially about how profit is defined and the time horizon for profit maximization.");

	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[92] The mechanics of this process are examined in Chapter 10.2.");
       footnotes.push("[93] See L\\u00F3pez, J. \\u2018Market shares: Distributed Staking Protocol.\\u2019 http://marketshares.manifold.one");

	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a"); //323
    }
    function set(uint256 location, string calldata _unit) external {
        footnotes[location] = _unit;
    }
    function getById(uint256 id) external override returns (string memory unit) {
		return footnotes[id];
	}

}