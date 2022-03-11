/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Salvador Magariños Alba
 * @since Mar 07 2022
 * @email alu0101352145@ull.edu.es
 * @desc Windowing System
 * 
 *       This program implements various functions to practice the usage
 *       of JavaScript's prototypes and classes
 * 
 * @usage node windowing-system.js
 * @example node windowing-system.js
 * @see {@link https://exercism.org/tracks/javascript/exercises/windowing-system}
 * 
 */

// @ts-check

/**
 * @constructor Constructor of prototype Size
 * @param {number} width Horizontal lenght
 * @param {number} height Vertical length
 */
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

/**
 * @method Method to change the dimensions
 * @param {number} newWidth New value for width
 * @param {number} newHeight New value for height
 */
Size.prototype.resize = function(newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

/**
 * @constructor Constructor of prototype Position
 * @param {number} x Horizontal position
 * @param {number} y Vertical position
 */
export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

/**
 * @method Method to move the window
 * @param {number} newX New value for x
 * @param {number} newY New value for y
 */
Position.prototype.move = function(newX, newY) {
  this.x = newX;
  this.y = newY;
};

/**
 * @class ProgramWindow Class to represent a screen and a window inside it
 */
export class ProgramWindow {

  /**
   * @constructor Constructor of class ProgramWindow
   */
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  /**
   * @method Method for resizing the window. The values of "width" and
   *    "height" cannot be less than 1. Their values will also be adjusted
   *    to the window's size
   * @param {Size} newSize Requested dimensions for the window
   */
  resize(newSize) {
    let newWidth, newHeight;
    if (newSize.width >= 1) {
      if ((newSize.width + this.position.x) > this.screenSize.width) {
        newWidth = this.screenSize.width - this.position.x;
      } else {
        newWidth = newSize.width + this.position.x;
      }
    } else {
      newWidth = 1;
    }
    if (newSize.height >= 1) {
      if ((newSize.height + this.position.y) > this.screenSize.height) {
        newHeight = this.screenSize.height - this.position.y;
      } else {
        newHeight = newSize.height + this.position.y;
      }
    } else {
      newHeight = 1;
    }
    this.size.resize(newWidth, newHeight);
  }

  /**
   * @method Method for moving the window. The values of "x" and
   *    "y" cannot be less than 0. Their values will also be adjusted
   *    to the window's size
   * @param {Position} newPosition Requested position for the window
   */
  move(newPosition) {
    let newX, newY;
    if (newPosition.x >= 0) {
      if ((newPosition.x + this.size.width) > this.screenSize.width) {
        newX = this.screenSize.width - this.size.width;
      } else {
        newX = newPosition.x + this.position.x;
      }
    } else {
      newX = 0;
    }
    if (newPosition.y >= 0) {
      if ((newPosition.y + this.position.y) > this.screenSize.height) {
        newY = this.screenSize.height - this.size.height;
      } else {
        newY = newPosition.y + this.position.y;
      }
    } else {
      newY = 0;
    }
    this.position.move(newX, newY);
  }
}

/**
 * @desc Function to modify the position and size of the window inside a 
 *    ProgramWindow
 * @param {ProgramWindow} programWindow Instance of ProgramWindow to move and
 *    resize
 * @returns programWindow The same window that acts as parameter, but modified
 */
export function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);
  programWindow.resize(newSize);
  programWindow.move(newPosition);
  return programWindow;
}