pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later
import "../IStorage.sol";

// 46 per contract
contract FootnoteStorage3 is IStorage{
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
    footnotes.push("N/a"); //92
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("[22] Stripped to its basics, the liquidity premium is a cost that addresses the deepest, darkest fear of capitalism: that the market (people to sell to or buy from) will simply disappear in sufficient numbers so that the flow will stop. This point, and the necessity of the dealer function, has been emphasized to us by Colin Drumm (2021), see also Treynor (1987).\\n [23] For explanation see L\\u00F3pez, J. \\u2018Market credit: Distributed liquidity protocol.\\u2019 http://marketcredit.manifold.one\\n [24] This is the practice of shadow banking. Many people equate shadow banking with illegality. But investment banks like Goldman Sachs, insurance and reinsurance companies and money market funds \\u2013 many of which are divisions of large \\u2018standard\\u2019 banks \\u2013 engage in shadow banking, where the feature of being outside standard regulation is that lending is fully collateralized.");
	footnotes.push("N/a");
	       footnotes.push("[25] A unit of value will be explained in Chapter 6.3. Suffice it here to define it as a socially/ historically specific system of measurement.\\n [26] There can be an argument that the concept of \\u2018profit\\u2019 is not specific to capitalism; what is specific is the way profits are calculated. We have chosen to adopt the word \\u2018surplus\\u2019 in relation to the Economic Space Protocol to avoid ambiguity. See Appendix 5.2 for elaboration.");
    footnotes.push("[27] We note the blurring of the categories of money and assets. One form of blurring is between debt (money) and equity (assets) (e.g. convertible bonds). Another is found in central bank policies of Quantitative Easing, and the expanding range of assets central banks are taking onto their books in the name of 'monetary policy.' The blurring was noted by Myron Scholes (1997) in his Nobel Prize lecture.");
           footnotes.push("[28] Toporowski (2010: 12) puts it succinctly: \\u2018in an era of finance, finance mostly finances finance.\\u2019");
       footnotes.push("[29] Named after economist Hyman Minsky, a \\u2018Minsky moment\\u2019 is a sudden collapse of asset values which becomes self-perpetuating. Collapses in asset values collapses the value of collateral leading to margin calls and the sudden loss of capacity to support loans.");
       footnotes.push("");
       footnotes.push("[30] Randy Martin was a friend and mentor to many of us in ECSA. He has inspired our vision and our analytical techniques. Randy died before the real emergence of crypto technology. His brilliance would have at once embraced the social and political potential of cryptomedia choreographies. See, for example, Martin (2013, 2014a, 2014b, 2015) and Lee and Martin (2016).\\n [31] In finance, a derivative involves the purchase of an exposure to the \\u2018value\\u2019 of an underlying asset without (necessarily) purchasing ownership of the underlying asset itself. Derivatives therefore trade risk positions: the risk of the price of a barrel of oil going up or down, without trading the barrel of oil. Options, as critical forms of derivative, enable the coverage of risk in one direction, but not the other: they can insure against prices going up, _or_ they can insure against prices going down.");
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
	       footnotes.push("[32] See L\\u00F3pez, J. \\u2018DJS: Distributed Javascript.\\u2019 http://djs.manifold.one");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
       footnotes.push("[33] For example, the liquidity token allows the user to exchange and clear commodity tokens. The stake token enables users to peer with others to create economic relationships through reciprocal mutual stakeholding.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[34] The International Monetary Fund reports that, in 2022, 105 countries and currency unions are exploring central bank digital currencies (up from 35 in 2020; 19 of the richest 20 currencies are involved \\u2013 see Fanti et al (2022)).");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[35] We already see, to quote Nick Land (2018, \\u00A72.653), if human beings are found to be irrational or incompetent or \\u2018lack the plasticity to compete in these terms, or revolt against the roles and templates being automatically laid-out for them, then artificial agencies \\u2013 \\u2018DAOs\\u2019 \\u2013 will be fabricated to play the game instead.\\u2019");
       footnotes.push("[36] For example, Nick Szabo tweeted about economists and programmers: \\u2018An economist or programmer who hasn\\u2019t studied much computer science, including cryptography, but guesses about it, cannot design or build a long-term successful cryptocurrency. A computer scientist and programmer who hasn\\u2019t studied much economics, but applies common sense, can.\\u2019 @NickSzabo4, March 23 2018 https://twitter.com/nickszabo4/status/977035747713675264");

	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a"); // 137
    }
    function set(uint256 location, string calldata _unit) external {
        footnotes[location] = _unit;
    }
    function getById(uint256 id) external override returns (string memory unit) {
		return footnotes[id];
	}

}