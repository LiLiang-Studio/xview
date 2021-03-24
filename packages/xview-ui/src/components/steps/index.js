/** @typedef {import('vue').ComponentOptions} ComponentOptions */

import { getChildComponents } from '../../utils'

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
  render (h) {
    const prefixCls = 'x-step'
    const { icon, statusObj } = this
    const { index, status, count, isLast } = statusObj
    const iconVNode = this.$slots.icon || (icon && h('i', { class: icon }))
    const statusIcon = ({ success: 'x-icon-check', error: 'x-icon-close' })[status]
    return h('li', {
      class: [prefixCls, `is-${status}`],
      style: { flexBasis: `${1 / (count - 1) * 100}%`, maxWidth: isLast && `${1 / count * 100}%` }
    }, [
      h('div', {
        class: `${prefixCls}_head`
      }, [
        h('div', { class: [`${prefixCls}_icon`, { 'is-text': !iconVNode }] }, [
          iconVNode || (statusIcon && h('i', { class: statusIcon })) || h('span', index + 1)
        ]),
        h('div', { class: `${prefixCls}_line` })
      ]),
      h('div', { class: `${prefixCls}_main` }, [
        h('div', { class: `${prefixCls}_title` }, this.$slots.title || this.title),
        h('div', { class: `${prefixCls}_desc` }, this.$slots.description || this.description)
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
    direction: {
      type: S,
      default: 'horizontal'
    },
    active: {
      type: N,
      default: 0
    },
    processStatus: {
      type: S,
      default: 'process'
    },
    finishStatus: {
      type: S,
      default: 'finish'
    },
    alignCenter: B,
    simple: B
  },
  watch: {
    active: {
      immediate: true,
      handler: 'updateItemStatus'
    }
  },
  methods: {
    updateItemStatus () {
      const { active } = this
      this.$nextTick(() => {
        const items = getChildComponents(this, 'XStep')
        const count = items.length
        items.forEach((_, i) => {
          _.statusObj = {
            count,
            index: i,
            isLast: i === count - 1,
            status: _.status || (i === active ? this.processStatus : i < active ? this.finishStatus : 'wait')
          }
        })
      })
    }
  },
  render (h) {
    const prefixCls = 'x-steps'
    return h('ul', {
      class: [prefixCls, `${prefixCls}_${this.direction}`]
    }, this.$slots.default)
  }
}
