pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later
import "../IStorage.sol";

// 46 per contract
contract FootnoteStorage4 is IStorage{
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
    // 138
	       footnotes.push("[37] Not least because these technologies exist in abundance, with marginal costs effectively zero.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[38] Milton Friedman later called it the tyranny of the majority: that an elected government could claim legitimacy in trampling on people\\u2019s natural rights. For some, quadratic voting offers an alternative.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[39] Albeit that they tend to ignore the later Hayek\\u2019s more nuanced view of markets, and the recognition that the state always plays critical roles of market facilitation.");
       footnotes.push("[40] There are current critiques of capitalism that feature the proposition that capitalist markets ignore \\u2018externalities\\u2019 (costs and revenues that are not allocated within existing property relations). The classic case is pollution, which imposes social costs that are not borne by the polluter. We concur that this failure is significant, but contend that if we focus on this \\u2018flaw,\\u2019 then we are implicitly conceding that, in the absence of externalities, capitalist markets warrant our affirmation. Our critique is that they privilege profitability and individualism over other values and collective benefit, whether or not there are externalities.");

	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[41] See Bernes (2020), for an impressive recent contribution. Some have argued that global corporations are applying all the techniques that would be required for state-run central planning. See, for example, Phillips and Rozworski (2019).");
       footnotes.push("[42] Market Socialism sought to integrate private enterprise or capitalist modes of calculation within socialist planning, generally by the operation of markets at the \\u2018local\\u2019 level, with market information guiding central planners in the \\u2018big\\u2019 allocation decisions. This intervention in the Socialist Calculation Debate is associated especially with Ota \\u0160ik, economist and deputy Prime Minister of Czechoslovakia, who was central to the liberalization of the Czech economy and the \\u2018Prague Spring\\u2019 that triggered the Soviet invasion in 1968. Capitalist modes of calculus, via the use of changes in stocks rather than prices to determine output decisions, is associated with post-war Polish economist Oskar Lange.\\n Our concern is not balance between planning and markets, for we believe it to be a false juxtaposition, but with the protocols under which markets are conceived. But it should be noted that this literature precipitated Hayek\\u2019s break with neo-classicals: both their conception of \\u2018competition\\u2019 and their belief in \\u2018equilibrium.\\u2019");

	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[43] Hayek\\u2019s explicit reference to a means-end structure signals that the ends are beyond evaluation.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[44] Morozov (2019) contends it is just a neoclassical interpretation of Hayek that argues _all_ information reduces to price.\\n [45] For example, when I pay $5 for a cup of coffee I am not actually going through a complex calculation of the costs of all the technologies, raw materials, transport, labor, taxes, consumer preferences etc. that lie behind a cup of coffee. I just reduce all that to the acceptance of the price, pass over the debit card, and receive the coffee.\\n [46] This is the perfect word in this context, but it is not in common usage, so we offer a definition. A velleity is a wish or inclination not strong enough to lead to action.");
       footnotes.push("[47] Financial market models that attempt this reverse engineering are at best crude, and were not envisioned by Hayek.");

	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[48] We note the short term supply condition of covering fixed costs, so ours is a longer-term and more general proposition.");
       footnotes.push("[49] The work of R.A Bryer is particularly important in this analysis. See https://www.researchgate.net/scientific-contributions/RA-Bryer-2003195221. For a summary of and insight on the literature accounting and capitalism, see Chiapello (2007) and Chapter 6.3.\\n [50] Indeed, it was not until the middle of the 19th century and the rise of joint stock companies (ownership diversified through a stock exchange), that the rules of these accounts became generalized. In essence, owners and prospective owners needed reputable information on which to base their decisions to buy and sell.");

	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[51] Of course these outputs _can_ be designed for commercial sale, but that will capture only a fraction of their social contribution/collective value.");
       footnotes.push("[52] At this point in the analysis, a surplus can be taken to mean any excess over what is required to reproduce the current conditions of the network. It is usually thought in financial terms (profit rent, interest) or commodity outputs in excess of commodity inputs (e.g. Sraffa, 1960). We will later invoke broader, more social perspectives on \\u2018surplus.\\u2019");

    footnotes.push("N/a");
	       footnotes.push("[53] See, for example Goldman Sachs analyst (later Professor of Financial Engineering at Columbia University) Emanuel Derman (2002) says of short-term investors: \\u2018They may perceive and experience the risk and return of a stock in _intrinsic time_, a dimensionless time scale that counts the number of trading opportunities that occur, but pays no attention to the calendar time that passes between them.\\u2019");
       footnotes.push("[54] Reference here is to Henri Bergson\\u2019s (1889) framing of duration, further developed by Deleuze (1988). The critical point is that the time of change and event cannot be reduced to its preconditions, thus going beyond a linear (and spatial) conception of time.\\n [55] This process depicts the network as if it were, in key respects, an automated market maker: an agency which executes orders on behalf of agents in the network.\\n [56] In Marx\\u2019s depiction of capitalism, this dynamic is expressed as the pursuit by capital of relative surplus value (growing profit from changing the conditions of production: a creative but nonetheless extractive logic). But if we take innovation out of the discourse of profit-seeking capitalism, it is the momentum to pursue many, diverse developments, consistent with the values expressed by the network, that will enable the expanded reproduction of the system.");
       footnotes.push("[57] It follows that we can think of Hayek\\u2019s price as itself a derivative on those underlying forms of information of which price is said to be the condensate. In Hayek\\u2019s analysis, \\u2018price\\u2019 is really the strike price on the option on a synthetic asset called \\u2018knowledge.\\u2019");
       footnotes.push("[58] For Hayek, and Keynesian economics, the story of liquidity ties to agents\\u2019 desires to hold liquid or illiquid assets and the capacity of the rate of interest to impact that choice.");
       footnotes.push("[59] In Marx, too, the existence of a bid-ask spread creates challenges in the depiction of price in relation to value. We thank Colin Drumm for this point.");

	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a"); //183
    }
    function set(uint256 location, string calldata _unit) external {
        footnotes[location] = _unit;
    }
    function getById(uint256 id) external override returns (string memory unit) {
		return footnotes[id];
	}

}