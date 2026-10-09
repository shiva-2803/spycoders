/*
what is Synchronous?
js code  executes line by line exexution 
one task must finish before the next task starts
*/
console.log("start");
console.log("learning JS");
console.log("End");
/*
Asynchronous
setTimeout()--->it is used to delay the execution of a function by a specified amount of time (in milliseconds).
setInterval()---->it is used to repeatedly execute a function at a specified interval (in milliseconds).
Callback function---->A callback function is a function that is passed as an argument to another function and is executed after the completion of that function. It allows you to define a function that will be called back at a later time, typically after an asynchronous operation has completed.
Callback hell
promise---->A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to handle asynchronous operations in a more structured and manageable way, providing methods to attach callbacks for success and failure scenarios.
async/await---->Async/await is a syntax introduced in JavaScript that allows you to write asynchronous code in a more synchronous and readable manner. It is built on top of promises and provides a way to handle asynchronous operations using the async and await keywords.
fetch()---->The fetch() function is a built-in JavaScript function that allows you to make network requests and retrieve resources from a server. It provides a modern and flexible way to perform asynchronous HTTP requests, returning a promise that resolves to the response of the request.

*/
console.log("start");
setTimeout(function(){
    console.log("learning JS");
}, 0)
console.log("End");

/*
callback:


*/
getStudent(1,(student)=>{
    console.log("Student data",student);
})

function getStudent(id,callback){
    setTimeout(()=>{
        console.log("getting student data from database");
        callback({name:"bob",id:id})
    },2000)
}

getStudent(1,(student)=>{
    getSubject(student.id,(subject)=>{
        getMarks(subject[0],(marks)=>{
            console.log(marks);
        })
    })
})
console.log("First line ");
function getStudent(id,callback){
    setTimeout(()=>{
        console.log("getting student data from database");
        callback({name:"bob",id:id})
    },2000)
}
function getSubject(id,callback){
    setTimeout(()=>{
        console.log("getting subjects of student id:",id);
        callback(["maths","HTML","css"])
    },2000)
}
function getMarks(subject,callback){
    setTimeout(()=>{
        console.log("getting marks of",subject);
        callback(80)
    },2000)
}
/*
promise:
A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to handle asynchronous operations in a more structured and manageable way, providing methods to attach callbacks for success and failure scenarios.

let promise = new Promise((resolve, reject) => {


});
*/
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const student1 = { name: "siv", id: 1 };
        //resolve(student);
        reject(new Error("Failed to get student data"));
    }, 2000);
})
promise.then((result) => {
    console.log("Student data", result);
})
.catch((error) => {
    console.error("Error:", error);
})

//call back to prompts 