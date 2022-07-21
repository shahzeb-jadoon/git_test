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

function capitalize(text) {
    if (typeof text === 'string' || text instanceof String) {
        return (text)[0].toUpperCase() + (text).slice(1).toLowerCase();
    } else {
        alert('Please enter text!');
    }
}

let text = prompt("What text do you want capitalized?");

console.log(capitalize(text));

function lastLetter (text) {
    return text.charAt(-1);
}