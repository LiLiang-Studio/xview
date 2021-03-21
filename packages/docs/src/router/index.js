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
    },
    {
      path: '/container',
      component: () => import('../views/Container.vue')
    },
    {
      path: '/avatar',
      component: () => import('../views/Avatar.vue')
    },
    {
      path: '/card',
      component: () => import('../views/Card.vue')
    },
    {
      path: '/divider',
      component: () => import('../views/Divider.vue')
    },
    {
      path: '/page-header',
      component: () => import('../views/PageHeader.vue')
    },
    {
      path: '/breadcrumb',
      component: () => import('../views/Breadcrumb.vue')
    },
    {
      path: '/badge',
      component: () => import('../views/Badge.vue')
    },
    {
      path: '/alert',
      component: () => import('../views/Alert.vue')
    },
    {
      path: '/backtop',
      component: () => import('../views/Backtop.vue')
    }
  ]
})
