const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(arguments.length === 0 ? `( )` : `( ${value} )`);
    return this;
  },

  removeLink(position) {

    if(position > this.getLength() || position <= 0 || isNaN(position) || !Number.isInteger(position)) {
        this.chain = [];
        throw Error;
    }   
    else this.chain.splice(position - 1, 1);
    return this; 
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let str = this.chain.join('~~');
    this.chain = [];
    return str;
  }
};

//console.log(chainMaker.addLink('').addLink(null).addLink(NaN).addLink(false).addLink(true).addLink(1).finishChain());



module.exports = chainMaker;
