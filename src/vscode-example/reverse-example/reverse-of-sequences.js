/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Salvador Magariños Alba
 * @since Mar 08 2022
 * @email alu0101352145@ull.edu.es
 * @desc Reverse of Sequences
 * 
 *       Program that receives sequences of integers and prints each one of
 *       them reversed
 * 
 * @usage node reverse-of-sequences.js <sequence1Lenght> <element1> <element2> 
 *    ... <sequence2Lenght> <element1> <element2>
 * @example node reverse-of-sequences.js 6 10 11 12 15 14 13 0 2 22 21 3 1 2 3
 * @see {@link https://jutge.org/problems/P67268_en}
 *
 */

/** The program uses JavaScript's strict mode */
'use strict';

/**
 * @desc Function that reverses an array
 * @param {number[]} sequence of integers
 * @returns {number[]} reversed array
 */
const reverseSequence = (sequence) => {
  let newSequence = [];

  for (let index in sequence) {
    newSequence.push(sequence[sequence.length - index]);
  }

  return newSequence;
};

/**
 * @desc Function that separates a sequence of numbers this way:
 *    - The first array's length is the first number of the array
 *    - That number 'n' is extracted and the first 'n' elements of the
 *      resulting array are converted to a sequence (they are extracted, too)
 *    - Go back to the first step
 *    If one of the sequences ends up not being as long as the number 'n'
 *    indicated, the function will throw an error
 * 
 * @param {Array} elementArray Original array of elements
 * @returns {Array} Array with the separated sequences
 */
const separateSequences = (elementArray) => {
  let sequenceLenght;
  let sequenceArray = [];

  while (elementArray.length > 0) {
    sequenceLenght = Number(elementArray.shift());
    if (sequenceLenght === 0) {
      sequenceArray.push([]);
    } else {
      sequenceArray.push(elementArray.slice(0, sequenceLenght));
      elementArray.splice(0, sequenceLenght);
      if (sequenceArray.slice(-1)[0].length !== sequenceLenght) {
        throw new Error('One of the lenghts of the arguments is not correct');
      }
    }
  }

  return sequenceArray;
}

/**
 * @desc Function that checks if an argument is an integer.
 *       It will check if the argument is:
 *       - A number
 *       - An integer (not a float)
 * @param {number} number Variable to be checked 
 * @returns {boolean} The function returns true if the argument is an integer. 
 *     In other case, it returns false
 */
const checkIfInteger = function(number) {
  if ((!Number.isNaN(number)) && (typeof number === 'number') && 
      (number % 1 === 0)) {
    return true;
  } else {
    return false;
  }
}

/**
 * @desc Function to check if the arguments are integer numbers
 * @param {Array} argv Vector of arguments passed to the process
 * @throws {Error} Error thrown if one of the arguments isn't an integer
 */
const checkArguments = function(argv) {
  for (let number of argv) {
    if (!checkIfInteger(Number(number))) {
      throw new Error('You must pass sequences of numbers');
    }
  }
}

function main() {
  let elementArray = process.argv.slice(2);
  try {
    checkArguments(elementArray);
    let sequencesArray = separateSequences(elementArray);
    for (let sequence of sequencesArray) {
      console.log(...reverseSequence(sequence));
    }
  } catch(Error) {
    console.log(Error.message);
  }
}

if (require.main === module) {
  main();
}