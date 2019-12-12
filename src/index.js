document.addEventListener("DOMContentLoaded", () => {
        
    
        let button = document.querySelector("input#b");
        let description = document.querySelector("input#new-task-description");
        let list = document.querySelector("ul#tasks");
        
        
        description.addEventListener("input", (event) => {
          description.textContent = event.target.value;
        });
        button.addEventListener("click", (event) => {
          let new_task = document.createElement('li');
          let xbutton = document.createElement('button')
          xbutton.textContent = "remove";
          new_task.textContent = description.textContent;
          new_task.appendChild(xbutton);
          list.appendChild(new_task);
          xbutton.addEventListener("click", (event) => {
            xbutton.parentNode.parentNode.removeChild(xbutton.parentNode);
            event.preventDefault();
          });
          event.preventDefault();
        });
      });

   


    




