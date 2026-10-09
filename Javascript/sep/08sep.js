/*
Conditional Statements:
Conditional statements let JavaScript make decisions.
control the flow of javascript to make decisions.
1.if-else:

For example:

If the age is 18 or above → Adult
Otherwise → Minor

syntax:
if(condition){
    //code
}
else{
    //code
    }
use cases:
1.   vote eligibility
2.discount
3.ATM
4.login status





Nested IF:
if condition inside the is condition
let age = 20;
let hasID = true;

if (age >= 18) {
    if (hasID === true) {
        console.log("Allowed");
    }
}

Is age 18+?
   ↓ yes
Does the person have ID?
   ↓ yes
Allowed


switch statements:
which is useful when you're checking one value against many fixed possibilities.

basic syntax:
switch (value) {
    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code
}





example
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}

output is tuesday as day -2  so it comes out as tuesday


*/
// let age = Number(prompt("Enter the age:"));
// if(age>=18){
//     document.getElementById("Vote").innerHTML =`<a href ="#">Link-1</a>`
// }
// else{
//     document.getElementById("Vote").innerText = `Not eligible for vote`
// }

let element = document.getElementById("Vote");

// let age1 = Number(prompt("Enter the age"))
// let result = age1>=18 ? "Eligible to vote" : "Not Eligible Vote";
// element.innerText = result;

let selectClass = Number(prompt("1st class - 2nd class - 3rd class"))
if(selectClass == 1){
    element.innerText="250"
}
else if(selectClass == 2){
    element.innerText="150"
}
else if(selectClass==3){
    element.innerText="100"
}
else{
    element.innerText("free for children")
}











