/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Diego Perez Garcia
 * @since Feb 22 2022
 * @desc How many seconds are they?
 *       Write a program that converts to seconds a given amount of years, days, hours, minutes and seconds.
 * @see {@link https://jutge.org/problems/P70955}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 *
 */
'use strict';

let readlineSync = require('readline-sync');

/**
 * @desc Calculates de seconds depending on years, days, hours, minutes and seconds
 * @param {Number} year 
 * @param {Number} day 
 * @param {Number} hour 
 * @param {Number} minute 
 * @param {Number} second 
 * @returns 
 */
const secondsCalculation = function(year, day, hour, minute, second) {
  second = (year * 365 * 24 * 60 * 60) + (day * 24 * 60 * 60) + (hour * 60 * 60) + (minute * 60) + second;
  console.log(second);
  return;
};

/**
 * @desc Receive a message, shows it asking for a number and the save and return this number.
 * @param {String} message 
 * @returns {Number}
 */
const inputNumber = function(message) {
  let answer = readlineSync.question(message);
  let theNumber = Number(answer);
  if (!Number.isNaN(theNumber)) {  // It is a number
    return theNumber;
  }
  console.log('La entrada no era un número.');
};

/**
 * Main function
 */
function main() {
  let year = inputNumber('Introduzca los años: ');
  let day = inputNumber('Introduzca los días: ');
  let hour = inputNumber('Introduzca las horas: ');
  let minute = inputNumber('Introduzca los minutos: ');
  let second = inputNumber('Introduzca los segundos: ');
  secondsCalculation(year, day, hour, minute, second);
}

if(require.main === module) {
  main();
}