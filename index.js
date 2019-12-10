document.addEventListener("DOMContentLoaded", () => {
    // your code here
const post = document.getElementById("create-task-form");

post.addEventListener("submit", addItem);

function addItem() {
    const ul = document.findByElementId("tasks");
    let newTask = document.getElementById("new-task-description");
    let li = document.createElement("li");
    
    li.setAttribute('id', newTask.value);
    li.appendChild(document.createTextNode(newTask.value));
    ul.appendChild(li);
    };

});