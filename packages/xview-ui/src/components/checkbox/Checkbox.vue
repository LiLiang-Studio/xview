<template>
  <label :class="classes" @click="onClick">
    <span tabindex="0" :class="[`${prefixCls}_box`, { 'is-checked': isChecked || indeterminate }]">
      <i v-if="indeterminate" class="x-icon-minus" />
      <i v-else-if="isChecked" class="x-icon-check" />
    </span>
    <span :class="`${prefixCls}_label`">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
import { N, S, B } from '../../types'
import { getSize, isDisabled } from './utils'
const NSB = [N, S, B]
export default {
  name: 'XCheckbox',
  inject: {
    xForm: { default: '' },
    xCheckboxGroup: { default: '' }
  },
  props: {
    value: NSB,
    label: NSB,
    trueLabel: { type: NSB, default: true },
    falseLabel: { type: NSB, default: false },
    disabled: B,
    border: B,
    size: S,
    indeterminate: B
  },
  data () {
    return {
      model: this.value,
      prefixCls: 'x-checkbox'
    }
  },
  computed: {
    isDisabled () {
      const { xCheckboxGroup } = this
      return isDisabled(this) || (xCheckboxGroup && xCheckboxGroup.isItemDisabled(this.label))
    },
    classes () {
      const { prefixCls } = this
      const size = getSize(this)
      return [
        prefixCls,
        size && `${prefixCls}_${size}`,
        {
          'is-border': this.border,
          'is-disabled': this.isDisabled
        }
      ]
    },
    isChecked () {
      const { xCheckboxGroup } = this
      return xCheckboxGroup
        ? xCheckboxGroup.model.indexOf(this.label) > -1
        : this.model === this.trueLabel
    }
  },
  watch: {
    value: 'updateModel',
    model (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    updateModel (val) {
      this.model = val
    },
    onClick () {
      if (!this.isDisabled) {
        const { xCheckboxGroup, trueLabel } = this
        if (xCheckboxGroup) {
          xCheckboxGroup.updateModel(this.label)
        } else {
          const val = this.model === trueLabel ? this.falseLabel : trueLabel
          this.updateModel(val)
          this.$emit('change', val)
        }
      }
    }
  }
}
</script>
