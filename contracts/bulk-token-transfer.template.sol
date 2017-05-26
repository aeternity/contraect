import "token.sol";

pragma solidity ^0.4.11;

contract BulkTokenTransfer {

  bool public done;
  address public sender;
  Token public token;

  function BulkTokenTransfer (address tokenAddress) {
    token = Token(tokenAddress);
    sender = msg.sender;
  }

  function prefill() {
    if (msg.sender != sender) { throw; }
    if (done) { throw; }
    // ::prefill_check::
    
    // ::prefill_data::

    done = true;
  }
}
