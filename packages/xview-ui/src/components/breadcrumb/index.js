/** @typedef {import('vue').ComponentOptions} ComponentOptions  */

import { S, B, O } from '../../types'

const compName = 'XBreadcrumb'
const prefixCls = 'x-breadcrumb'

/** @type {ComponentOptions} */
export const Breadcrumb = {
  name: compName,
  provide () {
    return { XBreadcrumb: this }
  },
  props: {
    separator: { type: S, default: '/' },
    separatorClass: S
  },
  render (h) {
    return h('div', { class: prefixCls }, this.$slots.default)
  }
}

/** @type {ComponentOptions} */
export const BreadcrumbItem = {
  name: `${compName}Item`,
  inject: [compName],
  props: {
    to: [S, O],
    replace: B
  },
  render (h) {
    const { to } = this
    const { separator, separatorClass } = this[compName]
    return h('span', { class: `${prefixCls}-item` }, [
      h(to ? 'router-link' : 'span', {
        class: `${prefixCls}_inner`,
        props: { to, replace: this.replace }
      }, this.$slots.default),
      h('i', { class: [`${prefixCls}_separator`, separatorClass] }, separatorClass ? '' : separator)
    ])
  }
}
