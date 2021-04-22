<template>
  <button :class="classes" :disabled="isDisabled" @click="onClick">
    <slot>{{label}}</slot>
  </button>
</template>

<script>
import { N, S, B } from '../../types'
import { getSize, isDisabled } from './utils'
export default {
  name: 'XCheckboxButton',
  inject: {
    xForm: { default: '' },
    xCheckboxGroup: { default: '' }
  },
  props: {
    label: [N, S, B],
    disabled: B
  },
  computed: {
    isDisabled () {
      const { xCheckboxGroup } = this
      return isDisabled(this) || (xCheckboxGroup && xCheckboxGroup.isItemDisabled(this.label))
    },
    classes () {
      const prefixCls = 'x-checkbox-button'
      const size = getSize(this)
      return [
        prefixCls,
        size && `${prefixCls}_${size}`,
        {
          'is-disabled': this.isDisabled,
          'is-active': this.xCheckboxGroup.model.indexOf(this.label) > -1
        }
      ]
    }
  },
  methods: {
    onClick () {
      if (!this.isDisabled) {
        this.xCheckboxGroup.updateModel(this.label)
      }
    }
  }
}
</script>
