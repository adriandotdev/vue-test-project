<template>

    <main class="container">
    
        <Header @toggle-add-task="toggleAddTask" title="Task Tracker" :showAddTask="showAddTask" />
        
        <div v-if="showAddTask">
            <AddTask @add-task="addTask" />
        </div>
        
        <Tasks :tasks="tasksToRead" />
        
    </main>

    <div @click="openUpdateModal()" class="modal-bg" v-if="isUpdating">

        <div id="update-modal" @click="(e) => e.stopPropagation()">

            <h2>Update Task</h2>
            
            <form @submit="(e) => {
                    e.preventDefault();
                    updateTask()
                }" id="update-form">
            
                <section class="task-field">
                    <label for="task">Task:</label>
                    <input v-model="uTask" type="text" name="task" id="task">
                </section>
            
                <section class="task-field">
                    <label for="schedule">Schedule:</label>
                    <input v-model="uSched" type="text" name="schedule" id="schedule">
                </section>
            
            
                <section class="priority-section">
                    <label for="update-priority">
                        Priority
                    </label>
                    <input v-model="uPriority" type="checkbox" name="update-priority" id="update-priority">
                </section>
            
                <input type="submit" value="Save">
            </form>
        </div>
        
    </div>
    
</template>

<script>

    //---------------------------STATES AND REF-------------------------------------
    import { ref } from 'vue';
    import { tasksToRead, deleteTask, toggleTask, addTask, updateTask, isUpdating, openUpdateModal, uTask, uSched, uPriority } from '../composables/tasks_manager';

    //-------------------------COMPONENTS---------------------------------------
    import Header from '../components/Header.vue';
    import AddTask from '../components/AddTask.vue';
    import Tasks from '../components/Tasks.vue';

    export default {
        setup() {

            let showAddTask = ref(false);

            // A function that toggles the form for adding a new task.
            let toggleAddTask = () => {
                showAddTask.value = !showAddTask.value;
            }

            return {
                tasksToRead,
                deleteTask,
                toggleTask,
                addTask,
                updateTask,
                showAddTask,
                toggleAddTask,
                isUpdating,
                openUpdateModal,
                uTask,
                uSched,
                uPriority
            }
        },
        components: {
            Header,
            AddTask,
            Tasks
        },
    }
</script>

<style scoped>
    @keyframes open-modal {
        from {
            opacity: 0;
            transform: translateY(-50px);
        }
        to {
            opacity: 1;
            transform: translateY(0px);
        }
    }

    /* Modal Background */
    .modal-bg {
        
        min-width: 100vw;
        min-height: 100vh;
        position: fixed;
        top: 0;

        /* Flex */
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    /* Serves as a background color to reduce the opacity. */
    .modal-bg::before {

        content: "";
        display: block;
        width: 100vw;
        height: 100vh;
        background:black;
        position: absolute;
        z-index: -1;
        opacity: .1;
    }

    #update-modal {
        background: white;
        max-width: 25rem;
        width: 100%;
        padding: 1rem;
        border-radius: .5rem;
        animation: open-modal 300ms forwards;
    }

    /* The input field */
    .task-field {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        margin-bottom: 1rem;
    }

    /* The checkbox section. */
    .priority-section {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
    }


    /* Element Selectors */
    label {
        font-size: 1.2rem;
        font-weight: bold;
        align-self: flex-start;
        user-select: none;
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

        transform: translateY(-.2rem);
    }
</style>