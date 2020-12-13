import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vant from 'vant';
import qs from 'qs'
import 'vant/lib/index.css';
import './assets/font/iconfont.css';

//引入字体图标
import './assets/font/iconfont.css'
//引入适配font.js文件
import './assets/js/iconfont.js'



axios.defaults.baseURL="http://localhost:5050"
// axios.defaults.baseURL="http://day2008.applinzi.com"
Vue.prototype.axios=axios;

Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(MintUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
