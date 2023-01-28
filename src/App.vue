<template>
  <main class="container">
    <Header title="Task Tracker" />
  </main>
</template>

<script>

import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header    
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
