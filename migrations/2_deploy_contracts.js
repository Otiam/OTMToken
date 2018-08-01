var OTMToken = artifacts.require("./contracts/OTMToken.sol");

module.exports = function (deployer) {
    deployer.deploy(OTMToken);
};