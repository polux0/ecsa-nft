pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later
import "../IStorage.sol";

// 46 per contract
contract FootnoteStorage2 is IStorage {
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
        footnotes.push("N/a"); //46
        footnotes.push("N/a");
        footnotes.push("N/a");
        footnotes.push("[1] Inspirational Marxist historian Eric Hobsbawm (1978) contended that the 1970s must be read as a crisis for working class organizations; a crisis from which they have not recovered. Our response is that collective endeavors that move beyond the control of capital must be focussed at the frontier of capitalist development - financial innovation - not in nostalgia for a resurgent industrial proletariat.");
        footnotes.push("N/a");
        footnotes.push("[2] \\u2018If we don\\u2019t do this, we may not have an economy on Monday\\u2019 is a statement attributed to Federal Reserve Chairman, Ben Bernanke, in a meeting on Thursday September 18, 2008 with Treasury Secretary Henry Paulson and House Speaker Nancy Pelosi, in his advocacy of a $700 billion bailout plan for banks. https://www.nytimes.com/2008/10/02/business/02crisis.html\\n [3] Financial institutions in the period 2020-2022 might be depicted as financial terrorists, with sticks of illiquidity strapped to their chests, threatening to blow themselves up, and taking the rest of us with them, unless the state guaranteed market liquidity. And states gave those terrorists exactly what they wanted. The terrorist ransom payment is better known as Quantitative Easing, and because of it, the balance sheet of the Federal Reserve (to reference just one index) reached $8.9 trillion by mid 2022, up from $0.9 trillion in 2007, $2.3 trillion in December 2008, and $4.2 trillion in February 2020.");
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
        footnotes.push("[4] Many people now make this argument. See, for example, Dixon (2018) and Buterin (2017)");
        footnotes.push("[5] From our perspective, bitcoin identified the trusted intermediary component of capitalism. That is, capitalism\\u2019s regime of verification depends on trust which, in its turn, ultimately depends on states\\u2019 monopoly on violence and coercion. Bitcoin expressed that there can be more dimensions of freedom. It opened the question of the sociality of value: it showed that value is always social, organizational and institutional. But bitcoin didn\\u2019t give a language to express it. The Economic Space Protocol is a grammar for expressing the sociality of value.");
        footnotes.push("[6] The trend to use equities as collateral for loans is increasingly prevalent. In 2017 the US Securities and Exchange Commission reconsidered the rules which prevented institutional market participants from pledging and accepting equity as collateral in the US securities lending market. In March 2020 the US Federal reserve, looking to rebuild liquidity in the Covid pandemic, enabled banks to borrow cash against stocks and corporate bonds.");
        footnotes.push("[7] This term has been used in the \\u2018sharing economy\\u2019 literature for quite a few years. We use it here in a specifically blockchain-enabled way, as initially proposed by a local currency research team at _Informal Systems_. See, for example, https://cofi.informal.systems. See also Fleischman, et al (2020).\\n [8] Antonio Negri (1968) was astute when, in 1968, he observed that connecting the present to the future in a capitalist economy is the responsibility of the state. In the absence of this state role, we see the need to make the link financially will potentially be made by futures and option contracts.\\n [9] The argument here is crystalised in Chapter 8.5.");
        footnotes.push("N/a");
        footnotes.push("N/a");
        footnotes.push("N/a");
        footnotes.push("[10] See L\\u00F3pez, J. \\u2018Economic performance: The Economic Space Protocol.\\u2019 http://economicperformance.manifold.one. See Appendix 1.1 for a brief summary of its current application.\\n [11] Agents are defined more precisely in Chapter 3.2. In this context, they can be thought of as individuals or self-organized groups of individuals under a singular network identity.");
        footnotes.push("N/a");
        footnotes.push("[12] The distinctive meaning of a \\u2018performance,\\u2019 and its deeper significance, is elaborated in Chapter 4.");
        footnotes.push("[13] Other forms of incentives, ownership and money do indeed exist within society but our point here is that capitalist incentives etc. are hegemonic and are expanding their reach into facets of daily life and social relations once seen as outside the economy.\\n [14] The public policy literature discussed in Appendix 4.1 highlights the importance of the difference between outputs and the outcomes, or effects, of those outputs. Public policy is clearly more concerned to produce outcomes more than just outputs. Adopting the same framing, our use of the terms is that performances produce outputs but the network attributes value (it validates output) based on social outcomes. However, as will become apparent, it is necessary that ledgers record outputs, but these are always validated outputs (that is, they are recognized as having produced certain outcomes). When we describe the social contribution of performances, the focus will be on outcomes; when we describe the ledger processes, the focus will be on outputs, but the latter always presumes network-validated outcomes. This process is described in Chapter 4.");
        footnotes.push("[15] The way in which mutual staking forms a commons is addressed in Chapter 6.");
        footnotes.push("[16] In the focus on alternative notions of value, staking could be seen as an act of partial or full philanthropy. In that framing, the staker may simply want the performance and its outputs to be realized because they are a \\u2018good cause.\\u2019 The network will indeed collect data on these philanthropic stakings, and there may appear correlations/causations that reveal a wider social benefit attributable to such performances. These performances may indeed find recognition in the network as value-creating, even when this is not the intention of the performing agents. But the network is not defined by philanthropy: it is defined by value creation and returns for value creation, where the distinctive feature is that the products of performances can create collectively defined value even when they create no profit.");
        footnotes.push("N/a");
        footnotes.push("N/a");
        footnotes.push("N/a");
        footnotes.push("[17] The ECSA Glossary is available at https://glossary.ecsa.io/.");
        footnotes.push("N/a");
        footnotes.push("[18] The need to cut energy usage in ordering transactions on a blockchain has seen the system of verification shift rapidly from proof-of-work to proof-of-stake.\\n [19] Staking, in this sense, is often also incentivized by (often absurd) returns in the protocol native token, or in the protocol\\u2019s native token in combination with some other protocol\\u2019s token.");
        footnotes.push("[20] For example, vote-escrowed governance tokens, or some other \\u2018rights,\\u2019 largely depending on the amount and the length of staking time.");
        footnotes.push("N/a");
        footnotes.push("[21] This issue is addressed in Chapter 7.");//91
    }

    function set(uint256 location, string calldata _unit) external {
        footnotes[location] = _unit;
    }

    function getById(uint256 id) external override returns (string memory unit) {
		return footnotes[id];
	}
}