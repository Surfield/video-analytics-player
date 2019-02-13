<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <input type="text" placeholder="Enter your url of the video you want to analyze" v-model="videoAnalyze">
    <VideoAnalyticsPlayer source="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import VideoAnalyticsPlayer from './components/VideoAnalyticsPlayer.vue'

export default {
  name: 'app',
  components: {
    VideoAnalyticsPlayer
  },
  data(){
    return{
      videoAnalyze: ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input {
  width: calc(100%);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}
</style>
