/** @typedef {import('vue').ComponentOptions} ComponentOptions  */

import { S, B } from '../../types'

const prefixCls = 'x-timeline'

/** @type {ComponentOptions} */
export const Timeline = {
  name: 'XTimeline',
  props: {
    reverse: B
  },
  render (h) {
    const vnodes = this.$slots.default || []
    this.reverse && vnodes.reverse()
    return h('ul', { class: prefixCls }, vnodes)
  }
}

/** @type {ComponentOptions} */
export const TimelineItem = {
  name: 'XTimelineItem',
  props: {
    timestamp: S,
    hideTimestamp: B,
    placement: { type: S, default: 'bottom' },
    type: S,
    color: S,
    size: S,
    icon: S
  },
  render (h) {
    const itemCls = `${prefixCls}-item`
    const nodeCls = `${itemCls}_node`
    const { icon, type, size } = this
    const vnodes = [
      h('div', { class: `${itemCls}_content` }, this.$slots.default),
      !this.hideTimestamp && h('div', { class: `${itemCls}_timestamp` }, this.timestamp)
    ]
    if (this.placement === 'top') {
      vnodes.reverse()
    }
    return h('li', { class: itemCls }, [
      h('div', { class: `${itemCls}_tail` }),
      h('div', {
        class: [nodeCls, type && `${nodeCls}-${type}`, size && `${nodeCls}-${size}`],
        style: { backgroundColor: this.color }
      }, [
        icon && h('i', { class: [icon, `${itemCls}_icon`] })
      ]),
      h('div', { class: `${itemCls}_wrapper` }, vnodes)
    ])
  }
}
