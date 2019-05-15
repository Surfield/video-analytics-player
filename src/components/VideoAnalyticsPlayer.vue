<template>
  <div>
    <component v-if="getVideoComponent" :is="videoComponent" :srcUrl="srcUrl" :meta="meta" :videoType='playerData.type' :videoId='playerData.id'/>
  </div>
</template>

<script>
// try this https://www.youtube.com/watch?v=BeGT93vnLYo
// try this https://vimeo.com/223704825
// try this http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
import Mp4Player from './Mp4Player.vue'
import YoutubeVimeoPlayer from './YoutubeVimeoPlayer.vue'
import getVideoType from '../utils/videolink'

export default {
  name: 'VideoAnalyticsPlayer',
  components: {
    'youtube': YoutubeVimeoPlayer,
    'vimeo': YoutubeVimeoPlayer,
    'mp4': Mp4Player
  },
  props: {
    srcUrl: String,
    poster: String,
    meta: Object,
  },
  methods: {
    sendData() {
      let playerTypeObj = getVideoType(this.srcUrl)
      console.log(playerTypeObj)
    }
  },
  computed: {
    playerData () {
      return getVideoType(this.srcUrl)
    },
    getVideoComponent () {
      if (this.playerData.type){
        return this.playerData.type
      }
      return null
    },
    videoComponent () {
      return this.getVideoComponent
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
</style>
