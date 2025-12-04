const balance = 5000;
const correctPin = 122;

let choice;

let enterPin = prompt("Enter Your Pin?");
enterPin = Number(enterPin);

// [ START ] --IF ELSE STATEMENT
if (isNaN(enterPin)) {
  alert(`You can Only Type Numbers!`);
} else if (!enterPin) {
  alert(`Your Pin is EMPTY! ❌`);
} else if (correctPin !== enterPin) {
  alert(`${enterPin} is Invalid Pin ❌`);
} else {
  choice = Number(
    prompt(
      "Welcome to JS ATM 💳\n\n" +
        "1️⃣ Check Balance\n" +
        "2️⃣ Withdraw\n" +
        "3️⃣ Deposit\n" +
        "4️⃣ Exit\n\n" +
        "Enter your choice (1-4):"
    )
  );

  // [ START ] --Switch Statement inside else.
  switch (choice) {
    case 1:
      alert(`Your Bank Balance: $${balance}`);
      document.write(`<h1>Your Bank Balance: <u>$${balance}</u></h1>`);
      break;

    //--( WITH_DRAW CASE 2.)----
    case 2:
      choice = Number(prompt("How Much Amount to WithDraw?"));
      if (isNaN(choice)) {
        alert(`Enter Only Number! ❌`);
      } else if (!choice) {
        alert(`Empty WithDraw Input field ❌!`);
      } else if (balance >= choice) {
        alert(
          `WithDraw Successful ✅ \n WithDraw Amount: ${choice} \n Now Your Balance is: $${
            balance - choice
          }`
        );
        document.write(
          `<h1>WithDraw Successful ✅ <br> WithDraw Amount: ${choice} <br> Now Your Balance is: <u>$${
            balance - choice
          }</u></h1>`
        );
      } else {
        alert(`❌ Insufficient funds!`);
      }
      break;

    //--( DEPOSIT CASE 3)----
    case 3:
      choice = Number(prompt("How Much Amount to Deposit?"));
      if (isNaN(choice)) {
        alert(`Enter Only Number ❌`);
      } else if (!choice) {
        alert(`Deposit Input is Empty! ❌`);
      } else {
        alert(
          `Deposit Successful ✅ \n Deposit Amount: ${choice} \n New Balance is: $${
            choice + balance
          }`
        );
        document.write(
          `<h1>Deposit Successful ✅ <br>Deposit Amount: ${choice} <br> New Balance is: <u>$${
            choice + balance
          }</u></h1>`
        );
      }
      break;

    //--( EXIST CASE: 4 )----
    case 4:
      alert("Thank you for using the ATM! 🏧");
      document.write("<h1> Thank you for using the ATM! 🏧 </h1>");
      break;
    default:
      alert("❌ Invalid Option Enter!");
      break;
  }
  // [ SWITCH END!]
}
// [ ELSE END ]
