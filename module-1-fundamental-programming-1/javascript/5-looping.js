/* 
@@@@@@@@@@@@@@@@@@ Looping in JavaScript @@@@@@@@@@@@@@@@@@
*/

// Example 1: Basic `for` Loop
console.log("Example 1: Basic for loop");

for (let i = 1; i < 5; i++) {
  console.log(i); // Outputs: 0, 1, 2, 3, 4
}

// Example 2: `for...of` Loop
console.log("\nExample 2: for...of loop");

let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit); // Outputs: apple, banana, cherry
}

// Example 3: `forEach` Method
console.log("\nExample 3: forEach method");

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number); // Outputs: 1, 2, 3, 4, 5
});

// Example 4: `break` and `continue`
console.log("\nExample 4: break and continue");

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Breaking the loop at i = 5");
    break; // Exits the loop when i equals 5
  }
  
  if (i % 2 === 0) {
    continue; // Skips the current iteration for even numbers (i = 0, 2, 4)
  }

  console.log(i); // Outputs: 1, 3 (skips 0, 2, 4)
}
