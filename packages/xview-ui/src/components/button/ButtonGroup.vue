<template>
  <div class="x-button-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'XButtonGroup',
  props: {
    size: String
  },
  provide () {
    return {
      xButtonGroup: this
    }
  }
}
</script>
