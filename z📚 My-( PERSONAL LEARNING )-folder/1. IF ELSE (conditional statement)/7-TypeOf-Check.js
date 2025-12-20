let num = Number(prompt("write number"));

if (typeof num !== 'number') {
    console.log(`Wrong! you can only type numbers.`);
}
// ya phir second SAME work method:
if (typeof num !== Number) {
    console.log(`Wrong! you can only type numbers.`);
}
