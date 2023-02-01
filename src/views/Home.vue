<template>

    <main class="container">
    
        <Header @toggle-add-task="toggleAddTask" title="Task Tracker" :showAddTask="showAddTask" />
        
        <div v-if="showAddTask">
            <AddTask @add-task="addTask" />
        </div>
        
        <Tasks :tasks="tasksToRead" />
        
    </main>

    <div @click="openUpdateModal()" class="modal-bg" v-if="isUpdating">
        <form @submit="(e) => {
                e.preventDefault();
                updateTask()
            }" id="update-form" @click="(e) => e.stopPropagation()">

            <section class="task-field">
                <label for="task">Task:</label>
                <input v-model="uTask" type="text" name="task" id="task">
                {{ uTask }}
            </section>

            <section class="task-field">
                <label for="schedule">Schedule:</label>
                <input v-model="uSched" type="text" name="schedule" id="task">
            </section>


            <section class="priority-section">
                <label for="">
                    Priority
                </label>
                <input v-model="uPriority" type="checkbox" name="" id="">
            </section>
            
            <input type="submit" value="Save">
        </form>
    </div>
    
</template>

<script>

    import { ref } from 'vue';
    import { tasksToRead, deleteTask, toggleTask, addTask, updateTask, isUpdating, openUpdateModal, uTask, uSched, uPriority } from '../composables/tasks_manager';
    import Header from '../components/Header.vue';
    import AddTask from '../components/AddTask.vue';
    import Tasks from '../components/Tasks.vue';
    
    export default {
        setup() {

            let showAddTask = ref(false);

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
        
        // data() {

        //     return {
        //         tasks: [],
        //         showAddTask: false
        //     }
        // },
        // Mostly you will use this for API calls
        // created() {
        //     this.tasks = [
        //         {
        //             id: 1,
        //             priority: true,
        //             text: 'Learn Vue.js',
        //             sched: 'November 23 @ 8 AM'
        //         },
        //         {
        //             id: 2,
        //             priority: false,
        //             text: 'Learn Gitlab',
        //             sched: 'November 23 @ 8 AM'
        //         },
        //         {
        //             id: 3,
        //             priority: true,
        //             text: 'Learn More',
        //             sched: 'November 23 @ 8 AM'
        //         }
        //     ]
        // },
        // methods: {
        //     deleteTask(id) {

        //         if (confirm('Are you sure you want to delete this task?')) {
        //             this.tasks = this.tasks.filter(task => task.id !== id);
        //         }
        //     },
        //     toggleTask(id) {

        //         this.tasks = this.tasks.map(task => {

        //             if (task.id === id) {
        //                 return {
        //                     ...task,
        //                     priority: !task.priority
        //                 }
        //             }
        //             else
        //                 return task;
        //         })
        //     },
        //     addTask(task) {
        //         this.tasks = [...this.tasks, task];
        //     },
        //     toggleAddTask() {
        //         this.showAddTask = !this.showAddTask;
        //     }
        // }
    }
</script>

<style scoped>
    .modal-bg {
        
        min-width: 100vw;
        min-height: 100vh;
        /* background: black; */
        position: fixed;
        top: 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }

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

    #update-form {
        background: white;
        max-width: 25rem;
        width: 100%;
        padding: 1rem;
        border-radius: .5rem;
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

        transform: translateY(-.2rem);
    }
</style>