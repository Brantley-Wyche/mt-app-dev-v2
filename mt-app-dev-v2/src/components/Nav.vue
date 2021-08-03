<template>
  <div> 
    <nav> 
      <router-link v-for="routes in links" 
        v-bind:key="routes.id"
        :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav> 
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Login',
          page:'/'
        },
        {
          id: 1,
          text: 'Location',
          page:'/location/'
        },
        {
          id: 2,
          text: 'Places',
          page:'/search/'
        },
        {
          id: 3,
          text: 'Results',
          page: '/results/'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.spacing {
  margin-right: 50px;
  text-decoration: none;
  color: white;
  font-size: 14px;
}

nav {
  background-color: #137d1d;
  overflow: hidden;
  padding: 1em;
  border-bottom: 6px solid rgb(238, 241, 13);
  margin-bottom: 30px;
}

nav a {
  float: middle;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 50px;
  text-decoration: none;
  font-size: 25px;
  font-weight: bold;
}

nav a:hover {
  border-bottom: 3px solid rgb(238, 241, 13);
  color: rgb(63, 216, 17);
}

nav a.active {
  background-color: #c6da13;
  color: white;
}
</style>