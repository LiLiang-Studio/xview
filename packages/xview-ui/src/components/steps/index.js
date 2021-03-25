/** @typedef {import('vue').ComponentOptions} ComponentOptions */

const N = Number
const S = String
const B = Boolean

/** @type {ComponentOptions} */
export const Step = {
  name: 'XStep',
  inject: ['xSteps'],
  props: {
    title: S,
    description: S,
    icon: S,
    status: S
  },
  data () {
    return { statusObj: {} }
  },
  mounted () {
    const { xSteps } = this
    xSteps.addItem(this)
    this.$once('hook:beforeDestroy', () => {
      Steps.removeItem(this)
    })
  },
  render (h) {
    const prefixCls = 'x-step'
    const { icon, statusObj } = this
    const { status } = statusObj
    const iconVNode = this.$slots.icon || (icon && h('i', { class: icon }))
    const statusIcon = ({ success: 'x-icon-check', error: 'x-icon-close' })[status]
    const desc = this.$slots.description || this.description
    return h('li', {
      class: [prefixCls, `is-${status}`]
    }, [
      h('div', { class: `${prefixCls}_head` }, [
        h('div', { class: [`${prefixCls}_icon`, { 'is-text': !iconVNode }] }, [
          iconVNode || (statusIcon && h('i', { class: statusIcon })) || h('span', statusObj.index + 1)
        ]),
        h('div', { class: `${prefixCls}_line` })
      ]),
      h('div', { class: `${prefixCls}_main` }, [
        h('div', { class: `${prefixCls}_title` }, this.$slots.title || this.title),
        desc && h('div', { class: `${prefixCls}_desc` }, desc)
      ])
    ])
  }
}

/** @type {ComponentOptions} */
export const Steps = {
  name: 'XSteps',
  provide () {
    return { xSteps: this }
  },
  props: {
    space: [N, S],
    direction: { type: S, default: 'horizontal' },
    active: { type: N, default: 0 },
    processStatus: { type: S, default: 'process' },
    finishStatus: { type: S, default: 'finish' },
    alignCenter: B,
    simple: B
  },
  data () {
    return { items: [] }
  },
  mounted () {
    this.$once('hook:beforeDestroy', this.$watch(
      () => [this.active, this.items.length],
      () => {
        this.$nextTick(() => {
          const { active, items } = this
          items.forEach((_, i) => {
            _.statusObj = {
              index: i,
              status: _.status || (i === active ? this.processStatus : i < active ? this.finishStatus : 'wait')
            }
          })
        })
      },
      { immediate: true }
    ))
  },
  methods: {
    addItem (item) {
      this.items.push(item)
    },
    removeItem (item) {
      this.items.splice(this.items.indexOf(item), 1)
    }
  },
  render (h) {
    const prefixCls = 'x-steps'
    const { simple } = this
    return h('ul', {
      class: [
        prefixCls,
        !simple && `${prefixCls}_${this.direction}`,
        {
          'is-simple': simple,
          'is-center': this.alignCenter
        }
      ]
    }, this.$slots.default)
  }
}
