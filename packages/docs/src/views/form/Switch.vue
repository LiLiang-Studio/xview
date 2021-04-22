<template>
  <div style="padding:30px 15px;">
    <x-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </x-switch><br><br>

    <x-switch
      v-model="value1"
      active-text="按月付费"
      inactive-text="按年付费">
    </x-switch><br><br>
    <x-switch
      style="display: block"
      v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="按月付费"
      inactive-text="按年付费">
    </x-switch><br><br>

    <x-switch
      v-model="value3"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-value="100"
      inactive-value="0"
      :active-text="value3">
    </x-switch><br><br>

    <x-switch
      v-model="value4"
      disabled>
    </x-switch><br><br>
    <x-switch
      v-model="value5"
      disabled>
    </x-switch>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: true,
      value1: true,
      value2: true,
      value3: '100',
      value4: true,
      value5: false
    }
  }
}
</script>
