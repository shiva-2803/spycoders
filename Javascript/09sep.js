/*
Switch Statement in JavaScript

A switch statement is used when you want to compare one value with multiple possible values.

Basic syntax:
switch (expression){
case value-1:
    //code
    break;
case value-2:
    //code
    break;
default:
    //code
}

use cases:
1.day of the week
2.menu selection
3.Block of code
4.loans

1.switch expression
2.case value
3.block



*/

// let choice = Number(prompt(`Select an option
//     1.check balance
//     2.Withdraw amount
//     3.Deposit amount
//     4.Exit`));

//     let balance = 2500;
//     switch(choice){
//         case 1:
//             alert(`Your balance is ${balance}`);
//         break;
//         case 2:
//             let withdrawAmount=Number(prompt(`Enter Withdraw amount:`));
//             if(withdrawAmount<=balance){
//                 balance-=withdrawAmount;
//                 alert(`withdraw Succsess, remaing balance ${balance}`);
//             }
//             else{
//                 alert("insufficiant balance");
//             }
//         break;
//         case 3:
//             let depositAmount=Number(prompt(`Enter the deposit amount:`));
//             if(depositAmount>0){
//                 balance+=depositAmount;
//                 alert(`Amount deposited succssefully New balance ${balance}`);
//             }
//             else{
//                 alert(`Amount invalid`);
//             }
//         break;
//         case 4:
//             alert("Thanks for using ATM");
//         break;
//         default:
//             alert("Invalid Option");
//             break;
//     }

/*
Loops in JavaScript:
for Loop in JavaScript

A for loop is used to repeat a block of code a specific number of times.
for (initialization; condition; update) {
    // code
}









*/
// example code:
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// let product = ["Shoes","t-shirt","laptop",];
// let result=[];
// for(let i=0;i<product.length;i++){
//     result+=product[i]+"<br>";//  "/n" is used while using innerText
// }
// document.getElementById("Vote").innerHTML=result;

let ul = document.getElementById("output");
let product = ["Shoes","t-shirt","laptop"];

for(let i=0;i<product.length;i++){
    ul.innerHTML+=`<li>${product[i]}</li>`;
}

