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
 * @desc Program that shows an example of a logic error
 *
 */

'use strict';

function main() {
  let multiplication = 1;
  let numbers = [5, 4, 7, 1, 30];
  for (const value of numbers) multiplication = multiplication * value;
  console.log(multiplication);
}

if(require.main === module) main();