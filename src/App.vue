<template>
  <div id="app">
    <router-view/>

  </div>
</template>

<script>
// import RegisterPage from './components/RegisterPage.vue'; 
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer,
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100;200;300;400;500;600;700;800;900&display=swap');

body{
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans Thai', sans-serif;
}



</style>
