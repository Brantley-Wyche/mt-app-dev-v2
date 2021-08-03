<template>
    <div class="body"> <!-- beginning of body div-->
    <b-card>
    <div class="search"> <!-- beginning of search div-->
    <br />
        <h1 class = "fadeIn first">
            What are you looking for?
        </h1>
        <br />
    </div> <!-- end of search div -->
    <div class="fadeIn second"> 
        <!-- beginning of search type event div-->
        <div @click ="eventClick" class="events-search shadow p-3 mb-5 bg-white rounded">
        <b-text>
            Events
        </b-text>
              <b-img center :src="require('../assets/event.png')" img-alt="Events">
          </b-img>
        </div> <!-- end of events -->
        <!--beginning of search type real estate div-->
        <div @click="houseClick" class="house-search shadow p-3 mb-5 bg-white rounded">
        <b-text>
            Real Estate
        </b-text>
              <b-img center :src="require('../assets/house.png')" img-alt="House">
          </b-img>
            </div> <!-- end of real estate -->
        <!-- beginning of search type restaurants div -->
        <div @click="restaurantClick" class="restaurants-search shadow p-3 mb-5 bg-white rounded">
        <b-text>
            Restaurants
        </b-text>
            <b-img center :src="require('../assets/restaurant.png')" img-alt="Restaurants">
          </b-img>        
          </div> <!-- end of restaurants -->
    </div> <!-- end of search name div -->
    </b-card>
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

.events-search{
    font-size: 40px;
    margin-left: 200px;
    float: left;
}
.house-search{
    font-size: 40px;
    float: left;
    margin-left: 200px;
}

.restaurants-search{
    font-size: 40px;
    float: right;
    margin-right: 200px;
}
@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

.fadeIn {
  opacity:0;
  -webkit-animation:fadeIn ease-in 1;
  -moz-animation:fadeIn ease-in 1;
  animation:fadeIn ease-in 1;

  -webkit-animation-fill-mode:forwards;
  -moz-animation-fill-mode:forwards;
  animation-fill-mode:forwards;

  -webkit-animation-duration:1s;
  -moz-animation-duration:1s;
  animation-duration:1s;
}

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}
</style>