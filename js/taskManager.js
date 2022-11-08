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


  
