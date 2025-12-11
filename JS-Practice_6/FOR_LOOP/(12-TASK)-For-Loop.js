//=============================================
//--[ TASK: 1️⃣ ] -(Print numbers from 1 to 20).
//=============================================

for (let num = 1; num <= 20; num++) {
    console.log(`${num}`);
}

//====================================================
//--[ TASK: 2️⃣ ] -(Print numbers from 10 to 1 (Reverse).
//=====================================================

for (let reverse = 10; reverse >= 1; reverse--) {
    console.log(`${reverse}`);
}

//==================================================
//--[ TASK: 3️⃣ ] -(Print EVEN numbers from 2 to 20).
//==================================================

for (let even = 2; even <= 20; even += 2) {
    console.log(`Even No: ${even}`)
}

//=================================================
//--[ TASK: 4️⃣ ] -(Print Odd numbers from 2 to 20).
//=================================================

for (let odd = 1; odd <= 20; odd += 2) {
    console.log(`Odd No: ${odd}`);
}

//============================================================
// [ TASK: 5️⃣ ] -(Print BOTH "Odd & EVEN" numbers "Dynamicly").
//============================================================

let input = prompt(`Enter a Number to Check Even or Odd.`);

for (let i = 1; i <= 20; i++) {
    if (!input || isNaN(input)) {
        document.write(`<h1> Number required! Input can't be Empty ❌ </h1>`);
        break;
    }
    input = Number(input);
    document.write(input % 2 === 0 ? `<h1> Even: ${input} </h1>` : `<h1> Odd: ${input} </h1>`);
    console.log(input % 2 === 0 ? `Even: ${input}` : `Odd: ${input}`);
    input += 2;
}

//============================================================
// [ TASK: 6️⃣ ] (Print the Multiplication table of "7").
//============================================================

for (let table = 1; table <= 10; table++) {
    console.log(`7 x ${table} = ${7 * table}`);
}

//============================================================
// [ TASK: 7️⃣ ] (Print the Multiplication table "Dynamicly").
//============================================================

let num_input = Number(prompt(`Enter a Number to Generate Table.`));

for (let count = 1; count <= 10; count++) {
    if (!num_input) {
        document.write(`<h1> Number required! Input can't be Empty ❌ </h1>`); break;
    }
    document.write(`<h1> ${num_input} x ${count} = ${num_input * count} </h1>`);
    console.log(`${num_input} x ${count} = ${num_input * count}`);
}

//============================================================
// [ TASK: 8️⃣ ] (Print the "Sum" of first 50 natural numbers.).
//============================================================

let sum = 0;
for (let w = 1; w <= 50; w++) {
    sum = sum + w;
}
console.log(`Total Sum: ${sum}`);

//============================================================
// [ TASK: 9️⃣ ] (Print each character of a string: "JavaScript")
//============================================================

let str = "JavaScript";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

//============================================================
// [ TASK: 🔟 ] ( Emoji Repeater ). DYNAMICLY "PROMPT".
//============================================================

let emoji_prompt = prompt("Enter any Emoji 😊 or Character to Repeat.");
let count = Number(prompt(`How Many times Should "${emoji_prompt}" be Repeated?`));
let emoji = "";
for (let e = 1; e <= count; e++) {
    emoji += emoji_prompt;
}
console.log(`You Ask to Repeat ${count} Times. \n\n ${emoji}`);
alert(`You Ask to Repeat ${count} Times. \n\n ${emoji}`);

//============================================================
// [ TASK: 🔟 ] ( Emoji Repeater ). Static.
//============================================================

let emoji_ = "";
for (var e = 1; e <= 5; e++) {
    emoji_ += "😊 ";
}
console.log(`${e - 1} Times: ${emoji_}`);

//============================================================
// [ TASK: 1️⃣1️⃣ ] ( * STAR Pyramid ). 
//============================================================

let star = "";
for (let si = 1; si <= 5; si++) {
    star = star + "*";
    console.log(`${star}`);
}

//============================================================
// [ TASK: 1️⃣2️⃣ ] ( COUNT-DOWN ROcket Launch ). 🚀
//============================================================

for (let rocket = 10; rocket >= 1; rocket--) {
    console.log(` ${rocket} `);
}
console.log(`🚀 Launch!`);