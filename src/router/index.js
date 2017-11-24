import Vue from 'vue'
import Router from 'vue-router'

import main from '../pages/main/main.vue'
import cart from '../pages/cart/cart.vue'
import category from '../pages/category/category.vue'
import clothmall from '../pages/clothmall/clothmall.vue'
import user from '../pages/user/user.vue'
import place from '../pages/place/place.vue'
import search from '../pages/search/search.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: main
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/category',
      component: category
    },
    {
      path: '/clothmall',
      component: clothmall
    },
    {
      path: '/user',
      component: user
    },
    {
      path: '/place',
      component: place
    },
    {
      path: '/search',
      component: search
    }
  ]
})
