
import "human-standard-token.sol";

pragma solidity ^0.4.11;

contract PrefilledToken is HumanStandardToken {

  bool public prefilled = false;
  address public creator = msg.sender;

  function prefill (bytes32[] _positions, uint16[] _values)
    only_not_prefilled
    only_creator
  {
    uint total = 0;

    for (uint i = 0; i < _positions.length; i++) {
      bytes32 pos = _positions[i];
      uint16 val = _values[i];

      assembly {
          // Skip if address has already balance
          jumpi(skip_tag, sload(pos))
          sstore(pos, val)
          total := add(total, val)
        skip_tag:
      }
    }

    totalSupply += total;
  }

  function launch ()
    only_not_prefilled
    only_creator
  {
    prefilled = true;
  }

  /**
   * Following standard token methods needs to wait
   * for the Token to be prefilled first.
   */

  function transfer(address _to, uint256 _value) returns (bool success) {
    if (!prefilled) {
      throw;
    }

    return super.transfer(_to, _value);
  }

  function transferFrom(address _from, address _to, uint256 _value) returns (bool success) {
    if (!prefilled) {
      throw;
    }

    return super.transferFrom(_from, _to, _value);
  }

  function approve(address _spender, uint256 _value) returns (bool success) {
    if (!prefilled) {
      throw;
    }

    return super.approve(_spender, _value);
  }

  modifier only_creator () {
    if (msg.sender != creator) {
      throw;
    }

    _;
  }

  modifier only_not_prefilled () {
    if (prefilled) {
      throw;
    }

    _;
  }
}