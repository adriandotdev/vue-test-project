<template>
    <form @submit="addTask" action="">
        <section class="task-field">
            <label for="input-task">
                Task
            </label>
            <input v-model="task" type="text" name="input-task" id="input-task">
        </section>
            
        <section class="priority-section">
            <label for="">
                Priority
            </label>
            <input v-model="priority" type="checkbox" name="" id="">
        </section>

        <input type="submit" value="Save">
    </form>

</template>

<script>
    export default {
        name: 'AddTask',
        data() {
            return {
                task: '',
                priority: false
            }
        },
        methods: {
            addTask(e) {

                e.preventDefault();

                if (!this.task)
                    return;

                const newTask = {

                    id: Math.random() * 10000000,
                    priority: this.priority,
                    text: this.task
                }

                this.$emit('add-task', newTask);
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