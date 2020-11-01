const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  //throw new CustomError('Not implemented');
  let i = 0;
  let newArray;
  array.forEach(arrayItem => {
    
    newArray = arrayItem.filter(item => item === '^^');
    i = i + newArray.length;
  });
  return i;

};
