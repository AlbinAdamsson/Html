// Lection 10

let a=prompt("Enter first numer: ")
let b=prompt("Enter second number: ")

if (isNaN(a)||isNaN(b)) {
console.log ("Wrong entry")
}
{
    if (a>b)
    console.log ("first number is bigger")
else if (b>a)
console.log ("Second number is bigger")
else
console.log ("the numbers are equal")
}


let month=1; let monthString="" 
switch(month)
{
    case 1: monthString="Jan";
        break;
    
    case 2: monthString="Feb";
        break;
    
    case 3: monthString="Mar";
        break;
        
    default: monthString="invalid"
}
console.log(monthString)


for (let i=0; i<10 ;i++)
{
    console.log(i)
}

arr=["a","b","c"]
for (let i=0; i<arr.length ;i++)
{
    console.log(arr[i])
}
for (let iter in arr)
{
    console.log(iter)
}

for (let value of arr)
{
    console.log(value)
}



let person={
    name:"Name",
    id:1
}
for (let key in person)
{
    console.log(key)
}

// Task 1
const age = prompt('Please enter your age:');
if (age < 18) 
{
console.log('You are a minor.');
}

else {
console.log('You are an adult.');
}


//Task 2
let f=2;
let g=3;
let h=1

if (f>g) {
    [f,g]=[g,f];
}

if (g>h) {
    [h,g]=[g,h];
}

if (f>g) {
    [f,g]=[g,f];
}

console.log  ("sorted values",f,g,h)

//TAsk 3

const numbers = [1, 5, 6, 7, 11];
let squaredNumbers = [];
let maxValue = numbers[0];
let minValue = numbers[0];

for (let i = 0; i < numbers.length; i++) {
squaredNumbers.push(numbers[i] ** 2);

if (numbers[i] > maxValue) {
maxValue = numbers[i];
}

if (numbers[i] < minValue) {
minValue = numbers[i];}

}
console.log('Squared Numbers:', squaredNumbers);
console.log('Max Value:', maxValue);
console.log('Min Value:', minValue);