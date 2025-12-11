// [ CONTINUE ]---

for (let day = 1; day <= 5; day++) {
    if (day === 3) { // ye conditon sab phele upar hi lagegi nechay nahi.kyuki nechay continue; hai
        console.log("🎉 Holiday! Skipping attendance...");
        continue;
    }
    console.log(`✅ Taking attendance for day ${day}`);
}

// [ OUTPUT 👇 ].
// ✅ Taking attendance for day 1
// ✅ Taking attendance for day 2
// 🎉 Holiday! Skipping attendance...
// ✅ Taking attendance for day 4
// ✅ Taking attendance for day 5   