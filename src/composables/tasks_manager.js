import { ref, readonly } from 'vue';

//----------------------------------------------------------------
// PROPERTIES FOR TASK TRACKER
let tasks = ref( [

    {
        id: 1,
        priority: true,
        text: 'Learn Vue.js',
        sched: 'November 23 @ 8 AM'
    },
    {
        id: 2,
        priority: false,
        text: 'Learn Gitlab',
        sched: 'November 23 @ 8 AM'
    },
    {
        id: 3,
        priority: true,
        text: 'Learn More',
        sched: 'November 23 @ 8 AM'
    }
] );

let isUpdating = ref(false);
let tasksToRead = readonly(tasks);

// ----------------------------------------------------------------
/** Properties Needed for Updating Task
 * 
 * This properties bounded to the input fields in update modal. */
let uTaskID = ref('');
let uTask = ref('');
let uSched = ref('');
let uPriority = ref(false);
//-----------------------END OF PROPERTIES OF TASK TRACKER-----------------------------------------



// ----------------------------------------------------------------
// FUNCTIONS FOR TASK TRACKER
//----------------------------------------------------------------

/**
 * A function that deletes the task.
 * 
 * @param id
 * - a unique id of the task to find in the list. */
let deleteTask = (id) => {

    if (confirm('Are you sure you want to delete this task?')) {
        tasks.value = tasks.value.filter(task => task.id !== id);
    }
}

/**
 * A function that toggles the task if it should be prioritize or not.
 * 
 * @param id
 * - a unique id of the task to find in the list. */
let toggleTask = (id) => {

    // Finds the task
    tasks.value = tasks.value.map(task => {

        if (task.id === id) {
            return {
                ...task,
                priority: !task.priority
            }
        }
        else
            return task;
    })
}

/** 
 * A function that adds a new task to the list.
 * 
 * @param task
 * - an object that has a property of task, sched, and priority. */
let addTask = (task) => {

    if (task.text && task.sched) {

        task.id = Math.random() * 10000000; // random id to be generated.
        tasks.value = [...tasks.value, task];
    }
    else 
        alert('Task and Schedule must be provided. Thank you.');
}

/**
 * A function that opens the update modal.
 * 
 * @param id
 * - a unique id of the task to find in the list. 
 */
let openUpdateModal = (id) => {

    // Sets the update modal to whatever the opposite value of isUpdating property.
    isUpdating.value = !isUpdating.value;

    uTaskID.value = id; // sets the param id to uTaskID property.

    // Finds the task to update
    let taskToUpdate = tasks.value.find(task => task.id === id);

    // We only set the taskToUpdate if it is not n
    if (taskToUpdate !== null && taskToUpdate !== undefined) {
        uTask.value = taskToUpdate.text;
        uSched.value = taskToUpdate.sched;
        uPriority.value = taskToUpdate.priority;
    }
}

/**
 * A function that updates the task. */
let updateTask = () => {

    // Created new object with the updated value for the text, sched, priority.
    let taskToUpdate = {

        id: uTaskID.value,
        text: uTask.value,
        sched: uSched.value,
        priority: uPriority.value
    }

    tasks.value = tasks.value.map(task => {

        // If the task.id === uTaskID then return the task to update.
        if (task.id === uTaskID.value) {
            return taskToUpdate;
        }
        return task;
    })

    // Set to false to close the modal.
    isUpdating.value = false;
}

export { tasksToRead, isUpdating, uTask, uSched, uPriority, deleteTask, toggleTask, addTask, updateTask, openUpdateModal }