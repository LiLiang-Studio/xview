<template>
  <div style="padding:30px 15px;">
    <x-checkbox v-model="checked">备选项</x-checkbox><br><br>
    <div>
      <x-checkbox v-model="checked1" disabled>备选项1</x-checkbox>
      <x-checkbox v-model="checked2" disabled>备选项</x-checkbox>
    </div><br><br>

    <x-checkbox-group v-model="checkList">
      <x-checkbox label="复选框 A"></x-checkbox>
      <x-checkbox label="复选框 B"></x-checkbox>
      <x-checkbox label="复选框 C"></x-checkbox>
      <x-checkbox label="禁用" disabled></x-checkbox>
      <x-checkbox label="选中且禁用" disabled></x-checkbox>
    </x-checkbox-group><br><br>
    <div>
      <x-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</x-checkbox>
      <div style="margin: 15px 0;"></div>
      <x-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <x-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</x-checkbox>
      </x-checkbox-group>
    </div><br><br>
    <x-checkbox-group
      v-model="checkedCities"
      :min="1"
      :max="2">
      <x-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</x-checkbox>
    </x-checkbox-group><br><br>
    <div>
      <x-checkbox-group v-model="checkboxGroup1">
        <x-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</x-checkbox-button>
      </x-checkbox-group>
    </div><br><br>
    <div style="margin-top: 20px">
      <x-checkbox-group v-model="checkboxGroup2" size="medium">
        <x-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</x-checkbox-button>
      </x-checkbox-group>
    </div><br><br>
    <div style="margin-top: 20px">
      <x-checkbox-group v-model="checkboxGroup3" size="small">
        <x-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</x-checkbox-button>
      </x-checkbox-group>
    </div><br><br>
    <div style="margin-top: 20px">
      <x-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
        <x-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</x-checkbox-button>
      </x-checkbox-group>
    </div><br><br>
    <div>
      <x-checkbox v-model="checked3" label="备选项1" border></x-checkbox>
      <x-checkbox v-model="checked4" label="备选项2" border></x-checkbox>
    </div><br><br>
    <div style="margin-top: 20px">
      <x-checkbox v-model="checked5" label="备选项1" border size="medium"></x-checkbox>
      <x-checkbox v-model="checked6" label="备选项2" border size="medium"></x-checkbox>
    </div><br><br>
    <div style="margin-top: 20px">
      <x-checkbox-group v-model="checkboxGroup5" size="small">
        <x-checkbox label="备选项1" border></x-checkbox>
        <x-checkbox label="备选项2" border disabled></x-checkbox>
      </x-checkbox-group>
    </div><br><br>
    <div style="margin-top: 20px">
      <x-checkbox-group v-model="checkboxGroup6" size="mini" disabled>
        <x-checkbox label="备选项1" border></x-checkbox>
        <x-checkbox label="备选项2" border></x-checkbox>
      </x-checkbox-group>
    </div>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  data () {
    return {
      checked: true,
      checked1: false,
      checked2: true,
      checkList: ['选中且禁用', '复选框 A'],
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true,
      checkboxGroup1: ['上海'],
      checkboxGroup2: ['上海'],
      checkboxGroup3: ['上海'],
      checkboxGroup4: ['上海'],
      checked3: true,
      checked4: false,
      checked5: false,
      checked6: true,
      checkboxGroup5: [],
      checkboxGroup6: []
    }
  },
  methods: {
    handleCheckAllChange (val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  }
}
</script>
