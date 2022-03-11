/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Salvador Magariños Alba
 * @since Mar 09 2022
 * @email alu0101352145@ull.edu.es
 * @desc Valid Dates
 * 
 *       Program that receives three numbers > 0 that represent a day, a month 
 *       a year, and prints whether it's a valid date or not
 * 
 * @usage node valid-dates.js <day> <month> <year> 
 * @example node valid-dates.js 23 12 2333
 * @see {@link https://jutge.org/problems/P58459_en}
 *
 */

'use strict';

/**
 * @desc Function that checks if a year is a leap year
 * @param {number} year 
 * @returns {boolean}
 */
const isLeap = (year) => {
  if ((year % 4) === 0) {
    return (year % 100 === 0) ? (year % 400 === 0) : true;
  } else {
    return false;
  }
};

/**
 * @desc Function that returns if a number is a year
 * @param {number} year
 * @returns {boolean}
 */
const checkIfYearInRange = (year) => {
  return (year >= 1800) && (year <= 9999);
};

/**
 * @desc Function that returns if a number is a month
 * @param {number} month
 * @returns {boolean}
 */
const checkIfMonth = (month) => {
  return (month >= 1) && (month <= 12);
};

/**
 * @desc Function that returns if a number is a day
 * @param {number} day
 * @returns {boolean}
 */
const checkIfDay = (day, month, year) => {
  return (day >= 1) && (day <= daysInMonth(month, year));
};

/**
 * @desc Function that returns how many days a month has
 * @param {number} month
 * @returns {number}
 */
const daysInMonth = (month, year) => {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      if (isLeap(year)) {
        return 29;
      } else {
        return 28;
      }
    default:
      break;
  }
};

/**
 * @desc Function that checks if a date is valid
 * @param {number} day 
 * @param {number} month 
 * @param {number} year 
 * @returns {boolean}
 */
const checkIfValidDate = (day, month, year) => {
  if (!(checkIfDay(day, month, year)) || !(checkIfMonth(month)) || 
      !(checkIfYearInRange(year))) {
    return false;
  } else {
    return true;
  }
};

/**
 * @desc Function that checks if an argument is an integer.
 *       It will check if the argument is:
 *       - A number
 *       - An integer (not a float)
 * @param {number} number Variable to be checked 
 * @returns {boolean} The function returns true if the argument is an
 *     integer. In other case, it returns false
 */
const checkIfPositiveInteger = function(number) {
  if ((!Number.isNaN(number)) && (typeof number === 'number') && 
      (number % 1 === 0)) {
    return true;
  } else {
    return false;
  }
};

/**
 * @desc Function to check if the arguments are correct:
 *       - There must only be 3 arguments
 *       - All of them must be positive integers
 * @param {Array} argv Vector of arguments passed to the process
 * @throws {Error} Error thrown if one of the arguments isn't an valid
 */
const checkArguments = function(argv) {
  if (argv.length !== 3) {
    throw new Error('You must pass three arguments');
  }

  for (let number of argv) {
    if (!checkIfPositiveInteger(Number(number))) {
      throw new Error('You must pass positive integers');
    }
  }
};

function main() {
  let elementArray = process.argv.slice(2);
  try {
    checkArguments(elementArray);
    console.log(checkIfValidDate(Number(elementArray[0]), Number(elementArray[1]),Number(elementArray[2])));
  } catch(Error) {
    console.log(Error.message);
  }
}

if (require.main === module) {
  main();
}