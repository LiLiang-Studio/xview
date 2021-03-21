/** @typedef {import('vue').ComponentOptions} ComponentOptions */

const S = String
const B = Boolean
const N = Number
const NSB = [N, S, B]
const prefixCls = 'x-radio'
const getSize = vm => {
  return vm.size || (vm.xRadioGroup || {}).size || (vm.xForm || {}).size || (vm.$XVIEW || {}).size
}
const isDisabled = vm => {
  return vm.disabled || (vm.xRadioGroup || {}).disabled || (vm.xForm || {}).disabled
}

/** @type {ComponentOptions} */
export const Radio = {
  name: 'XRadio',
  inject: {
    xForm: { default: '' },
    xRadioGroup: { default: '' }
  },
  props: {
    value: NSB,
    label: NSB,
    disabled: B,
    border: B,
    size: S
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
  render (h) {
    const { border } = this
    const size = border && getSize(this)
    const disabled = isDisabled(this)
    const isActive = this.xRadioGroup ? this.xRadioGroup.value === this.label : this.model === this.label
    const onClick = () => {
      if (!disabled) {
        if (this.xRadioGroup) {
          this.xRadioGroup.updateModel(this.label)
        } else {
          this.model = this.label
        }
      }
    }
    return h('label', {
      class: [
        prefixCls,
        size && `${prefixCls}_${size}`,
        {
          'is-border': border,
          'is-disabled': disabled,
          'is-active': isActive
        }
      ],
      on: { click: onClick }
    }, [
      h('span', { class: `${prefixCls}_radio` }, [
        h('transition', { props: { name: prefixCls } }, [
          isActive && h('span', { class: `${prefixCls}_dot` })
        ])
      ]),
      h('span', { class: `${prefixCls}_label` }, this.$slots.default || this.label)
    ])
  }
}

/** @type {ComponentOptions} */
export const RadioButton = {
  name: 'XRadioButton',
  inject: {
    xForm: { default: '' },
    xRadioGroup: { default: '' }
  },
  props: {
    label: [S, N],
    disabled: B
  },
  render (h) {
    const btnCls = `${prefixCls}-button`
    const size = getSize(this)
    const disabled = isDisabled(this)
    const onClick = () => {
      !disabled && this.xRadioGroup.updateModel(this.label)
    }
    return h('button', {
      class: [
        btnCls,
        size && `${btnCls}_${size}`,
        {
          'is-disabled': disabled,
          'is-active': this.xRadioGroup.value === this.label
        }
      ],
      on: { click: onClick }
    }, this.$slots.default || this.label)
  }
}

/** @type {ComponentOptions} */
export const RadioGroup = {
  name: 'XRadioGroup',
  provide () {
    return {
      xRadioGroup: this
    }
  },
  props: {
    value: NSB,
    size: S,
    disabled: B
  },
  data () {
    return { model: this.value }
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
    }
  },
  render (h) {
    return h('div', this.$slots.default)
  }
}
