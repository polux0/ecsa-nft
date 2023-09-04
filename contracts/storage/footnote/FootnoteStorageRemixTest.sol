pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later
// import "./IStorage.sol";

// 46 per contract
contract FootnoteStorageRemixTest{
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
    footnotes.push(" ");
	footnotes.push("[4] Many people now make this argument. See, for example, Dixon (2018) and Buterin (2017)");
	footnotes.push("[5] From our perspective, bitcoin identified the trusted intermediary component of capitalism. That is, capitalism's regime of verification depends on trust which, in its turn, ultimately depends on states' monopoly on violence and coercion. Bitcoin expressed that there can be more dimensions of freedom. It opened the question of the sociality of value: it showed that value is always social, organizational and institutional. But bitcoin didn't give a language to express it. The Economic Space Protocol is a grammar for expressing the sociality of value.");
	footnotes.push("[6] The trend to use equities as collateral for loans is increasingly prevalent. In 2017 the US Securities and Exchange Commission reconsidered the rules which prevented institutional market participants from pledging and accepting equity as collateral in the US securities lending market. In March 2020 the US Federal reserve, looking to rebuild liquidity in the Covid pandemic, enabled banks to borrow cash against stocks and corporate bonds.");
	footnotes.push("[7] This term has been used in the 'sharing economy' literature for quite a few years. We use it here in a specifically blockchain-enabled way, as initially proposed by a local currency research team at _Informal Systems_. See, for example, https://cofi.informal.systems. See also Fleischman, et al (2020).\\n[8] Antonio Negri (1968) was astute when, in 1968, he observed that connecting the present to the future in a capitalist economy is the responsibility of the state. In the absence of this state role, we see the need to make the link financially will potentially be made by futures and option contracts.\\n[9] The argument here is crystalised in Chapter 8.5.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("[10] See Lopez, J. 'Economic performance: The Economic Space Protocol.' http://economicperformance.manifold.one. See Appendix 1.1 for a brief summary of its current application.\\n[11] Agents are defined more precisely in Chapter 3.2. In this context, they can be thought of as individuals or self-organized groups of individuals under a singular network identity.");
	footnotes.push("N/a");
	footnotes.push("[12] The distinctive meaning of a 'performance,' and its deeper significance, is elaborated in Chapter 4.");
	footnotes.push("[13] Other forms of incentives, ownership and money do indeed exist within society but our point here is that capitalist incentives etc. are hegemonic and are expanding their reach into facets of daily life and social relations once seen as outside the economy.\\n[14] The public policy literature discussed in Appendix 4.1 highlights the importance of the difference between outputs and the outcomes, or effects, of those outputs. Public policy is clearly more concerned to produce outcomes more than just outputs. Adopting the same framing, our use of the terms is that performances produce outputs but the network attributes value (it validates output) based on social outcomes. However, as will become apparent, it is necessary that ledgers record outputs, but these are always validated outputs (that is, they are recognized as having produced certain outcomes). When we describe the social contribution of performances, the focus will be on outcomes; when we describe the ledger processes, the focus will be on outputs, but the latter always presumes network-validated outcomes. This process is described in Chapter 4.");
	footnotes.push("[15] The way in which mutual staking forms a commons is addressed in Chapter 6.");
	footnotes.push("[16] In the focus on alternative notions of value, staking could be seen as an act of partial or full philanthropy. In that framing, the staker may simply want the performance and its outputs to be realized because they are a 'good cause.' The network will indeed collect data on these philanthropic stakings, and there may appear correlations/causations that reveal a wider social benefit attributable to such performances. These performances may indeed find recognition in the network as value-creating, even when this is not the intention of the performing agents. But the network is not defined by philanthropy: it is defined by value creation and returns for value creation, where the distinctive feature is that the products of performances can create collectively defined value even when they create no profit.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("[17] The ECSA Glossary is available at https://glossary.ecsa.io/.");
	footnotes.push("N/a");
	footnotes.push("[18] The need to cut energy usage in ordering transactions on a blockchain has seen the system of verification shift rapidly from proof-of-work to proof-of-stake.\\n[19] Staking, in this sense, is often also incentivized by (often absurd) returns in the protocol native token, or in the protocol's native token in combination with some other protocol's token.");
	footnotes.push("[20] For example, vote-escrowed governance tokens, or some other 'rights,' largely depending on the amount and the length of staking time.");
	footnotes.push("N/a");
	footnotes.push("[21] This issue is addressed in Chapter 7.");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("N/a");
	footnotes.push("[22] Stripped to its basics, the liquidity premium is a cost that addresses the deepest, darkest fear of capitalism: that the market (people to sell to or buy from) will simply disappear in sufficient numbers so that the flow will stop. This point, and the necessity of the dealer function, has been emphasized to us by Colin Drumm (2021), see also Treynor (1987).\\n[23] For explanation see Lopez, J. 'Market credit: Distributed liquidity protocol.' http://marketcredit.manifold.one[24] This is the practice of shadow banking. Many people equate shadow banking with illegality. But investment banks like Goldman Sachs, insurance and reinsurance companies and money market funds - many of which are divisions of large 'standard' banks - engage in shadow banking, where the feature of being outside standard regulation is that lending is fully collateralized.");
	footnotes.push("N/a");
	footnotes.push("[25] A unit of value will be explained in Chapter 6.3. Suffice it here to define it as a socially/ historically specific system of measurement.\\n[26] There can be an argument that the concept of 'profit' is not specific to capitalism; what is specific is the way profits are calculated. We have chosen to adopt the word 'surplus' in relation to the Economic Space Protocol to avoid ambiguity. See Appendix 5.2 for elaboration.");
    footnotes.push("[27] We note the blurring of the categories of money and assets. One form of blurring is between debt (money) and equity (assets) (e.g. convertible bonds). Another is found in central bank policies of Quantitative Easing, and the expanding range of assets central banks are taking onto their books in the name of 'monetary policy.' The blurring was noted by Myron Scholes (1997) in his Nobel Prize lecture.");
    footnotes.push("[28] Toporowski (2010: 12) puts it succinctly: 'in an era of finance, finance mostly finances finance.'");
	footnotes.push("[29] Named after economist Hyman Minsky, a 'Minsky moment' is a sudden collapse of asset values which becomes self-perpetuating. Collapses in asset values collapses the value of collateral leading to margin calls and the sudden loss of capacity to support loans.");
	footnotes.push("N/a");
	footnotes.push("[30] Randy Martin was a friend and mentor to many of us in ECSA. He has inspired our vision and our analytical techniques. Randy died before the real emergence of crypto technology. His brilliance would have at once embraced the social and political potential of cryptomedia choreographies. See, for example, Martin (2013, 2014a, 2014b, 2015) and Lee and Martin (2016).\\n[31] In finance, a derivative involves the purchase of an exposure to the 'value' of an underlying asset without (necessarily) purchasing ownership of the underlying asset itself. Derivatives therefore trade risk positions: the risk of the price of a barrel of oil going up or down, without trading the barrel of oil. Options, as critical forms of derivative, enable the coverage of risk in one direction, but not the other: they can insure against prices going up, _or_ they can insure against prices");
	footnotes.push("N/a");
    footnotes.push("[28] Toporowski (2010: 12) puts it succinctly: 'in an era of finance, finance mostly finances finance.'");
	footnotes.push("[29] Named after economist Hyman Minsky, a 'Minsky moment' is a sudden collapse of asset values which becomes self-perpetuating. Collapses in asset values collapses the value of collateral leading to margin calls and the sudden loss of capacity to support loans.");
	footnotes.push("N/a");
	footnotes.push("[30] Randy Martin was a friend and mentor to many of us in ECSA. He has inspired our vision and our analytical techniques. Randy died before the real emergence of crypto technology. His brilliance would have at once embraced the social and political potential of cryptomedia choreographies. See, for example, Martin (2013, 2014a, 2014b, 2015) and Lee and Martin (2016).\\n[31] In finance, a derivative involves the purchase of an exposure to the 'value' of an underlying asset without (necessarily) purchasing ownership of the underlying asset itself. Derivatives therefore trade risk positions: the risk of the price of a barrel of oil going up or down, without trading the barrel of oil. Options, as critical forms of derivative, enable the coverage of risk in one direction, but not the other: they can insure against prices going up, _or_ they can insure against prices");
	footnotes.push("N/a");
    footnotes.push("[28] Toporowski (2010: 12) puts it succinctly: 'in an era of finance, finance mostly finances finance.'");
	footnotes.push("[29] Named after economist Hyman Minsky, a 'Minsky moment' is a sudden collapse of asset values which becomes self-perpetuating. Collapses in asset values collapses the value of collateral leading to margin calls and the sudden loss of capacity to support loans.");
	footnotes.push("N/a");
	footnotes.push("[30] Randy Martin was a friend and mentor to many of us in ECSA. He has inspired our vision and our analytical techniques. Randy died before the real emergence of crypto technology. His brilliance would have at once embraced the social and political potential of cryptomedia choreographies. See, for example, Martin (2013, 2014a, 2014b, 2015) and Lee and Martin (2016).\\n[31] In finance, a derivative involves the purchase of an exposure to the 'value' of an underlying asset without (necessarily) purchasing ownership of the underlying asset itself. Derivatives therefore trade risk positions: the risk of the price of a barrel of oil going up or down, without trading the barrel of oil. Options, as critical forms of derivative, enable the coverage of risk in one direction, but not the other: they can insure against prices going up, _or_ they can insure against prices");
	footnotes.push("N/a");
		footnotes.push("[35] We already see, to quote Nick Land (2018, \u00A72.653), if human beings are found to be irrational or incompetent or 'lack the plasticity to compete in these terms, or revolt against the roles and templates being automatically laid-out for them, then artificial agencies - 'DAOs' - will be fabricated to play the game instead.'");

    // END OF 1st DEPLOYMENT
    }
    function set(uint256 location, string calldata _unit) external {
        footnotes[location] = _unit;
    }
    //Returns the currently stored unsigned integer
    function get(uint256 location) public view returns (string memory) {
        return footnotes[location];
    }

}