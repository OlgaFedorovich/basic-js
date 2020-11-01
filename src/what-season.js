const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (!date) return 'Unable to determine the time of year!';
  if (typeof date === 'string' || Object.keys(date).length > 0) throw 'Error';

  let month = date.getMonth() + 1;

  if (month === 12 || month === 1 || month === 2 ) return 'winter';
  if (month > 2 && month <= 5) return 'spring';
  if (month > 5 && month <=8) return 'summer';
  if (month > 8 && month <= 11) return 'autumn';

};
