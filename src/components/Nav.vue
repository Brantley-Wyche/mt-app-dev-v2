<template>
  <div> 
  <nav > 
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
          text: 'Home',
          page:'/'
        },
        {
          id: 1,
          text: 'Location',
          page:'/location/'
        },
        {
          id: 2,
          text: 'Searching For',
          page:'/Search/'
        },
        {
          id: 3,
          text: 'Result',
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
  font-size: 18px;
}
/* Add a black background color to the top navigation */
nav {
  background-color: #137d1d;
  overflow: hidden;
  padding: 2em;
}

/* Style the links inside the navigation bar */
nav a {
  float: middle;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 50px;
  text-decoration: none;
  font-size: 40px;
  font-weight: bold;
}

/* Change the color of links on hover */
nav a:hover {
  background-color: #dddddd6b;
  color: black;
}

/* Add a color to the active/current link */
nav a.active {
  background-color: #c6da13;
  color: white;
}
</style>