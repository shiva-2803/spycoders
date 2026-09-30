/*
What is web storage:
Web Storage is a browser feature that allows JavaScript to store data in the user's browser.

examples:
1.login informatiom
2.cart item
3.dark theme and light theme

Types of web stroages:
1.localStorage
2.sessionStorage


1.localStorage:
it stored the data permananly in the browser.

real time cases:
1.dark theme
2.cart items
3.login info
4.todo application

setItem("key",value)--->stores data
getItem("key")---.get data from local storage
removeItem("key name")----->remove specific item
clear()--->clear all in local storage


*/
localStorage.setItem("key", 100);
localStorage.setItem("key1", 107);
console.log(localStorage.getItem("key1"));
console.log(typeof localStorage.getItem("key1"));
console.log(Number(localStorage.getItem("key1")));
localStorage.removeItem("key1");
localStorage.clear();

let student = {
    name: "shiva",
    age: 23,
    course: "JFS"
}
// localStorage.setItem("studentData",student);
localStorage.setItem("studentData", JSON.stringify(student));
console.log(JSON.parse(localStorage.getItem("studentData", student)));


function dark() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    localStorage.setItem("theme", "dark")
}
function light() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    localStorage.setItem("theme", "white")
}
let savedThem = localStorage.getItem("theme");
if(savedThem==="dark"){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

//create a registration form
// create a login form
//if both match success or failed

//sessional storage



