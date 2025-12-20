// 1. ✅ Best-Practice, Real-Life Nested IF Code
let cardInserted = true;          // user ne card lagaya?
let pin = "1234";                 // correct pin
let userPin = prompt("Enter PIN:");

let balance = 5000;               // bank account balance
let amount = Number(prompt("Enter amount to withdraw:"));

if (cardInserted) {

    // 1) Check PIN
    if (userPin === pin) {

        // 2) Check empty amount
        if (!amount && amount !== 0) {
            console.log("❌ Withdrawal amount cannot be empty.");
        }

        // 3) Check valid number
        else if (isNaN(amount)) {
            console.log("❌ Please enter a valid amount.");
        }

        // 4) Negative or zero check
        else if (amount <= 0) {
            console.log("❌ Amount cannot be zero or negative.");
        }

        // 5) Balance check
        else if (amount > balance) {
            console.log("❌ Insufficient balance.");
        }

        // 6) Final success
        else {
            console.log("✔ Withdraw Successful!");
            balance -= amount;
            console.log("Remaining Balance:", balance);
        }

    } else {
        console.log("❌ Incorrect PIN.");
    }

} else {
    console.log("❌ Insert your card first.");
}

// 2. SIMPLE WAY
let email = prompt("Enter Email:");

if (email) {
    if (email.includes("@")) {
        let password = prompt("Enter Password:");

        if (password.length >= 6) {
            console.log("✔ Login Successful!");
        } else {
            console.log("❌ Password too short.");
        }

    } else {
        console.log("❌ Invalid Email Address.");
    }
} else {
    console.log("❌ Email cannot be empty.");
}

// 3. NUMBER AGE
// Ask user for age during signup
let age = prompt("Enter your age to create an account:");

// Convert input to number
age = Number(age);

// Real-Life Conditional Logic
if (age === "" || age === null) {
    console.log("❌ Age field cannot be empty.");
}
else if (isNaN(age)) {
    console.log("❌ Please enter a valid number.");
}
else if (age <= 0) {
    console.log("❌ Age cannot be negative or zero.");
}
else if (age < 13) {
    console.log("❌ You are too young. Account creation is not allowed.");
}
else if (age >= 13 && age < 18) {
    console.log("⚠ Minor Account Created (Limited Features).");
}
else if (age >= 18) {
    console.log("✔ Full Access Account Created Successfully!");
}
else {
    console.log("❌ Unknown Error Occurred.");
}

// 4. THIS IS WAY OF (FIRST 1) DIFFERENT.
let age = 25;
let hasLicense = true;

if (age >= 18) {
  if (hasLicense) {
    console.log("You can drive!");
  } else {
    console.log("Get your driving license first!");
  }
} else {
  console.log("You are too young to drive!");
}

// 4. THIS IS WAY OF (SEOOND 2) DIFFERENT.
let age = 25;
let hasLicense = true;

if (age >= 18) {

    // Age is TRUE (adult)
    if (hasLicense) {
        console.log("✔ You can drive!");
    } else {
        console.log("❌ Age is TRUE (18+) but license is FALSE. Get your driving license first!");
    }

} else {

    // Age is FALSE (under 18)
    if (hasLicense) {
        console.log("❌ Age is FALSE (under 18) but license is TRUE. How do you have a license?");
    } else {
        console.log("❌ You are too young to drive and you also don't have a license!");
    }

}

// 4. THIS IS WAY TO WRITE (THIRD 3) 
let isTrue = true;
let yourAge = 18;

// Convert to number safely
yourAge = Number(yourAge);

// 1) Check EMPTY values first
if (!isTrue && !yourAge) {
  console.log("❌ Both fields are empty!");
}

else if (isNaN(yourAge)) {
  console.log("❌ Please enter age as a valid number.");
}

else if (!isTrue) {
  console.log("❌ isTrue field is empty or false.");
}

else if (!yourAge) {
  console.log("❌ Age field is empty.");
}

// 2) Age >= 18
else if (yourAge >= 18) {

  if (isTrue) {
    console.log("✔ Both age and isTrue are valid!");
  } else {
    console.log("⚠ Age is valid but isTrue is false.");
  }

}

// 3) Age < 18
else {
  if (isTrue) {
    console.log("⚠ isTrue is valid but age is too low.");
  } else {
    console.log("❌ Both age and isTrue are incorrect.");
  }
}
// [END 4 !]

// 5. ====[FOR SHORT PRO IF ELSE WITH TERNARY OPERATOR]
if (!isTrue && !yourAge) console.log("Empty!");
else if (isNaN(+yourAge)) console.log("Age must be number!");
else if (!isTrue) console.log("isTrue empty!");
else if (!yourAge) console.log("Age empty!");
else if (yourAge >= 18) 
  console.log(isTrue ? "Both correct" : "Age OK but isTrue false");
else 
  console.log(isTrue ? "isTrue OK but age low" : "Both wrong");

// 6. ---[BEST CONSITION FOR 'EMPTY']--
(!age) /*1.this is perfect ✔ Covers all empty cases. ✔ Real companies also use this
✔ Industry standard practice 

(HOW ITS WORK?👉 !age)
VALUE:"" (empty string)	RESULT IS:'true'
VALUE:null	RESULT:true
VALUE:undefined	RESULT:true
VALUE:0	RESULT:true (⚠ Not ideal for age validation)
VALUE:NaN	RESULT:true
VALUE:false	RESULT:true*/

if (!age && age !== 0); /*2. ye 0 zero hone par bhi empty show nahi karega?*/
(age === "" || age === null) /*3.  */
// [END 6]


// ===[If else 7.]===
let price = 1200;
let finalPrice = price > 1000 ? price * (10/100) : price;
let fin = price - finalPrice;
console.log(finalPrice, fin); // 1080 (10% discount)

// [if else 8]
let price = 1200;
let finalPrice = price > 1000 ? price * 0.9 : price;
console.log(finalPrice); // 1080 (10% discount)

// [9 ]
let price = 1400;
let discountPercent = 15;

let discount = price * (discountPercent / 100);
let finalPrice = price - discount;

console.log(finalPrice);


// === [ NESTED CONSITION 1 WAY TO WRITE SAME] ===
let a = 17;
let b = true;

if (a >=18){
    if(b){
        console.log("you can Drive");
    }else{
        console.log("driving license First approach"); 
    }
}else {
    if(b){
        console.log("you have license But You Age is Bacha! .");   
    }else{
        console.log("both Wrongs!");  
    }
}

// === [ NESTED CONSITION 2 WAY TO WRITE SAME] ===
let A = 18;
let B = false;

if (A < 18 && B === false){
    console.log("both Wrongs!");
}
else if (B === false && A >= 18){
    console.log("driving license First approach");
}
else if (B === true && A < 18){
    console.log("you have license But You Age is Bacha! .");
}
else{
    console.log("You Can Drive");   
}
