const Task_Manager = artifacts.require("Task_Manager");

module.exports = function(deployer) {
  deployer.deploy(Task_Manager);
};