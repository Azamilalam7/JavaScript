// document.addEventListener('DOMContentLoaded', () => {
const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

    // Add task event
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim(); // Get input value
        console.log(taskText)
        if (taskText !== '') {
            addTaskToList(taskText); // Add task to list
            taskInput.value = ''; // Clear the input field
        }
    });

    // Add task to list
    function addTaskToList(text) {
        const li = document.createElement('li');
        li.textContent = text;

        // Append the new list item to the task list
        taskList.appendChild(li);
    }
// });
