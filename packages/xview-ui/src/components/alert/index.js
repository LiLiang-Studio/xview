const S = String
const B = Boolean

/** @type {import('vue').ComponentOptions} */
export const Alert = {
  name: 'XAlert',
  props: {
    title: S,
    type: { type: S, default: 'info' },
    description: S,
    closable: { type: B, default: true },
    center: B,
    closeText: S,
    showIcon: B,
    effect: { type: S, default: 'light' }
  },
  data () {
    return { visible: true }
  },
  render (h) {
    const prefixCls = 'x-alert'
    const { type, closeText } = this
    const title = this.$slots.title || this.title
    const desc = this.$slots.default || this.description
    const onClose = () => {
      this.visible = false
      this.$emit('close')
    }
    return h('transition', { props: { name: prefixCls } }, [
      this.visible && h('div', {
        class: [
          prefixCls,
          `${prefixCls}_${type}`,
          { 'is-center': this.center, 'is-dark': this.effect === 'dark' }
        ]
      }, [
        this.showIcon && h('i', {
          class: [`${prefixCls}_icon`, `x-icon-${type}`, { 'is-big': title && desc }]
        }),
        h('div', { class: `${prefixCls}_inner` }, [
          title && h('span', {
            class: [`${prefixCls}_title`, { 'is-bold': desc }]
          }, title),
          desc && h('p', { class: `${prefixCls}_desc` }, desc),
          this.closable && h('i', {
            class: [`${prefixCls}_close`, { 'x-icon-close': !closeText, 'is-custom': closeText }],
            on: { click: onClose }
          }, closeText)
        ])
      ])
    ])
  }
}
