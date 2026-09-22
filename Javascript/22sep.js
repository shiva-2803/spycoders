/*
Self invoking function (Or) 
A self-invoking function is a function that runs immediately after it is created.
Syntax:
(function(){
    // code
})();




*/
(function(){
    document.getElementById("msg1").innerText="Hello user"
})();
(function(){
    document.getElementById("body").classList.add("bg-black","text-white");
})();


/*
call back function:
a function passed as an argument for another function
syntax
function mainFunction(callback) {
    callback();
}

function callbackFunction() {
    // code
}

mainFunction(callbackFunction);


API
event handling
setTimeOut
setInterval()


*/
function makePayment(callback){
    document.getElementById("pay").innerText="Payment is being processed";
    let payment="Success"
    callback(payment);
}
function success(msg){
    setTimeout(function(){
        document.getElementById("pay").innerText="Payment"+msg;
    },2000);
}
makePayment(success);

let count=0;
function increment(){
    count++;
    document.getElementById("counter").innerText=`Count:${count}`;
}
function decrement(){
    count--;
    document.getElementById("counter").innerText=`Count:${count}`;
}
function reset(){
    count=0;
    document.getElementById("counter").innerText=`Count:${count}`;
}


