//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FundMe {
    
    mapping(address => uint256) public contributions;
    address[] public contributors;
    address public owner;
    
    constructor() {
        owner = msg.sender;
        
    }
    
    function contribute() public payable {
        require(msg.sender != owner, "Owner cannot contribute.");
        require(msg.value > 0, "Contribution amount must be greater than zero.");
        contributions[msg.sender] += msg.value;
        
    }
    
    
    function getContributors() public view returns (address[] memory) {
        return contributors;
    }
    
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
    
    function withdraw() public {
        require(msg.sender == owner, "Only the owner can withdraw.");
        payable(owner).transfer(address(this).balance);
    }
}





