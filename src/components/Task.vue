<template>
    <div @dblclick="$emit('toggle-task', task.id)" :class="['task', task.priority ? 'border' : '']">

        <section class="task-info">
            <h3>{{ task.text }}</h3>
            <p>{{ task.sched }}</p>
        </section>

        <section class="buttons">
            <button @click="$emit('delete-task', task.id)" id="btn-update">Update</button>
            <button @click="$emit('delete-task', task.id)" id="btn-delete">Delete</button>
        </section>
    </div>
    
</template>

<script>
    import Button from './Button.vue';

    export default {

        name: 'Task',
        props: {
            task: Object
        },
        components: {
            Button
        },
    }
</script>

<style scoped>
* {
        user-select: none;
    }

    .task {

        background: rgb(238, 238, 238);
        padding: .5rem 1rem .5rem 1.5rem;
        margin: .5rem 0;
        text-align: left;
        border-radius: .5rem;

        /* layout */
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h3 {
        user-select: none;
    }

    .buttons {
        display: flex;
        gap: .5rem;
    }
    #btn-delete {
        padding: .5em 1em;
        font-size: 1rem;
        cursor: pointer;
        outline: none;
        border: none;
        color: white;
        border-radius: .5rem;
        background-color: rgb(194, 28, 28);
    }

    #btn-update {
        padding: .5em 1em;
        font-size: 1rem;
        cursor: pointer;
        outline: none;
        border: none;
        color: white;
        border-radius: .5rem;
        background-color: rgb(23, 23, 138);
    }
    .border {
        border-left: 8px solid green;
    }
</style>