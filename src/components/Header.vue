<template>
    <header>
        <h1>{{ title }}</h1>
        <Button @toggle-add-task="$emit('toggle-add-task')" :text="showAddTask ? 'Cancel' : 'Add Task'" :color="showAddTask ? 'red' : 'green'"/>
    </header>
</template>

<script>

    import Button from './Button.vue';

    export default {
        name: 'Header',
        props: {
            title: String,
            showAddTask: Boolean,
        },
        components: {
            Button
        },
        emits: ['toggle-add-task']
    }
</script>

<style scoped>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 1rem;
    }
</style>