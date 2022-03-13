/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Salvador Magariños Alba
 * @since Feb 23 2022
 * @email alu0101352145@ull.edu.es
 * @desc Classification of characters
 *  
 *       This program receives a letter and prints if it's uppercase/lowercase, and
 *       if it's a consonant/vowel
 * 
 * @usage node classification-of-characters-P42042.js <letter>
 * @example node classification-of-characters-P42042.js a
 * @see {@link https://jutge.org/problems/P42042}
 * 
 */

'use strict';

// Function to check if the letter is lowercase or uppercase
function caseClassificator(letter) {
  if (letter.toUpperCase() === letter) {
    return 'uppercase';
  } else {
    return 'lowercase';
  }
}

// Function to check if the letter is a vowel or a consonant
function vowelOrConsonant(letter) {
  switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return 'vowel';
    default:
      return 'consonant';
  }
}

// Function to check if a
function checkIfLetter(character) {
  const alphabet = 'qwertyuiopasdfghjklñzxcvbnm';
  for (let currentLetter of alphabet) {
    if (character === currentLetter) {
      return true;
    }
  }
  return false;
}

function main() {
  let passedArgument = process.argv.slice(2);
  if ((process.argv.length === 2) || (passedArgument.length > 1)) {
    console.log('You must pass a single argument.');
    return;
  }
  let passedLetter = passedArgument[0];
  if (passedLetter.length > 1) {
    console.log('You must not pass a string.');
    return;
  }
  if ((typeof (passedLetter) === 'undefined') || (!checkIfLetter(passedLetter))) {
    console.log('You must pass a letter.');
    return;
  }
  console.log(caseClassificator(passedArgument[0]));
  console.log(vowelOrConsonant(passedArgument[0]));
}

if (require.main === module) {
  main();
}