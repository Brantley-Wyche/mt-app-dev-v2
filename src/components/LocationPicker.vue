<template>
    <div class="body"> <!-- beginning of body div-->
    <b-card >
    <div class="choose-location"> <!-- beginning of choose location div-->
        <br />
        <h1 class = "fadeIn first">
            Choose your location
            </h1>
    </div> <!-- end of choose location div -->
    <div class="fadeIn second"> <!-- beginning of location name div-->
        <br />
        <div @click = "buffaloClick" class="buffalo-name shadow p-3 mb-5 bg-white rounded">
        <b-text>
            Buffalo, New York
        </b-text>
          <b-img center :src="require('../assets/ny.png')" img-alt="New York">
          </b-img>
        </div> <!-- end of buffalo -->
        <div @click="delawareClick" class="delaware-name shadow p-3 mb-5 bg-white rounded">
        <b-text>
            Wilmington, Delaware
        </b-text>
          <b-img center :src="require('../assets/delaware.png')" img-alt="delaware">
          </b-img>
        </div> <!-- end of delaware -->
    </div> <!-- end of location name div -->
    </b-card>
    </div> <!-- end of body div-->
</template>

<script>
  export default {
    methods: {
      hoverHandler(isHovered) {
        if (isHovered) {
          // Do something
        } else {
          // Do something else
        }
      }
    }
  }
</script>

<style scoped>
.choose-location{
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
}

.buffalo-name{
    margin-left: 300px;
    float: left;
    font-size: 40px;
}

.delaware-name{
    font-size: 40px;
    float: right;
    margin-right: 300px;
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