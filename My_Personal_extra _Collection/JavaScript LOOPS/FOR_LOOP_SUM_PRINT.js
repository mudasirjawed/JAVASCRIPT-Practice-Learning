//  [ THIS MY CODE]-----
let input = +prompt(`enter only number`);
for (input; input <= 40; input += 2) {
    document.write(input % 2 === 0 ? `<h4>Even No: ${input} </h4>` : `<h4> Odd No: ${input} </h4>`);
    console.log(input % 2 === 0 ? `Even No: ${input}` : `Odd No: ${input}`);
}
// [ 2 ]---
let sum1 = 0;
for (let a = 1; a <= 5; a++){
sum1 = sum1 + a;
console.log(sum1);
}

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