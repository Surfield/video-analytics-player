<template>
  <vue-plyr ref="plyr">
    <video :poster="poster" :src="videoId" controls>
        <source :src="videoId" type="video/mp4" size="1080">
    </video>
  </vue-plyr>
</template>
<script>
import { sendVideoEventData } from '../utils/captureEvent'

export default {
  name: 'Mp4Player',
  props: {
    videoType: String,
    poster: String,
    videoId: String,
    meta: Object
  },
  mounted () {
    this.player.on('playing', () => sendVideoEventData('playing', this.player.currentTime, this.meta))
    this.player.on('pause', () => sendVideoEventData('pause', this.player.currentTime, this.meta))
    this.player.on('ended', () => sendVideoEventData('ended', this.player.currentTime, this.meta))
    this.player.on('seeking', () => sendVideoEventData('seeking', this.player.currentTime, this.meta))
    this.player.on('seeked', () => sendVideoEventData('seeked', this.player.currentTime, this.meta))
  },
  computed: {
    player () { return this.$refs.plyr.player }
  }
}
</script>