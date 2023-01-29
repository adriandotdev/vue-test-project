<template>
  <main class="container">
    <Header title="Task Tracker" />
    <Tasks @toggle-task="toggleTask" @delete-task="deleteTask" :tasks="tasks"/>
  </main>
</template>

<script>

import Header from './components/Header.vue';
import Tasks from './components/Tasks.vue';

export default {
  name: 'App',
  components: {
    Header,
    Tasks    
  },
  data() {

    return {
      tasks: []
    }
  },

  // Mostly you will use this for API calls
  created() {
    this.tasks = [
      {
        id: 1,
        priority: true,
        text: 'Learn Vue.js'
      },
      {
        id: 2,
        priority: false,
        text: 'Learn Gitlab'
      },
      {
        id: 3,
        priority: true,
        text: 'Learn More'
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
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  

}

.container {
  border: 1px solid black;
  margin: 0 auto;
  margin-top: 60px;
  max-width: 40rem;
  padding: 0 2rem;
}
</style>
