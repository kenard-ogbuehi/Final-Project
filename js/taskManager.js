//Task Manager Class
class TaskManager {
   
   constructor(tasks = [], currentId) {
        this._tasks = tasks;
        this._currentId = 0;
            
   }
    //Add task to list
    get tasks() {
        return this._tasks;
    }
    /*increaseTask(newTask){
        return this._tasks.push(newTask);
    }
    
    //Increase Id
    currentId () {
        console.log(`TO DD: ${this.tasks.length}`)
    }*/

    //Add Task Method
    addTask(newTaskNameInput, newTaskDescription, newTaskAssignedTo, newTaskDueDate, status) {
        const task = {
            id: `TO DD: ${this.tasks.length+1}`,
            newTaskNameInput: newTaskNameInput,
            newTaskDescription: newTaskDescription,
            newTaskAssignedTo: newTaskAssignedTo,
            newTaskDueDate: newTaskDueDate,
            status: status
        };
            return this._tasks.push(task) 
    }
    
}

//Create Task HTML
  
const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
    `<div class="card-body m-5 card-body m-5 row row-cols-4">
    <h5 class="card-title fs-3 col-8">${name}</h5>
    <a href="#" class="btn btn-success col-4">${status}</a>
    <p class="task-description col-12">${description}</p>
    <p class="ask-assignee col-12">${assignedTo}</p>
    <p class="start-date col-12">Start Date: September 25, 2022</p>
    <p class="due-date col-8">${dueDate}</p>
    <a href="#" class="btn btn-success col-4">Delete</a>
  </div>`
}