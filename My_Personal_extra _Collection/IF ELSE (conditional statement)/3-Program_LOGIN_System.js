// 1. 👇 CLAUDE Explanation👇
// LOGIN SYSTEM WITH VALIDATIONS
// =============================

// -----------------------------
// STEP 1: Create Account (Signup)
// -----------------------------
// Ye wo credentials hain jo pehle se saved hain (normally database me hote hain)
const correctEmail = "user@example.com";     // Sahi email
const correctPassword = "123456";            // Sahi password

// -----------------------------
// STEP 2: Login Inputs
// -----------------------------
// User se email aur password input lena
let inputEmail = prompt("Enter your Email:");        // User ka email
let inputPassword = prompt("Enter your Password:");  // User ka password

// -----------------------------
// STEP 3: Basic Input Validation
// -----------------------------
// ✔ Check 1 → Kya fields empty hain ya sirf spaces hain?
// !inputEmail → agar email empty/null/undefined hai
// !inputEmail.trim() → agar email me sirf spaces hain
if (!inputEmail || !inputEmail.trim() || !inputPassword || !inputPassword.trim()) {
    console.log("❌ Error: Email or Password cannot be empty.");
}

// -----------------------------
// STEP 4: Detailed Validations
// -----------------------------
else {
    // ✔ Check 2 → Kya email format sahi hai? (@ aur . hona chahiye)
    // includes() method check karta hai ki string me wo character hai ya nahi
    if (!inputEmail.includes("@") || !inputEmail.includes(".")) {
        console.log("❌ Invalid Email Format!");
    }
    
    // ✔ Check 3 → Kya password kam se kam 6 characters ka hai?
    // .length property string ki length batati hai
    else if (inputPassword.length < 6) {
        console.log("❌ Password must be at least 6 characters long.");
    }
    
    // ✔ Check 4 → Dono email AUR password sahi hain? (Login Success)
    // === strict equality check karta hai (type + value dono)
    // && (AND operator) → dono conditions true honi chahiye
    else if (inputEmail === correctEmail && inputPassword === correctPassword) {
        console.log("✅ Login Successful! Welcome.");
    }
    
    // ✔ Check 5 → Email sahi hai LEKIN password galat hai
    // !== not equal to (value ya type different hai)
    else if (inputEmail === correctEmail && inputPassword !== correctPassword) {
        console.log("❌ Password is incorrect!");
    }
    
    // ✔ Check 6 → Password sahi hai LEKIN email galat hai
    else if (inputPassword === correctPassword && inputEmail !== correctEmail) {
        console.log("❌ Email is incorrect!");
    }
    
    // ✔ Check 7 → Dono hi galat hain (last option)
    // Agar upar ki koi bhi condition true nahi hui to ye chalega
    else {
        console.log("❌ Both Email and Password are incorrect!");
    }
}

// =============================
// KEY CONCEPTS USED:
// =============================
// 1. const → value change nahi ho sakti
// 2. let → value change ho sakti hai
// 3. prompt() → user se input lena
// 4. if-else → conditions check karna
// 5. && (AND) → dono conditions true chahiye
// 6. || (OR) → ek bhi condition true ho
// 7. === → strict equal (type + value check)
// 8. !== → not equal
// 9. .trim() → spaces hatana
// 10. .includes() → string me character check karna
// 11. .length → string ki length
// =============================

//____2______________________________________________
//[ 👇 2. Gemini Explain👇 ]

// --- Database / Stored Credentials ---
const correctemail = "mudasir"; 
const correctpassword = "123"; 
// Best Practice: Hamesha const ya let use karein aur variables meaningful rakhein.
// Best Practice: Password ko hamesha String ('123') rakhein, chahe woh numbers hi hon.

// --- User Input (Prompt se hamesha String milti hai) ---
const userEmail = prompt("Enter your Email:");
const userPassword = prompt("Enter your Password:");

// --- Authentication Logic (Nested If/Else) ---

// 1. Pehle Check: Kya User ne Koi Input Diya?
if (userEmail && userPassword) {
    // 2. Doosra Check: Email aur Password ki Mismatching
    
    // Check 2A: Jab DONO Correct hon
    if (userEmail === correctemail && userPassword === correctpassword) {
        console.log("Login Successful! Both email and password are correct.");
    } 
    // Check 2B: Jab Email Sahi ho, Magar Password Galat ho
    else if (userEmail === correctemail && userPassword !== correctpassword) {
        console.log("Email is correct, but the Password is Wrong!");
    } 
    // Check 2C: Jab Password Sahi ho, Magar Email Galat ho
    else if (userPassword === correctpassword && userEmail !== correctemail) {
        console.log("Password is correct, but the Email is Wrong!");
    } 
    // Check 2D: Jab DONO Galat hon
    else {
        console.log("Both are Wrong! Invalid email and password combination.");
    }

} 
// 3. Agar Koi Input Empty Reh Gaya (user ne Cancel dabaya ya OK with empty field)
else {
    console.log("Input Error: Please provide both Email and Password.");
}