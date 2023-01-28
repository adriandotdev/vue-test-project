<template>
    <header>
        <h1>{{ title }}</h1>
        <button>Add Task</button>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            title: String
        }
    }
</script>

<style scoped>
    header {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: space-between;
    }

    button {
        padding: .5em;
        font-size: 1rem;
        cursor: pointer;
        background: #171717;
        outline: none;
        border: none;
        color: white;
    }
</style>