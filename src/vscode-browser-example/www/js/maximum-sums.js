/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Diego Perez Garcia
 * @since Mar 09 2022
 * @desc Maximum sums
 *       Write a program that reads a sequence of numbers, 
 *       and prints the maximum quantity that can be obtained by adding numbers consecutively from the beginning, 
 *       and the maximum quantity that can be obtained by adding numbers consecutively from the end.
 * @see {@link https://jutge.org/problems/P20262}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 *
 */

'use strict';

/**
 * @desc Sums the values starting from the left, then if it's the max sum replace and return the max sum.
 * @param {Array} numbers 
 * @returns {Number} max
 */
 const maximumSumLeft = function(numbers) {
  let maximum = 0;
  let summatory = 0;
  debugger;
  for (let value of numbers) {
    summatory = summatory + value;
    if (summatory > maximum) maximum = summatory;
  }
  alert('La suma por la izquierda de ' + numbers + ' es ' + maximum);
}

/**
 * @desc Sums the values starting from the right, then if it's the max sum replace and return the max sum.
 * @param {Array} numbers 
 * @returns 
 */
const maximumSumRight = function(numbers) {
  let maximum = 0;
  let summatory = 0;
  debugger;
  for (let value of numbers.reverse('')) {
    summatory = summatory + value;
    if (summatory > maximum) maximum = summatory;
  }
  alert('La suma por la derecha de ' + numbers + ' es ' + maximum);
}
