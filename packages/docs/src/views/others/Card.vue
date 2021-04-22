<template>
  <div style="padding:30px 15px;">
    <x-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <x-button style="float: right; padding: 3px 0" type="text">操作按钮</x-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </x-card><br>

    <x-card class="box-card">
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </x-card><br>

    <x-row>
      <x-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
        <x-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <x-button type="text" class="button">操作按钮</x-button>
            </div>
          </div>
        </x-card>
      </x-col>
    </x-row><br>

    <x-row :gutter="12">
      <x-col :span="8">
        <x-card shadow="always">
          总是显示
        </x-card>
      </x-col>
      <x-col :span="8">
        <x-card shadow="hover">
          鼠标悬浮时显示
        </x-card>
      </x-col>
      <x-col :span="8">
        <x-card shadow="never">
          从不显示
        </x-card>
      </x-col>
    </x-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentDate: new Date().toLocaleString()
    }
  }
}
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }
</style>
