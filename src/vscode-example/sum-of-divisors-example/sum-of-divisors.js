/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Salvador Magariños Alba
 * @since Feb 23 2022
 * @email alu0101352145@ull.edu.es
 * @desc Sum of divisors
 * 
 *       The program receives a number and prints its divisors' sum
 * 
 * @usage node sum-of-divisors-P95972.js <number>
 * @example node sum-of-divisors-P95972.js 100
 * @see {@link https://jutge.org/problems/P95972_en}
 * 
 */

'use strict';

// Function to calculate the sum of a number's divisors
function sumDivisors(numberToDivide) {
  let sum = 0;
  for (let divisor = 1; divisor <= numberToDivide / 2; ++divisor) {
    if (numberToDivide % divisor === 0) {
      sum += divisor;
    }  
  }
  
  return sum;
}

// Function to check if a number is a natural number
function checkIfNaturalNumber(number) {
  if ((number % 1 === 0) && (number >= 0) && (typeof number === 'number')) {
    return true;
  } else {
    return false;
  }
}

function main() {
  let passedArgument = process.argv.slice(2);
  if ((process.argv.length === 2) || (passedArgument.length === 3)) {
    console.log('You must pass a single argument.');
    return;
  }
  let number = Number(passedArgument[0]);
  if (!checkIfNaturalNumber(number)) {
    console.log('You must pass a natural number.');
    return;
  } else {
    console.log(sumDivisors(number));
  }
}   

if (require.main === module) {
  main();
}