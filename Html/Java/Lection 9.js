// Lection 9

let num1 = 7;
let num2 = 3;

//+
let additionresult = num1 + num2;
console.log (additionresult)

num1**=3;
console.log(num1)

let x=2;
let y="2";

console.log (x == y)

console.log (x === y)


let a=2;
let b=2;

console.log (a < b)

console.log (a <= b)

// Type error
try{
    let obj=null
    obj.x=7
    console.log("THIS will be printed of we have no errors")
}

    catch (error)
{
    console.log("Type error", error.message)
}

console.log("THIS will be printed after the catch")

// Refrence Error
try {
console.log (q)
}

catch (error)
{
    console.log("Reference Errors", error.message)
}

// Throw a divison by Zero Error
try{
let q =10; let w=0
if (w===0)
    throw new Error ("Incorrect division by Zero")
console.log("Division is",q/w)
}

catch (error)
{
console.log("Division by zero", error.message)
}

finally 
{
    console.log("This will be executed in alla cases")
}

//tasks

//TAsk 2 Logical Operators4

// Declare Boolean variables
const bool1 = true;
const bool2 = false;
const bool3 = true;
// Perform logical operations
const andResult = bool1 && bool2;
const orResult = bool1 || bool3;
const notResult = !bool2;
// Display the results
console.log(`bool1 && bool2: ${andResult}`);
console.log(`bool1 || bool3: ${orResult}`);
console.log(`!bool2: ${notResult}`);


//Task 3
let number1=3
console.log (number1 + number1)
console.log (--number1)
console.log (++number1)
console.log (number1/number1)
let incResult=number1

console.log(`Incremented: ${incResult}`);

//Task 4

let  Max = 10

try{
    Max =5;
    Max*=2;
}

catch (error) {
console.error("An erro ouccured:", error);
}

console.log("final value:", Max);