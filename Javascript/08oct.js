/*
what is explicit binding in javascript?
we annually deside to use explicit binding when we want to set the value of 'this' explicitly in a function. In JavaScript.
we can use the 
call()
apply()
bind() methods to achieve explicit binding.

*/
let user = {
    firstName: "John"
}
function welcome(){
    console.log(`Welcome ${this.firstName}`);
}
// welcome(); // Welcome undefined
welcome.call(user); // Welcome John
/*
1.call():
syntax:
functionName.call(thisArg, arg1, arg2, ...)
The call() method calls a function with a given 'this' value and arguments provided individually.
use case:
1.product discount calculation
2.product price calculation

 */
let user1 = {
    firstName: "shiva"
}
function welcome1(city, role){
    console.log(`I am ${this.firstName}, I am from ${city} and working as a ${role}`);
}
welcome1.call(user1, "New York", "Developer");// if we did'nt pass the arguments it will return undefined for city and role

const product = {
    name: "Laptop",
    price: 1000,
    category: "Electronics"
}
function displayProductDetails(discount) {
    let finalPrice = this.price - (this.price * discount / 100);
    console.log(`Product: ${this.name}`); 
    console.log(`Price: ${this.price}`); 
    console.log(`Category: ${this.category}`); 
    console.log(`Discount: ${discount}%`);
    console.log(`Final Price: ${finalPrice}`);
}
displayProductDetails.call(product, 10); // Call with individual arguments

let cart = {
    items:[],
    total:0
}
function addproduct(product){
    this.items.push(product);
    this.total += product.price;
}
addproduct.call(cart, {name: "Laptop", price: 1000});
addproduct.call(cart, {name: "Phone", price: 500});
console.log(cart); // [{name: "Laptop", price: 1000}, {name: "Phone", price: 500}]

/*
apply():
syntax:
functionName.apply(thisArg, [argsArray])
The apply() method calls a function with a given 'this' value and arguments provided as an array.


difference between call() and apply():

call()                                                apply()
individual arguments are passed to the function.      arguments are passed as an array.
functionName.call(thisArg, arg1, arg2, ...)           functionName.apply(objName, [arg1, arg2, ...])
function executed immediately.                        function executed immediately.
function returns the result of the function call.     function returns the result of the function call.

*/
let cart1 = {
    items:[],
    total:0
}
function addproduct(product){
    this.items.push(product);
    this.total += product.price;
}
addproduct.apply(cart1, [{name: "Laptop", price: 1000}]);
addproduct.apply(cart1, [{name: "Phone", price: 500}]);
console.log(cart1.items); // [{name: "Laptop", price: 1000}, {name: "Phone", price: 500}]
console.log(cart1.total); // 1500
/*
bind():
syntax:
functionName.bind(thisArg, arg1, arg2, ...)

*/
let user2 = {
    name: "shiva......"
}
function welcome2(){
    console.log(`Welcome ${this.name}`);
}
welcome2.bind(user2)(); // Welcome shiva......
let welcomeUser = welcome2.bind(user2);
welcomeUser(); // Welcome shiva......