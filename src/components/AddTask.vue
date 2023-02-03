<template>
    <form class="form" @submit="(e) => {

            e.preventDefault();
            addTask({text: task, sched, priority})
        }" action="">
        <section class="form__task-field">
            <label class="form__label" for="input-task">
                Task
            </label>
            <input class="form__input" v-model="task" type="text" name="input-task" id="input-task" placeholder="Enter your task">
        </section>
        
        <section class="form__task-field">
            <label class="form__label" for="input-sched">
                Schedule
            </label>
            <input class="form__input" v-model="sched" type="text" name="input-sched" id="input-sched" placeholder="Enter your task schedule">
        </section>

        <section class="form__priority-section">
            <label class="form__label" for="priority">
                Priority
            </label>
            <input v-model="priority" type="checkbox" name="priority" id="priority">
        </section>

        <input class="form__btn--submit" type="submit" value="Save">
            
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
.form {
        margin-bottom: 1rem;
    }
    .form__task-field {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        margin-bottom: 1rem;
    }

    .form__priority-section {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .form__label {
        font-size: 1.5rem;
        align-self: flex-start;
    }

    .form__input {
        padding: .5rem;
    }

    .form__btn--submit {
        width: 100%;
        border: none;
        background: #020917;
        color: white;
        padding: .5em;
        font-size: 1.1rem;
        cursor: pointer;
        transition: transform 200ms;
    }

    .form__btn--submit:hover {

        transform:translateY(-.2rem); 
    }
</style>