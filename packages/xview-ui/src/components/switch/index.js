import { N, S, B } from '../../types'

const NSB = [N, S, B]

/** @type {import('vue').ComponentOptions} */
export const Switch = {
  name: 'XSwitch',
  inject: {
    xForm: { default: '' }
  },
  props: {
    value: NSB,
    disabled: B,
    width: { type: N, default: 40 },
    activeText: S,
    inactiveText: S,
    activeValue: { type: NSB, default: true },
    inactiveValue: { type: NSB, default: false },
    activeColor: S,
    inactiveColor: S
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
    const prefixCls = 'x-switch'
    const activeClass = 'is-active'
    const labelClass = `${prefixCls}_label`
    const { inactiveText, activeText, activeValue, model } = this
    const disabled = this.disabled || (this.xForm || {}).disabled
    const active = model === activeValue
    const onClick = () => {
      if (!disabled) {
        const val = model === activeValue ? this.inactiveValue : activeValue
        this.updateModel(val)
        this.$emit('change', val)
      }
    }
    return h('div', {
      class: [prefixCls, disabled && 'is-disabled'],
      on: { click: onClick }
    }, [
      inactiveText && h('span', {
        class: [labelClass, `${labelClass}-left`, !active && activeClass]
      }, inactiveText),
      h('span', {
        class: [`${prefixCls}_core`, active && activeClass],
        style: {
          width: `${this.width}px`,
          backgroundColor: active ? this.activeColor : this.inactiveColor
        }
      }),
      activeText && h('span', {
        class: [labelClass, `${labelClass}-right`, active && activeClass]
      }, activeText)
    ])
  }
}
