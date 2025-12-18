let tasks = [];

// 1. ( ADDING TASK )=======
function addtask(adding) {
    tasks.push(adding);
    console.log(`✔ Task Added:`, tasks);
}

// 2. ( REMOVING TASK )=======
function removetask(removing) {
    let find = tasks.indexOf(removing);
    if (find !== -1) {
        tasks.splice(find, 1);
        console.log(`✔ Task Removed`);
    } else {
        console.log(`Task not found!`);
    }
}

// 3. ( LINE-BY-LINE SHOW ALL TASKS )======
function showAll() {
    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
    }
}

let input1 = prompt("enter task 1 to add");
let input2 = prompt("enter task 2 to add");
let input3 = prompt("enter task 3 to add");

// 4. ( ADDING FUNCTION )======
addtask(input1);
addtask(input2);
addtask(input3);

let input4 = prompt(`Which task do you want to remove?\n ${tasks}`);

// 5. ( REMOVING FUNCTION )======
if (input4 !== null && input4 !== "") {
    removetask(input4);
}

// 6. ( PRINT ALL ADDING DATA )======
showAll();