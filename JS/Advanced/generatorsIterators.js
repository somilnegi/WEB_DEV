// A generator function in JavaScript allows you to pause and resume function execution using the yield keyword. It provides an efficient way to handle lazy evaluation, infinite sequences, and asynchronous programming.

function* numberGenerator() {
    yield 1
    yield 2
    yield 3
    yield 4
}

let gen = numberGenerator()
let gen2 = numberGenerator()

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(gen2.next().value);
console.log(gen2.next().value);