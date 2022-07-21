function add7(number) {
    return number + 7;
}

let num1 = Number(prompt("What number do you want to add 7 to?", 0))

console.log(add7(num1));

function multiply(num1, num2) {
    return num1 * num2;
}

let num2 = Number(prompt("What number do you want to multiply the first number with?", 0))

console.log(multiply(num1, num2));

function capitalize(string) {
    (typeof string === 'string' || myVar instanceof String) ?
    toString(string)[0].toUpperCase() + toString(string).slice(1).toLowerCase() :
    'Please enter text in here';
}