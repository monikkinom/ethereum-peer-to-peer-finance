module.exports = function(deployer) {
  deployer.deploy(CrowdSource);
  deployer.autolink();
};
