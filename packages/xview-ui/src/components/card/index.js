import { S } from '../../types'

/** @type {import('vue').ComponentOptions} */
export const Card = {
  name: 'XCard',
  props: {
    header: S,
    bodyStyle: {},
    shadow: S
  },
  render (h) {
    const prefixCls = 'x-card'
    const { shadow } = this
    const classes = [prefixCls, shadow && `${prefixCls}_${shadow}`]
    const headVNode = this.$slots.header || this.header
    return h('div', { class: classes }, [
      headVNode && h('div', { class: `${prefixCls}_header` }, headVNode),
      h('div', { class: `${prefixCls}_body`, style: this.bodyStyle }, this.$slots.default)
    ])
  }
}
