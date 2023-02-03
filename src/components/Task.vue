<template>
    <div @dblclick="toggleTask(task.id)" :class="['task', task.priority ? 'border' : '']">

        <section class="task--info">
            <h3 class="task--info__title">{{ task.text }}</h3>
            <p class="task--info__schedule">{{ task.sched }}</p>
        </section>

        <section class="buttons">
            <button class="buttons__btn--update" @click="openUpdateModal(task.id)" id="buttons__btn--update">Update</button>
            <button class="buttons__btn--delete" @click="openDeleteModal(task.id)" id="buttons__btn--delete">Delete</button>
        </section>
    </div>
    
</template>

<script>

    import Button from './Button.vue';
    import { updateTask, openUpdateModal, openDeleteModal, deleteTask, toggleTask } from '@/composables/tasks_manager';

    export default {

        name: 'Task',
        props: {
            task: Object
        },
        setup() {

            return {
                updateTask,
                deleteTask,
                toggleTask,
                openDeleteModal,
                openUpdateModal
            }
        },
        components: {
            Button
        },
    }
</script>

<style>
:root {
        --btn-update-primary: #062459;
        --btn-update-border: #0d1e3b;
        --btn-update-hover: #0d1e3b;

        --btn-delete-primary: #CB3436;
        --btn-delete-border: #701a1b;
        --btn-delete-hover: #701a1b;
        /* border: 1px solid #701a1b; */
    }

    * {
        user-select: none;
    }

    .task {

        background: rgb(238, 238, 238);
        padding: .5rem 1rem 1rem 1.5rem;
        margin: .5rem 0;
        text-align: left;
        border-radius: .5rem;

        /* layout */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .task--info__title {
        user-select: none;
        word-break: break-all;
        font-size: 1.5rem;
        margin: 1rem 0 0 0;
        font-family: Poppins, sans-serif;
        color: var(--btn-update-primary);
    }

    .task--info__schedule {
        font-style: italic;
        font-weight: 600;
        word-break: break-all;
        color: var(--btn-update-hover);
    }

    /* The container of task buttons */
    .buttons {
        display: flex;
        gap: .5rem;
        align-self: flex-end;
    }

    /* Delete Button */
    #buttons__btn--delete {
        padding: .5em 1em;
        font-size: 1rem;
        cursor: pointer;
        outline: none;
        border: none;
        color: white;
        border-radius: .5rem;
        background-color: var(--btn-delete-primary);
        border: 1px solid var(--btn-delete-border);
        transition: background 300ms;
    }

    /* Update Button */
    #buttons__btn--update {
        padding: .5em 1em;
        font-size: 1rem;
        cursor: pointer;
        outline: none;
        border: none;
        color: white;
        border-radius: .5rem;
        background-color: var(--btn-update-primary);
        border: 1px solid var(--btn-update-border);
        transition: background 300ms;
    }

    #buttons__btn--delete:hover {
        background-color: var(--btn-delete-hover);
    }   

    #buttons__btn--update:hover {
        background-color: var(--btn-update-hover);
    }
    .border {
        border-left: 8px solid green;
    }
</style>