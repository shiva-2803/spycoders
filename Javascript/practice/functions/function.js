function greet() {
    document.getElementById("gt").innerText = "Hello user"
}

function welcome() {
    document.getElementById("msg").innerText = "Welcome to JavaScript"
}



function add(a, b) {
    return a + b;
}
let result = add(10, 20);
function addition() {
    document.getElementById("add").innerText = `Result:${result}`
}



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
    let discount = subTotal * gBill.discount/100;
    let finalBill = subTotal - discount;
    document.getElementById("gBill").innerHTML = 
        `Customer Name:${gBill.customerName}<br>`+
        `Product Price: ₹${gBill.productPrice}<br>`+
        `Quantity: ${gBill.quantity}<br>`+
        `Subtotal: ₹${subTotal}<br>`+
        `Discount: ₹${discount}<br>`+
        `Final Bill: ₹${finalBill}`
}