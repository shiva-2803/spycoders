/*
5. ternary operator:
it is a short hand form of if else
syntax:
condition ? valueIfTrue : valueIfFalse;

Example:
*/

let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);

/*
6.Unary operators:
+,-,++,--,typeof
+  ---> changes from from string to number
let x = "10";

console.log(+x);

-  ---> Changes the sign of a number.
let x = 10;

console.log(-x);

## Pre-Increment vs Post-Increment

The difference is **when the value changes**.

### 1. Pre-Increment `++x`

First **increase**, then use the value.

```javascript
let x = 5;

console.log(++x);
console.log(x);
```

Output:

```text
6
6
```

---

### 2. Post-Increment `x++`

First **use the value**, then increase it.

```javascript
let x = 5;

console.log(x++);
console.log(x);
```

Output:

```text
5
6
```

### Pre-Decrement `--x`

First **decrease**, then use the value.

```javascript
let x = 5;

console.log(--x);
console.log(x);
```

Output:

```text
4
4
```

### Post-Decrement `x--`

First **use the value**, then decrease it.

```javascript
let x = 5;

console.log(x--);
console.log(x);
```

Output:

```text
5
4
```

 Easy trick 🧠

| Operator | Meaning        | What happens first? |
| -------- | -------------- | ------------------- |
| `++x`    | Pre-increment  | Increase → Use      |
| `x++`    | Post-increment | Use → Increase      |
| `--x`    | Pre-decrement  | Decrease → Use      |
| `x--`    | Post-decrement | Use → Decrease      |

**Remember:**
👉 Operator **before** variable = **change first**
👉 Operator **after** variable = **use first**




*/
console.log("2"-"5"+"3");

// let productPrice =Number(prompt("Enter the price: "));
// console.log(productPrice);
// let productPrice2 = Number(prompt("Enter the price"));
// console.log(productPrice2)
// console.log(productPrice+productPrice2);

//Type converstions

//Number();
//parseInt();
//parseFloat("100") //100.00
//String(123) // "123"
//Boolean(1) //true
// boolean(100)// true
//boolean("");// false
//boolean("Hello");//true

console.log("hello"-true+false+"2");
//"hello"-true------>"hello"-1----->NaN(string)
//NaNfalse---> NaN+0---->NaN+'2------>NaN2;





