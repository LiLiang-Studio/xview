<template>
  <div class="x-checkbox-group">
    <slot />
  </div>
</template>

<script>
import { N, S, B, A } from '../../types'
export default {
  name: 'XCheckboxGroup',
  provide () {
    return { xCheckboxGroup: this }
  },
  props: {
    value: A,
    size: S,
    disabled: B,
    min: N,
    max: N
  },
  data () {
    return { model: this.value }
  },
  watch: {
    value (val) {
      this.model = val
    },
    model (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    updateModel (val) {
      const { model } = this
      const index = model.indexOf(val)
      if (index < 0) {
        model.push(val)
      } else {
        model.splice(index, 1)
      }
      this.$emit('change', model)
    },
    isItemDisabled (value) {
      const { model } = this
      const len = model.length
      if (len >= (this.max || Infinity)) {
        return model.indexOf(value) < 0
      } else if (len <= (this.min || 0)) {
        return model.indexOf(value) > -1
      }
    }
  }
}
</script>
