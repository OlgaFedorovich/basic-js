const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  const MODERN_ACTIVITY= 15; 
  const HALF_LIFE_PERIOD= 5730;

  if(!sampleActivity || !isNaN(sampleActivity) || isNaN(Number(sampleActivity))) return false;

  let years = Math.ceil((Math.log(MODERN_ACTIVITY / +sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));

  return years;

};
