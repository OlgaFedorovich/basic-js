const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 
  if(!Array.isArray(members)) return false;

    let filteredMembers = members.filter(member => typeof member === 'string');

    let lettersArray = [];
    
    filteredMembers.forEach(name => {
      lettersArray.push(name.trim().toUpperCase()[0]);
    });

    let teamName = lettersArray.sort().join('');

    return teamName;

};

