/**
 * Divides two numbers and returns the result formatted to 2 decimal places.
 * 
 * @param {number} x - The numerator.
 * @param {number} y - The denominator.
 * @returns {string} The result of the division, formatted to 2 decimal places.
 * @throws {Error} If the denominator is zero, an error is thrown.
 */

function divide(x, y) {
    if (y === 0) {
        throw new Error("Cannot divide by 0");
    }
  
    const result = x / y;
    return result.toFixed(2); // Format result to 2 decimal places
}
  
module.exports = { divide };