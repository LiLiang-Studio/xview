/**
 * @typedef {import('vue').ComponentOptions} ComponentOptions
 */

import { S } from '../../types'

/** @type {ComponentOptions} */
export const Container = {
  name: 'XContainer',
  props: {
    direction: S
  },
  render (h) {
    const dir = this.direction
    const isVertical = dir === 'vertical' ||
      (dir !== 'horizontal' && ((this.$slots || {}).default || []).some(vnode => {
        const { tag } = vnode.componentOptions || {}
        return tag === 'x-header' || tag === 'x-footer'
      }))
    return h('div', {
      class: ['x-container', { 'is-vertical': isVertical }]
    }, this.$slots.default)
  }
}

/** @type {ComponentOptions} */
export const Header = {
  name: 'XHeader',
  props: {
    height: { type: S, default: '60px' }
  },
  render (h) {
    return h('div', {
      class: 'x-header',
      style: { height: this.height }
    }, this.$slots.default)
  }
}

/** @type {ComponentOptions} */
export const Aside = {
  name: 'XAside',
  props: {
    width: { type: S, default: '300px' }
  },
  render (h) {
    return h('div', {
      class: 'x-aside',
      style: { width: this.width }
    }, this.$slots.default)
  }
}

/** @type {ComponentOptions} */
export const Main = {
  name: 'XMain',
  render (h) {
    return h('div', { class: 'x-main' }, this.$slots.default)
  }
}

/** @type {ComponentOptions} */
export const Footer = {
  name: 'XFooter',
  props: {
    height: { type: S, default: '60px' }
  },
  render (h) {
    return h('div', {
      class: 'x-footer',
      style: { height: this.height }
    }, this.$slots.default)
  }
}
