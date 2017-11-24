<template>
  <div>
    <ul class="column_list">
      <li v-for="(nav, index) in navs" :key="index">
        <router-link to="/grounp"><img :src="nav.image" alt=""></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['navs']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.column_list
  width 100%
  height 160px
  &>li
    width 25%
    height 80px
    float: left
    &>a
      &>img
        width 100%

</style>
