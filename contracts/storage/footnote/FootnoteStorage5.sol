pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later
import "../IStorage.sol";

// 46 per contract
contract FootnoteStorage5 is IStorage{
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
    //184
	       footnotes.push("[60] We nominate this book amongst a range of recent contributions about the implications of big data for understanding the future of capitalism because of its claims to significance. The original German version is titled _Das Data_; a play on Marx\\u2019s _Das Kapital_.");
       footnotes.push("[61] A parallel proposition in relation to capitalism is that competition for technical change (motivated by cost cutting, new product design, etc.) is of greater long-term significance than competition over prices in a market. Indeed, history shows that the great monopolies/oligopolies of history are defeated by being technologically superseded, not by competition from lower cost providers. We do not believe that data will somehow sit alongside price as an additional input to decision making, for within conventional calculus data will predictably be incorporated into pricing, and product design (and marketing) will become more differentiated in response to the patterned diversity revealed in data. We concur that the role of capitalist money will indeed be challenged. Yet the challenge will not be by recourse to an amorphous mass of statistics. It will occur via the invention of new, different indices: new modes of \\u2018money\\u2019 (tokens) expressing different social knowledges.");
       footnotes.push("[62] See Chapter 4.4 for some consideration of internally-generated data, although this analysis is not intended as an engagement with social debates about big data.\\n [63] Keynes wrote his _General Theory_ (1936), which transformed economic policy in the mid 20th century, without use of data. His view was that the economic data which were collected at the time were assembled in taxonomies incompatible with his new theory. Empirical Keynesianism awaited the development of national accounts compiled in \\u2018Keynesian\\u2019 categories.");

	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[64] Morozov (2019) has drawn attention to the seemingly-neglected work of Daniel Saros (2014). Saros develops important insights on the use of big data in decentralized planning. While written without reference to crypto and blockchain, it is clearly blockchain-relevant.");
	footnotes.push("N/a");
	// added missing footnote
	footnotes.push("N/a");
	       footnotes.push("[65] Those who oppose market relations (and generally also the adoption of token exchange) generally also advocate localism, where it is direct personal relationships, not in a record-keeping system that form the basis of trust. The inevitable neglect of the production process that cannot exist without scale is clear, so this perspective is not engaged in our analysis. Furthermore, local relations are never without their own power relations.");
       footnotes.push("[66] In Marxism, one way of depicting the so-called \\u2018transformation problem\\u2019 is the challenge of reconciling value defined in simple exchange with value defined in dynamic accumulation of capital.\\n [67] Critics of Marx would say that the need to reconcile every commodity\\u2019s value denominated in labor time with a market price is the technical flaw in Marx\\u2019s analysis: the so-called \\u2018transformation problem.\\u2019");

	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[68] The contrast in both cases is with an individual defined autonomously, outside of social context.");
       footnotes.push("[69] Offers and matching are explained in more detail in Chapters 9 and 10.");
       footnotes.push("[70] See L\\u00F3pez J. \\u2018Market offers: Distributed trading protocol.\\u2019 http://marketoffers.manifold.one\\n [71] This is the first use of the term \\u2018commodity,\\u2019 which appears frequently in the following analysis. We define \\u2018commodities\\u2019 to include all outputs produced for, and recognized by, the network. It is not Marx\\u2019s use of the term, which associates commodities with capitalist production relations. There, commodity production has two dimensions: it is extractive, in the sense that commodities are produced by the workers and owned by the capitalist, and it is produced so as to be sold for a profit. This latter emphasis gives rise to the term \\u2018commodification,\\u2019 with more and more facets of social life converted into marketable opportunities for extraction. Our use of the term \\u2018commodity\\u2019 is more like Sraffa (1960) in his book _Production of Commodities by Means of Commodities_. There, commodities are all produced outputs. They are produced for a market, but they are not exchanged for money. This gives space for our proposition that commodities can be produced for the commons (without a price). Similarly, there can be no suggestion that our use of the term commodity is subject to a \\u2018fetishism\\u2019 of commodities, developed by Marx (1867) at the end Chapter 1 of Volume I of _Capital_, for this term, too, is capitalist-specific. In many analyses, the political response to fetishism is to take goods and services out of market relations. Our proposal is to change the nature of markets.");

	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[72] The formal explanation of a unit of exchange is developed in Chapter 7.");
       footnotes.push("[73] This issue is explored in Chapter 10.");

	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[74] The term \\u2018chartalism\\u2019 to describe state-issuance of money comes from the Latin \\u2018charta,\\u2019 meaning \\u2018ticket\\u2019 or \\u2018token\\u2019; indicating that money is a type of token.");
	footnotes.push("N/a");
	       footnotes.push("[75] In the terminology of Gurley and Shaw (1960) third party issued monies like fiat currency and bitcoin are \\u2018outside money.\\u2019 Outside money may certainly enter the new economic space, but it will do so as a commodity for exchange. A transfer of outside money within the network will be matched by a token transfer, as it is for any commodity exchange.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	       footnotes.push("[76] Hayek and indeed all \\u2018neoliberal\\u2019 economics advocates decentralized markets, with some conditions of \\u2018market failure\\u2019 and exceptional use of an active centralized agent. Hayek wanted the money used in exchange to be decentralized; the neoclassicals want it centralized.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a"); // 229
    // END OF 1st DEPLOYMENT
    }
    function set(uint256 location, string calldata _unit) external {
        footnotes[location] = _unit;
    }
    function getById(uint256 id) external override returns (string memory unit) {
		return footnotes[id];
	}

}