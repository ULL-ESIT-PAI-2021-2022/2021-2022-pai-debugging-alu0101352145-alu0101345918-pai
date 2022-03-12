/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Salvador Magariños Alba (alu0101352145@ull.edu.es)
 * @author Diego Pérez García (alu0101345918@ull.edu.es)
 * @since Mar 12 2022
 * @brief This program uses instructions that would throw an error while 
 *    compiling in C++, but not in JavaScript. Compile with the following
 *    line: g++ -std=c++11 -g compiling-errors.cc -o compiling_errors
 *
 */

#include <iostream>

void PrintIntegers(int first, int second, int third) {
  std::cout << first << " " << second << " " << third << std::endl;
}

int main(void) {

  // We will define a function that receives three argumnents, and then call it
  // with two. This will cause an error while compiling the code
  PrintIntegers(1, 2);

  // We create a variable that stores an integer, and then try to store a string in it
  int number = 3;
  number = "3";
}