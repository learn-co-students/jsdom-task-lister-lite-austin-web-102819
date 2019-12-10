document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const post = document.getElementById("create-task-form")
  const remove = document.getElementById("tasks")

  post.addEventListener("submit", addItem);
  remove.addEventListener("click", removeItem);

    function addItem() {
    event.preventDefault()
    var task = document.getElementById("tasks");
    var newTask = document.getElementById("new-task-description");
    var li = document.createElement("li");
    li.setAttribute('id',newTask.value);
    li.appendChild(document.createTextNode(newTask.value));
    task.appendChild(li);
  };

    function removeItem() {
      alert("This will be deleted forever!")
      var task = document.getElementById("tasks")
      var newTask = document.getElementById("new-task-description");
      var item = document.getElementById(newTask.value)
      task.removeChild(item);
    };
});