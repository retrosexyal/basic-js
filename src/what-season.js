const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  this.date = date;

  if (date === undefined){
    return 'Unable to determine the time of year!';
  };
  if (!(date instanceof Date)){
    throw Error(`Invalid date!`);
  };
  if (date === new Date) {
    throw Error(`Invalid date!`);
  }
  let month = date.getMonth();
  if (1 < month && month < 5) {
    return "spring"} else if (4 < month && month < 8) {
      return "summer"} else if (7 < month && month < 11){
        return "autumn"} else if(month == 11 || month == 0 || month == 1){
          return "winter"};
}

module.exports = {
  getSeason
};
