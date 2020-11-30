// "SPDX-License-Identifier: UNLICENSED"
pragma solidity 0.7.0;

contract MyContract {
    uint256 myNumber;

    constructor() {
        myNumber = 5;
    }

    function setNumber(uint256 _num) public {
        myNumber = _num;
    }

    function getNumber() public view returns (uint256) {
        return myNumber;
    }
}
