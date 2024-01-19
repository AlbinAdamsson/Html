// Lecture 
let c=8
do {
    c++;
}

while (c<9)

for (let i=0; i<9; i++)
{
    if (i===4)
    break;
    console.log(1)
}

function check_age(age){
    if (age>=18)
    return "Youre an adult"
    else
    return " youre are an minor"
}

let message=check_age(3)
console.log(message)

func= function(age){
    if (age>=18)
    return "Youre an adult"
    else
    return " youre are an minor"
}

let msg=func(3)
console.log(msg)


 let messege= function(age){
    if (age>=18)
    return "Youre an adult"
    else
    return " youre are an minor"
 } (7)
 console.log(messege)



 class Car{
    constructor(model){
        this.model=model
    }
}

let volvo= new Car("Volvo")
console.log(volvo.model)

function add(a=12,b=11){
    return a+b
}

console.log(add(4,11))

class Car{
    #make
    constructor(model, make=""){
        this.model=model
        this.#make=make
    }
    
    change_make(make){
        this.#make=make
        
    }
    show_make(){
        return this.#make
    }

}

let volvo= new Car("Volvo","Toyota")
console.log(volvo.model)
console.log(volvo.show_make())

//Task 1
function greet(Name) {
    return `Hello, ${Name}!`;
    }
    const userName = prompt("Please enter your name:");
    console.log(greet(userName));

    //TASK 2

    function calculateCircleArea (circle){
    
        return radius*radius*Math.PI;
    }
    
    let radius=prompt("Enter radius");
    console.log(calculateCircleArea());
    

function calculateTriangleArea (Triangle){
    
    return height*base/2;
}

let height=prompt("Enter height");
let base=prompt("Enter base");

console.log(calculateTriangleArea());

///Task 3
let multiply = function(x, y) {
    return x * y;
    };
    const num1 = parseFloat(prompt("Enter a number:"));
    const num2 = parseFloat(prompt("Enter another number:"));
    console.log(`Product: ${multiply(num1, num2)}`);

    //Task 4

    class Person {
        constructor (name, age, email=""){
            this.age=age
            this.name=name
            this.email=email
        }
        greet(){
            console.log(`Hello, my name is ${this.name}`)
        }
    }
    
    
    let person1 = new Person ("Alfred",22, "emial@.com"); person1.greet();

    //TAsk5
    class Person {
        constructor (name, age, email=""){
            this.age=age
            this.name=name
            this.email=email
        }
        greet(){
            console.log(`Hello, my name is ${this.name}`)
        }
    }
    
    
    let person1 = new Person ("Alfred",22, "emial@.com"); person1.greet();
    
    class student extends Person {
        constructor (name, age, email, studentID=""){
            super(name, age, email);
        this.studentID=studentID
        }
            
    }
    
    let student1 = new student (12321);
    console.log(student1);