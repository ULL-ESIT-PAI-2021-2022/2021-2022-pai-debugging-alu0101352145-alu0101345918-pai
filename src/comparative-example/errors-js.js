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
 * @desc This program uses instructions that would throw an exception in C++,
 *    but not in JavaScript
 *
 */

'use strict';

// We are trying to retrieve a value from a position that doesn't exist.
// undefined is stored in the variable
const MY_VECTOR = [1, 2, 3];

let nonExistentValue = MY_VECTOR[1000];
console.log(nonExistentValue);

// We will define a function that receives three argumnents, and then call it
// with two. The last one will be undefined
function PrintIntegers(first, second, third) {
  console.log(`${first} ${second} ${third}`);
}

PrintIntegers(1, 2);

// We define a variable and put a 3 in it. Then, it will store the string "3"
let number = 3;
number = "3";