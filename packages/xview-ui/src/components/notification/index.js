import Vue from 'vue'
import { isStr, N, S, B, F, O } from '../../types'
import { getMaxZIndex } from '../../utils'

const prefixCls = 'x-notification'

/** @type {import('vue').ComponentOptions} */
const Message = {
  name: 'XNotification',
  props: {
    title: S,
    message: [S, O],
    type: S,
    iconClass: S,
    dangerouslyUseHTMLString: B,
    customClass: S,
    duration: { type: N, default: 4500 },
    showClose: { type: B, default: true },
    onClose: F,
    onClick: F
  },
  mounted () {
    if (this.duration) {
      this.tid = setTimeout(this.close, this.duration)
    }
  },
  methods: {
    close () {
      this.$emit('close')
      this.onClose && this.onClose(this)
    }
  },
  render (h) {
    const { type, message, title, showClose } = this
    const msgClass = `${prefixCls}_message`
    const iconClass = this.iconClass || (type && `x-icon-${type}`)
    return h('div', { class: [prefixCls, this.customClass] }, [
      h('div', {
        class: [
          `${prefixCls}_inner`,
          type && `${prefixCls}_${type}`
        ]
      }, [
        iconClass && h('i', {
          class: [iconClass, `${prefixCls}_icon`, type && `is-${type}`]
        }),
        h('div', { class: `${prefixCls}_content` }, [
          title && h('h4', { class: `${prefixCls}_title` }, title),
          this.dangerouslyUseHTMLString && isStr(message)
            ? h('div', { class: msgClass, domProps: { innerHTML: message } })
            : h('div', { class: msgClass }, isStr(message) ? message : [message])
        ]),
        showClose && h('i', {
          class: ['x-icon-close', `${prefixCls}_close`],
          on: {
            click: this.close
          }
        })
      ])
    ])
  }
}

let vm
let key = 0
const getVM = () => {
  if (!vm) {
    vm = new Vue({
      data () {
        return { items: [], zIndex: 0 }
      },
      watch: {
        'items.length' (newVal, oldVal) {
          if (newVal > oldVal) {
            this.zIndex = getMaxZIndex()
          }
        }
      },
      mounted () {
        document.body.appendChild(this.$el)
        this.$once('hook:beforeDestroy', () => {
          const { parentNode } = this.$el || {}
          parentNode && parentNode.removeChild(this.$el)
        })
      },
      methods: {
        addItem (props = {}) {
          const item = { props, ui: Message, key: key++ }
          this.items.push(item)
          return {
            close: () => {
              const { items } = this
              const index = items.indexOf(item)
              if (index > -1) {
                items.splice(index, 1)
              }
            }
          }
        },
        removeAll () {
          this.items = []
        }
      },
      render (h) {
        return h('div', {
          class: `${prefixCls}-wrapper`,
          style: { zIndex: this.zIndex }
        }, [
          h('transition-group', {
            props: { tag: 'div', name: prefixCls }
          }, this.items.map((_, i) => {
            return h(_.ui, {
              key: _.key,
              props: _.props,
              on: {
                close: () => this.items.splice(i, 1)
              }
            }, [this.$slots.default])
          }))
        ])
      }
    }).$mount()
  }
  return vm
}

const addMessage = (options, type) => {
  if (isStr(options)) {
    options = { message: options }
  }
  if (type) {
    options.type = type
  }
  return getVM().addItem(options)
}

const createMessage = options => addMessage(options)

;['success', 'warning', 'info', 'error'].forEach(type => {
  createMessage[type] = options => addMessage(options, type)
})

createMessage.closeAll = () => {
  getVM().removeAll()
}

export default createMessage
