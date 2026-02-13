// const hello = () => {
//     let name = "Kenya";
//     return `Hello ${name}`;
// }

// console.log(hello());

// // implicit returns
// const hi = () => "Hello Africa";

// console.log(hi());

// // using implicit returns write an arrow function that returns the
// // sum of three numbers
// const addition = (num1, num2, num3) => num1 + num2 + num3;

// console.log(addition(23, 45, 78));

// // lexical this
// // this
// function Timer() {
//     this.seconds = 0;
    
//     setInterval(() => {
//         this.seconds++;
//         console.log("Hello")
//     }, 4000);
// }

// // let test = new Timer();
// // console.log(test);

// // callback functions
// // when not to use arrow functions


// // default parameters
// function greet(name = "Jane Doe") {
//     return `Hello, ${name}`;
// };

// console.log(greet());

// // rest parameters
// function sumAll(...numbers) {
//     let total = 0
//     for (let num = 0; num < numbers.length; num++){
//         total += numbers[num];
//     }
//     console.log(total);
// }

// sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9);

// // spread operator
// const ages = [1, 5, 7, 9];

// console.log(...ages, 90, 79, 90);

// function mergeOptions(defaults, overrides) {
//     return { ...defaults, ...overrides };
// }

// const defaults = { a: 1, b: 2 };
// const overrides = { b: 42, c: 3 };
// // result: { a: 1, b: 42, c: 3 }

// console.log(mergeOptions(defaults, overrides));

// const number = 2;

// switch (number) {
//     case 2:
//         console.log("you're number one!");
//         break;
//     case 5:
//         console.log("Something...");
//         break;
//     default:
//         console.log("The number is original");
// }

// falls through


// while loops
// let age = 20;

// while (age > 2) {
//     console.log("You can go to highschool!");
//     age--;
// }

let num = 567;

while (num > 2) {
    if (num % 2 === 0) {
        console.log(` ${num} this is an example!`);
    }
    num--;
};

// write a JavaScript program that adds all numbers up to 1000 until 
// the largest prime number within this rage is entered