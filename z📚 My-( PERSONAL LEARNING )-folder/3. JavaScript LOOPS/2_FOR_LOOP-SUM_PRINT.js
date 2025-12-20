//  [ THIS MY CODE]------
let input = +prompt(`enter only number`);
for (input; input <= 40; input += 2) {
    document.write(input % 2 === 0 ? `<h4>Even No: ${input} </h4>` : `<h4> Odd No: ${input} </h4>`);
    console.log(input % 2 === 0 ? `Even No: ${input}` : `Odd No: ${input}`);
}
//--[ 2 ]-----
let sum1 = 0;
for (let a = 1; a <= 5; a++){
sum1 = sum1 + a;
console.log(sum1);
}
//--[ 3 ]-----
let Input = Number(prompt(`Enter Number N (Sum From 1 to N):`));
let Store = 0;
let S = 1;

for (S; S <= Input; S++){
    Store = Store + S;
}
document.write(`<h1>Sum Print 1 to ${isNaN(Input) ? `?` : Input} is: ${Store}</h1>`);

// ════════════════════════════════════════════════════════════════
//  🧠 PROGRAM SUMMARY
//  "User se ek number N lena hai, aur 1 se N tak numbers ka sum nikaalna hai."
//  Example: N = 5  →  1+2+3+4+5 = 15
// ════════════════════════════════════════════════════════════════



// ════════════════════════════════════════════════════════════════
//  ❌ MISTAKE #1 → const P = 1;  (const CHANGE nahi hota)
// ----------------------------------------------------------------
//  Roman Urdu Note:
//  const ka matlab hota hai "value kabhi change nahi hogi".
//  Lekin loop me P++ hota hai, yani P ki value har dafa badhegi.
//  Isliye const use karna yahan 100% galat hai.
//
//  ✔ Solution: 'let' use karo taake value increment ho sake.
// ════════════════════════════════════════════════════════════════

let P = 1;  // ✔ Ab P loop me increment ho sakta hai


// ════════════════════════════════════════════════════════════════
//  ❌ MISTAKE #2 → Output me galat range print ho rahi thi
// ----------------------------------------------------------------
//  Aap yeh likh rahe the:
//
/*
   document.write(`Sum of ${P} to ${n} is: ${store}`);
*/
//
//  Roman Urdu Problem:
//  Loop ke khatam hone ke baad P ki value n+1 hoti hai.
//  Example: N = 5 → loop ke end me P = 6
//  To output kuch aisa ban jata hai:
//  
//  "Sum of 6 to 5 is: 15"  ➤ jo bilkul galat lag raha tha.
//
//  ✔ Correct: Sum hamesha 1 se n tak hi hota hai.
// ════════════════════════════════════════════════════════════════



// ════════════════════════════════════════════════════════════════
//  ✔ FINAL CORRECT PROGRAM
// ════════════════════════════════════════════════════════════════

let n = Number(prompt("Enter Number N (Sum From 1 to N):")); 
// Roman Urdu: User se ek number lena hai. Is number tak hum sum nikaalenge.

let store = 0;  
// Roman Urdu: Yahan total sum save hoga. Start me 0 hota hai kyunki abhi tak kuch add nahi hua.


for (P; P <= n; P++) { 
    // Roman Urdu: yeh loop 1 se n tak chalega.
    // P ki value har dafa +1 hogi (1,2,3,4,...n)

    store = store + P;
    // Roman Urdu:
    // Step-by-step:
    // P = 1  → store = 0 + 1 = 1
    // P = 2  → store = 1 + 2 = 3
    // P = 3  → store = 3 + 3 = 6
    // P = 4  → store = 6 + 4 = 10
    // P = 5  → store = 10 + 5 = 15
}


// ════════════════════════════════════════════════════════════════
//  ✔ CORRECT OUTPUT
// ════════════════════════════════════════════════════════════════

document.write(`<h1>Sum of 1 to ${n} is: ${store}</h1>`);
// Roman Urdu:
// Ab P ki value n+1 hogi isliye output me P nahi likhna.
// Hamesha "1 to n" print karna hai kyunki sum 1 se start hua tha.


// ════════════════════════════════════════════════════════════════
//  🧠 FUTURE NOTES — IMPORTANT YAAD RAKHNE WAALI BAATEIN
// ════════════════════════════════════════════════════════════════
//
//  ✔ 1. const kabhi use mat karo jab variable ko change/increment karna ho.
//     (Loop counters hamesha let hote hain)
//
//  ✔ 2. Loop end hone ke baad counter ki value "last number + 1" hoti hai.
//     (Isliye P ko output me mat likho)
//
//  ✔ 3. Sum hamesha "store = store + value" se hota hai.
//     (Aur short form: store += value)
//
//  ✔ 4. Initialization hamesha loop ke bahar hoti hai.
//     Example: let store = 0; let P = 1;
//
//  ✔ 5. Output result hamesha clarity se print karo.
//     Example: "Sum of 1 to N is: RESULT"
//
//  ✔ 6. Code ko clean and readable rakho — future me samajhna asaan hota hai.
// ════════════════════════════════════════════════════════════════
//---[ END! MY CODE ]====[ END MY CODE]------.

// ════════════════════════════════════════════════════════════════
// 1️⃣ "SUM TOTAL" PRINT USING FOR LOOP
// ════════════════════════════════════════════════════════════════

let sum = 0;
for (let a = 1; a <= 5; a++) {
    sum += a;
    /* sum = sum + a;  →  0 + 1  →  1 (calculate kiya) yani let sum = 1; store hogaya hai ab agli baar loop me a++ karenge 2 hoga ab 1 = 2 = 3 yani sum ki value 1 aur a ki value 2.*/
    console.log(sum);
}
//  sum = sum + i;
//  └┬┘   └┬┘  └┬┘
//   │     │    │
//   │     │    └── Yeh "i" har baar change hota hai. Loop me. 5-MARTABA (1,2,3,4,5)
//   │     └─────── "i" loop ka number jo ayega sum me +plus calculate hokar save hogi.
//   └────────────── sum ke andar (New Change value) add hogi yani jo i ka purana number tha usko new loop wala number add kardega jaise jaise sum ki value change hogi sum = 1 + 2; answer "3" add hogaya sum me let sum =3; ab again i loop wlaa ++ hoga 3 hogi phir sum = 3 + 3 answer 6 add hoga sum me jaise sum = 3 + 3 final answer is "6";

//  sum = sum + a;
//  └┬┘   └┬┘  └┬┘
//   │     │    │
//   │     │    └── "a" matlab har dafa change (1, 2, 3, 4, 5)
//   │     └─────── Right side wala "sum" = PURANI value (jo pehle se saved hai)
//   └────────────── Left side wala "sum" = NAYI value (jo ab save hogi)

// ════════════════════════════════════════════════════════════════
// 2️⃣ HOW SUM ARE WORK?
// ════════════════════════════════════════════════════════════════
let Sum = 0;  // Shuru me 0 rupees

Sum = Sum + 1;  // 0 + 1 = "1" --[NEW SUM VALUE = 1]--

Sum = Sum + 2;  // 1 + 2 = 3  --[SUM VALUE IS "3"]--

Sum = Sum + 3;  // 3 + 3 = 6  --[NEW SUM VALUE = 6]--

Sum = Sum + 4;  // 6 + 4 = 10 --[NEW SUM VALUE = 10]--

Sum = Sum + 5;  // 10 + 5 = 15 --[NEW SUM VALUE = 15]--

console.log("Total savings:", Sum);  // Answer = "15"