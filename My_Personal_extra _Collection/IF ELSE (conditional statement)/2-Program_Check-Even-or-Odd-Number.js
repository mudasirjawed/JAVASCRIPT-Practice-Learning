/** ---[ 👇 Gemini CODE 👇 ]---
 * Tareeqa 1: Robust Validation ke Saath
 * Hum pehle check karte hain ke input Number hai ya nahi.
 * Empty String ("") aur NaN (Not a Number) ko galat input treat karte hain.
 */
const numberToCheck = 7; // <-- Aap is value ko change kar ke check kar sakte hain (e.g., "", "abc", 10)

if (!numberToCheck || isNaN(numberToCheck)) {
    // 1. Agar input number nahi hai, ya NaN hai.
    console.log(`❌ Error: "${numberToCheck}" is Wrong Input. Please provide a valid number.`);
} else if (numberToCheck === 0) {
    // 2. 0 ko alag se treat karna best practice hai. (0 Even hota hai)
    console.log(`${numberToCheck} is a Neutral and Even Number.`);
} else if (numberToCheck % 2 === 0) {
    // 3. Agar remainder 0 ho (Even)
    console.log(`✅ ${numberToCheck} is an Even Number.`);
} else {
    // 4. Agar upar ki conditions false hon, to woh Odd Number hoga.
    console.log(`✅ ${numberToCheck} is an Odd Number.`);
}

// _________________________________
// ---[ 👇 CHATGPT CODE 👇 ]---
let num = prompt("Enter a number");

// Step 1: Validation
if (!num || isNaN(num)) {
    console.log("❌ Wrong Input! Please enter a valid number.");
}

else {
    num = Number(num);

    // Step 2: Odd / Even check
    if (num % 2 === 0) {
        console.log(`${num} is an Even Number`);
    } 
    else {
        console.log(`${num} is an Odd Number`);
    }
}

// ______________________________________
//---[ 👇 My CODE 👇 ]--- 
let numb = prompt(" Enter Number. ");
if(numb % 2 === 0){
    console.log(`${numb} This is Even Number`);  // Even Number
}
else if (numb % 2 !==0){
    console.log(`${numb} This is Odd Number`);   // Odd Number
}
else{
    console.log(`Unknown Error`);
}
//__[Best Practice 👇]__
let nom = 5;
if (nom % 2 === 0){
    console.log(`Even Number`); // Even Number
}
else{
    console.log(`Odd Number`); // Odd Number
    
}


