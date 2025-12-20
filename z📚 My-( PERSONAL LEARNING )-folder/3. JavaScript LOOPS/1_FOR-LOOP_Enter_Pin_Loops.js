const correctPin = 123;
const attempt = 4;

for (let a = 1; a <= attempt; a++) {
    let user = +prompt(`🔑 Enter Pin. You Have Only ${attempt} Attempts \n\n Your Attempt: ${a}`);
    if (correctPin === user) {
        alert(`Correct Pin ✅`);
        break;
    } else {
        if (user !== attempt) {
            alert(`${user} Wrong Pin ❌ \nEnter Pin Again!`);
        }
    }
}