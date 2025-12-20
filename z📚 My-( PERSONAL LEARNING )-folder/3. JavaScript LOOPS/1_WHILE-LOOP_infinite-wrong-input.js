// 1. ( WHILE LOOP )---SAME:1---.
let input = prompt("enter name?");
while (input !== "mudasir") {
    input = prompt("❌ wrong input");
}
alert(`✅ Your correct Name: ${input}`);

// 2. ( FOR LOOP )---SAME:1 WORKING---.
let user = prompt("enter name?");
for (user; user !== "mudasir";) {
    user = prompt("❌ wrong input");
}
alert(`✅ Your correct Name: ${user}`);

// 3. ( FOR LOOP )---SAME: WORKING---.
let naam = prompt("ente name?");
for (let i = 1; i > 0; i){
    if (naam === "mudasir1"){alert(`✅ Your Correct Name: ${naam}`); break;}
    else{ naam = prompt("❌ wrong input"); }
}