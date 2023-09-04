pragma solidity ^0.8.4;
// SPDX-License-Identifier: GPL-3.0-or-later

// https://soliditytips.com/articles/solidity-interface-interact-with-other-contracts/
interface IStorage {
    function getById(uint256 id) external returns (string memory unit);
    // Add more function signatures as needed.
}