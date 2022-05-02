const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(/* sampleActivity */arg) {
  this.arg = arg;
  if (typeof arg === "string") {arg = +arg} else return false;
  
  if (typeof arg === "number" && !isNaN(arg) && arg<15 && arg > 0){
  const rate = 0.693/HALF_LIFE_PERIOD;
  let time = Math.ceil((Math.log(MODERN_ACTIVITY / arg)) / rate);
  return time;
  } else return false;
}

module.exports = {
  dateSample
};
