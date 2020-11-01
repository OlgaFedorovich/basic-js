const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    // if (Array.isArray(arr)) return 1 + Math.max(arr.map(t => calculateDepth(t)));
    // else return 0;

    // return 1 + (arr instanceof Array ? arr.reduce(function(max, item) {
    //   return Math.max(max, test(item));
    // }, 0) : -1);

    // let i = 0;
    // while(array.length){
    //      i++;
    //      array = array.reduce( (level, el) => {
    //           if(Array.isArray(el)) level.push(...el);
    //           return level;
    //      }, []);
    // }
    // return i;

    const getMaxDepth = arr => Array.isArray(arr)? 1 + Math.max(0, ...arr.map(getMaxDepth)) : 0;
    return getMaxDepth(arr);
    
  }
};