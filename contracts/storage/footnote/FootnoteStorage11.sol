pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later
import "../IStorage.sol";

// 46 per contract
contract FootnoteStorage11 is IStorage{
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
           footnotes.push("[137] The liquidity token is different, for it is defined precisely by its universal expression."); // 465
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
	       footnotes.push("[138] Weather derivatives, for example, trade spreads on indices of frost, temperature, etc.. Sports betting involves trading spreads on all sorts of game metrics, not just the final outcome. These are illustrations of non-price indices constructed to describe an underlier of which there is no owner. What is interesting here is that quantification counts \\u2018events\\u2019: the number of times X happens over a period, whether X is a frost or a tackle in a football game. Quantifying things by how often they occur - \\u2018events\\u2019 - is at the core of the way we define performances (see Chapter 5.3). If we use the occurrence of events to measure time, we are in the domain of what financial markets call \\u2018tick time\\u2019 (see Chapter 3.5).");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	// adding missing unit
	footnotes.push("N/a");
	       footnotes.push("[139] On claims to \\u2018fundamental value,\\u2019 see esp. Chapter 12.3 and Appendices 5.1 and 12.2.");
           footnotes.push("[140] Each staking contract will specify its particular version of these participation rights.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[141] Readers who see this proposition as reminiscent of Keyne\\u2019s critique of stock market speculation (trades motivated by \\u2018other people\\u2019s opinions\\u2019) are invited to see Appendix 12.3.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[142] Economic textbooks want to explain money via a logical evolution from barter, and the growing complexity of economic transactions enabled by money. Anthropologists are inclined to emphasize the origins of trade in credit and the gift, bringing focus to the time interval in trade.");
	footnotes.push("N/a");
	       footnotes.push("[143] Credit tokens are not designed to store value; indeed with no yield, their main risk is downside: the risk of default of the issuer. Default would be the event of the issuer not being able to provide/create its outputs, and not necessarily because of insolvency. For as long as an issuing agent creates value, the markets will adjust both the price of the offer and the reputation rating of the agent, indeed to the point that the agent may be no more than an issuer of credit. But as long as there is any demand for its commodity tokens, liquidity tokens will be matched until cleared.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[144] See footnote 71 for our clarification of the use of the term \\u2018commodity.\\u2019");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[145] Perry Mehrling\\u2019s lectures on the \\u2018Money view\\u2019 make use of these types of diagrams. See http://sites.bu.edu/perry/");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[146] Flows of stake in a secondary market occur via commodity tokens, where stake is now a \\u2018commodity\\u2019 to be exchanged.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[147] Marx (1885: ch.4), described capital as a social relation of value:\\n It is a movement, a circulatory process through different stages, which itself in turn includes three different forms of the circulatory process. Hence it can only be grasped as a movement, not as a static thing.");
	footnotes.push("N/a");
	footnotes.push("N/a"); //511
    }
    function set(uint256 location, string calldata _unit) external {
        footnotes[location] = _unit;
    }
    function getById(uint256 id) external override returns (string memory unit) {
		return footnotes[id];
	}

}