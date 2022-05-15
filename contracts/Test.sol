pragma solidity ^0.8.0;

contract Test {
    string public message;
    uint256 public number;

    function setMessage(string memory _message) public returns (bool) {
        message = _message;
        return true;
    }

    function setNumber(uint256 _number) public {
        number = _number;
    }
}
