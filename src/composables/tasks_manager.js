import { ref, readonly } from 'vue';

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

let uTaskID = ref('');
let uTask = ref('');
let uSched = ref('');
let uPriority = ref(false);
// ----------------------------------------------------------------

let deleteTask = (id) => {

    if (confirm('Are you sure you want to delete this task?')) {
        tasks.value = tasks.value.filter(task => task.id !== id);
    }
}

let toggleTask = (id) => {

    // alert(typeof tasks.value + " : " + typeof tasks);
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

let addTask = (task) => {

    if (task.text && task.sched) {

        task.id = Math.random() * 10000000;
        tasks.value = [...tasks.value, task];
    }
    else 
        alert('Task and Schedule must be provided. Thank you.');
}

let setUpdateModal = (id) => {
    isUpdating.value = !isUpdating.value;

    uTaskID.value = id;
    let taskToUpdate = tasks.value.find(task => task.id === id);

    if (taskToUpdate !== null && taskToUpdate !== undefined) {
        uTask.value = taskToUpdate.text;
        uSched.value = taskToUpdate.sched;
        uPriority.value = taskToUpdate.priority;
    }
}

let updateTask = () => {

    let taskToUpdate = {

        id: uTaskID.value,
        text: uTask.value,
        sched: uSched.value,
        priority: uPriority.value
    }

    tasks.value = tasks.value.map(task => {

        if (task.id === uTaskID.value) {
            return taskToUpdate;
        }
        return task;
    })

    isUpdating.value = false;
}

export { tasksToRead, deleteTask, toggleTask, addTask, updateTask, isUpdating, setUpdateModal, uTask, uSched, uPriority }