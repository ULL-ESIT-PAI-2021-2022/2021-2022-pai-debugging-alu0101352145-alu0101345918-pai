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
 * @desc This program implements various arithmethic functions
 *
 */

'use strict';

import { PI, E } from './constants.js';

/**
 * @desc Function that calculates the factorial of a number
 * @param {number} number whose factorial will be calculated
 * @returns {number} factorial of the number
 */
export const factorial = (number) => {
  if (number === 0) {
    return 1;
  } else {
    let product = number;

    for (let currentNumber = number; currentNumber >= 1; --currentNumber) {
      product *= currentNumber;
    }

    return product;
  }
};

/**
 * @desc Function that returns the 
 * @param {number} Circle's radius
 * @returns {number} Circle's area
 */
export const circleArea = (radius) => {
  return (radius ** 2) * PI;
};