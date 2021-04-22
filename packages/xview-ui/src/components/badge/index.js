import { N, S, B } from '../../types'

/** @type {import("vue").ComponentOptions} */
export const Badge = {
  name: 'XBadge',
  props: {
    value: [S, N],
    max: N,
    isDot: B,
    hidden: B,
    type: S
  },
  render (h) {
    const prefixCls = 'x-badge'
    const { max, value, isDot } = this
    const content = isDot ? '' : typeof value === 'number' && max && value > max ? `${max}+` : value
    const vnode = this.$slots.default
    return h('div', { class: prefixCls }, [
      vnode,
      h('sup', {
        class: [`${prefixCls}_content`, this.type, { 'is-dot': isDot, 'is-fixed': vnode }]
      }, content)
    ])
  }
}
