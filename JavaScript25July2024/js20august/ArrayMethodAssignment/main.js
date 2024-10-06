let queue = [];

document.getElementById("enqueue-btn").addEventListener("click", enqueue);
document.getElementById("dequeue-btn").addEventListener("click", dequeue);
document.getElementById("add-front-btn").addEventListener("click", addFront);
document.getElementById("remove-front-btn").addEventListener("click", removeFront);
// document.getElementById("update-Queue-List").addEventListener("click", updateQueueList)

function enqueue() {
    let inputField = document.getElementById("input-field");
    let item = inputField.value.trim();
    if (item !== "") {
        queue.push(item);    //push() method
        inputField.value = "";
        updateQueueList();
    }
}

function dequeue() {
    if (queue.length > 0) {
        queue.pop();    //pop() method
        updateQueueList();
    } else {
        alert("Queue is empty.");
    }
}

function addFront() {
    let inputField = document.getElementById("input-field");
    let item = inputField.value.trim();
    if (item !== "") {
        queue.unshift(item);   //unshift() method
        inputField.value = "";
        updateQueueList();
    }
}

function removeFront() {
    if (queue.length > 0) {
        queue.shift();    //shift() method
        updateQueueList();
    } else {
        alert("Queue is empty.");
    }
}

function updateQueueList() {
    let queueList = document.getElementById("queue-list");
    queueList.innerHTML = "";
    queue.forEach((item) => {
        let listItem = document.createElement("li");
        listItem.textContent = item;
        queueList.appendChild(listItem);
    });
}


// sir ka code   
