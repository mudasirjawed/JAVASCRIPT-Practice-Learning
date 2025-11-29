// 1.[ Start ]---
let a = 5;
let b = 10;

if ((a + b) > 20) {
    console.log(`✅ Yes ${a + b} is Greater than ${b}`); // False
} else {
    console.log(`❌ No ${a + b} is Not Greater than ${b}`);   // TRUE = Answer is: "❌ No 15 is Not Greater than 10"
}
// Ternary Operator
console.log(a > b ? (b - a) : (a + b)); // 15
// 1.[ END ]---___


// 2.[START]---___
let marks = Number(prompt("enter Marks"));

if (marks === "" || marks === null) {  //type number 0 zero likhne se bhi Empty Nahi Ayega.
    alert(`❌ EMPTY! marks input`);
} else if (isNaN(marks)) {
    alert(`❌ Type Only Numbers`);
} else if (marks > 100) {
    alert(`marks should be 0 to maximum 100 Only`);
}
else {
    marks = Number(marks);   //Ye number dataType sirif ishi block {} me hoga bahar nahi.
    //  NESTED--   Else ke andar bhi nested likh sakte hai.
    if (marks >= 90) {
        alert(`marks: ${marks} Grade: A+ ✅`);
    } else if (marks >= 70) {
        alert(`marks: ${marks} Grade: A ✅`);
    } else if (marks >= 60) {
        alert(`marks: ${marks} Grade: B ✅`);
    } else if (marks >= 30) {
        alert(`marks: ${marks} Grade: C ✅`);
    } else {
        alert(`❌ FAIL`);
    }
}
/* Agar prompt ka data type STRING hota to ( !VALUE ) likh sakte hai 0 zero likhne se bhi empty nahi dikhayga jo Number data type me dikha raha tha empty zero likhne se
if (!marks) 👈 use in STRING ONLY */
// 2.[END!]----____