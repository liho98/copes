import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store/store'
import UUID from 'vue-uuid';

Vue.config.productionTip = false
Vue.use(UUID);

new Vue({
  router,
  vuetify,
  store,
  UUID,
  render: h => h(App)
}).$mount('#app')
