// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Element from 'element-ui';



import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/el-icon/iconfont.css';
Vue.use(Element);


console.log(Element);
Vue.config.productionTip = false
Vue.prototype.$http=axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
