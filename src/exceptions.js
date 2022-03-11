/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Salvador Magariños Alba
 * @since Mar 11 2022
 * @email alu0101352145@ull.edu.es
 * @desc Exceptions
 * 
 *       Program that implements a basic demo of the usage of exceptions,
 *       try-catch-finally blocks, and inheritance from Error
 *
 */

'use strict';

class ImpossibleNumber extends Error {};
class NullNumber extends Error {};

let number = 3;
let string = "no voy a ser un númer";
let nullValue = null;

/**
 * @desc Function that tests if a value can be converted to a number
 * @param argument Value to convert
 */
function convertToNumber(argument) {
  try {
    let convertedNumber = Number(argument);
    if (isNaN(convertedNumber)) {
      throw new ImpossibleNumber();
    } else if (argument === null) {
      throw new NullNumber();
    }
    console.log(`${argument} passed the test`);
  } catch (error) {
    if (error instanceof ImpossibleNumber) {
      console.log('What you passed could not be turned into a number');
    } else if (error instanceof NullNumber) {
      console.log('You must not pass a null value');
    }
  } finally {
    console.log('Exiting the function...');
  }
}

convertToNumber(string);
convertToNumber(nullValue);
convertToNumber(number);