/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Diego Perez Garcia
 * @since Feb 22 2022
 * @desc Intervals (1)
 *       Write a program that, given two intervals, computes the interval corresponding to their intersection, or tells that it is empty.
 * @see {@link https://jutge.org/problems/P51126}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 *
 */
'use strict';

const argvs = process.argv.slice(2);

const intervals = function(a1,a2,b1,b2) {
  let first = 0;
  let second = 0;
  if ((a2 < b1) || (a1 > b2)) console.log('[]');
  else {
    if(a1 >= b1) first = a1;
    else first = b1;
    if (a2 >= b2) second = b2;
    else second = a2;
    console.log('[' + first + ',' + second + ']');
  }
  return;
};

function main() {
  let a1 = argvs[0];
  let a2 = argvs[1];
  let b1 = argvs[2];
  let b2 = argvs[3];
  intervals(a1,a2,b1,b2);
}

if(require.main === module) {
  main();
}