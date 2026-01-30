// for (let num = 1; num < 100; num++){
//     if (num % 2 === 0) {
//         console.log(`${num} is even`);
//     }
// }

// write a JavaScript program that prints all even numbers between 1 and 100

// arrays - data structure
names = ["Jake", "John", "Jude", "Jade"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
mix_arr = [1, "Home", true, 10, "Kenya"];
arr_arr = [[1, 2, 3], ["Nmaes", "tand"]]


// console.log(names);
names.push("Bona"); // add element infont of the array
names.pop(); // remove element infont of the array
names.unshift("Ogeto"); // add element at the beginning
names.shift(); // remove element from the beginning
// console.log(names);

// for (let num = 0; num < names.length; num++){
//     console.log(names[num]);
// }

// write a JavaScript program that returns the maximum age in the array below
ages = [34, 78, 12, 56, 89, 98];

// objects -> key-value pairs
// person -> name, age, occupation

person = {
    name: "Jane Doe",
    age: 56,
    occupation: "Farmer",
    addresses: ["a@b.com", "c@k.com"]
}

car = {
    brand: "Tesla",
    model: "Model S",
    year: "2024"
}

persons = {
    name: {
        occupation: "Teacher",
        nationality: "Kenyan"
    },
    hobbies: {
        recreational: "swimming",
        sports: "Football"
    }

}

// list of objects
randomList = [
    {
        name: {
            occupation: "Teacher",
            nationality: "Kenyan"
        },
        hobbies: {
            recreational: "swimming",
            sports: "Football"
        }
    },
    {
        brand: "Tesla",
        model: "Model S",
        year: "2024"
    }
]

// functions
function addition(number, number2) {
    let result = number + number2;
    return result;
}

// let number = Number(prompt("Enter the first number: "));
// let number2 = Number(prompt("Enter the second number: "));

// console.log(addition(number, number2));

// write a function that checks whether a number is divisible by 7 or not

function isDivisibleBySeven(number) {
    if (number % 7 === 0) {
        console.log(`${number} is divisible by 7`);
    } else {
        console.log(`${number} is not divisible by 7`);
    }
}

// let number = Number(prompt("Enter a number: "));
// isDivisibleBySeven(number);

// return

// write a function that takes in a list of student scores as a parameter
//  and returns the maximum score

// arrow functions
const sum = (num1, num2) => {
    return num1 + num2;
}

console.log(sum(23, 90));