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
          text: 'SearchingFor',
          page:'/Search/'
        },
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
nav{
    padding-top: 20px;
    background-color: black;
    padding-bottom: 20px;
}
/* Add a black background color to the top navigation */
nav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
nav a {
  float: middle;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 30px;
}

/* Change the color of links on hover */
nav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
nav a.active {
  background-color: #04AA6D;
  color: white;
}
</style>