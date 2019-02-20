<template>
    <div :class="videoType">
            <video :poster="poster" :src="videoId" controls>
                <source :src="videoId" type="video/mp4" size="1080">
            </video>
    </div>
</template>
<script>
export default {
  name: 'Mp4Player',
  props: {
    videoType: String,
    poster: String,
    videoId: String
  }
}
</script>