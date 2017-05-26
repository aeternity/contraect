import "human-standard-token.sol";

pragma solidity ^0.4.11;

contract AEToken is HumanStandardToken {
  /**
   * HumanStandardToken(
      uint256  initialAmount,
      string   tokenName,
      uint8    decimalUnits,
      string   tokenSymbol
    )
   */
  function AEToken() HumanStandardToken(500000000000, "AEToken", 0, "AE") {
  }
}
