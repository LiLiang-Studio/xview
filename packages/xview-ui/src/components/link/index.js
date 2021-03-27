import { S, B } from '../../types'

/** @type {import('vue').ComponentOptions} */
export const Link = {
  name: 'XLink',
  props: {
    type: { type: S, default: 'default' },
    underline: { type: B, default: true },
    disabled: B,
    icon: S,
    href: S
  },
  render (h) {
    const prefixCls = 'x-link'
    const { disabled, icon } = this
    const onClick = e => {
      !disabled && this.$emit('click', e)
    }
    return h('a', {
      class: [
        prefixCls,
        `${prefixCls}_${this.type}`,
        {
          'is-underline': this.underline,
          'is-disabled': disabled
        }
      ],
      attrs: { href: !disabled && this.href },
      on: { click: onClick }
    }, [
      icon && h('i', { class: icon }),
      h('span', this.$slots.default)
    ])
  }
}
