/*
🔄 What is a while loop?

A while loop is used when you want to repeat some code as long as a condition is true.

Syntax
while(condition){
    // code to repeat
}

The computer checks the condition before every iteration.

Example 1 — Print 1 to 5
let i = 1;

while(i <= 5){
    console.log(i);
    i++;
}

Output:

1
2
3
4
5
How it works
Step i	i <= 5	Action
1	 1	true	print 1
2	 2	true	print 2
3	 3	true	print 3
4	 4	true	print 4
5	 5	true	print 5
6	 6	false	stop

Important: i++ changes the value of i. Without it, the loop could run forever.


use cases:
1.login validation
2.otp verifiaction
3.game loop



*/
let j = 1;

while(j <= 5){
    console.log(j);
    j++;
}

let correctPin = 123;
let enteredPin = "";

while(enteredPin!=correctPin){
    enteredPin = Number(prompt("Enter the Pin"));
    if(enteredPin== correctPin){
        console.log("Pin accepted, Welcome to the dashboard");
    }
    else{
        console.log("Inncorect Pin,Try again")
    }
}
let ul=document.getElementById("output");
let cart=[
    {
        name:"Laptop",
        price:50000
    },
    {
        name:"Mouse",
        price:1000
    },
    {
        name:"Keyboard",
        price:2000
    }
]
// let total = cart[0].price+cart[1].price+cart[2].price;
// console.log(total);
let i =0;
let total = 0;
while(i<cart.length){
    ul.innerHTML+=`<li>adding:${cart[i].name}</li>`;                    //console.log(`Adding:${cart[i].name}`);
    total=total+cart[i].price;
    i++;
}
ul.innerHTML+=`<li>${total}</li>`// console.log(total);
/*
A do...while loop is similar to a while loop, but it executes the code at least once, even if the condition is initially false.

Syntax
do {
    // code
} while (condition);
Example
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

Output:

1
2
3
4
5







*/
let correctPin1 = 1234;
let enteredPin1 ="";
let attempts = 0;

do{
    console.log("Welcome to X bank");
    enteredPin1 = Number(prompt("Enter the Pin:"));
    attempts++;
}while(attempts<3 && correctPin1!=enteredPin1)
    if(correctPin1 !=enteredPin1){
        console.log("Account is blocked due to multiple attempts");
    }
    else{
        console.log("Access granted");
    }






    // {
    //     name:
    //     price:
    //     imageUrl:
    //     stock:true/false
    //     discount:5%,11%  //cards inside the document 4 cards 
    // }