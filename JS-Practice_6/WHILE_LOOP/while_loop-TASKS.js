//=============================================
//--[ TASK: 1️⃣ ] -(Print numbers 1 to 10).
//=============================================
let i = 1;
while (i <= 10) {
    console.log(` ${i} `);
    i++;
}

//=============================================
//--[ TASK: 2️⃣ ] -(Print Odd numbers 1 to 15).
//=============================================

let odd = 1;
while (odd <= 15) {
    console.log(` ${odd} `);
    odd += 2;
}

//=============================================
//--[ TASK: 3️⃣ ] -(Print multiples of 5 up to 50.)
//=============================================

let m = 5;
while (m <= 50) {
    console.log(`${m}`);
    m += 5;
}

//=============================================
//--[ TASK: 4️⃣ ] -(Password Retry Program.)
//=============================================

const pin = 1234;
let input_pin = Number(prompt("Enter Pin!"));

while (pin !== input_pin) {
    input_pin = +prompt(`❌ Pin is Wrong!`);
}
alert(`${pin} Correct Access Granted ✅`);

//=============================================
//--[ TASK: 5️⃣ ] -( Alarm Clock Loop.)
//=============================================

let userInput = "";
while (userInput !== "stop") {
    alert("⏰ Wake up!");
    userInput = prompt("Type stop to turn off the alarm");
}

//=============================================
//--[ TASK: 6️⃣ ] -( GENERATE THE TABLE MULTIPLICATION ).
//=============================================

let table = +prompt("Enter to Generate Table.");
let count = 1;
while (count <= 10) {
    console.log(`${table} x ${count} = ${table * count}`);
    count++;
}

//=============================================
//--[ TASK: 7️⃣ ] -( Print Total 'SUM' Number )-
//=============================================

let sum = 0;
let a = 1;
while (a <= 5) {
    sum = sum + a;
    a++;
}
console.log(sum);

//=============================================
//--[ TASK: 8️⃣ ] -( Emoji Repeater )-
//=============================================

let emoji = "";
let e = 1;
while (e <= 5) {
    emoji = emoji + "😊 ";
    e++;
}
console.log(emoji);

