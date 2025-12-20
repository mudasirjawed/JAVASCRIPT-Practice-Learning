//  ?????? ??---
let bus = true;
while (bus) {
  console.log("⏳ Waiting for the bus...");
  // simulate bus arrival after some time
  bus = Math.random() > 0.7;
} // Math.random() javascript built in function 0 to 1 ke beech ka number compare.
console.log("🚌 Bus has arrived!");