<template>
  <li :class="[c, `is-${statusObj.status}`]" :style="statusObj.style">
    <div :class="`${c}_head`">
      <div :class="[`${c}_icon`, { 'is-text': !($slots.icon || icon) }]">
        <slot name="icon">
          <i v-if="icon" :class="icon" />
          <i v-else-if="statusIcon" :class="statusIcon" />
          <span v-else>{{ isSimple ? '' : statusObj.index + 1 }}</span>
        </slot>
      </div>
      <div :class="`${c}_line`" />
    </div>
    <div :class="`${c}_main`">
      <h4 :class="`${c}_title`">
        <slot name="title">{{ title }}</slot>
      </h4>
      <i v-if="isSimple" :class="['x-icon-arrow-right', `${c}_arrow`]" />
      <div v-else :class="`${c}_desc`">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
  </li>
</template>

<script>
import { S } from '../../types'
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
    return { statusObj: {}, c: 'x-step' }
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
  }
}
</script>
