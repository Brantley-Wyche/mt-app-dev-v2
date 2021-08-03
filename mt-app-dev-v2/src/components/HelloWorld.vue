<template>
  <div class="hello">
    <img class = "fadeIn first" alt="MT logo" src="../assets/green-logo.png">
    <div class = "fadeIn second" id="square">
      <div class="content">
        <h1 class = "fadeIn second">Sign In</h1>
        <div class="fields">
          <input class = "fadeIn third" id="LANID" type="text" placeholder="Enter LanID here"/>
        </div>

        <div class="fields">
          <input class = "fadeIn fourth" id="PASSWORD" type="password" placeholder="Enter password here" />
        </div>

        <p v-if="highlight" id="wrong_credentials">Please enter valid credentials</p>

        <button class = "fadeIn fifth" id="login_button" @click="validateCredentials()">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  name: 'HelloWorld',
  
  data() {
    return {
      highlight: false,
    }
  },
  methods: {
    validateCredentials(){
      let lanID = document.querySelector('#LANID').value.toUpperCase();
      let pwd = document.querySelector('#PASSWORD').value;

      if((lanID == 'TDEVR0X' && pwd == 'password') || (lanID == 'TDEVR0Z' && pwd == 'otherpassword')){
        this.highlight = false;
        this.$router.push('/location');
      }
      else{
        this.highlight = true;
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  padding: 15px 0;
  font-size: 30px;
  color: #1d1c1c;
  font-weight: bold;
}
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
#square {
  position: relative;
  margin: 0 auto;
  height: 0;
  max-width:600px;
  padding-bottom:20%;
}
.content {
  position: absolute;
  width: 100%;
  
}
.fields{
  margin-bottom: 15px;
}
input{
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}
#wrong_credentials{
  color: red;
  font-weight: bold;
  font-size: 20px;
}
#login_button {
  padding: 10px 50px 10px 50px;
  border-radius: 10px;
  font-size: 20px;
  background-color: #007955;
  color: white;
  border: 1px solid #FFD03E;
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
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}
.fadeIn.fourth{
  -webkit-animation-delay: 1.0s;
  -moz-animation-delay: 1.0s;
  animation-delay: 1.0;
}
.fadeIn.fifth{
  -webkit-animation-delay: 1.2s;
  -moz-animation-delay: 1.2s;
  animation-delay: 1.2;
}
</style>