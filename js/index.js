
/*class Task extends TaskManager

{constructor(tasks)
  {super(tasks)}
  
}

const taskNew = new Task();*/
const taskManager = new taskManager(0);


//Variable for form
const data = document.querySelector('#newTaskForm');


function validFormFieldInput(data) {
  const formData = new FormData(data)

  //name for fields
  const newTaskNameInput = document.querySelector('#newTaskNameInput');

  //const name = newTaskNameInput.value;
  const newTaskDescription = document.querySelector('#newTaskDescription');
  //const description = newTaskDescription.value;
  const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
  //const assignedTo = newTaskAssignedTo.value;
  const newTaskDueDate = document.querySelector('#newTaskDueDate');
  //const dueDate = newTaskDueDate.value;

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

  //let nameValid = hasValue(data.elements['newTaskNameInput']);
  
  //form validation is successful
  //validFormFieldInput(event.target);
  const name = newTaskNameInput.value;
  const description = newTaskDescription.value; 
  const assignedTo = newTaskAssignedTo.value; 
  const dueDate = newTaskDueDate.value; 
  //const status = newTaskStatus.value;
  const status = 'To Do';
  taskManager.addTask(name, description, assignedTo, dueDate, status); 
  taskManager.render();
  //Reset form
//data.reset();


});

//call new tasks

//console.log(taskNew.tasks)

// test taskHTML 
const taskHtml = createTaskHtml(name, description, assignedTo, dueDate, status);

console.log(taskHtml)

