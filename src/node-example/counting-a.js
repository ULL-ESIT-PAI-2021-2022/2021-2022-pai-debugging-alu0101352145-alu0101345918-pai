/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Diego Perez Garcia
 * @since Feb 22 2022
 * @desc Counting a's (1)
 *       Write a program that reads a sequence of characters ended with a period and prints the number of letters ‘a’ in the sequence.
 * @see {@link https://jutge.org/problems/P96979}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 *
 */

'use strict';

const argvs = process.argv.slice(2);

const countingA = function(sentence) {
  let counter = 0;
  for (const char of sentence) if (char === 'a') ++counter;
  console.log(counter);
  return;
};

function main() {
  let sentence = '';
  for (const word of argvs) sentence = sentence + word;
  countingA(sentence);
}

if(require.main === module) {
  main();
}