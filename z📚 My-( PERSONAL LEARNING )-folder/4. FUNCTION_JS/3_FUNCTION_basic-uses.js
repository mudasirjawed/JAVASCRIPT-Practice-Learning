//=============================
// 1. [ 🍕 Pizza Order Function ]-
//=============================
function orderPizza(flavor) {
  console.log("Your " + flavor + " pizza is ready!");
}
orderPizza("Pepperoni");
orderPizza("Fajita");
// (ANSWER):- 
// Your Pepperoni pizza is ready!
// Your Fajita pizza is ready!

//=============================
// 2. [ 🎫 Ticket Price Calculator ]-
//=============================

function ticketPrice(age) {
  if (age < 5) return 0;
  else if (age < 18) return 50;
  else return 100;
}
let print = ticketPrice(22);
console.log(print); // (Output):- 100

//=============================
// 3. [ 🎫 Ticket Price Calculator ]- DYNAMICLY
//=============================

let p = Number(prompt("enter age"));
      function ticketPrice(Age) {
        if (Age < 5) return 0;
        else if (Age < 18) return 50;
        else return 100;
      }
      let result = ticketPrice(p);
      console.log(result);

//=============================
// 4. [ 💵 Salary Calculator ]-
//=============================

function calculateSalary(basic, bonus) {
  return basic + bonus;
}
let Print = calculateSalary(30000, 10000);
console.log(Print); // (Output):- 40000

//=============================
// 5. [ 🔵 Built-in Functions (JavaScript already provides them) ]-
//=============================

// 1. Displays a message popup.
 alert("Welcome!"); 

 // 2. Takes user input.
 let age = prompt("Enter age");

 // 3. Prints output to console.
 console.log("Testing...");

 // 4. Type conversion functions.
 Number("123")   // 123
String(50)      // "50"
Boolean(1)      // true

// 5. MATH FUNCTIONS.
Math.random()
Math.floor()
Math.ceil()
Math.max()

// 6. 🟢 Custom Functions.
function sayHello() {
  alert("Hello!");
}