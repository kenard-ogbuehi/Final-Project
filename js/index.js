//Test Task Manager

class Task extends TaskManager
{constructor(tasks)
  {super(tasks)}
  
}

const taskNew = new Task();


//Variable for form
const form  = document.querySelector('#newTaskForm');


function validFormFieldInput(form) {
  const formData = new FormData(form);

  //name for fields
  const newTaskNameInput = document.querySelector('#newTaskNameInput');
  const name = newTaskNameInput.value;
  const newTaskDescription = document.querySelector('#newTaskDescription');
  const description = newTaskDescription.value;
  const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
  const assignedTo = newTaskAssignedTo.value;
  const newTaskDueDate = document.querySelector('#newTaskDueDate');
  const dueDate = newTaskDueDate.value;
  const newTaskStatus = document.querySelector('#newTaskStatus');
 //const status = newTaskStatus.value;

 //verify inputs
 console.log("name:  "+name, " description: "+ description, " assignedTo: " + assignedTo, " due date: "+ dueDate, " status: "+status);

//Get form data
  for (const task of formData.entries()) {
    taskNew.addTask(name, description, assignedTo, dueDate);
  }

}

//Hide alert
document.getElementById("alert").style.display="none";

//function to check values from form
function hasValue(input) {
   
   if (input.value.trim() === "") {
    return document.getElementById("alert").style.display="block";
  } else {
    document.getElementById("alert").style.display="none"
  } 

  
}

;

//Event for submit
document.getElementById("newTaskForm").addEventListener("submit", function (event) {
  
  
  //Handle invalid data & prevent default
  event.preventDefault();
  let nameValid = hasValue(form.elements['newTaskNameInput']);
  
  //form validation is successful
  validFormFieldInput(event.target);


  //Reset form
form.reset();

});

//call new tasks

console.log(taskNew.tasks)



