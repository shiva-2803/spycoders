/*
rules for variable naming in javascript
1. Variable names can only contain letters, numbers, underscores, and dollar signs.
example: var myVariable,
var _myVariable;
var $myVariable;
var myVariable123;


2.numbers are not allowed as the first character of a variable name.
example: 
var 1myVariable; // ❌ Invalid
var myVariable1; // ✅ Valid

3.spaces are not allowed in variable names.
example: 
var my Variable; // ❌ Invalid
var myVariable; // ✅ Valid

4. Variable names are case-sensitive.uppercase and lowercase letters are treated as different characters.
example: 
var myVariable; // ✅ Valid
var MyVariable; // ✅ Valid
var MYVARIABLE; // ✅ Valid

5. Reserved keywords: variable names cannot be the same as reserved keywords in JavaScript.
example: 
var var; // ❌ Invalid
var let; // ❌ Invalid
var const; // ❌ Invalid
var myVariable; // ✅ Valid
let class; // ❌ Invalid

6. camelCase convention: it is common practice to use camelCase for variable names in JavaScript, where the first word is lowercase and subsequent words are capitalized.   
example: 
var age; // ✅ Valid
var name; // ✅ Valid
let myStudentName; // ✅ Valid
let mystudentname; // ❌ Not descriptive
var x; // ❌ Not descriptive

7 naming conventions: it is recommended to use descriptive names for variables that indicate their purpose or content. This improves code readability and maintainability.
example:
var age; // ✅ Descriptive variable name
var name; // ✅ Descriptive variable name
let studentName; // ✅ Descriptive variable name
let a; //variable name is not descriptive

What is scope in javascript?
scope determines the where a variable is accessed in the program.
1. Global scope: 

variables declared outside of any function or block have global scope and can be accessed from anywhere in the code.


2. Local scope: 

variables declared within a function or block have local scope and can only be accessed within that function or block.


3. Block scope: 
variables declared with let or const within a block (e.g., inside an if statement or loop) have block scope and can only be accessed within that block.


4. Function scope: 

variables declared with var within a function have function scope and can only be accessed within that function.


*/
let myName = "John";
function showName() {
    console.log(myName);
    document.write(myName);
}
showName();
console.log(myName);

if (true) {
    let myAge = 25;
    console.log(myAge);
    document.write(myAge);
}

test();
function test() {
    let number = 100;
    var number2 = 200;
    console.log(number);
    console.log(number2);
}

//console.log(number2); // ❌ Error: number2 is not defined
//console.log(number); // ❌ Error: number is not defined


let country = "India";
function outer() {
    let state = "karnataka";
    function inner() {
        let city = "Bangalore";
        console.log(country);// ✅ Accessible: country is in the outer scope
        console.log(state);// ✅ Accessible: state is in the outer scope
        console.log(city);// ✅ Accessible: city is in the inner scope
    }
    inner();
}
outer();


