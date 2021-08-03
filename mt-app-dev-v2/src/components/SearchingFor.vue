<template>
    <div class="body"> <!-- beginning of body div-->
        <Nav />

        <h1 class = "fadeIn first">What are you looking for?</h1>
        <br />
        
        <b-container class="bv-example-row fadeIn second">
            <b-row>
                <b-col>
                    <b-card @click="eventClick()" class="search-cols shadow p-3 mb-5 bg-white rounded">
                        <b-card-text>
                            Attractions
                        </b-card-text>
                        <b-img center :src="require('../assets/event.png')" img-alt="events"></b-img>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card @click="houseClick()" class="search-cols shadow p-3 mb-5 bg-white rounded">
                        <b-card-text>
                            Real Estate
                        </b-card-text>
                        <b-img center :src="require('../assets/house.png')" img-alt="house" style="max-height: 300px;"></b-img>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card @click="restaurantClick()" class="search-cols shadow p-3 mb-5 bg-white rounded">
                        <b-card-text>
                            Restaurants
                        </b-card-text>
                        <b-img center :src="require('../assets/restaurant.png')" img-alt="restaurants"></b-img>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div> <!-- end of body div-->
</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'SearchingFor',
  components: {Nav},
  data(){
      return{
          event: '',
      }
  },
  props: ['city'],
  mounted(){

      //Defaults to Buffalo if the user comes here from another
      if(this.city == undefined){
          this.city = 'buffalo'
      }
  },
  methods:{
      eventClick(){
        this.event = 'tourist_attraction';
        this.$router.push({name: 'Results', params: {city: this.city, event: this.event}});
      },
      houseClick(){
        this.event = 'real_estate_agency';
        this.$router.push({name: 'Results', params: {city: this.city, event: this.event}});
      },
      restaurantClick(){
        this.event = 'restaurant';
        this.$router.push({name: 'Results', params: {city: this.city, event: this.event}});
      },
  }
}
</script>

<style scoped>
.search-cols{
    font-size: 25px;
    transition: transform .3s; 
}

.search-cols:hover{
    transform: scale(1.05);
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