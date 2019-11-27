import Vue from 'vue'
import Search from './views/search/Search.vue'
import './assets/reset.scss'
import "./assets/common.scss";

Vue.config.productionTip = false

new Vue({
  render: h => h(Search)
}).$mount('#app')
