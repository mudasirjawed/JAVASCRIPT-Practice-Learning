/*
════════════════════════════════════════════════════════════════════════════
1️⃣. JAVASCRIPT WINDOW OBJECT — COMPLETE QWER NOTES (BEGINNER TO ADVANCED)
════════════════════════════════════════════════════════════════════════════

WINDOW OBJECT KYA HOTA HAI?
Window object browser ka sab se top level object hota hai.
Jab bhi browser me koi web page load hota hai, browser automatically
ek WINDOW object create karta hai.

Iska matlab:
JavaScript browser ke andar jo bhi karti hai,
wo sab kuch WINDOW ke under hota hai.

WINDOW = BROWSER KI POWER
DOCUMENT = PAGE KI BODY
CONSOLE = DEBUGGING TOOL
LOCATION = URL CONTROL
HISTORY = BACK/FORWARD CONTROL

Agar window na ho:
- alert nahi chal sakta
- console nahi hota
- document access nahi hota
- browser control possible nahi hota

Is liye WINDOW OBJECT seekhna ZARURI hai.
*/

/*
════════════════════════════════════════════════════════════════════════════
2️⃣. WINDOW OBJECT SEEKHNA KYU ZARURI HAI? (WHY IMPORTANT)
════════════════════════════════════════════════════════════════════════════

REAL LIFE SOCH:
Browser = Ghar
Window = Ghar ka malik
Rooms = document, console, location, history

JavaScript jab browser me chalti hai,
wo directly window ke under chalti hai.

Agar aap window ko nahi samajhte:
- DOM samajh nahi aayega
- events confusing lagenge
- browser errors samajh nahi aayenge
- advanced JS impossible ho jayegi

Professional JavaScript developer ke liye
WINDOW OBJECT FOUNDATION hai.
*/

/*
════════════════════════════════════════════════════════════════════════════
3️⃣. WINDOW OBJECT KYA KYA PROVIDE KARTA HAI? (FEATURES)
════════════════════════════════════════════════════════════════════════════

Window object bohot sari cheezen deta hai:

1. alert()
2. prompt()
3. confirm()
4. console
5. document
6. location
7. history
8. innerWidth / innerHeight
9. setTimeout / setInterval
10. localStorage / sessionStorage

Ye sab WINDOW ke under hi hote hain.
*/

/*
════════════════════════════════════════════════════════════════════════════
4️⃣. WINDOW AUTOMATIC KYU HOTA HAI? (IMPLICIT WINDOW)
════════════════════════════════════════════════════════════════════════════

JavaScript me window likhna zaruri nahi hota,
browser khud assume karta hai.

alert() = window.alert()
console.log() = window.console.log()
document = window.document

Best practice:
Samajhne ke liye shuru me window ke sath likho.
Production me short likhna common hai.
*/

window.alert("Window object active hai");

/*
════════════════════════════════════════════════════════════════════════════
5️⃣. CONSOLE OBJECT — DEBUGGING KA KING
════════════════════════════════════════════════════════════════════════════

console object window ka part hai.
Iska kaam developer ko debugging me help karna hai.

console.log → simple output
console.warn → warning
console.error → error
console.table → data table
console.dir → object ko deep level par dekhna
*/

console.log("Simple message");
console.warn("Ye warning hai");
console.error("Ye error hai");

/*
════════════════════════════════════════════════════════════════════════════
6️⃣. CONSOLE.DIR — COMPLETE DEEP EXPLANATION
════════════════════════════════════════════════════════════════════════════

console.dir ka matlab:
Object ke andar kya kya properties aur methods hain,
tree structure me show karna.

console.log object ko string ki tarah dikhata hai.
console.dir object ko REAL OBJECT ki tarah dikhata hai.

DOM seekhne me console.dir sab se powerful tool hai.
*/

console.dir(window);
console.dir(document);

/*
════════════════════════════════════════════════════════════════════════════
7️⃣. DOCUMENT OBJECT — PAGE CONTROL
════════════════════════════════════════════════════════════════════════════

document bhi window ka child hai.
document HTML page ko represent karta hai.

Agar aap button, text, div change karte ho,
to aap document ke through karte ho.
*/

console.log(window.document);

/*
════════════════════════════════════════════════════════════════════════════
8️⃣. LOCATION OBJECT — URL CONTROL
════════════════════════════════════════════════════════════════════════════

location object browser ke URL ko control karta hai.

Real life use:
- page redirect
- reload
- current URL check
*/

console.log(window.location.href);

/*
════════════════════════════════════════════════════════════════════════════
9️⃣. HISTORY OBJECT — BACK & FORWARD
════════════════════════════════════════════════════════════════════════════

history object browser navigation control karta hai.

Real life use:
- back button
- forward button
*/

console.log(window.history.length);

/*
════════════════════════════════════════════════════════════════════════════
🔟. WINDOW SIZE — RESPONSIVE DESIGN
════════════════════════════════════════════════════════════════════════════

innerWidth = browser width
innerHeight = browser height

Real life:
Mobile, tablet, desktop ke liye layout control
*/

console.log(window.innerWidth);
console.log(window.innerHeight);

/*
════════════════════════════════════════════════════════════════════════════
1️⃣1️⃣. TIMERS — setTimeout & setInterval
════════════════════════════════════════════════════════════════════════════

setTimeout:
Ek kaam ko delay se chalana

setInterval:
Bar bar repeat karna

Real life:
- loader
- ads
- auto slider
*/

setTimeout(function () {
  console.log("3 second baad chala");
}, 3000);

setInterval(function () {
  console.log("Har 2 second me repeat");
}, 2000);

/*
════════════════════════════════════════════════════════════════════════════
1️⃣2️⃣. STORAGE — DATA SAVE KARNA
════════════════════════════════════════════════════════════════════════════

localStorage:
Data permanent save

sessionStorage:
Tab close hone tak save

Real life:
- login data
- theme mode
*/

localStorage.setItem("user", "Mudasir");
console.log(localStorage.getItem("user"));

/*
════════════════════════════════════════════════════════════════════════════
1️⃣3️⃣. BEST PRACTICE & FINAL SUMMARY
════════════════════════════════════════════════════════════════════════════

BEST PRACTICE:
- Window ko foundation samajh kar seekho
- console.dir se explore karo
- pehle window samjho phir DOM

FINAL SUMMARY:
Window object JavaScript ka ROOT hai.
Jo developer window ko samajh gaya,
wo browser JavaScript ka MASTER ban gaya.
*/
