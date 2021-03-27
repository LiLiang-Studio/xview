import { throttle } from '../../utils'
import { N, S } from '../../types'

/** @type {import('vue').ComponentOptions} */
export const Backtop = {
  name: 'XBacktop',
  props: {
    target: S,
    right: { type: N, default: 40 },
    bottom: { type: N, default: 40 },
    visiblilityHeight: { type: N, default: 200 }
  },
  data () {
    return { visible: false }
  },
  mounted () {
    let container = document
    let el = document.documentElement
    const { target } = this
    if (target) {
      el = document.querySelector(target)
      if (!el) {
        throw new Error(`target is not existed: ${target}`)
      }
      container = el
    }
    const onScroll = throttle(() => {
      this.visible = el.scrollTop >= this.visiblilityHeight
    }, 200)
    container.addEventListener('scroll', onScroll)
    this.$once('hook:beforeDestroy', () => {
      container.removeEventListener('scroll', onScroll)
    })
    this.el = el
    this.container = container
  },
  render (h) {
    const prefixCls = 'x-backtop'
    /** @param {MouseEvent} e */
    const onClick = e => {
      e.stopPropagation()
      const { el } = this
      const step = el.scrollTop / 20
      const rAF = window.requestAnimationFrame
      const fn = () => {
        if (el.scrollTop > 0) {
          el.scrollTop -= step
          rAF(fn)
        } else {
          el.scrollTop = 0
        }
      }
      rAF(fn)
      this.$emit('click', e)
    }
    return h('transition', { props: { name: prefixCls } }, [
      this.visible && h('div', {
        class: prefixCls,
        style: { bottom: `${this.bottom}px`, right: `${this.right}px` },
        on: { click: onClick }
      }, [
        this.$slots.default || h('i', { class: 'x-icon-caret-top' })
      ])
    ])
  }
}
