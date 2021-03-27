/**
 * @typedef {import('vue').ComponentOptions} ComponentOptions
 */

import { N, S } from '../../types'
import { getParentComponent } from '../../utils'
import { addStylesheet } from './utils'

const N0 = { type: N, default: 0 }

/** @type {ComponentOptions} */
export const Row = {
  name: 'XRow',
  props: {
    gutter: N0,
    justify: { type: S, default: 'start' },
    align: { type: S, default: 'top' }
  },
  render (h) {
    const prefixCls = 'x-row'
    const { align, justify, gutter } = this
    const classes = [
      prefixCls,
      align && `${prefixCls}_${align}`,
      justify && `${prefixCls}_${justify}`,
      { gutter }
    ]
    const style = gutter && { margin: `0 -${gutter / 2}px` }
    return h('div', { class: classes, style }, this.$slots.default)
  }
}

/** @type {ComponentOptions} */
export const Col = {
  name: 'XCol',
  props: {
    span: { type: N, default: 24 },
    offset: N0,
    push: N0,
    pull: N0,
    xs: {},
    sm: {},
    md: {},
    lg: {},
    xl: {}
  },
  mounted () {
    addStylesheet()
  },
  render (h) {
    const prefixCls = 'x-col'
    const classes = [prefixCls]
    ;['span', 'offset', 'push', 'pull'].forEach(_ => {
      const val = this[_]
      val && classes.push(`${prefixCls}_${_}-${val}`)
    })
    ;['xs', 'sm', 'md', 'lg', 'xl'].forEach(_ => {
      const val = this[_]
      if (val) {
        const options = typeof val === 'number' ? { span: val } : val
        Object.keys(options).forEach(k => {
          classes.push(`${prefixCls}_${_}-${k}-${options[k]}`)
        })
      }
    })

    const par = getParentComponent(this, 'XRow')
    const { gutter } = par || {}
    const padding = `${gutter / 2}px`
    const style = gutter && { paddingLeft: padding, paddingRight: padding }

    return h('div', { class: classes, style }, this.$slots.default)
  }
}
