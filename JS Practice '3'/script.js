'use strict';
// 1. DECLARE ALL DATA TYPES.
let _string = "Texts";
let _number = 55;
let _null = null;
let _undefined;
let _bigint = 2192239234443423423n;
let _symbol = Symbol("Name");
let _symbol2 = Symbol("Name");

//   ALL DATA TYPES PRINT ON CONSOLE.LOG
console.log("Value:", _string, "Type:", typeof _string);
console.log("Value:", _number, "Type:", typeof _number);
console.log("Value:", _null, "Type:", typeof _null);
console.log("Value:", _undefined, "Type:", typeof _undefined);
console.log("Value:", _bigint, "Type:", typeof _bigint);
console.log("Value:", _symbol, "Type:", typeof _symbol);
// Symbol is Unique Value identity.
console.log(_symbol === _symbol2);     //Answer is false

//  2. COPY BY VALUE PRIMITIVE DATA TYPE.
let num1 = 10;
let num2 = num1;
num2 = 25;
console.log(num1, num2);
//  Explain: primitive data type me value copy ho sakti hai✅ lekin copy value ko Change Nahi ho sakti❌ kyuki ye IMMUTABLE hai num1 change nahi hoga sirif num2 change hoga.


// 3. MINI PROJECT - USER INFO TYPEcaster.
let Name = prompt("👤 What's Your Name?");  //Prompt is Always return in String  
let Age = Number(prompt("🎂 What's Your Age?"));
let isStudent = Number(prompt("🎓 Are You Student? (Yes-Press: 1 ) (No-Press: 0 )"));
let isStudent_convert = Boolean(isStudent);
let f_number = Number(prompt("💫 What's Your Favorite Number? 1234etc"));
let Nick = prompt("🏷️ What's Your Nick Name?");

//        THIS PRINT BASIC WAY.
// console.log("👤 Name:", Name, "-", typeof Name);
// console.log("🎂 Age:", Age, "-", typeof Age);
// console.log("🎓 Is Student:", isStudent_convert, "-", typeof isStudent);
// console.log("💫 Favorite Number:", f_number, "-", typeof f_number);
// console.log("🏷️ Nickname:", Nick, "-", typeof Nick);

//  IAM FOUND MYSELF THIS SMARTEST WAY. FOUNDER BY('Mudasir Jawed').
//  Collecting Data 👇.
const Store = {
    first: `👤 Name: ${Name} - ${typeof Name}`,
    second: `🎂 Age: ${Age} - ${typeof Age}`,
    third: `🎓 Is Student: ${isStudent_convert} - ${typeof isStudent_convert}`,
    forth: `💫 Favorite Number: ${f_number} - ${typeof f_number}`,
    fifth: `🏷️ Nickname: ${Nick} - ${typeof Nick}`
};

// Print on Console Window
console.log(Store.first);
console.log(Store.second);
console.log(Store.third);
console.log(Store.forth);
console.log(Store.fifth);

// Print on Browser Screen.
document.write("<div>" + Store.first + "<br>" + Store.second + "<br>" + Store.third + "<br>" + Store.fifth + "</div>");










