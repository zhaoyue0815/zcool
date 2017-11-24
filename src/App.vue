<template>
  <div id="app">
    <div class="footNav" v-show="isShow">
      <ul>
        <li class="index-a"><router-link to="/main"></router-link></li>
        <li class="category-a"><router-link to="/category"></router-link></li>
        <li class="cart-a"><router-link to="/cart"></router-link></li>
        <li class="myepat-a"><router-link to="/user"></router-link></li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    /*toggleIsShow () {
      this.isShow = !this.isShow
    }*/
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footNav
    border-top: 1px solid #e7e7e7;
    height 45px
    line-height 45px
    width 100%
    position: fixed
    bottom 0
    left 0
    z-index 11
    background-color white
    &>ul
      height 55px
      &>li
        width 25%
        height 55px
        float: left
        box-sizing border-box
        padding-top 2px
        &>a
          height 40px
          width 42px
          text-align center
          display: block
          margin: 0 auto
          background-image url("./common/img/footnav.png")
          background-size: 234px 163px;
          background-repeat no-repeat
      .category-a
        &>a
          background-position: -85px -41px;
          &.active
            background-position: 0 -40px
      .cart-a
        &>a
          background-position: -85px -81px;
          &.active
            background-position: 0 -80px
      .myepat-a
        &>a
          background-position: -85px -122px;
          &.active
            background-position: 0 -120px
      .index-a
        &>a
          background-position: -85px 0;
          &.active
            background-position: 0 0;


</style>
