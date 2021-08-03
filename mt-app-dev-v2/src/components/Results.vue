<template>
  <div class="hello">
    <b-button variant="danger" @click="findCloseBuyButtonPressed()">Show Results</b-button>

  <b-container class="bv-example-row">
  <b-row>
    <b-col sm="3">
      <b-card
          header="Search Results"
          style="max-width: 20rem; max-heigt: 600px !important;"
          class="mb-2 widen shadow">
          <div class="scroller">
            <b-list-group v-for="place in places" :key="place.id" class="left"> 
              <b-list-group-item @click="updateSelected(place)" class="no-borders">
                <div>
                  <h5 class="mb-1">{{place.name}}</h5>
                </div>
                <p class="mb-1">{{place.vicinity}}</p>
              </b-list-group-item>
            </b-list-group>
          </div>
        </b-card>
      
    </b-col>
    <b-col sm="6">
      <div id="map" ref="map"></div>
    </b-col>
    <b-col sm="3">
      <div v-if="showDetails"  class="left shadow">
        <b-card
          header="Venue Details"
          :title="selectedPlace.name"
          :sub-title="selectedPlace.vicinity"
          style="max-width: 20rem;"
          class="mb-2">
          <hr />
          <b-card-text>
            <b>Average User Rating:</b> {{selectedPlace.rating}}
            <br />
            <b>Total User Ratings:</b> {{selectedPlace.user_ratings_total}}
          </b-card-text>
        </b-card>
      </div>
      
      <div v-if="showDetails" style="margin-top: 35px;" class="shadow">
        <b-card
          header="TDP Reviews"
          style="max-width: 20rem;"
          class="mb-2">
          
          <b-card-text class="left">
            <p><b>Natalie S:</b> "This place is great! I had a lot of fun!"</p>
            <hr />
            <p><b>Zachary L:</b> "Amazing vibes, I love it here."</p>
            <hr />
            <p><b>Anna C:</b> "I'm definitely bringing my friends here next time!!"</p>
            <hr />
          </b-card-text>
        </b-card>
      </div>

    </b-col>
  </b-row>
</b-container>
    
    
  </div>
</template>

<script>
import {gmapApi} from 'vue2-google-maps'
import axios from "axios";

export default {
  name: 'Results',
  data(){
    return{
      center: { lat: 39.739071, lng: -75.539787 },
      lat: 39.739071,
      lng: -75.539787,
      type: "restaurant",
      places: [],
      showDetails: false,
      selectedPlace: {},
      map: null,
    }
  },
  computed: {
    google: gmapApi
  },
  /*mounted(){

    this.map = new window.google.maps.Map(this.$refs['map'], {
      zoom: 15,
      center: this.center,
    })
  },*/
  methods:{
        findCloseBuyButtonPressed() {
            const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
                this.lat},${this.lng}&type=${this.type}&radius=5000&key=AIzaSyBNqBOnwbtk78eyzBLpNF0tTocn8MSI1-o`;
            axios.get(URL).then(response => {
                this.places = response.data.results;
                console.log(response.data.results);
                this.addLocationsToGoogleMaps();
            }).catch(error => {
              
                console.log(error.message);
            });
        },
        addLocationsToGoogleMaps() {
            var map = new window.google.maps.Map(this.$refs['map'], {
                zoom: 15,
                center: new window.google.maps.LatLng(this.lat, this.lng),
                mapTypeId: window.google.maps.MapTypeId.ROADMAP
            });

            var infowindow = new window.google.maps.InfoWindow();

            this.places.forEach((place) => {
                const lat = place.geometry.location.lat;
                const lng = place.geometry.location.lng;
                let marker = new window.google.maps.Marker({
                    position: new window.google.maps.LatLng(lat, lng),
                    map: map
                });

                 window.google.maps.event.addListener(marker, "click", () => {
                    infowindow.setContent(`<div>${place.name}</div><p>${place.vicinity}</p>`);
                    infowindow.open(map, marker);
                });
            });
        },
        updateSelected (selectedItem) {
        this.selectedPlace = selectedItem;
        this.showDetails = true;
     }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.card-header{
  text-align: center !important;
}

.left{
  text-align: left;
}

.widen .card-body{
  padding: 0;
}

.no-borders{
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 1px solid rgb(63, 61, 61);
  border-radius: 0%;
}

.dark-borders{
  border: 1px solid rgb(63, 61, 61);
  
}

.scroller{
  max-height: 535px;
  margin-bottom: 10px;
  overflow:scroll;
  overflow-x: hidden;
}

#map{
  height: 600px;
  background: gray;
}
</style>
