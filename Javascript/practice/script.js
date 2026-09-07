// // var myName = "SHiva";
// // console.log(myName);

// // var age = 25;
// // age = 30;   
// // console.log(age);

// // var city = "bengaluru";
// // var city = "Mysore";
// // console.log(city);

// // var x = 10;
// // function test() {
// //     var x = 20;
// //     console.log(x);
// // }
// // test();
// // console.log(x);

// // if(true) {
// //     var y = 50;
// // }
// // console.log(y);

// // let marks = 50;
// // marks = 80;
// // console.log(marks);

// // if(true) {
// //     let marks = 100;
// // }
// // console.log(marks); // This will throw an error because marks is block-scoped and not accessible outside the if block

// // // let z = 5;
// // // let z = 10; // This will throw an error because z has already been declared in the same scope

// // // const pi = 3.14;
// // // pi = 3.14159; // This will throw an error because pi is a constant and cannot be reassigned

// // var myName1 = "Shiva";
// // let age1 = 23;
// // const country = "India";
// // console.log(myName1);
// // console.log(age1);
// // console.log(country);

// // let a = 10;
// // let message = "Age is " ;
// // console.log(message + a);

// // let b = 20;
// // let c = 30;
// // let sum = b + c;
// // console.log("Sum of b and c is: " + sum);




// // 02/09/2026



// let name = "Shiva";
// let _age = 25;
// let $city = "Bengaluru";
// let name2 = "John";


// //let ca@showName = "Hello";
// //let 1stname = "Alice";

// let myname = "Shiva";
// let MyName = "Doe";
// let MYNAME = "Smith";
// console.log(myname); // Output: Shiva   
// console.log(MyName); // Output: Doe
// console.log(MYNAME); // Output: Smith

// let yourFullName = "John Doe";
// let yourFavoriteProgrammingLanguage = "JavaScript";
// let yourCityName = "New York";
// console.log(yourFullName); // Output: John Doe
// console.log(yourFavoriteProgrammingLanguage); // Output: JavaScript
// console.log(yourCityName); // Output: New York

// let country = "India";
// function showCountry() {
//     console.log(country);
// }
// showCountry();

// function showAge() {
//     let age = 25;
//     console.log(age);
// }
// showAge();
// // console.log(age); // This will throw an error because age is block-scoped and not accessible outside the function


// if (true) {
//     let marks = 90;
//     console.log(marks);
// }
// // console.log(marks);


// function test() {
//     var number = 10;
//     console.log(number);
// }
// test();
// // console.log(number);


// var MYname = "Shiva";
// function displayName() {
//     console.log(MYname);
// }
// displayName();
// console.log(MYname); // Output: Shiva


// var x = 10;
// function test() {
//     var x = 20;
//     console.log(x);
// }
// test();
// console.log(x); 


// let countryName = "India";
// function outer(){
//     let state="andhra Pradesh";
//     function inner(){
//         let city = "Kurnool";
//         console.log(countryName); // Output: India
//         console.log(state); // Output: andhra Pradesh
//         console.log(city); // Output: Kurnool
//     }
//     inner();
// }
// outer();    

// var a = 10;
// function firstcl() {
//     var b = 20;
//     function second() {
//         var c = 30;
//         console.log(a); // Output: 10
//         console.log(b); // Output: 20
//         console.log(c); // Output: 30
//     }
//     second();
// }
// firstcl();



// let language = "javascript";
// function course(){
//     let topic = "Scope"
//     function lesson(){
//         let level = "beginner"
//         console.log(language);
//         console.log(topic);
//         console.log(level);
//     }
//     lesson();
// }
// course();


// let college = "ABC college";
// function student(){
//     let studentName = "Shiva";
//     function details(){
//         let course = "JavaScript";
//         console.log(college);
//         console.log(studentName);
//         console.log(course);
//     }
//     details();
// }
// student();


// let company = "Google";
// function employee(){
//     let employeeName = "Shiva";
//     function work(){
//         let role = "Developer";
//         console.log( company);
//         console.log(employeeName);
//         console.log(role);
//     }
//     work();
// }
// employee();



// 03/09/2026


// let name = "Shiva";
// let age = 23;
// let isStudent = true;
// let adress;
// console.log(name);
// console.log(typeof name);
// console.log(age);
// console.log(typeof age);
// console.log(isStudent);
// console.log(typeof isStudent);
// console.log(adress);
// console.log(typeof adress);

// let user = null;
// console.log(user);
// console.log(typeof user);
// user="Shiva";
// console.log(user);
// console.log(typeof user);

// let student ={
//     myName:"Shiva",
//     age1:23,
//     course:"JavaScript",
// }
// student.city="Bengulur"
// console.log(student);
// console.log(student.myName);
// console.log(student.age1);


// let product = {
//     name: "Laptop",
//     price: 50000,
//     available: true,
//     discount: null
// };
// console.log(product);
// console.log(typeof product.name);
// console.log(typeof product.price);
// console.log(typeof product.available);
// console.log(typeof product.discount);

// let detailes = {
//     name:"Shiva",
//     age:23,
//     isStudent:true,
//     phone:undefined,
//     address:null
// }
// console.log(detailes);
// console.log(
//     typeof detailes.name,
//     typeof detailes.age,
//     typeof detailes.isStudent,
//     typeof detailes.phone,
//     typeof detailes.address
// )

// let style={
//         name:"Shiva",
//         age:23,
//         isStudent:true,
// }
// style.age=24;
// style.isStudent=false;
// style.city="Bengulur";
// console.log(style);
// console.log(
//     typeof style.age,
//     typeof style.isStudent,
// )

// let style2={
//     name:"Shiva",
//     age:23,
//     adress:{
//         city:"Bengaluru",
//         state:"Karnataka"
//     }
// };
// console.log(style2.name);
// console.log(style2.adress.city);
// console.log(style2.adress.state);
// console.log(typeof style2.adress.state)


// let company={
//     name:"TCS",
//     employee:100,
//     location:{
//         city:"Bengaluru",
//         state:"karnataka",
//     }
// }
// company.location.county="India";
// company.employee=200;
// console.log(typeof company.employee);
// console.log(company.location);
// console.log(company.name);
// console.log(company.location.city);



//04/09/2026


// let a = 20;
// let b =6;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);


// let x = 10;
// x+=5;
// console.log(x);
// x-=3;
// console.log(x);
// x*=2;
// console.log(x);
// x/=4;
// console.log(x);

// let y = 15;
// let z = 10;
// console.log(y>z);
// console.log(y<z);
// console.log(y==z);
// console.log(y===z);
// console.log(y!=z);
// console.log(y>=z);


// let age = 22;
// let hasID = true;
// console.log(age>=18 && hasID === true);
// console.log(age>=18 || hasID===false);
// console.log(!hasID);

// let marks = 75;
// let result = marks >=45 ? "Pass" : "fail";
// console.log(result);

let age = 20;
let marks = 75;
console.log(age>=18 && marks>=40);

console.log(22=="22");
console.log(22 === "22")
console.log(22 !="22");
console.log(22 !== "22");