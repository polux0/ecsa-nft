pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later
import "../IStorage.sol";

// 46 per contract
contract FootnoteStorage9 is IStorage{
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
    footnotes.push("N/a"); // 370
	       footnotes.push("[103] The Creative Commons, for example, issues licenses to enable free distribution of an author\\u2019s work for its further development. The license can limit the uses to which their work may be applied. See https://creativecommons.org.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[104] Direct staking is when two parties own a stake in each other. Transitive staking is where one party holds a staking exposure to another via a third party. If A holds stake in B and B holds stake in C, then A has a transitive staking exposure to C.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[105] The owners of stake in these performances receive yield in the form of appreciating stake price, but no _private_ dividends. It could be that each individual investor is prepared to forgo yield because of a commitment to the commons. Or it could be that this commitment is shared across the network, and demand for stake in these performances sees stake price escalate to \\u2018compensate,\\u2019 as it were, for the lack of private dividends.");
       footnotes.push("[106] \\u2018Not paid for\\u2019 should not create the impression that it only applies to the outputs which would \\u2018normally\\u2019 be sold. Perhaps a better term is that applies to outputs that can be attributed only a synthetic price, as per Chapter 4.3.\\n [107] Will any agent see a disincentive to hold stake in a performance which issues dividends to the commons, because they lose access to privately-accruing dividends? This would be a narrow reading of incentives, for to hold no stake in commons-linked performances would see this agent having limited access to the assets and products of the commons. So if the network as a whole judges a performance to be value-creating for the network, and its dividends are issued to the commons, each individual agent must hold some stake in that asset, directly or transitively, to access any part of the commons.");

	footnotes.push("N/a");
	       footnotes.push("[108] Reference here is to Marx\\u2019s slogan from his 1875 _Critique of the Gotha Programme_ (part 1):\\n \\u2018_From each according to his ability, to each according to his needs_.\\u2019");
       footnotes.push("[109] The possibility of decay to the commons, as a way to deal with the wealth effects of diverging stake prices, was raised in Chapter 5.2.");

	// adding missing unit
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[110] In the Socialist Calculation Debate, the principal area of disagreement between the advocates of central planning was what units should be recorded on ledgers: price or units of labor time or actual physical magnitudes of outputs and costs (called calculation _in-natura_).\\n [111] Analysis here would address the following sorts of practices: qualifying all exchanges as sales, so there can be no recording of outputs not for sale; seeking a positive delta between the sale price of inputs and the sale price of outputs, distributing this delta among shareholders, measuring an agent\\u2019s credit worthiness and making valuations of investors dependent on this delta, and making the rate of return or interest the mode of commensuration and the calculative information that informs agent decision making.");
	footnotes.push("N/a");
	       footnotes.push("[112] A tape measure can verify that some spoons are 20 cm long and others 22 cm. No computation is needed. But to say one spoon is worth $2 and another $12 rests on social conventions of attributing value.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[113] In Chapter 1 of _Capital_, Marx referred to the relative equivalent forms of value, with the equivalent form as the benchmark against which other commodities are measured. Money becomes the \\u2018universal equivalent.\\u2019\\n [114] The unit of exchange and the unit of credit are similar, in the way a 100 dollar bill and a 100 dollar check are similar. Even though they both use the dollars as the measurement, they are two distinct instruments that pertain to two distinct accounts and two distinct risks. This distinction is clear from an accounting perspective, although not so much from a general use perspective.\\n [115] On tick time, see Chapter 3.5.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[116] The principle of standardized capitalist accounting first emerged in the 1850s, along with the legalization of joint stock companies (companies with shareholders) and limited liability. Investors needed standard performance metrics so that they could compare corporations and make informed investment choices and state protection against responsibility for the legal consequences of corporate actions. We know that these standard metrics, conventions and rules have been constantly evolving since then, but the connection of ledgers to profit has remained throughout. See, for example, Chiapello (2007), Levy (2014), Hopwood and Miller (1994) and Bryer (2000). Of course the proposition is not that everything in a capitalist society is expressed through profit criteria, but that this is the defining social feature of the era. Activities outside profit criteria are interpreted through the discourse of subsidies (and taxes), philanthropy or being classified simply as \\u2018non-economic.\\u2019\\n [117] Current conventional accounting can adopt a unit of \\u2018capital\\u2019 as its measure because capitalist accounting has been built for the specific purpose of defining and measuring \\u2018capital.\\u2019 This is the accounting dimension of the so-called \\u2018Cambridge Critique\\u2019 of capital theory which argues, in essence, that there is circularity in the conventional theory of capital: the value of capital cannot be specified until its rate of return is known and its rate of return cannot be known until capital is valued. See G.C (Harcourt 1972).");
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
	// adding missing unit
	       footnotes.push("[118] It should also be noted in this context the trillions of dollars (or other fiat currency) of central bank \\u2018quantitative easing,\\u2019 for the explicit purpose of propping up liquidity in financial asset markets.\\n [119] This point is central to Sraffa\\u2019s critique of Hayek: that when supply and demand are not in equilibrium, there is a difference between the spot rate and the forward rate. This spread forms the concept of commodities having an \\u2018own rate of interest\\u2019 (Sraffa, 1932: 50). This framing fed into Chapter 17 of Keynes\\u2019 _General Theory_ (1936).\\n [120] Marx would make the same claim.");
       footnotes.push("[121] Reference here is to Marx\\u2019s circuits of capital in Volume II of _Capital_ (1885, Part 1) and our own interpretation of a performance circuit in Chapter 11.1 and 11.2.");

	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a"); // 417
    }
    function set(uint256 location, string calldata _unit) external {
        footnotes[location] = _unit;
    }
    function getById(uint256 id) external override returns (string memory unit) {
		return footnotes[id];
	}

}