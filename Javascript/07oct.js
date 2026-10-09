/*
This keyword




*/
let student={
    name:"John",
    age:20,
    greet:function(){
        console.log(this.name);// instaed of student.name we can use this.name
        console.log(this.age);
}
}
let student2={
    name:"dhoni",
    age:43,
    greet:student.greet     //above greet function is assigned to student2 object
}
student.greet();
student2.greet();
console.log(this);



const product1={
    name:"laptop",
    price:50000,
    quantity:2,
    calculateTotalPrice:function(){
        return this.price*this.quantity;//this keyword is not working in arrow function because arrow function does not have its own this keyword, it takes this from the outer function
    }
}
const product2={
    name:"phone",
    price:20000,
    quantity:1,
    calculateTotalPrice:product1.calculateTotalPrice
}

console.log(product1.calculateTotalPrice());
console.log(product2.calculateTotalPrice());

let name="shiva";
const product3={
    name:"phone",
    price:20000,
    quantity:1,
    calculateTotalPrice:()=>{
        const arr=()=>{
            console.log(this.name);//this keyword is not working in arrow function because arrow function does not have its own this keyword, it takes this from the outer function
        }   
        arr();
    }
}