import Task from "./entity/Task.js";
import { checkLength } from "./util/validate.js";

const tasks = [];

/**
 * all html elements
 */
const inputTask = document.getElementById('input-task');
const tasksDiv = document.getElementById('tasks');


/**
 * The function to add a task to the list
 * 
 */
const handleAddTask = () => {

    if (!checkLength(inputTask.value)) {
        inputTask.value = '';
        return;
    };

    if (inputTask.value) {
        const taskValue = inputTask.value;
        const task = new Task(taskValue);
        tasks.push(task);
        inputTask.value = '';
        displayTask();
    }
}

/**
 * The function to set status of a task based on the task id
 * default value of task status is false (not done)
 * 
 * @param {*} id value of the task id
 */
const setStatus = (id) => {
    tasks.map((task) => {
        if (task.id === id) {
            task.toggleComplete();
        }
    });
    displayTask();
}

/**
 * The function to delete a task based on the task id
 * 
 * @param {*} id value of the task id
 */
const deleteTask = (id) => {
    tasks.map((task, index) => {
        if (task.id === id) {
            tasks.splice(index, 1);
        }
    });
    displayTask();
}

/**
 * The function to edit a task based on the task id
 * 
 * @param {*} id value of the task id
 */
const handleEdit = (id) => {

    //get input fields of task which want to be updated
    const input = document.querySelector(`input[data-id="${id}"]`);
    if (input) {
        if (!checkLength(input.value)) {
            return;
        };

        tasks.map((task) => {
            if (task.id === id) {
                task.setLabel(input.value);
            }
        });
        setEdit(id);
    } else {
        alert('Please input something !');
    }
}

/**
 * The function to set a task edit status based on the task id
 * default value of task edit status is false
 * 
 * @param {*} id 
 */
const setEdit = (id) => {
    tasks.map((task) => {
        if (task.id === id) {
            task.setEdit();
        }
    });
    displayTask();
}

/**
 * The function to binding the task data to the page
 */
const displayTask = () => {
    let result = '';
    tasks.map((task) => {
        result += task.getTaskHtml();
    });
    tasksDiv.innerHTML = result;
}


/**
 * set function to global
 */
window.handleAddTask = handleAddTask;
window.setStatus = setStatus;
window.deleteTask = deleteTask;
window.setEdit = setEdit;
window.handleEdit = handleEdit;