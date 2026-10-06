/*
Events:
An event is an action that happens on a webpage and detected by JS.

click
type
form
move the mouse
press key
loading website


why:
-button won't work
-form cannot be validate
-memu can't open


with events:
ineteractive
dynamic
user-friendly

ways to apply events:
1.inline event handling:
writing event directly inside the html tag


<button onclick="show()">click</button>

advantages:
-easy to use
-no need to write extra code

disadvantages:
-not recommended for large projects
-not reusable
-not maintainable

2.DOM event handling:
writing event in JS file and link it to html file

advantages:
-deperated HTML and JS code
-cleaner code
-easy understand

disadvantages:
-only one event can be applied to an element at a time
-old events are overwritten by new events


3.addEventListener():
modern way to apply events

syntax:
element.addEventListener("event",function)

advantages:
-multiple events can be applied to an element at a time
-old events are not overwritten by new events
-reusable
-maintainable
-better for large projects

disadvantages:
-slightly more complex than other methods for beginners


types of events in JS:
1.mouse events:
-click---->single click on an element
-dblclick----->double click on an element
-mouseover----->mouse pointer is moved onto an element
-mouseout----->mouse pointer is moved out of an element
-mousedown----->mouse button is pressed down on an element
-mouseup----->mouse button is released over an element
-mousemove----->mouse pointer is moving while it is over an element

keyboard events:
-keydown----->a key is pressed down
-keyup----->a key is released
-keypress----->a key is pressed down and released
-input----->an input field is changed



form events:
-focus----->an element is focused
-submit----->a form is submitted
-reset----->a form is reset
-change----->an element value is changed
-blur----->an element is blurred

window events:
-load----->a page is loaded
-resize----->a page is resized
-scroll----->a page is scrolled
-unload----->a page is unloaded


*/
let button = document.getElementById("btn");
// button.onclick = function () {
//     console.log("button clicked");
// }
// button.onclick=function () {
//     console.log("button clicked again");
// }
button.addEventListener("click", function () {
    console.log("button is clicked");
});
button.addEventListener("click", function () {
    console.log("button is clicked again");
});
document.getElementById("btn1").addEventListener("mousemove", function () {
    alert("item is added");
});


let input1 = document.getElementById("name");

input1.addEventListener("keydown", function () {
    document.getElementById("output").innerText = "Key is pressed";
});

let input2= document.getElementById("name2");
input2.addEventListener("keydown",function(){
    document.getElementById("message").innerText="key is pressed";
});
input2.addEventListener("keyup",function(){
    document.getElementById("message").innerText="key is relesed";
});

let input=document.getElementById("name3");
input.addEventListener("focus",function(){
    input.style.backgroundColor="yellow";
});
input.addEventListener("blur",function(){
    input.style.backgroundColor="white";
});
input.addEventListener("input",function(){
    document.getElementById("msg").innerText=input.value;
});

let course=document.getElementById("course");
course.addEventListener("change",function(){
    document.getElementById("result").innerText= course.value;
});

let form=document.getElementById("myForm");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let username=document.getElementById("username").value;
    document.getElementById("results").innerText=`Welcome ${username}`;

});
form.addEventListener("reset",function(){
    document.getElementById("results").innerText="Form is reset";
});

window.addEventListener("load",function(){
    document.getElementById("msg2").innerText="page is loaded";
});