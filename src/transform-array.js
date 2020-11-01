const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if(!Array.isArray(arr)) throw Error;

  let newArray = [];

  for(let i = 0; i < arr.length; i++) {

    let prev = arr[i - 1];
    let next = arr[i + 1];

    if(prev === '--discard-next' && next !=='--discard-prev' && next !== '--double-prev' ) 
    continue;   
    else if (next === '--discard-prev' && prev !=='--discard-next' && prev !== '--double-next') continue;

    else if(prev === '--double-next' && next !=='--discard-prev' && next !== '--double-prev') {
      newArray.push(arr[i], arr[i]); 

    } else if(prev === '--double-next' && next ==='--discard-prev') {
      newArray.push(arr[i]); 

    } else if(prev =='--double-next' && next === '--double-prev') {
      newArray.push(arr[i], arr[i], arr[i]); 

    } else if(next === '--double-prev' && prev !=='--double-next' && prev !== '--discard-next') {
      newArray.push(arr[i], arr[i]); 

    } else if(prev === '--discard-next' && (next === '--discard-prev' || next === '--double-prev')) continue;
    else if(arr[i] === '--discard-next' ||
    arr[i] === '--discard-prev' ||
    arr[i] === '--double-next' ||
    arr[i] === '--double-prev') 
    continue;

    else newArray.push(arr[i]); 
  }

  return newArray;
};

