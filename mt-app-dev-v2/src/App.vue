<template>
  <div id="app">
    <main class="App__main">
      <transition name="fade" mode="out-in"> 
        <router-view/>
      </transition>
    </main>
  </div>
</template>

<script>
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'

export default {
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
