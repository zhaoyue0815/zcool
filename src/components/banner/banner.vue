<template>
  <div>
    <mt-swipe :auto="2500">
      <mt-swipe-item><img src="./1.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="./2.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="./3.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="./4.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="./5.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mint-swipe
    width 100%
    height 160px
    .mint-swipe-items-wrap
      width 100%
      height 100%
      .mint-swipe-item
        &>img
          width 100%
          height 100%
</style>
