// -----------------------------
// JS Grading System
// -----------------------------

// Step 1: Ask user for marks
let marks = prompt("Enter your marks (0-100):");

// Step 2: Convert input to number
marks = Number(marks);

// Step 3: Input validation
if (isNaN(marks) || marks < 0 || marks > 100) {
    // Agar user number nahi dala ya 0-100 range ke bahar hai
    console.log("❌ Invalid input! Please enter a number between 0 and 100.");
} 
else {
    // Step 4: Check grades using if-else if
    if (marks >= 90) {
        console.log(`Marks: ${marks} → Grade: A+`);
    }
    else if (marks >= 80) {
        console.log(`Marks: ${marks} → Grade: A`);
    }
    else if (marks >= 70) {
        console.log(`Marks: ${marks} → Grade: B+`);
    }
    else if (marks >= 60) {
        console.log(`Marks: ${marks} → Grade: B`);
    }
    else if (marks >= 50) {
        console.log(`Marks: ${marks} → Grade: C`);
    }
    else if (marks >= 35) {
        console.log(`Marks: ${marks} → Grade: D`);
    }
    else {
        // Agar marks 35 se kam hai
        console.log(`Marks: ${marks} → Grade: F (Fail)`);
    }
}
