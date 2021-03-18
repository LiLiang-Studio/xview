<template>
  <transition name="x-tag">
    <span :class="classes" :style="{ backgroundColor: this.color }" v-on="$listeners">
      <slot />
      <i v-if="closable" class="x-icon-close x-tag_close" @click="$emit('close')" />
    </span>
  </transition>
</template>

<script>
const S = String
const B = Boolean
export default {
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
  computed: {
    classes () {
      const prefixCls = 'x-tag'
      const { type } = this
      const size = this.size || (this.$XVIEW || {}).size
      return [
        prefixCls,
        type && `${prefixCls}_${type}`,
        size && `${prefixCls}_${size}`,
        `${prefixCls}_${this.effect}`,
        {
          'is-hit': this.hit,
          'is-fade': !this.disableTransitions
        }
      ]
    }
  }
}
</script>
