<template>
  <button class="x-button">ceshi</button>
</template>

<script>
export default {
  name: 'XButton',
  props: {
    size: {
      validator: v => ['medium', 'small', 'mini'].indexOf(v) > -1
    },
    type: {
      validator: v => ['primary', 'success', 'warning', 'danger', 'info', 'text'].indexOf(v) > -1
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    loading: Boolean,
    disabled: Boolean,
    icon: String,
    nativeType: {
      default: 'button',
      validator: v => ['button', 'submit', 'reset'].indexOf(v) > -1
    }
  }
}
</script>
