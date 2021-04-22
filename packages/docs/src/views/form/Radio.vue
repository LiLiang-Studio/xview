<template>
  <div style="padding:30px 15px;">
    <x-radio v-model="radio" label="1">备选项</x-radio>
    <x-radio v-model="radio" label="2">备选项</x-radio><br><br>

    <x-radio disabled v-model="radio1" label="禁用">备选项</x-radio>
    <x-radio disabled v-model="radio1" label="选中且禁用">备选项</x-radio><br><br>

    <x-radio-group v-model="radio2">
      <x-radio :label="3">备选项</x-radio>
      <x-radio :label="6">备选项</x-radio>
      <x-radio :label="9">备选项</x-radio>
    </x-radio-group><br>

    <div>
      <x-radio-group v-model="radio5">
        <x-radio-button label="上海"></x-radio-button>
        <x-radio-button label="北京"></x-radio-button>
        <x-radio-button label="广州"></x-radio-button>
        <x-radio-button label="深圳"></x-radio-button>
      </x-radio-group>
    </div>
    <div style="margin-top: 20px">
      <x-radio-group v-model="radio6" size="medium">
        <x-radio-button label="上海" ></x-radio-button>
        <x-radio-button label="北京"></x-radio-button>
        <x-radio-button label="广州"></x-radio-button>
        <x-radio-button label="深圳"></x-radio-button>
      </x-radio-group>
    </div>
    <div style="margin-top: 20px">
      <x-radio-group v-model="radio3" size="small">
        <x-radio-button label="上海"></x-radio-button>
        <x-radio-button label="北京" disabled ></x-radio-button>
        <x-radio-button label="广州"></x-radio-button>
        <x-radio-button label="深圳"></x-radio-button>
      </x-radio-group>
    </div>
    <div style="margin-top: 20px">
      <x-radio-group v-model="radio4" disabled size="mini">
        <x-radio-button label="上海"></x-radio-button>
        <x-radio-button label="北京"></x-radio-button>
        <x-radio-button label="广州"></x-radio-button>
        <x-radio-button label="深圳"></x-radio-button>
      </x-radio-group>
    </div><br>

    <div>
      <x-radio v-model="radio7" label="1" border>备选项1</x-radio>
      <x-radio v-model="radio7" label="2" border>备选项2</x-radio>
    </div>
    <div style="margin-top: 20px">
      <x-radio v-model="radio8" label="1" border size="medium">备选项1</x-radio>
      <x-radio v-model="radio8" label="2" border size="medium">备选项2</x-radio>
    </div>
    <div style="margin-top: 20px">
      <x-radio-group v-model="radio9" size="small">
        <x-radio label="1" border>备选项1</x-radio>
        <x-radio label="2" border disabled>备选项2</x-radio>
      </x-radio-group>
    </div>
    <div style="margin-top: 20px">
      <x-radio-group v-model="radio10" size="mini" disabled>
        <x-radio label="1" border>备选项1</x-radio>
        <x-radio label="2" border>备选项2</x-radio>
      </x-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '1',
      radio1: '选中且禁用',
      radio2: 3,
      radio5: '上海',
      radio6: '上海',
      radio3: '上海',
      radio4: '上海',
      radio7: '1',
      radio8: '1',
      radio9: '1',
      radio10: '1'
    }
  }
}
</script>
