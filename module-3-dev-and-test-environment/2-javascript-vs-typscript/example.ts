// example.ts (TypeScript)

//////////////////////////////////////////
// Basic variables with types
let name: string = "Alice"; 
const age: number = 30;

// Function with type annotations
const greet = (name: string): string => `Hello, ${name}!`;
console.log(greet(name));  // Output: Hello, Alice!

//////////////////////////////////////////
// Control structures: If/else
console.log(age > 18 ? "Adult" : "Minor");

//////////////////////////////////////////
// Switch statement
switch (age) {
    case 18: console.log("Just an adult"); break;
    case 30: console.log("Prime age!"); break;
    default: console.log("Age is just a number");
}

//////////////////////////////////////////
// Loops: for loop
for (let i = 0; i < 5; i++) console.log(i);

// Loops: while loop
let i = 0;
while (i < 5) console.log(i++);

//////////////////////////////////////////
// Object-Oriented Programming: Classes and Inheritance

// Base class: Animal
class Animal {
    constructor(public name: string, public age: number) {}

    greet() {
        console.log(`I am a(n) ${this.name}, ${this.age} years old.`);
    }

    makeSound() {
        console.log("Generic animal sound");
    }
}

// Inheritance: Dog class extends Animal
class Dog extends Animal {
    constructor(name: string, age: number, public breed: string) {
        super(name, age);
    }

    makeSound() {
        console.log("Bark bark!");
    }
}

// Instantiate a Dog object
const dog = new Dog("Buddy", 3, "Golden Retriever");
dog.greet();  // Output: I am a(n) Buddy, 3 years old.
dog.makeSound();  // Output: Bark bark!

//////////////////////////////////////////
// Access modifiers: public, private

class Car {
    private brand: string; // Private property
    public model: string;  // Public property
    protected year: number; // Protected property

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public displayInfo() {
        console.log(`${this.brand} ${this.model} (${this.year})`);
    }
}

// Instantiate a Car object
const car = new Car("Toyota", "Corolla", 2022);
car.displayInfo();  // Output: Toyota Corolla (2022)

//////////////////////////////////////////
// Method Overloading (Using type unions in TypeScript)
class Printer {
    print(content: string | number | boolean) {
        if (typeof content === 'string') {
            console.log("Printing string: " + content);
        } else if (typeof content === 'number') {
            console.log("Printing number: " + content);
        } else {
            console.log("Printing boolean: " + content);
        }
    }
}

// Instantiate a Printer object
const printer = new Printer();
printer.print("Hello, world!");  // Output: Printing string: Hello, world!
printer.print(12345);  // Output: Printing number: 12345
printer.print(true);  // Output: Printing boolean: true
