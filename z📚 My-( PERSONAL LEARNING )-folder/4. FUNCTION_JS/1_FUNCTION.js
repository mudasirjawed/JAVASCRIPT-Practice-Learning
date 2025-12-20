//===================================
// 1. [ Open fucntion ].
//===================================

function xyz(){
    bgcolor = "aqua";
    open("https://www.w3schools.com/jsref/jsref_return.asp");
}
// 1. Open("LINK/URL") -> in JavaScript Link.
// 2. excute in html like inside Button tag onclick="xyz();"

//===================================
// 2. [ BGCOLOR CHANGE ].
//===================================

function dark(){
    document.bgColor="aqua";
}

/*_________________________________
 Default parameters kyun use hote hain?
Default parameters use karne ke faide:
Undefined errors se bachao
Code zyada safe aur clean hota hai
Optional arguments banana easy hota hai
Extra condition checks (if (b === undefined)) ki zarurat nahi hoti
___________________________________
*/

//===================================
// 3. [ Default Parameters ]. ES6 se pehle (OLD CODE WAY).
//===================================

function xyz(a, b) {
    if (b === undefined) {
        b = "Hi";
    }
}

//===================================
// 4. [ ES6 ke baad (modern way): ]. 
//===================================

function xyz(a, b = "Hi") {}

//===================================
// 5. [ COMPLETE CODE: defaul parameter ]. 
//===================================

// Function Declaration: Humne ek function banaya jiska naam 'functionName' hai.
// Yeh function do parameters (num1 aur num2) accept karta hai.
// 'num2' ko Default Parameter value '0' di gayi hai. Agar koi argument nahi dega to yeh 0 ban jayega.
function functionName(num1, num2 = 0) { 

    // --- INPUT VALIDATION START ---

    // 1. Pehle hum check karenge ke num1 aur num2 waqai numbers hain ya nahi.
    // 'Number.isFinite()' yeh check karta hai ke value number bhi ho aur Infinity ya NaN na ho.
    
    // IF Statement: Yeh shart dekhti hai ke kahin koi input ghalat to nahi hai.
    // '||' (OR Operator) ka matlab hai: Agar in mein se koi bhi shart poori ho gayi to if block chalega.
    if (
        typeof num1 !== 'number'         // Shart 1: Agar num1 ka data type 'number' nahi hai
        || typeof num2 !== 'number'      // Shart 2: Ya num2 ka data type 'number' nahi hai
        || !Number.isFinite(num1)        // Shart 3: Ya num1 (number hone ke bawajood) Infinity ya NaN hai
        || !Number.isFinite(num2)        // Shart 4: Ya num2 (number hone ke bawajood) Infinity ya NaN hai
    ) {
        
        // Agar koi bhi value number nahi hai ya invalid hai, to hum ek saaf error message return kar denge.
        // Return chalte hi function wahin ruk jayega aur yeh message wapas chala jayega.
        return "ERROR: Please only type numbers (sirf numbers likhen).";
    }

    // --- INPUT VALIDATION END ---

    // 2. Agar upar ki IF statement 'false' hoti hai (matlab inputs sahi numbers hain), 
    // to aage ka code chalega.
    
    // sum calculation: num1 aur num2 ko joda (add kiya) gaya.
    // Backticks (``) Template Literals hain, jo variable ko string ke andar shamil (embed) karne dete hain.
    const sum = `Total Sum: ${num1 + num2}`;
    
    // Final Result ko wapas bhej diya gaya.
    return sum;
}

// --- Function Testing aur Calling ---

// 'functionName' ko call kiya aur result 'result1' variable me store kiya.
// Example 1: Jab numbers sahi hain (10 + 5 = 15)
const result1 = functionName(10, 5);
console.log(`Result 1: ${result1}`); // Output: Result 1: Total Sum: 15

// Example 2: Jab pehle argument me text likh diya jaye
// Function 'typeof' check me fail ho jayega.
const result2 = functionName("hello", 5);
console.log(`Result 2: ${result2}`); // Output: Result 2: ERROR: Please only type numbers (sirf numbers likhen).

// Example 3: Jab sirf pehla argument text ho aur doosra argument chhod diya jaye (woh default 0 lega)
// Phir bhi 'hello' ki wajah se 'typeof' check fail hoga.
const result3 = functionName("two");
console.log(`Result 3: ${result3}`); // Output: Result 3: ERROR: Please only type numbers (sirf numbers likhen).

// Example 4: Jab num2 chhod diya jaye (woh default 0 lega) aur num1 sahi ho (10 + 0 = 10)
// Validation check pass ho jayega.
const result4 = functionName(10);
console.log(`Result 4: ${result4}`); // Output: Result 4: Total Sum: 10

//===================================
// 6. [ MY CODE: DEFAULT PARAMETERS ]. 
//===================================

function functionName(a = "defaultValue", b) {
    const sum = `${a + b}`;
    return sum;
}
const print1 = functionName();
console.log(`${print1}`);

//===============================
// [ SECOND MY CODE ].
//===============================

function greet(Name="Sir"){
    console.log(`Hello, ${Name}`);
}
greet();