/*

WHat is string:
A string is a type of data used to store text.

method:
1.length:--->returns number of charecters in a string
string.length

real time cases:
1.passoword validations
2.User name validation
3.OTp validation


2.toupperCase():
converts the complete string into uppercase
string.upperCase()

real time use cases:
1.coupen codes
2.PAN
3.county codes


let obj={
    length://code
    at:function(){
            //code
        }

}
obj.at()

3.toLowerCase()
usecases:
1.email
2.UPI id
3.File NAmes


4.CharAt()--->
String.chatAt(index position)
5.At()
String.At(index position)
6.includes():
string method used to check whether one piece of text exists inside another string.
use cases:
1.Searching
2.filtering
3.email validation
4.checking keywords


7.startsWith():
checks wheather a string starts with particulat text

uses case:
1.phone number validation
2.URL checking

8.endsWith():
checks wheather a string ends with particulat text
uses cases:
1.file extent
2.email validation
3.url validation



9.indexOf():
indexOf() is used to find the position (index) of a character or word inside a string.

10.slice():
string.slice(start,end)

subString is old version

11.Replace():
replacing values in a string 

12.trim()
remove unnessasary spaces 

13.split()
convers string to array
real time uses:






*/
function toUppercase(){
    let element=document.getElementById("input").value;
    console.log(element);
    let saveVale="SAVE10";
    console.log(element.toUpperCase());

}

let Cname="shivakumar";
let firstLetter=Cname.charAt(0);
console.log(firstLetter.toUpperCase());
console.log(Cname.indexOf("s"));//index of
console.log(Cname.lastIndexOf("k"))


let email="abc@gmail.com";
console.log(email.includes("@"));

//searching by using function and input type


let phone="9876543210";
console.log(phone.startsWith("97"));

console.log(Cname.indexOf("s"));//index of
console.log(Cname.lastIndexOf("k"))
console.log(Cname.slice(0,7));//slice()

let email1="shiva@gmail.com";
let email2="javascript@gmail.com";
let endIndex=email1.indexOf("@");
console.log(email1.slice(onabort,endIndex));


let result=email2.slice(0,3)+"********"+email2.slice(email2.indexOf("@"));
console.log(result);

let message = "JavaScript is easy.JavaScript is powerfull.javaScript is importent";
console.log(message.replace("JavaScript","JS"));
console.log(message.replaceAll("JavaScript","JS"));

let name2="    Shiva    ";
console.log(name2.trim());

console.log(message.split(" "))

//concat():used to add two elements
let firstName="M";
let lastName="Shiva Kumar"
let fullname = firstName.concat(" ",lastName)
console.log(fullname);


let star="*";
console.log(star.repeat(5));

