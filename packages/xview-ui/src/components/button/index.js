/**
 * @typedef {import('vue').ComponentOptions} ComponentOptions
 */

import { S, B } from '../../types'

/** @type {ComponentOptions} */
export const Button = {
  name: 'XButton',
  inject: {
    xForm: { default: '' },
    xButtonGroup: { default: '' }
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
  render (h) {
    const disabledBtn = this.disabled || (this.xForm || {}).disabled
    const prefixCls = 'x-button'
    const size = this.size || (this.xButtonGroup || {}).size || (this.xForm || {}).size || (this.$XVIEW || {}).size
    const { loading, icon } = this
    const classes = [
      prefixCls,
      `${prefixCls}_${this.type}`,
      {
        [`${prefixCls}_${size}`]: size,
        'is-plain': this.plain,
        'is-loading': loading,
        'is-round': this.round,
        'is-circle': this.circle,
        'is-disabled': disabledBtn
      }
    ]
    const vnodes = this.$slots.default
    return h('button', {
      class: classes,
      attrs: {
        type: this.nativeType,
        disabled: disabledBtn || loading
      },
      on: this.$listeners
    }, [
      icon && !loading && h('i', { class: icon }),
      loading && h('i', { class: 'x-icon-loading' }),
      vnodes && h('span', vnodes)
    ])
  }
}

/** @type {ComponentOptions} */
export const ButtonGroup = {
  name: 'XButtonGroup',
  props: {
    size: S
  },
  provide () {
    return {
      xButtonGroup: this
    }
  },
  render (h) {
    return h('div', { class: 'x-button-group' }, this.$slots.default)
  }
}
