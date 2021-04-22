import { S } from '../../types'

/** @type {import('vue').ComponentOptions} */
export const Divider = {
  name: 'XDivider',
  props: {
    direction: S,
    contentPosition: S
  },
  render (h) {
    const prefixCls = 'x-divider'
    const { direction } = this
    return h('div', {
      class: [prefixCls, direction && `${prefixCls}_${direction}`]
    }, [
      direction !== 'vertical' && h('div', {
        class: [`${prefixCls}_text`, this.contentPosition]
      }, this.$slots.default)
    ])
  }
}
