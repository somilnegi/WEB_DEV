// Closures are a fundamental concept in JavaScript that allow functions to retain access to variables from their outer scope even after execution. They are widely used for state management, event handling, and data encapsulation.

function outer() {
    let counter = 0
    return function () {
        counter++
        return counter
    }
}

let increment = outer()
console.log(increment());
console.log(increment());
console.log(increment());
