/* ========================================================
TASK:
1 se 50 tak numbers ka array banana
aur sirf EVEN numbers print karna
======================================================== */

/* ========================================================
STEP 1: Empty Array banana
========================================================

WHY Empty Array?
- Agar hum 1 se 50 tak numbers manually likhein:
  [1,2,3,4,5,...50]
  → code bohat lamba aur ganda ho jata

- Professional way ye hota hai:
  -- ek khali array banao
  -- loop chalao
  -- loop ke andar push() se numbers add karo

Is liye hum pehle empty array bana rahe hain
*/
let numbers = [];

/* ========================================================
STEP 2: for loop (1 se 50 tak numbers add karna)
========================================================

WHY for loop?
- Kyunki hume pehle se pata hai:
  start = 1
  end   = 50
- Fixed range ke liye for loop BEST hota hai
*/
for (let i = 1; i <= 50; i++) {

    /*
    push() method kya karta hai?
    - Array ke END me value add karta hai

    WHY push()?
    - Har loop chalne par ek naya number array me jayega
    - Pehli dafa: 1 add hoga
    - Phir: 2 add hoga
    - Aise karte karte 50 tak add ho jayega
    */
    numbers.push(i);
}

/*
Ab Array me 50 numbers AD ho chuke hai:
numbers = [1, 2, 3, 4, 5, 6, ... , 50]
Ab humare paas total 50 numbers hain
*/

/* ========================================================
STEP 3: Sirf EVEN numbers print karna
========================================================

EVEN number kya hota hai?
- Jo number 2 se completely divide ho jaye
- Jiska remainder (baqi) 0 aaye

Example:
2 % 2 = 0  → EVEN
5 % 2 = 1  → ODD

Ab array ke andar jo 50 numbers hain
unko ONE BY ONE check karna hoga USING LOOP-
- WHY Loop?
- array me jitne bhi numbers hai usko chalanay hai.
- kyuki one by one print kiye ja sake. 1 to 50  */
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 === 0) {
        console.log(numbers[index]);
    }
    /*
        numbers[index] ka matlab:
        - array ka current number jo one by one 1 to 50 number ko chala raha hai.
    */
}

// [COMPLETE CODE]:
let numbers = [];
for (let i = 1; i <= 50; i++) {
    numbers.push(i);
}
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 === 0) {
        console.log(numbers[index]);
    }
}