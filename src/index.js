let lastTask;
let desc;
let tasks;
let priority;
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  let submit = document.getElementById("submit");
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    priority = document.getElementById("priority");
    desc = document.getElementById("new-task-description");
    tasks = document.getElementById("tasks");
    alert(priority.value)
    if (priority.value === 'High') {
    lastTask = `<div id=${desc.value} style= 'color:red'>${desc.value}</div>`;
    }
    else if (priority.value === 'Medium') {
      lastTask = `<div id=${desc.value} style= 'color:yellow'>${desc.value}</div>`;
    }
    else {
      lastTask = `<div id=${desc.value} style= 'color:green'>${desc.value}</div>`;
    };
    
    tasks.innerHTML = tasks.innerHTML + lastTask;
    
    
    
  });
  let dele = document.getElementById("delete");
  dele.addEventListener("click", (event) => {
    var element = document.getElementById(desc.value);
    alert(element);
    element.parentNode.removeChild(element);
  });


});
