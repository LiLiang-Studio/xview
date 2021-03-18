import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/button',
      component: () => import('../views/Button.vue')
    },
    {
      path: '/link',
      component: () => import('../views/Link.vue')
    },
    {
      path: '/tag',
      component: () => import('../views/Tag.vue')
    },
    {
      path: '/layout',
      component: () => import('../views/Layout.vue')
    }
  ]
})
