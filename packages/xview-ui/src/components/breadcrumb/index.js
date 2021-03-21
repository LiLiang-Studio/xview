/** @typedef {import('vue').ComponentOptions} ComponentOptions  */

const compName = 'XBreadcrumb'
const prefixCls = 'x-breadcrumb'

/** @type {ComponentOptions} */
export const Breadcrumb = {
  name: compName,
  provide () {
    return { XBreadcrumb: this }
  },
  props: {
    separator: {
      type: String,
      default: '/'
    },
    separatorClass: String
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
    to: [String, Object],
    replace: Boolean
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
