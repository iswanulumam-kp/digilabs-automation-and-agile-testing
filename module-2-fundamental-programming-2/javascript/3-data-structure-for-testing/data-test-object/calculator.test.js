// calculator.test.js
const { divide } = require('./calculator');

// Object containing named test functions
const testCases = {
    "pos x, pos y": { x: 8, y: 4, want: "2.00" },
    "neg x, neg y": { x: -4, y: -8, want: "0.50" },
    "equal x, y": { x: 4, y: 4, want: "1.00" },
    "max x, pos y": { x: 127, y: 2, want: "63.50" },
    "min x, pos y": { x: -128, y: 2, want: "-64.00" },
    "zero x, pos y": { x: 0, y: 2, want: "0.00" },
    "pos x, zero y": { x: 10, y: 0, wantErr: new Error("cannot divide by 0") },
    "zero x, zero y": { x: 0, y: 0, wantErr: new Error("cannot divide by 0") },
    "max x, max y": { x: 127, y: 127, want: "1.00" },
    "min x, min y": { x: -128, y: -128, want: "1.00" }
};

// Run each test by iterating over the object keys
describe("Division Tests", () => {
    Object.keys(testCases).forEach(testCase => {
        const { x, y, want, wantErr } = testCases[testCase];
        test(testCase, () => {
            if (wantErr) {
                // Test for error
                expect(() => { divide(x, y); }).toThrow(wantErr);
            } else {
                // Test for expected output
                const result = divide(x, y);
                expect(result).toBe(want);
            }
        });
    });
});
