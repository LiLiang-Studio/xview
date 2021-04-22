<template>
  <div style="padding:30px 15px;">
    <x-row :gutter="30" class="demo-avatar demo-basic">
      <x-col :span="12">
        <div class="sub-title">circle</div>
        <div class="demo-basic--circle">
          <div class="block"><x-avatar :size="50" :src="circleUrl"></x-avatar></div>
          <div class="block" v-for="size in sizeList" :key="size">
            <x-avatar :size="size" :src="circleUrl"></x-avatar>
          </div>
        </div>
      </x-col>
      <x-col :span="12">
        <div class="sub-title">square</div>
        <div class="demo-basic--circle">
          <div class="block"><x-avatar shape="square" :size="50" :src="squareUrl"></x-avatar></div>
          <div class="block" v-for="size in sizeList" :key="size">
            <x-avatar shape="square" :size="size" alt="头像" :src="squareUrl"></x-avatar>
          </div>
        </div>
      </x-col>
    </x-row><br>

    <div class="demo-type">
      <div>
        <x-avatar icon="x-icon-user-solid"></x-avatar>
      </div>
      <div>
        <x-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></x-avatar>
      </div>
      <div>
        <x-avatar> user </x-avatar>
      </div>
    </div><br>

    <div class="demo-type">
      <x-avatar :size="60" src="https://empty" @error="errorHandler">
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
      </x-avatar>
    </div><br>

    <div class="demo-fit">
      <div class="block" v-for="fit in fits" :key="fit">
          <span class="title">{{ fit }}</span>
          <x-avatar shape="square" :size="100" :fit="fit" :src="url"></x-avatar>
      </div>
    </div><br>
  </div>
</template>

<script>
export default {
  data () {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      sizeList: ['large', 'medium', 'small'],
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  methods: {
    errorHandler () {
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-basic--circle {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.demo-type {
  display: flex;
}
.demo-fit {
  display: flex;
  text-align: center;
  justify-content: space-between;
  .block {
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
  }
}
</style>
