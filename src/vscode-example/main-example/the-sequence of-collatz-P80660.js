/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Salvador Magariños Alba
 * @since Feb 21 2022
 * @email alu0101352145@ull.edu.es
 * @desc The sequence of Collatz
 * 
 *       The program asks the user for a positive natural number and follows 
 *       these steps:
 *       - If the number is 1, we stop
 *       - If the number is even, it is divided by two
 *       - If the number is odd, it is multiplied by three, and it's increased
 *         by one
 *       - We go back to the first step
 *       After reaching 1, the program prints the number of steps it took to 
 *       do it   
 * 
 * @usage node the-sequence-of-collatz-P80660.js
 * @example node the-sequence-of-collatz-P80660.js
 * @see {@link https://jutge.org/problems/P80660}
 * @see {@link https://en.wikipedia.org/wiki/Collatz_conjecture}
 * 
 */

/// The program uses JavaScript's strict mode
'use strict';

/**
 * @desc Function that calculates the number of steps to reach 1 from a number
 *       following the Sequence of Collatz's instructions
 * @param number Start number of the sequence
 * @returns steps Steps needed to reach 1 from 'number'
 */
const collatzSequence = function(number) {  
  let steps = 0;
  let currentNumber = number;
  while (currentNumber !== 1) {
    if (currentNumber % 2 === 0) {
      currentNumber /= 2;
    } else {
      currentNumber *= 3;
      currentNumber++;
    }
    steps++;
  }
  return steps;
}

/**
 * @desc Function that checks if an argument is a positive natural number.
 *       It will check if the argument is:
 *       - A number
 *       - An integer (not a float)
 *       - Positive
 * @param number Variable to be checked 
 * @returns The function returns true if the argument is a non negative
 *          integer. In other case, it returns false
 */
const checkIfNaturalPositiveNumber = function(number) {
  if ((!Number.isNaN(number)) && (typeof number === 'number') && 
      (number % 1 === 0) && (number > 0)) {
    return true;
  } else {
    return false;
  }
}

/**
 * @desc Function to check the arguments received by the program.
 *       The conditions to return true are:
 *       - All arguments must be natural positive numbers
 * @param argv Arguments passed to the program, stored in an array
 * @returns This function returns true if the arguments meet the expected
 *          conditions. In other case, it returns false
 */
const checkArguments = function(argv) {
  for (let argument of argv) {
    if (!checkIfNaturalPositiveNumber(Number(argument))) {
      console.log('Wrong type of argument. The program expects all arguments' +
          ' to be natural positive numbers (positive integers).');
      return false;
    }
  }
  return true;
}

/**
 * @desc Function that implements the main body of the program. The program
 *       gets an array of numbers from the command line that should be
 *       positive integers. Then, it checks this condition and, if it's true,
 *       the script uses a function to calculate the number of steps of the
 *       sequence of Collatz for each number, and prints them
 * @returns This function doesn't return anything
 */
function main() {
  let argumentsArray = process.argv.slice(2);
  let correctArguments = checkArguments(argumentsArray);
  if (correctArguments === true) {
    for (let number of argumentsArray) {
      console.log(collatzSequence(Number(number)));
    }
  }
}

/// Checks if the current module was loaded from the command line with NodeJS
/// In other words, checks if the current module is the main module to know if
/// we're at the entry point of the program. If this is true, we call the main
/// function
if (require.main === module) {
  main();
}
