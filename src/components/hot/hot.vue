<template>
  <div>
    <div class="column_hot">
      <div class="tit_div">
        <div class="ftc">
          <router-link to="/main">
            <img src="./hot.jpg" alt="">
          </router-link>
        </div>
      </div>

      <div class="img_div" v-if="hots">
        <div class="img_left">
          <router-link to="/main/menu">
            <img :src="hots.left.image" alt="">
          </router-link>
        </div>
        <div class="img_right">
          <router-link to="/sale">
            <img :src="hots.rightTop.image" alt="">
          </router-link>
          <router-link to="/sale">
            <img :src="hots.rightBottom.image" alt="">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['hots']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.column_hot
  width 100%
  .tit_div
    position relative
    .ftc
      text-align center
      img
        max-width 100%
  .img_div
    display flex
    border-top: 1px solid #e7e7e7
    .img_left
      width 42.53%
      &>a
        display block
        &>img
          vertical-align middle
          width 100%
    .img_right
      width 57.33%
      &>a
        display block
        &>img
          vertical-align middle
          width 100%
</style>
