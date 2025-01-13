/* 
@@@@@@@@@@@@@@@@@@ Branching in JavaScript @@@@@@@@@@@@@@@@@@
*/

// Example 1: Basic `if` Statement

let temperature = 30;
if (temperature > 25) {
  console.log("It's a hot day!");
}

// Example 2: `if` and `if-else` Statement
let isRaining = false;
if (isRaining) {
  console.log("Take an umbrella!");
} else {
  console.log("No umbrella needed.");
}

// Example 3: `if` and `else-if` Statement
let timeOfDay = 15; // 24-hour format
if (timeOfDay < 12) {
  console.log("Good morning!");
} else if (timeOfDay < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

// Example 4: `if` with Multiple Conditions
let age = 20;
let hasTicket = true;
if (age >= 18 && hasTicket) {
  console.log("You can enter the concert!");
} else {
  console.log("You cannot enter the concert.");
}

// Example 5: `if` with OR (||) Operator
let isWeekend = true;
let isHoliday = false;
if (isWeekend || isHoliday) {
  console.log("You can relax today!");
} else {
  console.log("It's a workday.");
}

// Clean Code Example: Using Early Return (function example)
function checkAccess(age, hasTicket) {
  if (age < 18) return "Access denied: underage.";
  if (!hasTicket) return "Access denied: no ticket.";
  
  return "Access granted!";
}

console.log(checkAccess(20, true));  // "Access granted!"
