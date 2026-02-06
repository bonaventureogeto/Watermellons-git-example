// function addition() {
//     let results = 4 + 7;
//     return results;
// }

// console.log(addition());

// write a JavaScript function that returns the square of a number
function numSquare(number) {
    let result = number * number;
    return result;
}

// let number = prompt("Enter a number: ");

// console.log(numSquare(number));

// write a JavaScript function that returns the sum of any two numbers
function addition(num1, num2) {
    return num1 + num2;
}

// let num1 = Number(prompt("Enter a number: "));
// let num2 = Number(prompt("Enter another number: "));

// console.log(addition(num1, num2));

// hoisting -> the function can be called before it appears in code

// function expressions - annonymous function assigned to a variable
const hello = function (name) {
    return `hello ${name}`;
}

// console.log(hello("Bona"));

// arrow functions
const greet = () => {
    return "Hello!"
}

// console.log(greet());

// write an arrow function that returns the square of a number
const numberSqr = (num1) => {
    return num1 * num1;
}

// console.log(numberSqr(90));

// write a function that returns even numbers from the list below
let numbers = [45, 25, 78, 12, 90, 56];

function evenNums(numbers) {
    let listEven = [];
    for (let num = 0; num < numbers.length; num++){
        if (numbers[num] % 2 === 0) {
            listEven.push(numbers[num]);
        }
    }
    return listEven;
}

// console.log(evenNums(numbers));
const multiples = (numbers) => {
    let multuplesList = [];
    for (let num = 0; num < numbers.length; num++){
        if (numbers[num] % 5 === 0) {
            multuplesList.push(numbers[num]);
        }
    }
    return multuplesList;
}

console.log(multiples(numbers));