//==================================
// 1. [ MY CODE ] - its RECOMMENDED
//==================================

function calculateSum(start, end) {
    if (typeof start !== "number" || typeof end !== "number") {
        console.error("❌ Please provide valid numbers");
        return;
    }
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i; // sum = sum + i
    }
    return sum; // reusable
}
const print = calculateSum(1, 15);
console.log("Total Sum:", print);

//==================================
// 2. [ MY SECOND CODE ].BASIC
//==================================

function calculateSum(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i; // it means: sum = sum + i
    }
    console.log(sum);
}
calculateSum(1, 15);

// [ EXPALAINATION ]-
/******************************************************
 * JavaScript Functions, Loops & Validation – Notes
 * Author: (Your Name)
 * Purpose: Learning + GitHub Reference
 * Level: Beginner → Intermediate (Industry Style)
 ******************************************************/

/* =====================================================
   1. WHY FUNCTIONS?
   -----------------------------------------------------
   • Function = reusable block of code
   • Avoids repetition
   • Makes code clean, readable, testable
   • Real projects ALWAYS use functions
===================================================== */

// Basic function structure
function exampleFunction() {
    // code here
}

/* =====================================================
   2. COMMON MISTAKES (VERY IMPORTANT)
===================================================== */

// ❌ WRONG: Converting numbers into strings by mistake
let wrongNumber = `${5}`; // This is STRING, not number

// ✅ CORRECT: Keep numbers as numbers
let correctNumber = 5;

/* =====================================================
   3. TYPE CHECKING (INPUT VALIDATION)
===================================================== */

/*
Why we check typeof?
• User input is unpredictable
• Functions must fail safely
• This is REAL-WORLD practice
*/

function validateNumbers(start, end) {
    if (typeof start !== "number" || typeof end !== "number") {
        console.error("❌ Please provide valid numbers");
        return; // Stops function execution immediately
    }

    console.log("✅ Inputs are valid numbers");
}

validateNumbers(1, 10);

/* =====================================================
   4. return vs break (INTERVIEW FAVORITE)
===================================================== */

/*1.____________________
return:
• Exits FUNCTION
• Used for validation, results, early stop

break:
• Exits LOOP ONLY
• Illegal outside loops
2._____________________________
❌ break yahan kyu kaam nahi karega?
Rule:

break sirf in jagahon par allowed hota hai:

for loop
while loop
do...while loop
switch statement
3.________________________
return; sirf akela kyu likha?
Iska matlab:
“Function yahin khatam karo, aage ka code mat chalao.”
4.__________________________
What does return; (empty return) do?

When you write:
return;
It means:
✅ Stop the function right now
❌ Do NOT send any value back.
So the function returns undefined by default.*/

function demoReturn(value) {
    if (value < 0) {
        return; // Correct way to stop function
    }
    console.log("This will not run if value < 0");
}

/* =====================================================
   5. (FINAL CORRECT CODE ALL) - LOOP-BASED SUM FUNCTION.
===================================================== */

/*
Goal:
• Calculate sum from start to end
• Safe, reusable, professional 👇
*/

function calculateSum(start, end) {
    // Input validation
    if (typeof start !== "number" || typeof end !== "number") {
        console.error("❌ Start and End must be numbers");
        return;
    }

    if (start > end) {
        console.error("❌ Start cannot be greater than End");
        return;
    }

    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i; // same as: sum = sum + i
    }

    return sum; // Function gives result
}

let result = calculateSum(1, 15);
console.log("✅ Sum is:", result);

/* =====================================================
   6. WHY console.error INSTEAD OF console.log?
===================================================== */

/*
console.log → normal output
console.error → errors (red, noticeable, professional)
Developers use error logs for debugging

✅ Professional rule:
Jab input galat ho, ya program aage nahi chal sakta,
console.error() use hota hai, console.log() nahi.
*/

/* =====================================================
   7. LOOP CHOOSING GUIDE
===================================================== */

/*
for loop:
• Fixed number of repetitions
• Tables, ranges

while loop:
• Unknown repetitions
• User input validation (ATM PIN)

do...while loop:
• Must run at least once
• Menus, alarms, confirmations
*/

/* =====================================================
   8. STRING NORMALIZATION (USER INPUT)
===================================================== */

/*
.toLowerCase() → ignores case issues
.trim() → removes extra spaces
?. → prevents crash if user presses Cancel
*/

let userInput = prompt("Type something")?.toLowerCase().trim();

/* =====================================================
   9. TYPEOF / isNaN in check condition.
===================================================== */
// Typeof hamesha string return karega isliye camparison bhi 
// string se hoga ->"number" 
// if (typeof variableName !== "number")
// 👆 same to write result: ( Number.isNaN(Value) )

/* =====================================================
   10. FINAL GOLDEN RULES
===================================================== */

/*
✔ Always validate inputs
✔ Use meaningful variable names
✔ Prefer return inside functions
✔ break only inside loops
✔ Write comments for future-you
✔ Code should explain itself
*/

/********************* END OF NOTES *********************/
