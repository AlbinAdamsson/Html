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