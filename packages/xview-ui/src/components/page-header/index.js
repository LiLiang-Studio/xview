/** @type {import('vue').ComponentOptions} */
export const PageHeader = {
  name: 'XPageHeader',
  props: {
    title: {
      type: String,
      default: '返回'
    },
    content: String
  },
  render (h) {
    const prefixCls = 'x-page-header'
    return h('div', { class: prefixCls }, [
      h('div', { class: `${prefixCls}_left`, on: { click: () => this.$emit('back') } }, [
        h('i', { class: 'x-icon-back' }),
        h('div', this.$slots.title || this.title)
      ]),
      h('div', { class: `${prefixCls}_divider` }),
      h('div', { class: `${prefixCls}_content` }, this.$slots.content || this.content)
    ])
  }
}
