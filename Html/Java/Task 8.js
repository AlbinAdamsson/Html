// Task 1
const num = 42;

const strNum = num.toString();



console.log ("Orgininal number" + num);
console.log (typeof strNum)


// Task 2
const fruits = ["apple", "pear", "banana"]
fruits.push ("lemon");
console.log (fruits)

fruits.pop();
console.log (fruits)

const firstfruit = fruits[0];
console.log (fruits)

const arrayLength = fruits.length;
console.log (fruits)
console.log('Updated Array:', fruits);
console.log('Array Length:', arrayLength);


//Task 3
let person = {
    name: "Albin",
    Age: "22",
    email: "dewjfbej@gmail.com",
};

console.log (person.name, person.Age, person.email)

//Task 4
let randomNumber = Math.random(); // Generates a random number between 0 and 1
let squareRoot = Math.sqrt(25); // Calculates the square root of 25

console.log('Random Number:', randomNumber);
console.log('Square Root of 55:', squareRoot);


//Task 5
// Get a string input from the user
const userString = prompt('Enter a string:');

