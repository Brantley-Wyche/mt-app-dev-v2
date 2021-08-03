<template>
    <div class="body"> <!-- beginning of body div-->
        <Nav />
        <h1 class = "fadeIn first">Choose your office location</h1>
        <br />
        <b-container class="bv-example-row fadeIn second">
            <b-row>
                <b-col>
                    <b-card @click="buffaloClick()" class="shadow names p-3 mb-5 bg-white rounded">
                        <b-card-text class="location">
                            Buffalo, New York
                        </b-card-text>
                        <b-img center :src="require('../assets/ny.png')" img-alt="New York"></b-img>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card @click="delawareClick()" class="shadow names p-3 mb-5 bg-white rounded">
                        <b-card-text class="location">
                            Wilmington, Delaware
                        </b-card-text>
                        <b-img center :src="require('../assets/delaware.png')" img-alt="delaware"></b-img>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div> <!-- end of body div-->
</template>

<script>
import Nav from './Nav.vue'

  export default {
    name: 'LocationPicker',
    components: {Nav},
    data(){
        return{
            city: '',
        }
    },
    methods: {
      buffaloClick(){
        this.city = 'buffalo';
        this.$router.push({name: 'Places', params: {city: this.city}});
      },
      delawareClick(){
        this.city = 'wilmington';
        this.$router.push({name: 'Places', params: {city: this.city}});
      }
    }
  }
</script>

<style scoped>
.location{
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
}

.names{
    transition: transform .3s; 
}

.names:hover{
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