const person = {
    name: "Somil",
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
}

person.greet()

const greetFunction = person.greet
greetFunction()

// Binding the 'this' context
const boundGreet = person.greet.bind({ name: "John" })
boundGreet()

