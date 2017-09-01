var ConvertLib = artifacts.require("./ConvertLib.sol");
var AEToken = artifacts.require("./AEToken.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, AEToken);
  deployer.deploy(AEToken);
};
