// Retrieve tasks and nextId from localStorage


let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {

const uniqueID = nextId ; // everything that is stores in the next id will be sotrein variable unique ID
uniqueID.JSON.strigify(localStorage.setItem); // As i like to call it a sanwhich evrything will stigify and stored into Local Storage
return; // rerurn button in order to stop the function
}
console.log(nextId);

// Todo: create a function to create a task card
function createTaskCard(task) {

createTaskCard = $('div');

/* const taskContainer= $('<div>');// create a task card container to store 
const taskHeaderEl = $('<h>');
const taskInput = $('<p>'); */
/* createNewElement.task  */ // create a new element to add into task card 

    
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
