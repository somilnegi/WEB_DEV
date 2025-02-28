let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020, 
    start: function () {
        return `${this.make} car got started in ${this.year}`;
    },
};

// console.log(car.start());

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let john=new Person("John Doe", 20)
// console.log(john.name);


// Prototype Chain
function Animal(type) {
    this.type = type
}

Animal.prototype.speak = function () {
    return `${this.type} makes a sound`
}

Array.prototype.somil = function () {
    return `Custom Method ${this}`
}

let myArray = [1, 2, 3]
// console.log(myArray.somil());
let myNewArray = [1, 2, 3, 4, 5]
// console.log(myNewArray.somil());


class Vehicle {
    constructor(make, model) {
        this.make = make
        this.model=model
    }
    start() {
        return `${this.model} is a car from ${this.make}`
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.make}: This is an inheritance example`
    }
}

let myCar = new Car("Toyota", "Hillux")
// console.log(myCar.start());
// console.log(myCar.drive());

// let vehOne = Vehicle("Toyota", "Corolla")
// console.log(vehOne.make);
// This will throw an error for not using 'new' keyword



// ENCAPSULATION

class BankAccount {
    #balance = 0

    deposit(amount) {
        this.#balance += amount
        return this.#balance
    }

    getBalance() {
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount()

// console.log(account.getBalance());



// ABSTRACTION


class CoffeeMachine {
    start() {
        //Complex code for internal working
        return `Starting the machine...`
    }

    brewCoffee() {
        // Compelx calculations
        return `Brewing coffee...`
    }

    pressStartButton() {
        let msg1=this.start()
        let msg2 = this.brewCoffee()
        return `${msg1}  ${msg2}`
    }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.pressStartButton());



// POLYMORPHISM

class Bird{
    fly() {
        return `Flying...`
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguins can't fly`
    }
}

let bird = new Bird()
let penguin = new Penguin()

// console.log(bird.fly());
// console.log(penguin.fly());



// Static Method: The methods that can be only called by the class

class Calculator {
    static add(a, b) {
        return a+b
    }
}

// let miniCalc = new Calculator()
// console.log(miniCalc.add(2, 3));
// The above code will now work

// console.log(Calculator.add(2, 3));



// Getters and Setters

class Employee {

    #salary
    constructor(name, salary) {
        if (salary < 0) {
            throw new Error("Salary cannot be negative")
        }
        this.name = name
        this.#salary=salary
    }

    get salary() {
        return `You are not allowed to see salary`
    }

    set salary(value) {
        if (value < 0) {
            console.error("Invalid Salary");
        }
        else {
            this._salary=value;
        }
    }
}

let emp = new Employee("Alice", -50000)
console.log(emp._salary);
emp.salary=60000