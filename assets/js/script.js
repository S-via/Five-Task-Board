// Retrieve tasks and nextId from localStorage

let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId")); // either a number or null


// create an object with key and value for "tasks"
// taskList = ""; {:}
// create an object with key and value for "nextId"
// nextId = ""; {:}

// then taskList.JSON.strigify(localStorage.setItem("tasks"));
// then JSON.strigify(localStorage.setItem("nextId"));


// Todo: create a function to generate a unique task id

function generateTaskId() {

    if (nextId === null) { nextId = 1; }
    else { nextId++; }
    return nextId;
}

// everything that is stores in the next id will be sotrein variable unique ID
// if (nextId)

// uniqueID.JSON.strigify(localStorage.setItem); /// As i like to call it a sanwhich evrything will stigify and stored into Local Storage


console.log(nextId);

// Todo: create a function to create a task card
function createTaskCard(task) {

    const taskCard = $('<div>', task.id);//create a task card container to store
    taskCard.addClass
    taskCard.addAttribute

    const taskHeaderEl = $('<h2>Add Task</h2>');
    taskHeaderEl.addClass


    const taskTitle = $('<h2>Task Title</h2>');
    taskTitle.addClass
    const titleInput = $('<input>');
    titleInput.addClass

    const taskDate = $('<h2>Task Date</h2>');
    taskDate.addClass

    const taskDescription = $('<h2>Task Description</h2>');
    taskDescription.addClass
    const taskInput = $('<input>');
    taskInput.addClass

    const taskButton = $('<button>Add Task</button');
    taskButton.on('click');
    $(".container").append.createTaskCard;
    console.log("taskCard");

    /* createNewElement.task  */ // create a new element to add into task card 


}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
