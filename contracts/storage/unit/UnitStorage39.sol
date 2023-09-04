     
pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later
import "../IStorage.sol";

contract UnitStorage39 is IStorage{
    string[] public units;
    
    // set to onlyOwner()
    // check if value exists - 
    constructor(){
        //736
       units.push("In the Economic Space Protocol value is no longer a one-dimensional (e.g. a dollar or BTC denominated) monologue. Through the economic space protocol it is possible to value, in economic terms, \\u201Cexternalities\\u201D such as care, the communitsy, the environment, and indigenous forms of life. The wagers that people make in the realm of culture (as they\\u2019ve done on say Instagram or TikTok, but also as novelists or technologists or social architects), can themselves aggregate participation in complex ways to accomplish their own ends.");
       units.push("Value graph is the visual representation of the distributed ledger, and depicts the network of relationships through distinct value forms within the agents of the network. The size of the nodes represent the network valuation of a token type at any given moment of time. This valuation is contained in the accepted offers utilized in the distributed exchange protocol.");
       units.push("Performances are the key to new value creation (see Fundamental value). A value theory of performance emphasizes that performances are designed and implemented so as to create value.");
       units.push("Volatility means the propensity for change; the speed and extent of these changes. In finance, these changes are about price, and derivatives can price volatility. Financial traders often embrace volatility (non-directional change) as the source of profit. Volatility can also relate to social change and innovation (see Fundamental value) and the potential for creating new economic space. We embrace volatility. We are long-volatility. See Social derivative; Econautics; Economic Space Agency.");
        //739
    }
    function set(uint256 location, string calldata _unit) external {
        units[location] = _unit;
    }
    function getById(uint256 location) external override returns (string memory unit) {
        return units[location];
    }

}