/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Salvador Magariños Alba
 * @author Diego Pérez García
 * @since Mar 12 2022
 * @email alu0101352145@ull.edu.es
 * @email alu0101345918@ull.edu.es
 * @desc Program that shows examples of the usage of exceptions
 *
 */

'use strict';

/** Throwing an error using the default Error constructor */
console.log('Throwing an error using the default Error constructor');

try {
  throw new Error();
} catch {
  console.log('An error was thrown');
}

/** Throwing a number */
console.log('\nThrowing an error using the default Error constructor');

try {
  throw 3;
} catch (error) {
  console.log(error);
}

/** Throwing an object */
console.log('\nThrowing an object');

try {
  throw { 
    'insideAFunction': false,
    'currentNumberOfThrows': 3
  };
} catch (error) {
  console.log(error.insideAFunction);
}

/** Usage of the message and stack properties */
console.log('\nUsage of the message and stack properties');

function badFunction() {
  let uselessVariable = 3;
  throw new Error('This function is too bad');
}

try {
  badFunction();
} catch (error) {
  console.log(error.message);
  console.log(error.stack);
}

/** Example of the behaviour of the finally block when an exception is thrown */
console.log('\nExample of the behaviour of the finally block when an exception is thrown');

try {
  null.length;
  console.log('No exception was thrown');
} catch (error) {
  console.log('Exception thrown');
} finally {
  console.log('Exiting the block');
}

/** Example of the behaviour of the finally block when no exception is thrown */
console.log('\nExample of the behaviour of the finally block when no exception is thrown');

try {
  let aNumber = 1;
  console.log('No exception was thrown');
} catch (error) {
  console.log('Exception thrown');
} finally {
  console.log('Exiting the block');
}

/** New classes that represent new types of errors */
console.log('\nExample of the behaviour of the finally block when no exception is thrown');

class ImpossibleNumber extends Error {};
class NullNumber extends Error {};

let number = 3;
let string = "I will return NaN";
let nullValue = null;

/**
 * @desc Function that tests if a value can be converted to a number
 * @param argument Value to convert
 */
function convertToNumber(argument) {
  try {
    console.log(`Trying to convert ${argument} to a number`);
    let convertedNumber = Number(argument);

    if (isNaN(convertedNumber)) {
      throw new ImpossibleNumber();
    } else if (argument === null) {
      throw new NullNumber();
    }

    console.log(`${argument} passed the test`);
  } catch (error) {
    if (error instanceof ImpossibleNumber) {
      console.log('The string you passed could not be turned into a number');
    } else if (error instanceof NullNumber) {
      console.log('You must not pass a null value');
    }
  } finally {
    console.log('Exiting the function...\n');
  }
}

convertToNumber(number);
convertToNumber(string);
convertToNumber(nullValue);