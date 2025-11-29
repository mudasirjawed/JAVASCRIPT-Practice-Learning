const weather = prompt("Sunny, Rainy, Cold");

if (!weather) {
    console.log("Input is EMPTY! - Khali");
} else if (weather === "Sunny") {
    console.log("Warms Weather");
} else if (weather === "Rainy") {
    console.log("Humidity wet");
} else if (weather === "Cold") {
    console.log("Cold Weather");
} else {
    console.log("Wrong Input Type Error! \n Valid is Sunny, Rainy, Cold");
}