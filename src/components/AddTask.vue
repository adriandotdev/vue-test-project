<template>
    <form @submit="(e) => {

            e.preventDefault();
            addTask({text: task, sched, priority})
        }" action="">
        <section class="task-field">
            <label for="input-task">
                Task
            </label>
            <input v-model="task" type="text" name="input-task" id="input-task" placeholder="Enter your task">
        </section>
        
        <section class="task-field">
            <label for="input-sched">
                Schedule
            </label>
            <input v-model="sched" type="text" name="input-sched" id="input-sched" placeholder="Enter your task schedule">
        </section>

        <section class="priority-section">
            <label for="priority">
                Priority
            </label>
            <input v-model="priority" type="checkbox" name="priority" id="priority">
        </section>

        <input type="submit" value="Save">
            
    </form>

</template>

<script>
    
    import { ref, watch } from 'vue';
    import { addTask } from '../composables/tasks_manager';

    export default {
        name: 'AddTask',

        setup(_props, { emit }) {

            let task = ref('');
            let sched = ref('');
            let priority = ref(false);

            watch(task, (newValue, oldValue) => {
                console.log(newValue + " : " + oldValue);
            })

            return {
                task,
                sched,
                priority,
                addTask
            }
        }
    }
</script>

<style scoped>

    form {
        margin-bottom: 1rem;
    }
    .task-field {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        margin-bottom: 1rem;
    }

    .priority-section {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
    }



    label {
        font-size: 1.5rem;
        align-self: flex-start;
    }

    input {

        padding: .5rem;
    }

    input[type="submit"] {
        width: 100%;
        border: none;
        background: black;
        color: white;
        padding: .5em;
        font-size: 1.1rem;
        cursor: pointer;
        transition: transform 200ms;
    }

    input[type="submit"]:hover {

        transform:translateY(-.2rem); 
    }
</style>