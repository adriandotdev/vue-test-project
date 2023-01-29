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
    }
</style>