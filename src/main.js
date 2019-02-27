import Vue from 'vue'
import App from './App.vue'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
require('dotenv').config();

Vue.use(VuePlyr)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
