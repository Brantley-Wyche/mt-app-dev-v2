<template>
    <div class="body"> <!-- beginning of body div-->
    <break></break>
    <div class="choose-location"> <!-- beginning of choose location div-->
        <h1>
            Choose your location
        </h1>
    </div> <!-- end of choose location div -->
    <div class="location-name"> <!-- beginning of location name div-->
        <div @click = "buffaloClick" class="buffalo-name">
        <h2>
            Buffalo, New York
        </h2>
          <img class ="ny-image" alt="New York" src="../assets/ny.png">
        </div> <!-- end of buffalo -->
        <div @click="delawareClick" class="delaware-name">
        <h2>
            Wilmington, Delaware
        </h2>
          <img class = "delaware-image" alt="Delware" src="../assets/delaware.png">
        </div> <!-- end of delaware -->
    </div> <!-- end of location name div -->
    </div> <!-- end of body div-->
</template>

<style scoped>

.body{
    background-color: #007955;
    border: 3px solid #FFD03E;
}
.choose-location{
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
}

.location-name{
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
}

.buffalo-name{
    margin-left: 200px;
    float: left;
}

.delaware-name{
    float: right;
    margin-right: 200px;
}

</style>