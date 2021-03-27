import { N, S, F } from '../../types'

/** @type {import('vue').ComponentOptions} */
export const Avatar = {
  name: 'XAvatar',
  props: {
    icon: S,
    size: [N, S],
    shape: { type: S, default: 'circle' },
    src: S,
    fit: { type: S, default: 'cover' },
    error: F
  },
  data () {
    return { isImageExist: true }
  },
  render (h) {
    const prefixCls = 'x-avatar'
    const { size, isImageExist, src, icon, error } = this
    const classes = [
      prefixCls,
      `${prefixCls}_${this.shape}`,
      size && typeof size === 'string' && `${prefixCls}_${size}`
    ]
    const style = typeof size === 'number' && {
      width: `${size}px`,
      height: `${size}px`,
      lineHeight: `${size}px`
    }
    const onError = () => {
      const errorFlag = error ? error() : undefined
      if (errorFlag !== false) {
        this.isImageExist = false
      }
    }
    const attrs = Object.create(this.$attrs)
    attrs.src = src
    const vnode = isImageExist && src
      ? h('img', { attrs, style: { objectFit: this.fit }, on: { error: onError } })
      : icon
        ? h('i', { class: icon })
        : this.$slots.default
    return h('span', { class: classes, style }, [vnode])
  }
}
