<template>
  <li :class="[prefixCls, `is-${statusObj.status}`]" :style="statusObj.style">
    <div :class="`${prefixCls}_head`">
      <div :class="[`${prefixCls}_icon`, { 'is-text': !($slots.icon || icon) }]">
        <slot name="icon">
          <i v-if="icon" :class="icon" />
          <i v-else-if="statusIcon" :class="statusIcon" />
          <span v-else>{{ isSimple ? '' : statusObj.index + 1 }}</span>
        </slot>
      </div>
      <div :class="`${prefixCls}_line`" />
    </div>
    <div :class="`${prefixCls}_main`">
      <h4 :class="`${prefixCls}_title`">
        <slot name="title">{{ title }}</slot>
      </h4>
      <i v-if="isSimple" :class="['x-icon-arrow-right', `${prefixCls}_arrow`]" />
      <div v-else :class="`${prefixCls}_desc`">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
  </li>
</template>

<script>
const S = String
export default {
  name: 'XStep',
  inject: ['xSteps'],
  props: {
    title: S,
    description: S,
    icon: S,
    status: S
  },
  data () {
    return { statusObj: {}, prefixCls: 'x-step' }
  },
  computed: {
    statusIcon () {
      return ({ success: 'x-icon-check', error: 'x-icon-close' })[this.statusObj.status]
    },
    isSimple () {
      return (this.xSteps || {}).simple
    }
  },
  mounted () {
    const { xSteps } = this
    xSteps.addItem(this)
    this.$once('hook:beforeDestroy', () => {
      xSteps.removeItem(this)
    })
  },
  methods: {

  }
}
</script>
