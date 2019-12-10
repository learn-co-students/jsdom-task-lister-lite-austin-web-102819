document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  // let description= document.getElementById('new-task-description');
  // let newTasks= [];
  const taskList= document.getElementById('tasks');

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    // Get the text input into '#new-task-description'
    // Save that text to local variable
     let description= document.getElementById('new-task-description').value;

     //Create a new li element
     let li = document.createElement('li');

     // Set the li element's HTML equal to description (which is the value entered in the form)
      li.innerHTML= description;
      // Append the child li elements to the taskList
      taskList.appendChild(li);


  });
  
  


});
