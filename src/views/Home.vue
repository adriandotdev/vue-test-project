<template>

    <main class="container">
    
        <Header @toggle-add-task="toggleAddTask" title="Task Tracker" :showAddTask="showAddTask" />
        
        <div v-if="showAddTask">
            <AddTask @add-task="addTask" />
        </div>
        
        <Tasks @toggle-task="toggleTask" @delete-task="deleteTask" :tasks="tasks" />
    
    </main>
</template>

<script>

    import Header from '../components/Header.vue';
    import AddTask from '../components/AddTask.vue';
    import Tasks from '../components/Tasks.vue';
    
    export default {
        components: {
            Header,
            AddTask,
            Tasks
        },
        data() {

            return {
                tasks: [],
                showAddTask: false
            }
        },
        // Mostly you will use this for API calls
        created() {
            this.tasks = [
                {
                    id: 1,
                    priority: true,
                    text: 'Learn Vue.js',
                    sched: 'November 23 @ 8 AM'
                },
                {
                    id: 2,
                    priority: false,
                    text: 'Learn Gitlab',
                    sched: 'November 23 @ 8 AM'
                },
                {
                    id: 3,
                    priority: true,
                    text: 'Learn More',
                    sched: 'November 23 @ 8 AM'
                }
            ]
        },
        methods: {
            deleteTask(id) {

                if (confirm('Are you sure you want to delete this task?')) {
                    this.tasks = this.tasks.filter(task => task.id !== id);
                }
            },
            toggleTask(id) {

                this.tasks = this.tasks.map(task => {

                    if (task.id === id) {
                        return {
                            ...task,
                            priority: !task.priority
                        }
                    }
                    else
                        return task;
                })
            },
            addTask(task) {
                this.tasks = [...this.tasks, task];
            },
            toggleAddTask() {
                this.showAddTask = !this.showAddTask;
            }
        }
    }
</script>