const S = String
const B = Boolean

/** @type {import('vue').ComponentOptions} */
export const Tag = {
  name: 'XTag',
  props: {
    type: S,
    closable: B,
    disableTransitions: B,
    hit: B,
    color: S,
    size: S,
    effect: { type: S, default: 'light' }
  },
  render (h) {
    const prefixCls = 'x-tag'
    const { type } = this
    const size = this.size || (this.$XVIEW || {}).size
    const classes = [
      prefixCls,
      type && `${prefixCls}_${type}`,
      size && `${prefixCls}_${size}`,
      `${prefixCls}_${this.effect}`,
      {
        'is-hit': this.hit,
        'is-fade': !this.disableTransitions
      }
    ]
    return h('transition', {
      props: { name: 'x-tag' }
    }, [
      h('span', {
        class: classes,
        style: { backgroundColor: this.color },
        on: this.$listeners
      }, [
        this.$slots.default,
        this.closable && h('i', {
          class: 'x-icon-close x-tag_close',
          on: { click: this.$emit.bind(this, 'close') }
        })
      ])
    ])
  }
}
