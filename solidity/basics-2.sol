// "SPDX-License-Identifier: UNLICENSED"
// Basic Syntax
pragma solidity 0.7.0;

contract Test {
    uint256 myNumber; // number
    bool isActive; // boolean
    bytes32 password; // string
    string name; // string
    string[] names; //  string[]

    // mapping(uint256=>bool) ids; // mapper -> Key value pairs of integer:boolean
    mapping(uint256 => Person) ids;
    address id; //  0x00000 //42 char string

    struct Person {
        address id;
        string name;
        uint24 age;
    }

    enum Day {Monday, Tudesday}

    // Executed first when deployed
    constructor() {
        myNumber = 16;
        isActive = true;
        name = "Gagan";
    }

    // Funtion Scopes
    // Private -> Acessible from cotract
    // Internal -> From inside contract, derived contract
    // External -> Cannot be executed from inside
    // Public -> Accessible from anywhere

    // Pure -> Return something thats not a valrible eg. 2*2, 5+9
    // Payable -> Request user to py ethereum
    // View -> Reading values from state
    // constant -> Returning constant
    // function name (type var_name) { public | external | internal | private} {pure | constant | view | payable} {}

    function setNumber(uint256 _newNumber) internal aboveTwelve(_newNumber) {
        myNumber = _newNumber;
    }

    modifier aboveTwelve(uint256 _newNumber) {
        require(_newNumber <= 12, "Number is above 21");
        _;
    }

    function getNumber() external view returns (uint256) {
        return myNumber;
    }
}
