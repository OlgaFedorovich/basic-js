const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  let obj = {};

  obj.turns = Math.pow(2, disksNumber) - 1;
  obj.seconds = Math.floor(3600 * obj.turns / turnsSpeed );

  console.log(obj);

  return obj;

};
