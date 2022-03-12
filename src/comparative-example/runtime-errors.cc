/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Salvador Magariños Alba (alu0101352145@ull.edu.es)
 * @author Diego Pérez García (alu0101345918@ull.edu.es)
 * @since Mar 12 2022
 * @brief This program uses instructions that would throw an exception in C++,
 *    but not in JavaScript. Compile with the following line:
 *    g++ -std=c++11 -g runtime-errors.cc -o runtime_errors
 *
 */

#include <iostream>
#include <vector>

int main(void) {
  // We are trying to retrieve a value from a position that doesn't exist.
  // Throws an exception
  std::vector<int> MY_VECTOR(3); 
  MY_VECTOR[0] = 1;
  MY_VECTOR[1] = 2;
  MY_VECTOR[2] = 3;
  
  try {
    int nonExistentValue = MY_VECTOR.at(1000);
  } catch (...) {
    std::cout << "You can't access that position" << std::endl;
  }
}