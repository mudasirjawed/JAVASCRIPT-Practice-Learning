// [ 1 ]--(cheking '123' pin 4 time)--
for (let a = 1; a <= 4; a++) {
    let xyz = prompt(`hello world ${a}`);
    if ("123" === xyz) {
        document.write(`${xyz} <br>`);
    }
    else {
        document.write(`Wrong Input Error <br>`);
    }
}

// [ 2 ]-[ Print 5 Names line by Line]----
for (let i = 1; i <= 5; i++) {
    let messege = prompt(`Enter Messege! ${i}`);
    console.log(`${messege} <br>`);
    document.write(`${messege} <br>`);
}

// 3.[ Reverse Print ]-------
for (let r = 5; r >= 1; r--) {
    console.log(`Hello ${r}`);
}

// 4. [ There is no different increament/decremeant]---
// FIRST-----increase = value+1--
for (let t = 1; t <= 5; t = t + 1) {
    console.log(`print ${t}`);
}
// SECOND----- Increment++
for (let T = 1; T <= 5; T++) {
    console.log(`print ${T}`);
}
// THIRD----- Decrement------Reverse.
for (let tt = 5; tt >= 1; tt = tt - 1) {
    console.log(`Reverse Print: ${tt}`);
}
// FORTH-----Decrement--
for (let p = 5; p >= 1; p--) {
    console.log(`Reverse Print: ${p}`);
}
// =====[ END MY CODE ]=======

// ===============================
// FOR LOOP MASTER REPO - Roman Urdu Comments -- CHATGPT)
// ===============================

// 1️⃣ Numbers 1 se 10 print karna
for (let a = 1; a <= 10; a++) {
    // 'let a = 1' → loop start 1 se
    // 'a <= 10' → tab tak chalega jab tak a 10 se chhota ya barabar hai
    // 'a++' → har step me a ko 1 se increase karo
    // console.log(a) → current value of a print karo
    console.log(a);
}
// Output: 1 2 3 4 5 6 7 8 9 10

// 2️⃣ Numbers 10 se 1 reverse print karna
for (let i = 10; i >= 1; i--) {
    // 'i = 10' → start 10 se
    // 'i >= 1' → tab tak chalega jab tak i 1 ya usse bara hai
    // 'i--' → har step me i ko 1 se decrease karo
    console.log(i);
}
// Output: 10 9 8 7 6 5 4 3 2 1

// 3️⃣ Even numbers 2 se 20 print karna
for (let i = 2; i <= 20; i += 2) {
    // 'i = 2' → start first even number se
    // 'i <= 20' → tab tak chalega jab tak 20 tak nahi pahunchte
    // 'i += 2' → har step me 2 add karo (next even)
    console.log(i);
}
// Output: 2 4 6 8 10 12 14 16 18 20

// 4️⃣ Odd numbers 1 se 19 print karna
for (let i = 1; i <= 20; i += 2) {
    // start 1 se, har step me 2 add → odd numbers
    console.log(i);
}
// Output: 1 3 5 7 9 11 13 15 17 19

// 5️⃣ Multiplication table of 7
let num = 7;
for (let i = 1; i <= 10; i++) {
    // i = 1 se 10 tak
    // num * i → 7 ka multiplication table
    console.log(`${num} x ${i} = ${num * i}`);
}
// Output: 7 x 1 = 7 ... 7 x 10 = 70

// 6️⃣ Sum of first 50 natural numbers
let sum = 0; // sum start 0 se
for (let i = 1; i <= 50; i++) {
    // har step me i ko sum me add karo
    sum += i; // sum = sum + i
}
console.log("Sum of first 50 numbers:", sum);
// Output: 1275

// 7️⃣ Print each character of string "JavaScript"
let str = "JavaScript";
for (let i = 0; i < str.length; i++) {
    // i = index 0 se start
    // str[i] → current character
    console.log(str[i]);
}
// Output:
// J
// a
// v
// a
// S
// c
// r
// i
// p
// t

// 8️⃣ Emoji repeater 5 times
let emoji = "😀";
let times = 5;
for (let i = 1; i <= times; i++) {
    // repeat emoji 5 times
    console.log(emoji);
}
// Output: 😀 😀 😀 😀 😀

// 9️⃣ Star pyramid using nested loop
for (let i = 1; i <= 5; i++) {
    // outer loop → rows
    let stars = ""; // empty string for stars
    for (let j = 1; j <= i; j++) {
        // inner loop → har row me stars add karo
        stars += "*";
    }
    console.log(stars); // print current row
}
// Output:
// *
// **
// ***
// ****
// *****

// 🔟 Countdown / Rocket Launch
for (let i = 10; i >= 1; i--) {
    // start 10 se, 1 tak
    console.log(i);
}
console.log("🚀 Launch!");
// Output: 10 9 8 7 6 5 4 3 2 1 🚀 Launch!

// 11️⃣ Loop through array (fruits example)
let fruits = ["Apple", "Banana", "Mango", "Orange"];
for (let i = 0; i < fruits.length; i++) {
    // i = index 0 se fruits.length-1
    console.log(`I like ${fruits[i]}`);
}
// Output:
// I like Apple
// I like Banana
// I like Mango
// I like Orange

// 12️⃣ Nested loop example (Grid)
for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
        // outer → row, inner → col
        console.log(`Row: ${row}, Col: ${col}`);
    }
}
// Output:
// Row:1, Col:1
// Row:1, Col:2
// Row:1, Col:3
// Row:2, Col:1
// Row:2, Col:2
// Row:2, Col:3
// Row:3, Col:1
// Row:3, Col:2
// Row:3, Col:3
