// JavaScript provides different ways to import and export modules. The two main module systems are:
// ES Modules (ESM) → Uses export, export default, and import.
// CommonJS (CJS) → Uses module.exports and require().

// Named export
function add(a, b) {
    return a+b
}

function subtract(a, b) {
    return a-b
}

function multiply(a, b) {
    return a*b
}

module.exports = {
    add,
    subtract,
    multiply,
}