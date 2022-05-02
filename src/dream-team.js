const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  this.arr = arr;
  let newArr = [];
    if (arr === undefined || !Array.isArray(arr)) return false;
  let newArrOfLetter = arr.map((arg)=>{
      if (typeof arg === "string") {
        let trimArg = arg.trim();
            newArr.push(trimArg[0].toUpperCase());
      } 
    }) 
  let secretName = newArr.sort().join("");

  return secretName;

}

module.exports = {
  createDreamTeam
};
