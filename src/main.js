import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/common.scss'
import './assets/reset.scss'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import './mock'



Vue.use(ElementUi)
Vue.prototype.$http = axios;

Vue.config.productionTip = false

Vue.filter('contacturl', (val) => {

  return val="https://cube.elemecdn.com/"+val+".jpeg";
})
Vue.filter('shopurl', (val) => {
  let last = ""
  if(val.slice(-3)=="png"){
    last = "png";
  }else{
    last = "jpeg"
  }
  return val="https://cube.elemecdn.com/"+val.slice(0,1)+"/"+val.slice(1,3)+"/"+val.slice(3)+"."+last;
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
