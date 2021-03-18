<template>
  <a :class="classes" :href="!disabled && href" @click="onClick">
    <i v-if="icon" :class="icon" />
    <span>
      <slot />
    </span>
  </a>
</template>

<script>
const S = String
const B = Boolean
export default {
  name: 'XLink',
  props: {
    type: { type: S, default: 'default' },
    underline: { type: B, default: true },
    disabled: B,
    icon: S,
    href: S
  },
  computed: {
    classes () {
      const prefixCls = 'x-link'
      return [
        prefixCls,
        `${prefixCls}_${this.type}`,
        {
          'is-underline': this.underline,
          'is-disabled': this.disabled
        }
      ]
    }
  },
  methods: {
    onClick (e) {
      if (!this.disabled) {
        this.$emit('click', e)
      }
    }
  }
}
</script>
