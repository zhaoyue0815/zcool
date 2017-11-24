<template>
  <div>
    <div class="cloth_header">
      <router-link to="/main" class="goBack"></router-link>
      <span class="ft18">服饰城</span>
      <span class="pull_nav"></span>
    </div>
    <div class="cloth_banner">
      <img src="https://img2.epetbar.com/nowater/2017-10/27/19/9f0ebf40d72b6e1e21b23d477cd07f3a.jpg" alt="">
    </div>
    <div class="cloth_nav">
      <ul class="circle">
        <li class="fl">
          <img src="https://img2.epetbar.com/nowater/2016-12/23/16/419cbc0384400cb4445568672c4f7b36.jpg" alt="">
        </li>
        <li class="fl">
          <img src="https://img2.epetbar.com/nowater/2016-12/23/16/419cbc0384400cb4445568672c4f7b36.jpg" alt="">
        </li>
        <li class="fl">
          <img src="https://img2.epetbar.com/nowater/2016-12/23/16/419cbc0384400cb4445568672c4f7b36.jpg" alt="">
        </li>
        <li class="fl">
          <img src="https://img2.epetbar.com/nowater/2016-12/23/16/419cbc0384400cb4445568672c4f7b36.jpg" alt="">
        </li>
        <li class="fl">
          <img src="https://img2.epetbar.com/nowater/2016-12/23/16/419cbc0384400cb4445568672c4f7b36.jpg" alt="">
        </li>
        <li class="fl">
          <img src="https://img2.epetbar.com/nowater/2016-12/23/16/419cbc0384400cb4445568672c4f7b36.jpg" alt="">
        </li>
        <li class="fl">
          <img src="https://img2.epetbar.com/nowater/2016-12/23/16/419cbc0384400cb4445568672c4f7b36.jpg" alt="">
        </li>
        <li class="fl">
          <img src="https://img2.epetbar.com/nowater/2016-12/26/16/7a36a3a3b2ed66a888462a0ceaa702ef.png" alt="">
        </li>
      </ul>
      <div class="kuai">
        <div class="kuai_img">
          <img src="https://img2.epetbar.com/nowater/2017-09/20/17/22bf3a2c0f094e861ebd86491627945a.jpg" alt="">
        </div>
        <div class="kuai_img">
          <img src="https://img2.epetbar.com/nowater/2017-09/20/17/22bf3a2c0f094e861ebd86491627945a.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
*
  box-sizing border-box
  .cloth_header
    height 50px
    line-height 50px
    padding 0 1em
    background-color #fff
    text-align center
    color #333
    position relative
    .goBack
      width 20px
      height 20px
      position absolute
      display block
      background url("./back.png") no-repeat
      margin-top 16px
      background-size 10px 17px
    .ft18
      display inline-block
      width 90%
      font-size 18px
      margin 0 auto
    .pull_nav
      position absolute
      top 0
      right 12px
      margin-top 14px
      display block
      width 20px
      height 20px
      background url("./pull.png") no-repeat
      background-size 20px 20px


  .cloth_banner
    height 100%
    width 100%
    &>img
      vertical-align middle
      width 100%
  .cloth_nav
    .circle
      padding-bottom 5px
      padding-top 15px
      overflow hidden
      &>li
        float left
        width 25%
        margin-bottom 10px
        padding 0 15px
        &>img
          width 100%
          border-radius 50%
          vertical-align middle

    .kuai
      padding 0 2%
      width 100%
      overflow hidden
      .kuai_img
        float left
        width 48%
        margin 0 1%
        &>img
          vertical-align middle
          width 100%
</style>
