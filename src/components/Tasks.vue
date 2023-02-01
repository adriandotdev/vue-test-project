<template>
    <div id="tasks" :key="task.id" v-for="task in tasks">
        <Task :task="task"/>
    </div>
    <h1 v-if="tasks.length === 0">No Tasks</h1>
</template>

<script>

    import Task from './Task.vue';
    import { tasksToRead } from '@/composables/tasks_manager';

    export default {
        name: 'Tasks',
        props: {
            tasks: tasksToRead
        },
        components: {
            Task
        }
    }
</script>
