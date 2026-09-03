/*
Data type:

let name = "Ravi";
let age = "25";
let isEmploye = true;

types of Data types:
1.primitive data type:
- String
- Number
- Boolean
- undefined
- Null
- Symbol
- BigInt
2. Non-primitive Data type:
- Object
- Array
- Function


1. String:
a string reresents a sequence of charescters that enclosed b/w the double or single couts(" ",' ',` `)
let name = "Shiva";
let name1  = 'shiva';
let name2 = `shiva`;

use cases
-names
-emails
-passwords
-address
-message
-prodect name

2.Number:



use cases:
-age
- price
- marks
-salary
-quantity
-percentages

3. Boolean:
use cases:
-isEmploye
-isStudent
-isloggedin

4. undefined:
use cases: 
-When a variable is declared but not initialized.
-When a function does not return a value.
-1When accessing an object property that does not exist.

5.NUll:
absence of value

6.symbol:
-

7. BigInt:
it used is store large integer values



Non premitive data types:
1. Object:
    stores data in a key-value pairs
    Syntax:
    let objectName = {
    key1= value1;
    key2= value2;
    key3= value3;
    };

*/
let name = "Shiva";
console.log(name);
name = "kumar";
console.log(name);


let a = 10;
let b = 20;

console.log(a+b);
console.log(typeof (a+b));//number

// let price = 500;
// let qty = prompt("Enter the quantity:");
// let total = price * qty;
// console.log(total);

if(true){
    console.log("if block");
}
else{
    console.log("else block");
}

console.log(typeof undefined);
console.log(typeof null);

let student = {
    name : "ravi",
    age : 25,
    course : "pjs",
    age:50,
}
student.age1=50
console.log(student);