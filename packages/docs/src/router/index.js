/**
 * @typedef Menu
 * @property {string} title
 * @property {import('vue-router').RouteConfig[]} children
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/** @type {Menu[]} */
export const menus = [
  {
    title: 'Basic',
    children: [
      {
        path: 'layout',
        component: () => import('../views/basic/Layout.vue'),
        meta: { title: 'Layout 布局' }
      },
      {
        path: 'container',
        component: () => import('../views/basic/Container.vue'),
        meta: { title: 'Container 布局容器' }
      },
      {
        path: 'button',
        component: () => import('../views/basic/Button.vue'),
        meta: { title: 'Button 按钮' }
      },
      {
        path: 'link',
        component: () => import('../views/basic/Link.vue'),
        meta: { title: 'Link 文字链接' }
      }
    ]
  },
  {
    title: 'Form',
    children: [
      {
        path: 'radio',
        component: () => import('../views/form/Radio.vue'),
        meta: { title: 'Radio 单选框' }
      },
      {
        path: 'checkbox',
        component: () => import('../views/form/Checkbox.vue'),
        meta: { title: 'Checkbox 复选框' }
      },
      {
        path: 'switch',
        component: () => import('../views/form/Switch.vue'),
        meta: { title: 'Switch 开关' }
      }
    ]
  },
  {
    title: 'Data',
    children: [
      {
        path: 'tag',
        component: () => import('../views/data/Tag.vue'),
        meta: { title: 'Tag 标签' }
      },
      {
        path: 'badge',
        component: () => import('../views/data/Badge.vue'),
        meta: { title: 'Badge 标记' }
      },
      {
        path: 'avatar',
        component: () => import('../views/data/Avatar.vue'),
        meta: { title: 'Avatar 头像' }
      }
    ]
  },
  {
    title: 'Notice',
    children: [
      {
        path: 'alert',
        component: () => import('../views/notice/Alert.vue'),
        meta: { title: 'Alert 警告' }
      },
      {
        path: 'message',
        component: () => import('../views/notice/Message.vue'),
        meta: { title: 'Message 消息提示' }
      },
      {
        path: 'notification',
        component: () => import('../views/notice/Notification.vue'),
        meta: { title: 'Notification 通知' }
      }
    ]
  },
  {
    title: 'Navigation',
    children: [
      {
        path: 'breadcrumb',
        component: () => import('../views/navigation/Breadcrumb.vue'),
        meta: { title: 'Breadcrumb 面包屑' }
      },
      {
        path: 'pageHeader',
        component: () => import('../views/navigation/PageHeader.vue'),
        meta: { title: 'PageHeader 页头' }
      },
      {
        path: 'steps',
        component: () => import('../views/navigation/Steps.vue'),
        meta: { title: 'Steps 步骤条' }
      }
    ]
  },
  {
    title: 'Others',
    children: [
      {
        path: 'card',
        component: () => import('../views/others/Card.vue'),
        meta: { title: 'Card 卡片' }
      },
      {
        path: 'timeline',
        component: () => import('../views/others/Timeline.vue'),
        meta: { title: 'Timeline 时间线' }
      },
      {
        path: 'divider',
        component: () => import('../views/others/Divider.vue'),
        meta: { title: 'Divider 分割线' }
      },
      {
        path: 'backtop',
        component: () => import('../views/others/Backtop.vue'),
        meta: { title: 'Backtop 回到顶部' }
      }
    ]
  }
]

const routes = menus.reduce((t, _) => [...t, ..._.children], [])

export default new Router({
  routes: [
    {
      path: '/',
      redirect: `/component/${routes[0].path}`
    },
    {
      path: '/component',
      component: () => import('../views/View.vue'),
      children: routes
    }
  ]
})
