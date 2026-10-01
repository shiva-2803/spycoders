/*
what is regular expression in javascript:
regExp is a sequence of charecters that defines the search pattren.

it is used to
1.Search text
2. validate user input
3.replace text

let patten =/setPatten/
let npattren=new RegExp("settPatten")
clg(pattern.test(text));

1.caret(^)
syntax:/^pattern




*/
let caret=/^abc/
console.log(caret.test("abcdef"))//true
console.log(caret.test("bcdes"))//false
console.log(caret.test("xyzabcdef"))//false

//2.Dollor($):
//matches the end of the string

//   /pattern$/

let Dollor=/abc$/
console.log(Dollor.test("abc"))//true
console.log(Dollor.test("xyzabc"))//true
console.log(Dollor.test("ahklbc"))//false

/*
3.dot(.)
matches the exaxtly one charecter except newline
.//
*/
let dot=/a.c/
console.log(dot.test("abc"))//true
console.log(dot.test("axc"))//true
console.log(dot.test("ac"))//false
console.log(dot.test("acb"))//false
console.log(dot.test("abbc"))//false

/*
asterisk(*);
matches previous charecter zreo or more times

*/
let asterisk=/go*gle/
console.log(asterisk.test("gglee"));//false
console.log(asterisk.test("goglee"));//true
console.log(asterisk.test("googlee"));//true
console.log(asterisk.test("goooooglee"));//true

//plus(+);
//matches previous one more than 0
let plus=/go+gle/
console.log(plus.test("gglee"));//false
console.log(plus.test("goglee"));//true
console.log(plus.test("googlee"));//true
console.log(plus.test("goooooglee"));//true

//question mark(?);
//matches the previous charecter 0 or one time
let mark=/colou?r/
console.log(mark.test("color"))//true
console.log(mark.test("colour"))//true
console.log(mark.test("colouur"))//fale

//charecter set([]):
//matches any one charecter from the given set
let charset=/[a-c]/
console.log(charset.test("apple"));//true
console.log(charset.test("cat"));//true
console.log(charset.test("gun"));//false

//negated charset([^])


//Range(-)


//digit(\d)
//matches the digit(0-9)
//[0-9].\d
console.log(/\d/.test("abc"))//false
console.log(/\d/.test("ab2c"))//true
console.log(/\d/.test("123"))//true

//non-digit(\D):
console.log(/\D/.test("abc"))//true
console.log(/\D/.test("ab2c"))//true
console.log(/\D/.test("123"))//false

//whitespace(\s):
//matches the space,tab and new line
console.log(/\s/.test("hello world"));//true
console.log(/\s/.test("hello"))//false
console.log(/\s/.test("hello    world"))//true
console.log(/\s/.test(" "))//true

//non-whitwspace(\S):
console.log(/\S/.test("hello world"));//false
console.log(/\S/.test("hello"))//true
console.log(/\S/.test("hello    world"))//false
console.log(/\S/.test(" "))//false

//word(\w):
//matches latters,digits,underscore
console.log(/\w/.test("user_123"))//true
console.log(/\w/.test("user_"))//true
console.log(/\w/.test("123"))//true
console.log(/\w/.test("user-123"))//true
console.log(/\w/.test("!@#$%^"))//false

//Quantifiers({})
//Quantifiers tell us how many times a character or pattern should occur.
//{n}	Exactly n times
//{n,}	n or more times
//{n,m}	Between n and m times

let qntf=/^b{3}$/
console.log(qntf.test("bbb"))//true
console.log(qntf.test("bb"))//false
console.log(qntf.test("bbbbb"))//false
let qntf2=/^b{2,}$/
console.log(qntf2.test("b"))//false
console.log(qntf2.test("bb"))//true
console.log(qntf2.test("bbbbb"))//true


let mobile =/^[6,7,8,9]\d{9}/

let email=/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-z]{2,}$/