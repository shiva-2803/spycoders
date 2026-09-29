/*
Array methods:
collection of multiple values stored in a sigle variable
[12,2,true,false,"string",{key:valyes},[1,2,3,4]]

why:
1.add a product
2.remove product
3.search any product
4.filter product
5.modify any product
6.finding one product

1.push():
is an array method used to add one or more values to the end of an array.

2.pop():
is an array method used to remove one or more values to the end of an array.


*/
let products=["laptop","mobile","keypad","mouse"];
products.push("CPU")
console.log(products);
products.pop()
console.log(products);
products.unshift("mouse");
console.log(products);
products.shift("mouse");
console.log(products);
console.log(products.includes("laptop"));
console.log(products.indexOf("Laptop"));
console.log(products.indexOf("keypad"));
/*
3.unshift():
unshift() adds one or more elements to the beginning of an array.


4.shift():
shift() removes the first element from an array.

5.includes():
includes() is used to check whether an array or string contains a particular value.

6.indexOf():
indexOf() is used to find the position (index) of a value in an array or string.

7.find():
find() is an array method used to find the first element that satisfies a condition.

8.findIndex():
findIndex() is used to find the index (position) of the first element that satisfies a condition.


 */
let products1 =[
    {id:1,name:"laptop",price:20000},
    {id:2,name:"mobile",price:50000},
    {id:3,name:"watch",price:5000},
];

let product=products1.find((item)=>{
    return item.id===3;
})
console.log(product);
let index =products1.findIndex((item)=>item.id===1)
console.log(index)

//9.some()
// some() is an array method used to check whether at least one element in an array satisfies a condition.



//10.slice()
// slice() is used to take a portion of an array or string without changing the original.
let result=products1.slice(0,2)
console.log(result);

//11.splice():
// used to remove add replace the items inside the array
//console.log(products.splice(1,1));
products.splice(1,0,"tablet","added");
console.log(products)
products.splice(1,2,"******");
console.log(products);

products.sort();
console.log(products);


