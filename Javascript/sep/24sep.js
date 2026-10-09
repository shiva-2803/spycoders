/*
Math---> predefined mathatical functions
Math.PI---->it gives the value of PI
math.round()---->gives nearest integer
Math.floor()---->removes decimal values
Math.ceil()----->gives next integer
Math.trunc()--->removes the decimal values
Math.abs()--->
Math.max()---->finds largest number

random()--->creating random number 0 to 1









*/
console.log(Math.PI);
console.log(Math.round(4.4));
console.log(Math.floor(4.5));
console.log(Math.ceil(4.5));
console.log(Math.trunc(-4.5));
console.log(Math.trunc(4.5));
console.log(Math.abs(-4.5));
console.log(Math.max(10,20,30,40));
console.log(Math.random()*1000);
console.log(Math.trunc(Math.random()*1000000));
console.log(Math.trunc(Math.random()*900000)+1000000);

/*
Data()
let date = new Date()

*/
let date=new Date;
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());

//set menthods
date.setFullYear(2027);
console.log(date);
console.log(Date.now());
console.log(date.toDateString());
console.log(date.toLocaleString())
console.log(date.toLocaleTimeString())





