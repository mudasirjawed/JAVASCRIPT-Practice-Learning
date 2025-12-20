//===================================
// 1.( DO WHILE LOOP ) -Check Pin---.
//===================================

let pin = 123;
let user;
do {
  user = +prompt(`Enter Your pin? ${pin}`);
} while (pin !== user);

console.log("Correct Pin Access Granted ✅");
alert("Correct Pin Access Granted ✅");
document.writeln(`Correct Pin ${pin} Access Granted ✅`);

//===============================================
// 2. [SECOND METHOD ATM PIN ] ( DO WHILE LOOP )---
//===============================================

const correctPIN = "1234"; 
let enteredPIN;

do {
    enteredPIN = prompt("Enter your ATM PIN:");

    if (enteredPIN === correctPIN) {
        alert("PIN correct. Access granted.");
        break;
    } else {
        alert("Incorrect PIN. Try again.");
    }
} while (true); // loop tab tak chalega jab tak correct PIN nahi milta
