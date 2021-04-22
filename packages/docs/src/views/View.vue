<template>
  <div>
    <div class="links">
      <router-link v-for="_ in menus" :key="_.path" :to="`/component/${_.path}`">
        {{ _.meta.title }}
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { menus } from '../router'
export default {
  data () {
    return { menus: menus.reduce((t, _) => [...t, ..._.children], []) }
  }
}
</script>

<style lang="scss" scoped>
.links {
  background-color: #f8f8f8;
}
a {
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
  margin: .6em;
  text-decoration: none;
  color: #666;
  &.router-link-active, &:hover {
    color: blue;
  }
}
</style>
