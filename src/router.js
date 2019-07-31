import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Shop from './views/Shop.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Product from './views/Product.vue'
import Shoppingcart from './views/Shoppingcart.vue'
import Checkout from './views/Checkout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: Shoppingcart
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    }
  ]
})
