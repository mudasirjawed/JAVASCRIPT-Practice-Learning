// 1.[ THIS MY CODE. SAME WAY: 1 ]
let Price = 1200;
let FinalPrice = Price > 1000 ? Price * (10/100) : Price;
let fin = Price - FinalPrice;
console.log(FinalPrice, fin); // 1080 (10% discount)

//---(SAME WAY: 2)----
let price = 1200;
let finalPrice = price > 1000 ? price * 0.9 : price;
console.log(finalPrice); // 1080 (10% discount)
// ---(END MY CODE)---

// =======================================================
// 1️⃣ Simple Way: Using Ternary Operator
// =======================================================

// Original price
let price1 = 1200;

// Logic:
// Agar price > 1000 → 10% discount apply karenge
// Ternary operator: condition ? valueIfTrue : valueIfFalse
let finalPrice1 = price1 > 1000 ? price1 * 0.9 : price1; 
// price1 * 0.9 → 90% of price → matlab 10% discount 
// Matlab: sirf un cheezon par discount milega jinki price 1000 se zyada ho. Minimum 101 price.
// else price1 → discount nahi lagta

console.log("1️⃣ Simple Ternary Discount Method");
console.log("Original Price:", price1);
console.log("Final Price after Discount:", finalPrice1);
console.log("-------------------------------------------------");


// =======================================================
// 2️⃣ Using Discount Percent Variable (Dynamic Way)
// =======================================================

let price2 = 1200;
let discountPercent2 = 10; // 10% discount

// Step 1: Calculate discount amount
let discountAmount2 = price2 * (discountPercent2 / 100);
// price2 * (discountPercent / 100) → convert % to decimal and calculate

// Step 2: Calculate final price
let finalPrice2 = price2 - discountAmount2;

console.log("2️⃣ Dynamic Discount Using Percent Variable");
console.log("Original Price:", price2);
console.log("Discount Percentage:", discountPercent2 + "%");
console.log("Discount Amount:", discountAmount2);
console.log("Final Price after Discount:", finalPrice2);
console.log("-------------------------------------------------");


// =======================================================
// 3️⃣ Using If-Else Statement (Traditional Method)
// =======================================================

let price3 = 1200;
let finalPrice3;
let discountPercent3 = 10;

// Check if price > 1000 → discount apply
if (price3 > 1000) {
    // Calculate discount
    let discountAmount3 = price3 * (discountPercent3 / 100);
    // Subtract discount from price
    finalPrice3 = price3 - discountAmount3;

    console.log("3️⃣ If-Else Method");
    console.log("Original Price:", price3);
    console.log("Discount Percentage:", discountPercent3 + "%");
    console.log("Discount Amount:", discountAmount3);
    console.log("Final Price after Discount:", finalPrice3);
} else {
    // Price <= 1000 → no discount
    finalPrice3 = price3;
    console.log("3️⃣ If-Else Method");
    console.log("Original Price:", price3);
    console.log("Discount not applied, final price:", finalPrice3);
}

console.log("-------------------------------------------------");


// =======================================================
// 4️⃣ Shortcut Professional Method (Single Line)
// =======================================================

let price4 = 1200;
let discountPercent4 = 10;

// final price directly calculate: price * (1 - discountPercent/100)
let finalPrice4 = price4 * (1 - discountPercent4 / 100);

console.log("4️⃣ Shortcut Single Line Professional Method");
console.log("Original Price:", price4);
console.log("Discount Percentage:", discountPercent4 + "%");
console.log("Final Price after Discount:", finalPrice4);
console.log("=================================================");
