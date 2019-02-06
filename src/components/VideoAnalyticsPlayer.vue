<template>
  <div class="hello">
    <vue-plyr>
      <div data-plyr-provider="youtube" data-plyr-embed-id="bTqVqk7FSmY"></div>
    </vue-plyr>
  </div>
</template>

<script>
export default {
  name: 'VideoAnalyticsPlayer',
  props: {
    source: String
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
