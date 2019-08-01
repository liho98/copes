import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store/store'
import { uuid } from 'vue-uuid';

Vue.config.productionTip = false
Vue.use(uuid);

new Vue({
  router,
  vuetify,
  store,
  uuid,
  render: h => h(App)
}).$mount('#app')
