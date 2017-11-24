import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScroller from 'vue-scroller'
import store from './store'
import Distpicker  from 'v-distpicker'

import './mock/mockServer'

import {Swipe, SwipeItem, Navbar, TabItem} from 'mint-ui'


Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component('v-distpicker', Distpicker)

Vue.use(VueScroller)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
