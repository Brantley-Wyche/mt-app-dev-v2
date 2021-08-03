<template>
    <div class="body"> <!-- beginning of body div-->
    <div class="search"> <!-- beginning of search div-->
        <h1>
            What are you looking for?
        </h1>
    </div> <!-- end of search div -->
    <div class="search-name"> 
        <!-- beginning of search type event div-->
        <div @click ="eventClick" class="events-search">
        <h2>
            Events
        </h2>
          <img class ="ny-image" fluid alt="event image" src="../assets/event.png">
        </div> <!-- end of events -->
        <!--beginning of search type real estate div-->
        <div @click="houseClick" class="house-search">
        <h2>
            Real Estate
        </h2>
          <img class = "delaware-image" alt="house image" src="../assets/house.png">
            </div> <!-- end of real estate -->
        <!-- beginning of search type restaurants div -->
        <div @click="restaurantClick" class="restaurants-search">
        <h2>
            Restaurants
        </h2>
          <img class = "delaware-image" alt="restaurant image" src="../assets/restaurant.png">
        </div> <!-- end of restaurants -->
    </div> <!-- end of search name div -->
    </div> <!-- end of body div-->
</template>

<script>
export default {
  name: 'SearchingFor',
}
</script>

<style scoped>

.body .vs{
    background-color: #007955;
    border: 3px solid #FFD03E;
    margin-bottom: 2em;
}
.search{
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
}

.search-name{
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
}

.events-search{
    margin-left: 200px;
    float: left;
}
.house-search{
    float: left;
    margin-left: 200px;
}

.restaurants-search{
    float: right;
    margin-right: 200px;
}
</style>