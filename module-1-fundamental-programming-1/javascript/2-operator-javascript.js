/* 
@@@@@@@@@@@@@@@@@@ Operator in JavaScript @@@@@@@@@@@@@@@@@@
*/

// --- Arithmetic Operators ---
let itemPrice = 50;   // Price of an item
let quantity = 3;     // Quantity of items
let totalCost = itemPrice * quantity;  // Calculate total cost
console.log("Total Cost:", totalCost);  // Output: 150

let discount = 20;    // Discount amount
let finalPrice = totalCost - discount;  // Calculate final price after discount
console.log("Final Price:", finalPrice);  // Output: 130

// --- Assignment Operators ---
let balance = 1000;   // Initial balance in account
balance += 500;       // Add 500 to balance
console.log("New Balance:", balance);  // Output: 1500

balance -= 200;       // Subtract 200 from balance
console.log("Updated Balance:", balance);  // Output: 1300

// --- Comparison Operators ---
let personAge = 25;   // Age of a person
let minimumAge = 18;  // Minimum legal age for voting

let isEligibleToVote = personAge >= minimumAge;  // Check if eligible to vote
console.log("Eligible to Vote:", isEligibleToVote);  // Output: true

let isSameAge = personAge == minimumAge;  // Check if age is exactly the minimum
console.log("Is Same Age as Minimum:", isSameAge);  // Output: false

// --- Logical Operators ---
let hasTicket = true;  // Person has a ticket
let isVIP = false;     // Person is not a VIP

let canEnterEvent = hasTicket && isVIP;  // Both conditions must be true to enter
console.log("Can Enter Event:", canEnterEvent);  // Output: false

let canEnterEither = hasTicket || isVIP;  // One condition must be true to enter
console.log("Can Enter Either Condition:", canEnterEither);  // Output: true

// --- Ternary (Conditional) Operator ---
let age = 16;  // Person's age
let status = age >= 18 ? "Adult" : "Minor";  // Check if person is an adult
console.log("Status:", status);  // Output: "Minor"

/*
    Summary of Operators:
    1. Arithmetic Operators (+, -, *, /, %): Perform basic math operations.
    2. Assignment Operators (=, +=, -=, *=, /=): Assign and update variable values.
    3. Comparison Operators (==, !=, >, <, >=, <=): Compare values and return boolean.
    4. Logical Operators (&&, ||, !): Combine or negate boolean expressions.
    5. Ternary Operator (condition ? true_value : false_value): Shortened if-else for conditional logic.
*/