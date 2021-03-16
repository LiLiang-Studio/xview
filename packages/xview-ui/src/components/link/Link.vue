<template>
  <a>测试</a>
</template>

<script>
export default {
  name: 'XLink',
  props: {
    type: {
      default: 'default',
      validator: v => ['primary', 'success', 'warning', 'danger', 'info'].indexOf(v) > -1
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    icon: String
  }
}
</script>
