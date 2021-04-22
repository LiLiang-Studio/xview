<template>
  <div style="padding:30px 15px;">
    <div>
      <x-tag>标签一</x-tag>
      <x-tag type="success">标签二</x-tag>
      <x-tag type="info">标签三</x-tag>
      <x-tag type="warning">标签四</x-tag>
      <x-tag type="danger">标签五</x-tag>
    </div><br>

    <div>
      <x-tag
        v-for="tag in tags"
        :key="tag.name"
        closable
        :type="tag.type">
        {{tag.name}}
      </x-tag>
    </div><br>

    <div>
      <x-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)">
        {{tag}}
      </x-tag>
      <input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        @keyup.enter="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      <x-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</x-button>
    </div><br>

    <div>
      <x-tag closable>默认标签</x-tag>
      <x-tag size="medium" closable>中等标签</x-tag>
      <x-tag size="small" closable>小型标签</x-tag>
      <x-tag size="mini" closable>超小标签</x-tag>
    </div><br>

    <div>
      <div class="tag-group">
        <span class="tag-group__title">Dark</span>
        <x-tag
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          effect="dark">
          {{ item.label }}
        </x-tag>
      </div><br>
      <div class="tag-group">
        <span class="tag-group__title">Plain</span>
        <x-tag
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          effect="plain">
          {{ item.label }}
        </x-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ],
      items: [
        { type: '', label: '标签一' },
        { type: 'success', label: '标签二' },
        { type: 'info', label: '标签三' },
        { type: 'danger', label: '标签四' },
        { type: 'warning', label: '标签五' }
      ],
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.focus()
      })
    },

    handleInputConfirm () {
      const inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style>
  .x-tag + .x-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .tag-group__title {
    margin-right: 10px;
  }
</style>
