// calculator.test.js
const { divide } = require('./calculator');

// Array of test cases
const testCases = [
  { input: [8, 4], expected: "2.00" },    // Test 1: 8 / 4 = 2.00
  { input: [-4, -8], expected: "0.50" },   // Test 2: -4 / -8 = 0.50
  { input: [4, 4], expected: "1.00" },     // Test 3: 4 / 4 = 1.00
  { input: [127, 2], expected: "63.50" },  // Test 4: 127 / 2 = 63.50
  { input: [-128, 2], expected: "-64.00" }, // Test 5: -128 / 2 = -64.00
  { input: [0, 2], expected: "0.00" },     // Test 6: 0 / 2 = 0.00
  { input: [10, 0], expectedErr: new Error("cannot divide by 0") }, // Test 7: Division by 0
  { input: [0, 0], expectedErr: new Error("cannot divide by 0") }, // Test 8: Division by 0
  { input: [127, 127], expected: "1.00" }, // Test 9: 127 / 127 = 1.00
  { input: [-128, -128], expected: "1.00" } // Test 10: -128 / -128 = 1.00
];

// Iterate through the test cases
describe("Division Tests", () => {
  testCases.forEach((testCase, index) => {
    const { input, expected, expectedErr } = testCase;
    const [x, y] = input; // Destructure the input values

    test(`Test ${index + 1}: ${x} / ${y}`, () => {
      if (expectedErr) {
        // Test for error
        expect(() => divide(x, y)).toThrow(expectedErr);
      } else {
        // Test for expected output
        const result = divide(x, y);
        expect(result).toBe(expected);
      }
    });
  });
});