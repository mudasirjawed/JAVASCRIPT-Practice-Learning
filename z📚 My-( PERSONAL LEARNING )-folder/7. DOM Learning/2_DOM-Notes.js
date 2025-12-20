/* ========================================================
1. DOM Kya Hai?
========================================================
// DOM = Document Object Model
// JS + HTML ka bridge
// WHY: JS se page ke elements access / modify karte hain
// TOTAL: 1 Concept
======================================================== */

/* ========================================================
2. DOM Structure (Tree)
========================================================
// HTML root -> body -> elements
// Node types:
// 1. Element Node (tag) 
// 2. Text Node (element ka text)
// 3. Attribute Node (id, class, src)
// TOTAL: 3 Node types
======================================================== */

/* ========================================================
3. DOM Selectors – TOTAL 5
======================================================== */

// 3.1 getElementById() → 1 element, unique
let elemById = document.getElementById("myDiv"); 

// 3.2 getElementsByClassName() → multiple elements
let elemsByClass = document.getElementsByClassName("box"); 

// 3.3 getElementsByTagName() → all elements of same tag
let elemsByTag = document.getElementsByTagName("p"); 

// 3.4 querySelector() → first matching element, CSS style
let firstBtn = document.querySelector("button"); 

// 3.5 querySelectorAll() → all matching elements, NodeList
let allBtns = document.querySelectorAll("button"); 

// TOTAL SELECTORS: 5
// WHY: Elements select karne ke liye, har situation ke liye alag selector

/* ========================================================
4. DOM Change Methods – TOTAL 3
======================================================== */

// 4.1 textContent → element ka text change
let para = document.querySelector("p"); 
para.textContent = "Naya Text"; 

// 4.2 style → CSS properties change
para.style.color = "blue"; 
para.style.fontSize = "1.8rem"; 

// 4.3 attributes → element properties change (src, alt, href)
let img = document.querySelector("img"); 
img.src = "new-image.jpg"; 
img.alt = "Image Description"; 

// TOTAL Change Methods: 3
// WHY: Dynamic updates, visual feedback, content modification

/* ========================================================
5. DOM Events – TOTAL 1 core method
======================================================== */
let btn = document.querySelector("button"); 
btn.addEventListener("click", function() {
    console.log("Button clicked!");
});
// TOTAL Event Method: 1 (addEventListener)
// WHY: User interaction detect aur respond karne ke liye
// Event Types: click, input, hover, focus, submit, keydown etc

/* ========================================================
6. Create & Remove Elements – TOTAL 2 methods
======================================================== */

// 6.1 createElement() → naya element create
let newDiv = document.createElement("div"); 
newDiv.textContent = "Naya Div"; 
document.body.appendChild(newDiv); // appendChild() → insert

// 6.2 remove() → element remove
let removeDiv = document.querySelector("div"); 
removeDiv.remove(); 

// TOTAL: 2 methods
// WHY: Runtime me element add/remove karne ke liye

/* ========================================================
7. Practical Example – Bulb ON/OFF
======================================================== */
let bulb = document.querySelector(".bulb"); 
let toggleBtn = document.querySelector("button"); 
let state = 0; // 0=OFF, 1=ON

toggleBtn.addEventListener("click", function() {
    if(state === 0){
        bulb.style.backgroundColor = "rgb(255,255,120)"; 
        bulb.style.boxShadow = "0 0 80px 30px rgba(255,255,120,0.8)"; 
        toggleBtn.innerHTML = "ON"; 
        toggleBtn.style.backgroundColor = "green"; 
        toggleBtn.style.color = "white"; 
        state = 1;
    } else {
        bulb.style.backgroundColor = "#111"; 
        bulb.style.boxShadow = "inset 0 0 40px #000"; 
        toggleBtn.innerHTML = "OFF"; 
        toggleBtn.style.backgroundColor = "white"; 
        toggleBtn.style.color = "black"; 
        state = 0;
    }
});
// WHY: Practical demo for JS + DOM + Events + Style

/* ========================================================
8. Summary with TOTAL Count per Topic
========================================================
// 1. DOM Concept → 1
// 2. DOM Node Types → 3
// 3. DOM Selectors → 5
// 4. DOM Change Methods → 3
// 5. DOM Events → 1 core method, multiple types
// 6. Create/Remove Elements → 2
// 7. Practical Example → 1 project

// GRAND TOTAL METHODS / CONCEPTS: 16 (core ones)
// WHY: Ye DOM ka complete structure aur usage cover karta hai
// Ab ek baar read karke aapko DOM fully samajh aa jaayega
========================================================
//   ═══(END!)════


/*   ════(START)════
========================================================
DOM SELECTORS – 2025 BEST PRACTICES
======================================================== 

==========================================================
1. Recommended Selectors (Best Practice 2025)
========================================================
 ⚡ querySelector() & querySelectorAll() recommended
 WHY: CSS selector style use karte ho → flexible
 - Single element ya multiple element dono me kaam karta
 - Modern frameworks (React, Vue, Angular) compatible
 Example:
let firstButton = document.querySelector("button"); // first button
let allCards = document.querySelectorAll(".card");   // sab cards
 Advantages:
 - Flexibility → CSS selectors ka power
 - Future-proof → modern browsers fully supported
 - Works with unique elements (ID) aur group elements (class)
 - Avoids need for multiple older methods
======================================================== 

========================================================
2. Use With Caution / Avoid
========================================================
 2.1 getElementsByTagName()
 - Purana method, returns HTMLCollection
 - Live collection → dynamically update hota
 - Avoid unless specific tag selection required

 2.2 getElementsByClassName()
 - Still valid, fast
// - HTMLCollection (live), querySelectorAll ke comparison me flexible nahi

 2.3 getElementById()
 - Still valid for unique element → fast
 - Modern projects me CSS-like flexibility chahiye → querySelector better
========================================================

==========================================================
3. Summary Table – Modern Recommendation (2025)
========================================================
| Selector             | Recommended? | Notes |
|---------------------|--------------|-------|
| querySelector        | ✅ Best      | Single element, CSS-like flexibility |
| querySelectorAll     | ✅ Best      | Multiple elements, CSS selectors |
| getElementById       | ✅ Okay      | Fast, unique element only |
| getElementsByClassName | ⚠️ Caution | Works, less flexible |
| getElementsByTagName | ⚠️ Avoid mostly | Live collection, old style |
========================================================

==========================================================
4. Practical Advice – 2025
========================================================
 - Mostly use: querySelector & querySelectorAll → modern, flexible, future-proof
 - Only for unique fast element: getElementById()
 - Avoid: getElementsByTagName() unless special case
 - Class selector (getElementsByClassName) optional, but querySelectorAll better
======================================================== */
