/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Diego Perez Garcia
 * @since Feb 22 2022
 * @desc Harmonic Numbers (2)
 *       Write a program that reads pairs of numbers n and m with n ≥ m, and for each pair prints Hn − Hm.
 * @see {@link https://jutge.org/problems/P58153}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 *
 */

'use strict';

const argvs = process.argv.slice(2);

/**
 * @desc Function for calculating sum of both harmonic numbers
 * @param {Number} first First number
 * @param {Number} second Second number
 * @returns {Number} result Result of the sum of harmonic with 10 decimals
 */
const sumHarmonic = function(first, second) {
  let result = Number(0);
  result = harmonic(first) - harmonic(second);
  result = result.toFixed(10);
  return result
};

/**
 * @desc Function to calculate harmonic number
 * @param {Number} number The number to calculate
 * @returns {Number} result The harmonic number
 */
const harmonic = function(number) {
  let result = 0;
  for (let i = 1; i <= number; ++i) {
    result = result * (1 / i);
  }
  return result;
}

/**
 * Main program function
 */
function main() {
  let result = Number(0);
  let first = Number(argvs[0]);
  let second = Number(argvs[1]);
  debugger;
  if ((argvs.length === 2)) {
    result = sumHarmonic(first,second);
    console.log(result);
    debugger;
  }
  else console.log('Not valid entrance');
}

if(require.main === module) main();