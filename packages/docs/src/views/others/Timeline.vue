<template>
  <div style="padding:30px 15px;">
    <div class="block">
      <div class="radio">
        排序：<br>
        <x-radio-group v-model="reverse">
          <x-radio :label="true">倒序</x-radio>
          <x-radio :label="false">正序</x-radio>
        </x-radio-group>
      </div><br><br>

      <x-timeline :reverse="reverse">
        <x-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="activity.timestamp">
          {{activity.content}}
        </x-timeline-item>
      </x-timeline>
    </div><br><br>

    <div class="block">
      <x-timeline>
        <x-timeline-item
          v-for="(activity, index) in activities2"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp">
          {{activity.content}}
        </x-timeline-item>
      </x-timeline>
    </div><br><br>

    <div class="block">
      <x-timeline>
        <x-timeline-item timestamp="2018/4/12" placement="top">
          <x-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
          </x-card>
        </x-timeline-item>
        <x-timeline-item timestamp="2018/4/3" placement="top">
          <x-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/3 20:46</p>
          </x-card>
        </x-timeline-item>
        <x-timeline-item timestamp="2018/4/2" placement="top">
          <x-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
          </x-card>
        </x-timeline-item>
      </x-timeline>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      reverse: true,
      activities: [{
        content: '活动按期开始',
        timestamp: '2018-04-15'
      }, {
        content: '通过审核',
        timestamp: '2018-04-13'
      }, {
        content: '创建成功',
        timestamp: '2018-04-11'
      }],
      activities2: [{
        content: '支持使用图标',
        timestamp: '2018-04-12 20:46',
        size: 'large',
        type: 'primary',
        icon: 'x-icon-more'
      }, {
        content: '支持自定义颜色',
        timestamp: '2018-04-03 20:46',
        color: '#0bbd87'
      }, {
        content: '支持自定义尺寸',
        timestamp: '2018-04-03 20:46',
        size: 'large'
      }, {
        content: '默认样式的节点',
        timestamp: '2018-04-03 20:46'
      }]
    }
  }
}
</script>
