/* 
01/09/2026

What is variable in javascript?

A variable is a container for storing values. It allows you to store and manipulate data in your program. 
In JavaScript, you can declare a variable using the keywords var, let, or const.
Variables can hold different types of data, such as numbers, strings, objects, arrays, and more.

Syntax for declaring a variable:
var variableName = value;


type of variable:
1.var: used to declare a variable that can be re-assigned and has function scope,can be re-declared and updated.
-functional scope
-re-declared and re-assigned is allowed
-var can be hoisted and assigned with undefined


*/
var x =10; 
// this is global scope we can use in entire code 
function scopetest() {
    var x = 20;
    x=100;
    console.log(x);
    document.write("The value of x is: " + x);
}
scopetest();
console.log(x);


//console.log(z); shows error because z is not defined in this scope
//declaration
var a;
var a = 5; // declaration and assignment
//re-declatation1
var a = 10; // re-declaration
console.log(a); // Output: 10

//re-assignment:
a=15;


var b;
b= 20;
b=13; // re-assignment
var b = 25; // re-declaration


//hoisting:
var c = "hoisting";
console.log(c); // Output: "hoisting"
var c; // variable declaration is hoisted to the top of its scope, but the assignment remains in place
c= "hoisting"; // re-assignment
console.log(c); // Output: "hoisting"

if (true) {
    var d = "block scope"; // var has function scope, so it is accessible outside the block
    console.log(d); // Output: "Block scope"
}
console.log(d); // Output: "Block scope"

/* 
2.let
-block scope
-cannot be re-declared in the same scope
-can be re-assigned
-cannot be hoisted but not initialized with undefined

*/ 
{
    let e = "blockscope"; // block scope
  //  let e = "blockscope dkjgfeqgs"; // re-declaration in the same scope is not allowed
   // e= "blockscope updated"; // re-assignment is allowed
    console.log(e); // Output: "blockscope"
}
// console.log(e); // ReferenceError: e is not defined

let e;
console.log(e); // if we not define and add the console we get undefine
e =500000;
console.log(e); // after value is added we get the value 500000

/* 
3.const:--constant
-block scope
-cannot be re-declared in the same scope
-cannot be re-assigned
-cannot be hoisted but not initialized with undefined



### TDZ (Temporal Dead Zone)

TDZ is the time between the **start of a scope** and the point where a `let` or `const` variable is declared.

During this time, you **cannot access the variable**.

Example:

```javascript id="t6k4of"
console.log(x); // ❌ ReferenceError

let x = 10;

console.log(x); //✅ 10
```

### Simple rule:

* `var` before declaration → `undefined`
* `let` before declaration → `ReferenceError` (TDZ)
* `const` before declaration → `ReferenceError` (TDZ)








*/
