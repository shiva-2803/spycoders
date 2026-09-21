/*
Function is a block of code designed to perform a specific task.

It is a reusable piece of code that can be called multiple times throughout a program.

Functions help in organizing the code, improving readability,
and reducing redundancy.
Syntax
function functionName(parameters) {

    // code to execute

}

// call the function using its name
functionName();


types of functions:
function declaration
A function declaration is a named function that is defined using the function keyword.
1. to reuse the code
2.to organize logic


use cases:
1.caluculating total price in e-commerce
2.validation login form
3.Showing  user detailes


Syntax:
function functionName(){
//code
}
*/

function potato(){
    console.log("Step-1: Add oil");
    console.log("Step-2: Add spices");
    console.log("Step-2: Add potato");
    console.log("Step-4: cook");
}
function panner(){
    console.log("Step-1: Add oil");
    console.log("Step-2: Add spices");
    console.log("Step-2: Add panner");
    console.log("Step-4: cook");
}
potato();
panner();

/*
Function with paremater:
A function with parameters accepts input values and uses them to perform a task.
use cases:
1.price calculation
2.userName disply
3.Quantity

Syntax:
function functionName(parameter1, parameter2) {
    // code
}

functionName(value1, value2);



3.Function with default paremeters:
default value is assigned if no value is passed as arg
Syntax:

function functionName(parameter = defaultValue) {
    // code
}

example
if condtion example shopping with default 5%discount and increse by purchase ammount


*/
function recipe(ingrediants){
    console.log("Step-1: Add oil");
    console.log("Step-2: Add spices");
    console.log("Step-2: Add "+ingrediants);
    console.log("Step-4: cook");
}
recipe("potato")
recipe("panner")
recipe("mastroom")

/*
function with redend
variable function(or)function expression
Anonymous Function
immedently invoked function (or)self invoking function
call back function
recursive function
higer order function
        (or)
Function with Return
Function Expression
Anonymous Function
Immediately Invoked Function Expression (IIFE)
Callback Function
Recursive Function
Higher-Order Function


*/