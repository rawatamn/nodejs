function calc(a, b, fetch) {
    return fetch(a, b);  // Executes the callback function passed as `fetch`
}

function sum(a, b) {
    return a + b;  // Returns sum of two numbers
}

function sub(a, b) {
    return a - b;  // Returns subtraction of two numbers
}

console.log(calc(7, 9, sum)); // Calls `calc` with `sum` as callback
console.log(calc(8, 6, sub)); // Calls `calc` with `sub` as callback
