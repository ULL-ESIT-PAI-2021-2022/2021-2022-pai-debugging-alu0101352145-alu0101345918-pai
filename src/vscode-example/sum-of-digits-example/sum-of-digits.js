/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Salvador Magariños Alba
 * @since Feb 19 2022
 * @email alu0101352145@ull.edu.es
 * @desc Sum of digits
 * 
 *       The program receives natural numbers as an input, calculates the sum 
 *       of each one's digits and prints them.      
 * 
 * @usage node sum-of-digits-P33839.js <number1> <number2> ...
 * @example node sum-of-digits-P33839.js 29 7 0001 1020
 * @see {@link https://jutge.org/problems/P33839}
 * 
 */

/// The program uses JavaScript's strict mode
'use strict';

/**
 * @desc Function that receives a sequence of digits and returns their sum
 * @param numberSequence Sequence of digits (they form a natural number)
 * @returns sum Total sum of the digits' values
 */
const sumOfDigits = function(numberSequence) {  
  let sum = 0;
  for (let digit of numberSequence) {
    sum += digit;
  }
  return sum;
}

/**
 * @desc Function that checks if an argument is a natural number.
 *       It will check if the argument is:
 *       - A number
 *       - An integer (not a float)
 *       - Non negative
 * @param number Variable to be checked 
 * @returns The function returns true if the argument is a non negative
 *          integer. In other case, it returns false
 */
const checkIfNaturalNumber = function(number) {
  if ((!Number.isNaN(number)) && (typeof number === 'number') && 
      (number % 1 === 0) && (number >= 0)) {
    return true;
  } else {
    return false;
  }
}

/**
 * @desc Function to check the arguments received by the program.
 *       The conditions to return true are:
 *       - All arguments must be natural numbers
 * @param argv Arguments passed to the program, stored in an array
 * @returns This function returns true if the arguments meet the expected
 *          conditions. In other case, it returns false
 */
const checkArguments = function(argv) {
  for (let argument of argv) {
    if (!checkIfNaturalNumber(Number(argument))) {
      console.log('Wrong type of argument. The program expects all arguments' +
          ' to be natural numbers (non negative integers).');
      return false;
    }
  }
  return true;
}

function main() {
  let sequencesArray = process.argv.slice(2);
  let correctArguments = checkArguments(sequencesArray);
  let sequenceSum;
  if (correctArguments === true) {
    for (let sequence of sequencesArray) {
      sequenceSum = sumOfDigits(sequence);
      console.log(`The sum of the digits of ${sequence} is ${sequenceSum}.`);
    }
  }
}

if (require.main === module) {
  main();
}