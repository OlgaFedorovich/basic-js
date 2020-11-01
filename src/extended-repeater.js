const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let string = str + '';
  let addition;
  options.addition === undefined ? addition = '' : addition = options.addition;
  let separator = options.separator || '+';
  let separatorLength = separator.length;
  
  let additionSeparator = options.additionSeparator || '|';
  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;

  let newString = (((string + (((addition + additionSeparator).repeat(additionRepeatTimes - 1)) + addition)) + separator).repeat(repeatTimes));
  newString = newString.slice(0, -separatorLength);
  //console.log(newString);

  return newString;

};

// let repeater = function(str, options) {

//   let string = str.toString();
//   let addition = options.addition.toString();
//   let separator = options.separator || '+';
//   let separatorLength = separator.length;
  
//   let additionSeparator = options.additionSeparator || '|';
//   let repeatTimes = options.repeatTimes || 1;
//   let additionRepeatTimes = options.additionRepeatTimes || 1;

//   let newString = (((string + (((addition + additionSeparator).repeat(additionRepeatTimes - 1)) + addition)) + separator).repeat(repeatTimes));
//   newString = newString.slice(0, -separatorLength);
//   console.log(newString);

//   return newString;
// };


//repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' });
  
//{ repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }) => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'