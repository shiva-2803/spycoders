function greet() {
    document.getElementById("gt").innerText = "Hello user"
}

function add(a, b) {
    return a + b;
}
let result = add(10, 20);
function addition() {
    document.getElementById("add").innerText = `Result:${result}`
}

let bill = { price: 1000, quntity: 2, discount: 100 };
function cart() {
    let total = bill.price * bill.quntity;
    let finalBill = total - bill.discount;
    document.getElementById("cart").innerText = `Final BIll:${finalBill}`
}
function msg(){
setTimeout(function() {
    document.getElementById("msg").innerText = `Hello Shiva`
}, 1000);
}

let count=0;
setInterval(function() {
    count++;
    document.getElementById("counter").innerText+=`Count:${count}\n`
}, 10000);

let count1=0;
let timer =setInterval(function(){
    count1++;
    document.getElementById("counter1").innerText+=`Count:${count1}\n`
    if(count1==5){
       clearInterval(timer);
    }
    
},1000);