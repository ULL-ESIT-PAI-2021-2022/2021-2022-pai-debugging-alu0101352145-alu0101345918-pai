/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Salvador Magariños Alba
 * @author Diego Pérez García
 * @since Mar 13 2022
 * @email alu0101352145@ull.edu.es
 * @email alu0101345918@ull.edu.es
 * @desc This program calculates the sum of two circle's areas, rounds it
 *    to the nearest integer, calculates its factorial, and prints the result
 *
 */

import { circleArea, factorial } from './utilities.js';

/**
 * @desc Functions that calculates the sum of two circle's areas, rounds it
 *    to the nearest integer, calculates its factorial, and prints the result
 * @param {number} firstRadius Radius of the first circle
 * @param {number} secondRadius Radius of the second circle
 * @returns {number} factorial of the sum
 */
const factorialOfSumOfAreas = (firstRadius, secondRadius) => {
  let sumOfAreas = Math.round(circleArea(firstRadius) + circleArea(secondRadius));
  return factorial(sumOfAreas);
};

let passedArguments = process.argv.slice(2);

console.log(factorialOfSumOfAreas(Number(passedArguments[0]), Number(passedArguments[1])));