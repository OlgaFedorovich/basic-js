const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(par, el) {
    if(!par || !el)
    throw new Error;
    
  }    
  decrypt(par, el) {
    if(!par || !el)
    throw new Error;

  }
}

module.exports = VigenereCipheringMachine;
