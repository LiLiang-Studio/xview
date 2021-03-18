<template>
  <div :class="classes" :style="styles">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'XRow',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },
  computed: {
    classes () {
      const prefixCls = 'x-row'
      const { align, justify, gutter } = this
      return [
        prefixCls,
        align && `${prefixCls}_${align}`,
        justify && `${prefixCls}_${justify}`,
        { gutter }
      ]
    },
    styles () {
      return this.gutter && { margin: `0 -${this.gutter / 2}px` }
    }
  }
}
</script>
