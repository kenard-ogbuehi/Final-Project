//Test Task Manager

class Task extends TaskManager
{constructor(tasks)
  {super(tasks)}
  
}

const taskNew = new Task();



//Variable for form
const form  = document.querySelector('#newTaskForm');

// Get data from form
function getData(form) {
  const formData = new FormData(form);

  for (const task of formData.entries()) {
    taskNew.addTask(document.getElementById("newTaskNameInput").value,document.getElementById("newTaskDescription").value,document.getElementById("newTaskAssignedTo").value,document.getElementById("newTaskDueDate").value);
  }
//code to get status place after Due date
 //, document.getElementById("newTaskStatus").value 
}

//function to check values from form
async function hasValue(input, message) {
  if (input.value.trim() === "") {
    return console.log('error');
    
  }
}

//Event for submit
document.getElementById("newTaskForm").addEventListener("submit", function (event) {
  //Handle invalid data & prevent default
  event.preventDefault();
  let nameValid = hasValue(form.elements['newTaskNameInput']);
  //form validation is successful
  getData(event.target);

  //Reset form
form.reset();
});

console.log(taskNew.tasks)