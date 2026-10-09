
function greet(){
    console.log("Hello user")
}
greet();
function showMessage(){
    document.getElementById("msg").innerText="Welcome to the use"
}


//function with default paremeters

function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet("Shiva");
greet();
/*
4.Function with return keyword:
A function with return calculates or produces a value and sends that value back to where the function was called.

Example
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);

5.Function Expression:
A function expression means storing a function inside a variable.
sytax:
let x = function fn(){
}

Example
let add = function(a, b) {
    return a + b;
};

console.log(add(10, 20));

Here:

let add = function(a, b) {

The function is stored inside the variable add.

Then:

add(10, 20);

calls that function.

Output:

30
Difference from normal function

Normal function:

function add(a, b) {
    return a + b;
}

Function expression:

let add = function(a, b) {
    return a + b;
};

The main difference is how the function is created/stored.


5.Anonymous Function

Anonymous means "without a name."

Example:

function() {
    console.log("Hello");
}

Notice there is no function name:

function() 

Normally we have:

function greet()

But here:

function()

there is no name.

Where are anonymous functions commonly used?

They are often used with function expressions:

let greet = function() {
    console.log("Hello");
};

greet();

Here the function itself has no name, but it is stored in the variable greet.

Output:

Hello
Easy meaning

Anonymous function = function without a name.


SetIntervel
setTimeout



*/
setInterval()