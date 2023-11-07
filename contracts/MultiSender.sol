// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MultiSender {

    // Event to emit when Ether is sent.
    event EtherSent(address indexed _from, address indexed _to, uint256 _amount);

    // Function to send Ether to multiple addresses with corresponding amounts.
    function sendEther(address[] calldata _to, uint256[] calldata _amount) external payable {
        // Check that the input data is valid.
        require(_to.length == _amount.length, "The arrays must be of the same length");
        require(_to.length > 0, "Must have at least one recipient");

        // Sum of all amounts to be sent must be equal to the value sent with the transaction.
        uint256 totalAmount = msg.value;
        uint256 currentSum = 0;
        for (uint256 i = 0; i < _amount.length; i++) {
            currentSum += _amount[i];
        }
        require(currentSum == totalAmount, "The total ETH sent must equal the total amounts");

        // Perform the transfers.
        for (uint256 i = 0; i < _to.length; i++) {
            // This will fail if the contract doesn't have enough balance or if the call itself fails.
            (bool sent, ) = _to[i].call{value: _amount[i]}("");
            require(sent, "Failed to send Ether");

            // Emit an event for logging purposes.
            emit EtherSent(msg.sender, _to[i], _amount[i]);
        }
    }

    // Function to withdraw any Ether sent to the contract by mistake.
    function withdraw() external {
        payable(msg.sender).transfer(address(this).balance);
    }

    // Fallback function to prevent contract from receiving Ether by mistake.
    fallback() external payable {
        revert("Contract cannot receive Ether");
    }

    // Receive function to allow contract to accept Ether sent directly to it.
    receive() external payable {
        emit EtherSent(msg.sender, address(this), msg.value);
    }
}
