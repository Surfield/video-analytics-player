<template>
  <div :class="videoType">
    <vue-plyr ref="plyr">
      <div :data-plyr-provider="videoType" :data-plyr-embed-id="videoId"></div>
    </vue-plyr>
  </div>
</template>
<script>
import { sendVideoEventData } from '../utils/captureEvent'

export default {
  name: 'YoutubeVimeoPlayer',
  props: {
    videoType: String,
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