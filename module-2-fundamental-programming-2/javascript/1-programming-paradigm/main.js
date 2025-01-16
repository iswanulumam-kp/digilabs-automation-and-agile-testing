// --- 1. Imperative Programming ---
// Imperative: Step-by-step approach
function imperativeExample() {
    let items = [
        { price: 10, quantity: 2 },
        { price: 20, quantity: 1 },
        { price: 5, quantity: 4 }
    ];

    let totalPrice = 0; // Initialize the total price

    // Using a for loop to calculate the total price
    for (let i = 0; i < items.length; i++) {
        totalPrice += items[i].price * items[i].quantity;
    }

    console.log("Imperative Example: " + totalPrice);  // Output: 70
}

// --- 2. Object-Oriented Programming (OOP) ---
// OOP: Using a class to calculate the total price
class ShoppingCart {
    constructor(items) {
        this.items = items;
    }

    // Method to calculate the total price
    calculateTotal() {
        let total = 0;
        for (let item of this.items) {
            total += item.price * item.quantity;
        }
        return total;
    }
}

function oopExample() {
    const cart = new ShoppingCart([
        { price: 10, quantity: 2 },
        { price: 20, quantity: 1 },
        { price: 5, quantity: 4 }
    ]);

    console.log("OOP Example: " + cart.calculateTotal());  // Output: 70
}

// --- 3. Functional Programming ---
// Functional: Using map and reduce
function functionalExample() {
    const items = [
        { price: 10, quantity: 2 },
        { price: 20, quantity: 1 },
        { price: 5, quantity: 4 }
    ];

    const totalPrice = items
        .map(item => item.price * item.quantity)  // Multiply price and quantity
        .reduce((sum, current) => sum + current, 0);  // Sum the prices

    console.log("Functional Example: " + totalPrice);  // Output: 70
}

// --- 4. Declarative Programming (SQL) ---
// Declarative: Using SQL to declare what we want
// In SQL, we just declare "what" data we want, not "how" to get it.

// The equivalent SQL query would look like this:

/*
SELECT SUM(price * quantity) AS total_price
FROM items;
*/

// This SQL query expresses the **declarative** approach: you are asking for the **total price** without specifying how the database engine should compute it.

console.log("Declarative SQL Example: Query would be - SELECT SUM(price * quantity) FROM items;");

// Execute all examples
imperativeExample();
oopExample();
functionalExample();
