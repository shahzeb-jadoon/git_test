// Practicing writing functions in JavaScript for The Odin Project
// in order to learn front-end development

function add7(number) { // Add 7 to the provided number
    return number + 7;
}

let num1 = Number(prompt("What number do you want to add 7 to?", 0)) // Request first number from user

console.log(add7(num1)); // Print output

function multiply(num1, num2) { // Multiply two numbers
    return num1 * num2;
}

let num2 = Number(prompt("What number do you want to multiply the first number with?", 0)) // Request second number from user

console.log(multiply(num1, num2)); // Print output

function capitalize(text) { // Capitalize provided text
    if (typeof text === 'string' || text instanceof String) {
        return (text)[0].toUpperCase() + (text).slice(1).toLowerCase();
    } else {
        alert('Please enter text!'); // Wrong input
    }
}

let text = prompt("What text do you want capitalized?"); // Request text from user 

console.log(capitalize(text)); // Print output

function lastLetter (text) { // Return last letter from string
    return text.slice(-1);
}

console.log(`The last letter of ${text} is`, lastLetter(text)); // Print output