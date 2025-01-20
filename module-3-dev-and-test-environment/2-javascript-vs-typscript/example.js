// Basic variables
let name = "Alice"; // mutable
const age = 30; // constant

// Function: Basic
const greet = (name) => `Hello, ${name}!`;

console.log(greet(name)); // Output: Hello, Alice!

// Control structures: If/else
console.log(age > 18 ? "Adult" : "Minor");

// Switch statement
switch (age) {
    case 18:
        console.log("Just an adult");
        break;
    case 30:
        console.log("Prime age!");
        break;
    default:
        console.log("Age is just a number");
}

// Loop: for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0 1 2 3 4
}

// Loop: while loop
let i = 0;
while (i < 5) {
    console.log(i); // Output: 0 1 2 3 4
    i++;
}

// Object-Oriented Programming: Classes and Inheritance
function Animal(name, age) {
    this.name = name;
    this.age = age;
}

Animal.prototype.greet = function() {
    console.log(`I am a(n) ${this.name}, ${this.age} years old.`);
};
Animal.prototype.makeSound = function() {
    console.log("Generic animal sound");
};

function Dog(name, age, breed) {
    Animal.call(this, name, age); // Call parent constructor
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.makeSound = function() {
    console.log("Bark bark!");
};

const dog = new Dog("Buddy", 3, "Golden Retriever");
dog.greet(); // Output: I am a(n) Buddy, 3 years old.
dog.makeSound(); // Output: Bark bark!