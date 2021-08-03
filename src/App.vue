<template>
  <div id="app">
    <Nav>
     <router-link to="/location">Location</router-link>
     <router-link to="/Search">Search</router-link>
     </Nav>
         <main class="App__main">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view/>
              </transition>
         </main>
  </div>
</template>

<script>
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import Nav from './components/Nav.vue'


export default {
  components: { Nav },
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@1,300&display=swap%27');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  width: 100vw;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter, 
.fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}
</style>