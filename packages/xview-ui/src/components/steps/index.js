/** @typedef {import('vue').ComponentOptions} ComponentOptions */
import { N, S, B } from '../../types'

export { default as Step } from './Step.vue'

/** @type {ComponentOptions} */
export const Steps = {
  name: 'XSteps',
  provide () {
    return { xSteps: this }
  },
  props: {
    space: [N, S],
    direction: { type: S, default: 'horizontal' },
    active: { type: N, default: 0 },
    processStatus: { type: S, default: 'process' },
    finishStatus: { type: S, default: 'finish' },
    alignCenter: B,
    simple: B
  },
  data () {
    return { items: [] }
  },
  mounted () {
    this.$once('hook:beforeDestroy', this.$watch(
      () => [this.active, this.items.length],
      () => {
        this.$nextTick(() => {
          const { active, items, space, alignCenter, simple } = this
          const len = items.length
          items.forEach((_, i) => {
            _.statusObj = {
              index: i,
              status: _.status || (i === active
                ? this.processStatus
                : i < active ? this.finishStatus : 'wait'),
              style: {
                flexBasis: !simple && alignCenter
                  ? `${1 / len * 100}%`
                  : i < len - 1 && `${1 / (len - 1) * 100}%`,
                maxWidth: !simple && space
                  ? `${space}px`
                  : i === len - 1 ? `${1 / len * 100}%` : 'none'
              }
            }
          })
        })
      },
      { immediate: true }
    ))
  },
  methods: {
    addItem (item) {
      this.items.push(item)
    },
    removeItem (item) {
      this.items.splice(this.items.indexOf(item), 1)
    }
  },
  render (h) {
    const prefixCls = 'x-steps'
    const { simple } = this
    return h('ul', {
      class: [
        prefixCls,
        !simple && `${prefixCls}_${this.direction}`,
        {
          'is-simple': simple,
          'is-center': !simple && this.alignCenter
        }
      ]
    }, this.$slots.default)
  }
}
