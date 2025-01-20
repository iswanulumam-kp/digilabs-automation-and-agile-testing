/**
 * Adds two numbers.
 * 
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The sum of the two numbers.
 */

function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers.');
    }
    return a + b;
}
  
  /**
   * Subtracts the second number from the first number.
   * 
   * @param {number} a - The number to subtract from.
   * @param {number} b - The number to subtract.
   * @returns {number} - The result of subtracting b from a.
   */
function subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers.');
    }
    return a - b;
}
  module.exports = { add, subtract };
  