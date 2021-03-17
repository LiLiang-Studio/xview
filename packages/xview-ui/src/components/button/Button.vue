<template>
  <button :class="classes" :type="nativeType" :disabled="disabledBtn || loading" v-bind="$attrs" v-on="$listeners">
    <i v-if="icon && !loading" :class="icon" />
    <i v-if="loading" class="x-icon-loading" />
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script>
const S = String
const B = Boolean
export default {
  name: 'XButton',
  inject: {
    xForm: { default: '' }
  },
  props: {
    size: S,
    type: { type: S, default: 'default' },
    plain: B,
    round: B,
    circle: B,
    loading: B,
    disabled: B,
    icon: S,
    nativeType: { type: S, default: 'button' }
  },
  computed: {
    disabledBtn () {
      return this.disabled || (this.xForm || {}).disabled
    },
    classes () {
      const prefixCls = 'x-button'
      const { type } = this
      const btnSize = this.size || (this.xForm || {}).size || (this.$XVIEW || {}).size
      return [
        prefixCls,
        `${prefixCls}_${type}`,
        {
          [`${prefixCls}_${btnSize}`]: btnSize,
          'is-plain': this.plain,
          'is-loading': this.loading,
          'is-round': this.round,
          'is-circle': this.circle,
          'is-disabled': this.disabledBtn
        }
      ]
    }
  }
}
</script>
