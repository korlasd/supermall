import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import Fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Fastclick.attach(document.body)
Vue.use(Vant);
Vue.prototype.$bus=new Vue()
Vue.config.productionTip = false
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/loadingpic.svg')
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
