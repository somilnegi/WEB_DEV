// JavaScript provides different ways to import and export modules. The two main module systems are:
// ES Modules (ESM) → Uses export, export default, and import.
// CommonJS (CJS) → Uses module.exports and require().

export function add(a, b) {
    return a+b
}

export function subtract(a, b) {
    return a-b
}

export default function multiply(a, b) {
    return a*b
}
