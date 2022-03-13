/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Diego Perez Garcia
 * @since Feb 22 2022
 * @desc Looking for an a
 *       Write a program that reads a sequence of characters ended in a dot and tells if the sequence has any lowercase ‘a’ or not.
 * @see {@link https://jutge.org/problems/P75149}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 *
 */
'use strict';

/**
 * The function recive a sentence and look for an a if it found it return yes, if not return no.
 * @param {String} sentence The sentence to look for
 */
const lookingA = function(sentence) {
  debugger;
  for (const char of sentence) {
    if(char === 'a') {
      alert('No hay una a en la frase: ' + sentence);
      break;
    } else if (char !== '.') {
      alert('Si hay una a en la frase: ' + sentence);
      break;
    }
  }
};