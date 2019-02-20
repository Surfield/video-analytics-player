<template>

    <div :class="videoType">
        <vue-plyr>
            <div :data-plyr-provider="videoType" :data-plyr-embed-id="videoId"></div>
        </vue-plyr>
    </div>
</template>
<script>
export default {
  name: 'YoutubeVimeoPlayer',
  props: {
    videoType: String,
    videoId: String
  }
}
</script>