document.addEventListener("DOMContentLoaded", () => {
  // your code here

const post = document.getElementById("create-task-form");
const remove = document.getElementById("tasks");

post.addEventListener("submit", addItem);
remove.addEventListener("click", removeItem);
function addItem() {
  
  event.preventDefault()
  var ul = document.getElementById("tasks");
  var newTask = document.getElementById("new-task-description");
  var li = document.createElement("li");
  
  li.setAttribute('id', newTask.value);
  li.appendChild(document.createTextNode(newTask.value));
  ul.appendChild(li);
  };

function removeItem(){
  alert("This item will be deleted after you click OK!")
  var ul = document.getElementById("tasks");
  var newTask = document.getElementById("new-task-description");
  var thing = document.getElementById(newTask.value);
  ul.removeChild(thing);
};
});