<template>
    <button @click="onClick()" :style="{background: color}">
        {{ text }}
    </button>
</template>

<script>

    export default {
        name: 'Button',
        props: {
            text: String,
            color: String
        },
        methods: {
            onClick() {
                this.$emit('toggle-add-task');
            }
        }
    }
</script>

<style scoped>
    button {
        padding: .5em 1em;
        font-size: 1rem;
        cursor: pointer;
        outline: none;
        border: none;
        color: white;
        border-radius: .5rem;
        border: 1px solid rgb(47, 47, 47);
    }
</style>