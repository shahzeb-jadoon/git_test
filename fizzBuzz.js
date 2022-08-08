// Loops from 1 up to a given number and prints "FizzBuzz" if the number is divisible
// by both 3 and 5, prints "Fizz" if the number is just divisible by 3, prints "Buzz"
// if the number is only divisible by 5, or simply prints the number if none of those
// statements apply.

function fizzBuzz() {
    let integer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: ")); //Receive input from user
    
    for (let i = 1; i <= integer; i++) { // Loop from 1 to provided number
        if (i % 3 === 0 && i % 5 === 0) { // Check if divisible by 3 and 5
            console.log("FizzBuzz");
        } else if (i % 3 === 0) { // Check if divisible by 3
            console.log("Fizz");
        } else if (i % 5 === 0) { // Check if divisible by 5
            console.log("Buzz");
        } else { // Not divisible by 3 or 5
            console.log(i);
        }
    }
}