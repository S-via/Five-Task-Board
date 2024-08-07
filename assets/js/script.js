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

    if (nextId === null) // If nextId is strictly equal to null
        { nextId = 1; } // make nextId equal to 1 
    else { nextId++; } // if not make nextId increment
    return nextId; // then return the value for nextId
}

// everything that is stores in the next id will be sotrein variable unique ID
// if (nextId)

// uniqueID.JSON.strigify(localStorage.setItem); /// As i like to call it a sanwhich evrything will stigify and stored into Local Storage


console.log(nextId);

// Todo: create a function to create a task card
function createTaskCard(task) {
    // create a new elements to add into taskcard 

    const taskCard = $('<div>').addClass('card-body'); /* //create a task card container to store */
   

    const taskHeader = $('<div>').text('Title:'+ task.title); // created taskHeader and have it append to taskCard
    taskCard.append(taskHeader)


    const taskBody =$('<div>'); // created a task body 

    const taskDescription = $('<p>').text('Description' + task.description); //task description 
   

    const taskDate = $('<p>')(task.date); // created a paragraph to add task date  

    const taskDButton = $('<button>').task('Delete Task').on('click',handleDeleteTask);

    taskBody.append(taskDescription,taskDate,taskDButton); // append taskDescription,taskDate,taskDButton to taskBody
    taskCard.append(taskHeader,taskBody); // append elements taskHeader,TaskBody into taskCard

    return taskCard;
    



}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    event.preventDefault();

    const tT = $('#task-title-input').val(); // get value of input task title input
    const tD = $('#datepicker').val(); // get value of date 
    const tN = $('#task-name-input').val(); // get value task name input

    const newTask ={
        id: generateTaskId(),
        title: tT,
        date: tD,
        description: tN,
        
    };
    taskList.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    renderTaskList();

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

// render taskList
renderTaskList();
$('#formButton').on('click', handleAddTask);

// add event listners

// make lane droppable 

// due date field as a datepicker
$('#datepicker').datepicker();
});