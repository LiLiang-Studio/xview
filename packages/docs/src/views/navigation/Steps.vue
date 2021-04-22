<template>
  <div style="padding:30px 15px;">
    <x-steps :active="active" finish-status="success">
      <x-step title="步骤 1"></x-step>
      <x-step title="步骤 2"></x-step>
      <x-step title="步骤 3"></x-step>
    </x-steps><br><br>

    <x-button style="margin-top: 12px;" @click="next">下一步</x-button><br><br>

    <x-steps :space="200" :active="1" finish-status="success">
      <x-step title="已完成"></x-step>
      <x-step title="进行中"></x-step>
      <x-step title="步骤 3"></x-step>
    </x-steps><br><br>

    <x-steps :active="1">
      <x-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></x-step>
      <x-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></x-step>
      <x-step title="步骤 3" description="这段就没那么长了"></x-step>
    </x-steps><br><br>

    <x-steps :active="2" align-center>
      <x-step title="步骤1" description="这是一段很长很长很长的描述性文字"></x-step>
      <x-step title="步骤2" description="这是一段很长很长很长的描述性文字"></x-step>
      <x-step title="步骤3" description="这是一段很长很长很长的描述性文字"></x-step>
      <x-step title="步骤4" description="这是一段很长很长很长的描述性文字"></x-step>
    </x-steps><br><br>

    <x-steps :active="1">
      <x-step title="步骤 1" icon="x-icon-edit"></x-step>
      <x-step title="步骤 2" icon="x-icon-upload"></x-step>
      <x-step title="步骤 3" icon="x-icon-picture"></x-step>
    </x-steps><br><br>

    <div style="height: 300px;">
      <x-steps direction="vertical" :active="1">
        <x-step title="步骤 1"></x-step>
        <x-step title="步骤 2"></x-step>
        <x-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></x-step>
      </x-steps>
    </div><br><br>

    <x-steps :active="1" simple :space="200">
      <x-step title="步骤 1" icon="x-icon-edit"></x-step>
      <x-step title="步骤 2" icon="x-icon-upload"></x-step>
      <x-step title="步骤 3" icon="x-icon-picture"></x-step>
    </x-steps><br><br>

    <x-steps :active="1" finish-status="success" simple style="margin-top: 20px">
      <x-step title="步骤 1" ></x-step>
      <x-step title="步骤 2" ></x-step>
      <x-step title="步骤 3" ></x-step>
    </x-steps><br><br>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },

  methods: {
    next () {
      if (this.active++ > 2) this.active = 0
    }
  }
}
</script>
