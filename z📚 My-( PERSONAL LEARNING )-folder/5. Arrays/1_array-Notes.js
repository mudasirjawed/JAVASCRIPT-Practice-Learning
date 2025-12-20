//======================
// [ MY NOTES ].
//======================
let fruitses = ["Apple", "Mango", "Banana"];

for (let i = 0; i < fruitses.length; i++) {
	  console.log(fruitses[i]);
}

// 2. [ FOR OF Loop.]-- same answer
for (let fruit of fruits) {
  console.log(fruit);
}

/************************************************************
 JAVASCRIPT ARRAYS — COMPLETE SHORT NOTES (BEST PRACTICES)
*************************************************************

👉 What is an Array?
An array is a data structure used to store MULTIPLE values
inside a SINGLE variable.

Example:
let numbers = [1, 2, 3, 4, 5];

------------------------------------------------------------*/

/*===========================================================
 1️⃣ Creating Arrays
===========================================================*/

//1. RECOMMENDED ✅ Way (Array Literal)
let fruits = ["apple", "banana", "mango"];

//2. Using new Array() (less common ❌)
let colors = new Array("red", "green", "blue");

/*===========================================================
 2️⃣ Accessing Array Elements
===========================================================*/

// Arrays use ZERO-based indexing
// Index starts from 0

console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"

// Last element
console.log(fruits[fruits.length - 1]);

/*===========================================================
 3️⃣ Modifying Array Elements
===========================================================*/

fruits[1] = "orange"; // replace banana with orange
console.log(fruits);

/*===========================================================
 4️⃣ Array Length
===========================================================*/

console.log(fruits.length); // total number of elements

/*===========================================================
 5️⃣ Adding Elements
===========================================================*/

// Add at END
fruits.push("grape");

// Add at START
fruits.unshift("strawberry");

/*===========================================================
 6️⃣ Removing Elements
===========================================================*/

// Remove from END
fruits.pop();

// Remove from START
fruits.shift();

/*===========================================================
 7️⃣ Looping Through Arrays (MOST IMPORTANT)
===========================================================*/

// ✔ for loop (best for beginners)
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// ✔ for...of loop (clean & modern)
for (let fruit of fruits) {
  console.log(fruit);
}

// ✔ while loop
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

/*===========================================================
 8️⃣ Common Array Methods (MUST KNOW)
===========================================================*/

// join() → converts array to string
console.log(fruits.join(", "));

// includes() → check value exists or not
console.log(fruits.includes("apple")); // true

// indexOf() → get index of value
console.log(fruits.indexOf("mango")); // -1 if not found

/*===========================================================
 9️⃣ slice() vs splice() (IMPORTANT DIFFERENCE)
===========================================================*/

// slice(start, end) → does NOT change original array
let newFruits = fruits.slice(0, 2);

// splice(start, deleteCount) → changes original array
fruits.splice(1, 1); // removes 1 item from index 1
// Syntax work: splice ka.
array.splice(start, deleteCount, item1, item2,);
/*===========================================================
 🔟 map(), filter(), reduce() (BASIC INTRO)
===========================================================*/

// map() → transform each item
let numbers = [1, 2, 3];
let doubled = numbers.map(n => n * 2);

// filter() → select items
let evenNumbers = numbers.filter(n => n % 2 === 0);

// reduce() → calculate single value (sum)
let sum = numbers.reduce((total, n) => total + n, 0);

/*===========================================================
 1️⃣1️⃣ Checking if Variable is an Array
===========================================================*/

Array.isArray(fruits); // true

/*===========================================================
 1️⃣2️⃣ Best Practices (INTERVIEW + REAL WORLD)
===========================================================*/

/*
✔ Use meaningful variable names
✔ Prefer const for arrays (unless reassignment needed)
✔ Use for...of for reading arrays
✔ Avoid unnecessary loops
✔ Keep arrays small & focused
✔ Use array methods instead of manual logic
*/

/*===========================================================
 1️⃣3️⃣ Real-Life Examples
===========================================================*/

// Shopping cart
let cart = ["Shoes", "Watch", "Phone"];

// User list
let users = ["Ali", "Ahmed", "Sara"];

// Scores
let scores = [80, 90, 75, 60];

/*===========================================================
 1️⃣4️⃣ Common Mistakes to Avoid
===========================================================*/

/*
❌ Accessing invalid index → array[10]
❌ Forgetting array starts at index 0
❌ Using for...in instead of for...of
❌ Mutating array accidentally with splice()
*/

/************************************************************
 END OF JAVASCRIPT ARRAY NOTES
************************************************************/
