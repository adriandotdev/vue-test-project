<template>
  <Navbar />

  <router-view></router-view>
  <Footer />
</template>

<script>

import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,   
    Footer
  },
  data() {

    return {
      showAddTask: false
    }
  }
}
</script>

<style>
@keyframes containerOnLoadAnimation {
      
    from {
      opacity: 0;
      transform: translateY(500px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    

  }



.container {
  
  margin: 5rem auto;
  margin-bottom: 0;
  /* margin-top: 60px; */
  max-width: 25rem;
  padding: 0 2rem;
  padding-bottom: 1rem;
  border-radius: .7rem;
  
  animation: containerOnLoadAnimation 300ms forwards;
}


@media only screen and (min-width: 540px) {

  .container {
    border: 1px solid black;
    margin-top: 7rem;
  }
}
</style>
