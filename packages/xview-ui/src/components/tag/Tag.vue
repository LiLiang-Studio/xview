<template>
  <span>测试</span>
</template>

<script>
export default {
  name: 'XTag',
  props: {
    type: {
      validator: v => ['success', 'info', 'warning', 'danger'].indexOf(v) > -1
    },
    closable: Boolean,
    disableTransitions: Boolean,
    hit: Boolean,
    color: String,
    size: {
      validator: v => ['medium', 'small', 'mini'].indexOf(v) > -1
    },
    effect: {
      default: 'light',
      validator: v => ['dark', 'light', 'plain'].indexOf(v) > -1
    }
  }
}
</script>
