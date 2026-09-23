function greet() {
    document.getElementById("gt").innerText = "Hello user"
}

function welcome() {
    document.getElementById("msg").innerText = "Welcome to JavaScript"
}



let add = function (a, b) {
    return a + b;
}
let result = add(10, 20);
function addition() {
    document.getElementById("add").innerText = `Result:${result}`
};



//area of rectagle
function area(length, width) {
    return length * width;
}
let results = area(20, 10);
function areaof() {
    document.getElementById("multi").innerText = `Result:${results}`
}


//cart 
let bill = { price: 1000, quntity: 2, discount: 100 };
function cart() {
    let total = bill.price * bill.quntity;
    let finalBill = total - bill.discount;
    document.getElementById("bill").innerText = `Final BIll:${finalBill}`
}

//vote
function checkVote() {
    let vote = 20;
    let eligiblity;
    if (vote >= 18) {
        eligiblity = "Eligible to vote";
    }
    else {
        eligiblity = "Not eligible to vote";
    }
    document.getElementById("vote").innerText = `${eligiblity}`;
}


//Generation of bill
let gBill = {
    customerName: "Shiva",
    productPrice: 1000,
    quantity: 3,
    discount: 10
}
function generateBill() {
    let subTotal = gBill.productPrice * gBill.quantity;
    let discount = subTotal * gBill.discount / 100;
    let finalBill = subTotal - discount;
    document.getElementById("gBill").innerHTML =
        `Customer Name:${gBill.customerName}<br>` +
        `Product Price: ₹${gBill.productPrice}<br>` +
        `Quantity: ${gBill.quantity}<br>` +
        `Subtotal: ₹${subTotal}<br>` +
        `Discount: ₹${discount}<br>` +
        `Final Bill: ₹${finalBill}`
}


//funtion with perameters
function greet(name) {
    document.getElementById("greet").innerText = `hello ${name}`
}
greet("Shiva");

//addition
function add1(a, b) {
    let result = a + b;
    document.getElementById("pera").innerText = `Result:${result}`
}
add1(10, 20)

//squre of number
function square(number) {
    let result = number * number;
    document.getElementById("square").innerText = `Result:${result}`
}
square(5)

//student
function student(name, age) {
    document.getElementById("student").innerText = `Student Name:${name}\nAge:${age}`
}
student("Shiva", 23);

//area of rectangle
function area(length, width) {
    let areaOfRectangle = length * width;
    document.getElementById("rect").innerText = `Area of Rectangle:${areaOfRectangle}`
}
area(20, 30)

//cart
function calculateTotal(price, quantity) {
    let total = price * quantity;
    document.getElementById("total").innerText = `Total:₹${total}`
}
calculateTotal(1000, 3);

//discount
function calculateDiscount(amount, discountPercent) {
    let discount = amount * discountPercent / 100;
    document.getElementById("discount").innerText = `Discount:₹${discount}`
}
calculateDiscount(5000, 10);

//employee
function calculateSalary(basicSalary, bonusPercent) {
    let bonus = basicSalary * bonusPercent / 100;
    let finalSalary = basicSalary + bonus;
    document.getElementById("salary").innerText = `Final Salary:₹${finalSalary}`
}
calculateSalary(30000, 10);

//electricity bill
function calculateBill(units, rate) {
    let bill = units * rate;
    document.getElementById("eBill").innerText = `Elecricity Bill:₹${bill}`
}
calculateBill(150, 7);

//shopping
function generateBill(customerName, price, quantity, discountPercent) {
    let subTotal = price * quantity;
    let discount = subTotal * discountPercent / 100;
    let finalBill = subTotal - discount;
    document.getElementById("sBill").innerText = `Customer Name:${customerName}\n Subtotal:${subTotal}\n Discount:${discount}\n Final Bill:${finalBill}`
}
generateBill("Shiva", 1000, 3, 10);

//even or odd
let n = Number(prompt("Enter the number"))
function evenOrOdd() {
    if (n % 2 == 0) {
        document.getElementById("even").innerHTML = `${n} is even number`;
    }
    else {
        document.getElementById("even").innerHTML = `${n} is Odd number`;
    }
}
evenOrOdd()

//positive or not
let a = Number(prompt("Enter the number"))
function positive() {
    if (a > 0) {
        document.getElementById("pos").innerHTML = `${a} is positive number`;
    }
    else if (a < 0) {
        document.getElementById("pos").innerHTML = `${a} is negitive number`;
    }
    else {
        document.getElementById("pos").innerHTML = `${a} is Zero`;
    }
}
positive()

//largest number
let fst = Number(prompt("Enter the  1st number"))
let snd = Number(prompt("Enter the  2nd number"))
let trd = Number(prompt("Enter the 3rd number"))
function largest() {
    if (fst > snd && fst > trd) {
        document.getElementById("large").innerHTML = `${fst} is the largest number`;
    }
    else if (snd > fst && snd > trd) {
        document.getElementById("large").innerHTML = `${snd} is the largest number`;
    }
    else {
        document.getElementById("large").innerHTML = `${trd} is the largest number`;
    }
}
largest()

//reverse of the number
let input = Number(prompt("Enter the number"))
let original = input;
let result1 = 0;
function reverse() {
    while (input > 0) {
        let digit = input % 10;
        result1 = result1 * 10 + digit;
        input = Math.floor(input / 10);
    }
    document.getElementById("reverse").innerHTML = `Reverse of the number ${original} is ${result1}`
}
reverse()

//stars
let star = Number(prompt("Enter the Number"))
let pattern = "";
function stars() {
    for (let i = 1; i <= star; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += "*";
        }
        pattern += "<br>"
    }
    document.getElementById("stars").innerHTML = `${pattern}`;
}

stars();