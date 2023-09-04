pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later
import '../IStorage.sol';

contract SectionStorage2 is IStorage{
    string[] public sections;
    
    // set to onlyOwner()
    // check if value exists - 
    constructor(){
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a"); // 369
    sections.push("6.1");
    sections.push("6.1");
    sections.push("6.1");
    sections.push("6.1"); // 373
    sections.push("6.2");
    sections.push("6.2");
    sections.push("6.2"); // 376
    sections.push("6.3");
    sections.push("6.3");
    sections.push("6.3");
    sections.push("6.3"); // 380
    sections.push("6.4");
    sections.push("6.4");
    sections.push("6.4");
    sections.push("6.4"); // 384
    sections.push("N/a"); // 385
    sections.push("7.1");
    sections.push("7.1");
    sections.push("7.1");
    sections.push("7.1");
    // added missing unit
    sections.push("7.1"); // 390
    sections.push("7.2");
    sections.push("7.2");
    sections.push("7.2");
    sections.push("7.2"); // 394
    sections.push("7.3");
    sections.push("7.3");
    sections.push("7.3");
    sections.push("7.3");
    sections.push("7.3");
    sections.push("7.3");
    sections.push("7.3");
    sections.push("7.3");
    sections.push("7.3");
    sections.push("7.3");
    sections.push("7.3");
    sections.push("7.3"); // 406
    sections.push("7.4");
    sections.push("7.4");
    sections.push("7.4");
    sections.push("7.4"); // 410
    sections.push("N/a"); // 411
    sections.push("8.1");
    sections.push("8.1");
    sections.push("8.1");
    sections.push("8.1");
    // added missing unit
    sections.push("8.1"); //416
    sections.push("8.2");
    sections.push("8.2");
    sections.push("8.2");
    sections.push("8.2");
    sections.push("8.2");
    sections.push("8.2");
    sections.push("8.2");
    sections.push("8.2"); //424
    sections.push("8.3");
    sections.push("8.3");
    sections.push("8.3");
    sections.push("8.3");
    sections.push("8.3");
    sections.push("8.3");
    sections.push("8.3"); // 431
    sections.push("8.4");
    sections.push("8.4");
    sections.push("8.4");
    sections.push("8.4");
    sections.push("8.4");
    sections.push("8.4");
    sections.push("8.4");
    sections.push("8.4");
    sections.push("8.4");
    sections.push("8.4");
    sections.push("8.4"); // 442
    sections.push("8.5");
    sections.push("8.5");
    sections.push("8.5");
    // added missing unit
    sections.push("8.5"); // 446
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a"); // 456
    sections.push("9.1");
    sections.push("9.1");
    sections.push("9.1");
    sections.push("9.1"); // 460
    sections.push("9.2");
    sections.push("9.2");
    sections.push("9.2");
    sections.push("9.2");
    sections.push("9.2");
    sections.push("9.2");
    sections.push("9.2"); // 467
    sections.push("9.3"); 
    sections.push("9.3");
    sections.push("9.3");
    sections.push("9.3");
    sections.push("9.3");
    sections.push("9.3"); // 473
    sections.push("9.4");
    sections.push("9.4"); // 475
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a"); // 480
    sections.push("10.1");
    sections.push("10.1");
    sections.push("10.1");
    sections.push("10.1");
    sections.push("10.1"); // 485
    // added missing unit
    sections.push("10.2");
    sections.push("10.2");
    sections.push("10.2");
    sections.push("10.2"); // 489
    sections.push("10.3");
    sections.push("10.3");
    sections.push("10.3");
    sections.push("10.3");
    sections.push("10.3");
    sections.push("10.3"); // 495
    sections.push("10.4");
    sections.push("10.4");
    sections.push("10.4");
    sections.push("10.4");
    sections.push("10.4");
    sections.push("10.4"); // 501
    sections.push("10.5");
    sections.push("10.5");
    sections.push("10.6");
    sections.push("10.6");
    sections.push("10.6"); // 506
    sections.push("N/a"); // 507
    sections.push("11.1");
    sections.push("11.1");
    sections.push("11.1");
    sections.push("11.1");
    sections.push("11.1");
    sections.push("11.1");
    sections.push("11.1");
    sections.push("11.1"); // 515
    sections.push("11.2");
    sections.push("11.2");
    sections.push("11.2");
    sections.push("11.2");
    sections.push("11.2");
    sections.push("11.2");
    sections.push("11.2"); // 522
    sections.push("11.3");
    sections.push("11.3");
    sections.push("11.3");
    sections.push("11.3");
    sections.push("11.3");
    sections.push("11.3");
    sections.push("11.3"); // 529
    sections.push("11.4");
    sections.push("11.4");
    sections.push("11.4");
    sections.push("11.4");
    sections.push("11.4"); // 534
    sections.push("11.5");
    sections.push("11.5");
    sections.push("N/a"); // 537
    sections.push("12.1");
    sections.push("12.1");
    sections.push("12.1");
    sections.push("12.1");
    sections.push("12.1");
    sections.push("12.1"); // 543
    sections.push("12.2");
    sections.push("12.2");
    sections.push("12.2"); // 546
    sections.push("12.3");
    sections.push("12.3");
    sections.push("12.3");
    sections.push("12.3");
    sections.push("12.3");
    sections.push("12.3");
    sections.push("12.3");
    sections.push("12.3");
    sections.push("12.3");
    sections.push("12.3");
    sections.push("12.3"); // 557
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");
    sections.push("N/a");  // 576
    sections.push("13.1");
    sections.push("13.1");
    sections.push("13.1"); 
    // added missing unit
    sections.push("13.1"); //  580
    sections.push("13.2"); 
    sections.push("13.2");
    sections.push("13.2");
    sections.push("13.2");
    sections.push("13.2");
    sections.push("13.2");
    sections.push("13.2");
    sections.push("13.2");
    sections.push("13.2"); // 589
    sections.push("13.3");
    sections.push("13.3");
    sections.push("13.3");
    sections.push("13.3");
    sections.push("13.3");
    sections.push("13.3");
    sections.push("13.3");
    sections.push("13.3");
    sections.push("13.3");
    sections.push("13.3");
    sections.push("13.3"); // 600
    sections.push("Accounting");
    sections.push("Agency");
    sections.push("Agent");
    sections.push("Arbitrage On Intelligence");
    sections.push("Asset - Liability");
    sections.push("Authoring Futures");
    sections.push("Autonomy");
    sections.push("Big Put");
    sections.push("Capitalization");
    sections.push("Capitalism");
    sections.push("Chartalist Money");
    sections.push("Circuit of Value");
    sections.push("Clearing");
    sections.push("Coin - Token");
    sections.push("Collaborative Finance (CoFi)");
    sections.push("Collateral");
    sections.push("Commodity");
    sections.push("Commodity Token");
    sections.push("Commons");
    sections.push("Computational Medium");
    sections.push("Co-Reference");
    sections.push("Credit");
    sections.push("Cryptoecononomics");
    sections.push("Cryptoeconomy");
    sections.push("Dangerous Game");
    sections.push("Dealer Function");
    sections.push("Debt");
    sections.push("Decentralized Finance (DeFi)");
    sections.push("Decolonised Finance");
    sections.push("Deconstruction");
    sections.push("Decision-Making");
    sections.push("Derivative");
    sections.push("Derivative Community");
    sections.push("Digitalization of Economy");
    sections.push("Discourse");
    sections.push("Distributed");
    sections.push("Distributed Accounting Protocol (a.k.a. Distributed Book-Keeling Protocol)");
    sections.push("Distributed Credit Protocol");
    sections.push("Distributed Exchange Protocol");
    sections.push("Distributed Ledger");
    sections.push("Distributed Stake Protocol");
    sections.push("Dividend");
    sections.push("Econaut");
    sections.push("Econautics");
    sections.push("Economic Agent");
    sections.push("Economic Event");
    sections.push("Economic Expression");
    sections.push("Economic Grammar");
    sections.push("Economic Heresy");
    sections.push("Economic Intellect, Economic Intelligence");
    sections.push("Economic Media");
    sections.push("Economic Network");
    sections.push("Economic Space");
    sections.push("Economic Space Agency");
    sections.push("Economic Space Agency (ECSA)");
    sections.push("Economic Space Agent");
    sections.push("Economic Space Protocol");
    sections.push("Economy");
    sections.push("ECSA Token");
    sections.push("Efficient Market Hypothesis");
    sections.push("Exchange");
    sections.push("Exchange Unit, Unit of Exchange");
    sections.push("Expression");
    sections.push("Finance");
    sections.push("Financial Time That Remains");
    sections.push("Fundamental Value, Fundamentals");
    sections.push("General Intellect");
    sections.push("Gift");
    sections.push("Governance");
    sections.push("Grammar");
    sections.push("Index");
    sections.push("Indexical Time");
    sections.push("Information");
    sections.push("Inside Money - Outside Money");
    sections.push("Issuance");
    sections.push("Kybernetes");
    sections.push("Language");
    sections.push("Liquidity");
    sections.push("Liquidity Crisis");
    sections.push("Liquidity Premium");
    sections.push("Liquidity Token");
    sections.push("Living In The Spread");
    sections.push("Market");
    sections.push("Market Making");
    sections.push("Medium");
    sections.push("Metapragmatic Grammar");
    sections.push("Metapragmatics");
    sections.push("Minting a Coin");
    sections.push("Modern Monetary Theory (MMT)");
    sections.push("Money");
    sections.push("Monetary Economy");
    sections.push("Monocracy");
    sections.push("Navigation");
    sections.push("Netting");
    sections.push("Network");
    sections.push("Network Asset");
    sections.push("Network Commodity");
    sections.push("Network Derivative");
    sections.push("Network Premium");
    sections.push("Offer");
    sections.push("Outcome");
    sections.push("Output");
    sections.push("Peer-To-Peer");
    sections.push("Performance");
    sections.push("Performance Index");
    sections.push("Performance Script");
    sections.push("Performative");
    sections.push("Price");
    sections.push("Postcapitalism");
    sections.push("Postcapitalist Economic Media");
    sections.push("Postcapitalist Economic Space");
    sections.push("Postcapitalist Information Infrastructure");
    sections.push("Programmable Economy");
    sections.push("Protocol");
    sections.push("Reciprocal Stakeholding");
    sections.push("Right");
    sections.push("Risking Together");
    sections.push("Role");
    sections.push("Security");
    sections.push("Shorting Capitalism");
    sections.push("Social Derivative");
    sections.push("Space");
    sections.push("Spread");
    sections.push("Stability");
    sections.push("Stake");
    sections.push("Stakeholding");
    sections.push("Stake Token");
    sections.push("Subjectivity");
    sections.push("Surplus");
    sections.push("Swap");
    sections.push("Token");
    sections.push("Trade");
    sections.push("Trading Agent");
    sections.push("Unit of Account");
    sections.push("Value");
    sections.push("Value Graph");
    sections.push("Value Theory of Performance");
    sections.push("Volatility");

    }
    function set(uint256 location, string calldata _unit) external {
        sections[location] = _unit;
    }
    function getById(uint256 id) external override returns (string memory unit) {
		return sections[id];
	}
}