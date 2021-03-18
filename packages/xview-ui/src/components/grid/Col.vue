<template>
  <div :class="classes" :style="styles">
    <slot />
  </div>
</template>

<script>
import { getParentComponent } from '../../utils'
import { addStylesheet } from './utils'
const N0 = { type: Number, default: 0 }
export default {
  name: 'XCol',
  props: {
    span: { type: Number, default: 24 },
    offset: N0,
    push: N0,
    pull: N0,
    xs: {},
    sm: {},
    md: {},
    lg: {},
    xl: {}
  },
  computed: {
    classes () {
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
      return classes
    },
    styles () {
      const par = getParentComponent(this, 'XRow')
      const { gutter } = par || {}
      const padding = `${gutter / 2}px`
      return gutter && { paddingLeft: padding, paddingRight: padding }
    }
  },
  mounted () {
    addStylesheet()
  }
}
</script>
