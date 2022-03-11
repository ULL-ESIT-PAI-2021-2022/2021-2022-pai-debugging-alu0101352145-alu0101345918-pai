/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Salvador Magariños Alba
 * @since Mar 08 2022
 * @email alu0101352145@ull.edu.es
 * @desc Factory Sensors
 * 
 *       This program implements various functions to practice the usage
 *       of JavaScript's errors
 * 
 * @usage node factory-sensors.js
 * @example node factory-sensors.js
 * @see {@link https://exercism.org/tracks/javascript/exercises/factory-sensors}
 * 
 */

// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * @dec Function to check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage Measured percentage of humidity
 * @throws {Error}  Error thrown if the percentage is over a limit
 */
export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) {
    throw new Error('The humidity percentage is too high');
  }
}

/**
 * @desc Function to check if the temperature is not too high.
 *
 * @param {number|null} temperature Temperature measured if the sensor 
 *    isn't broken
 * @throws {ArgumentError|OverheatingError} Error thrown depending on the
 *    type of emergency
 */
export function reportOverheating(temperature) {
  if (temperature === null) {
    throw new ArgumentError;
  } else if (temperature > 500) {
    throw new OverheatingError(temperature);
  }
}

/**
 * @description Function that triggers the needed action depending on the result 
 * of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error} Error thrown depending
 *    on the type of emergency
 */
export function monitorTheMachine(actions) {
  try {
    actions.check();
  } catch (error) {
    if (error instanceof ArgumentError) {
      actions.alertDeadSensor();
    } else if (error instanceof OverheatingError) {
      if (error.temperature < 600) {
        actions.alertOverheating();
      } else {
        actions.shutdown();
      }
    } else {
      throw error;
    }
  }
}
