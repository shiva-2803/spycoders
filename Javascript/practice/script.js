var myName = "SHiva";
console.log(myName);

var age = 25;
age = 30;   
console.log(age);

var city = "bengaluru";
var city = "Mysore";
console.log(city);

var x = 10;
function test() {
    var x = 20;
    console.log(x);
}
test();
console.log(x);

if(true) {
    var y = 50;
}
console.log(y);

let marks = 50;
marks = 80;
console.log(marks);

if(true) {
    let marks = 100;
}
console.log(marks); // This will throw an error because marks is block-scoped and not accessible outside the if block

// let z = 5;
// let z = 10; // This will throw an error because z has already been declared in the same scope

// const pi = 3.14;
// pi = 3.14159; // This will throw an error because pi is a constant and cannot be reassigned

var myName1 = "Shiva";
let age1 = 23;
const country = "India";
console.log(myName1);
console.log(age1);
console.log(country);

let a = 10;
let message = "Age is " ;
console.log(message + a);

let b = 20;
let c = 30;
let sum = b + c;
console.log("Sum of b and c is: " + sum);