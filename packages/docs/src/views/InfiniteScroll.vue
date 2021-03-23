<template>
  <div style="padding:30px 15px;">
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
      <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
    </ul><br><br>

    <div
      class="infinite-list-wrapper"
      style="overflow:auto"
      infinite-scroll-delay="500"
      infinite-scroll-immediate
      v-infinite-scroll="load1"
      :infinite-scroll-disabled="disabled">
      <ul
        class="list">
        <li v-for="i in count1" :key="i" class="list-item">{{ i }}</li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 10,
      count1: 10,
      loading: false
    }
  },
  computed: {
    noMore () {
      return this.count1 >= 20
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    load () {
      this.count += 2
    },
    load1 () {
      this.loading = true
      setTimeout(() => {
        this.count1 += 2
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
  overflow: auto;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #e8f3fe;
  margin: 10px;
  color: #7dbcfc;
}
.infinite-list-wrapper {
  height: 300px;
  text-align: center;
  overflow: auto;
}
.infinite-list-wrapper .list {
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list-wrapper .list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #fff6f6;
  color: #ff8484;
}
.infinite-list-wrapper .list-item+.list-item {
  margin-top: 10px;
}
</style>
