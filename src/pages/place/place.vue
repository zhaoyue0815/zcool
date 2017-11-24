<template>
  <div>
    <div class="place_header">
      <router-link to="/main" class="goBack"></router-link>
      <span class="ft18">选择收货地区</span>
      <span class="pull_nav"></span>
    </div>
    <div class="cat_dog">
      <router-link to="/main/cat">
        <span>猫猫站</span>
      </router-link>
      <router-link to="/main">
        <span class="on">狗狗站</span>
      </router-link>
      <router-link to="/main/cat">
        <span>水族站</span>
      </router-link>
    </div>
    <div class="address_box">
      <div class="this">
        <span>当前默认地址：</span>
        <span>{{province}} {{city}} {{area}}</span>
      </div>
      <v-distpicker type="mobile" address-header="customize"
                    address-container="liItem" @selected="backMain"
                    @province="selectSheng" @city="selectShi" @area="selectDi"></v-distpicker>
      <!--<ul class="placeList">
        <li v-for="(add, index) in place">{{add.name}}</li>
      </ul>-->
    </div>
  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
  import {mapState} from 'vuex'
  export default {
    mounted () {
      this.$store.dispatch('getPlace')
    },

    computed: {
      ...mapState(['place'])
    },
    data () {
      return {
        province: "",
        city: "",
        area: ""
      }
    },
    methods: {
      selectSheng (data) {
        this.province = data.value
      },
      selectShi (data) {
        this.city = data.value
      },
      selectDi (data) {
        this.area = data.value
      },
      backMain () {
        console.log(this.$root,'place');

        this.$root.id = this.province
        window.location.hash = '/main'
      }
    },
    components: {
      VDistpicker
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
*
  box-sizing border-box
  .place_header
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

  .cat_dog
    overflow: hidden;
    padding 10px
    &>a
      width 33.33%
      display block
      float left
      .on
        color #fff
        background-color #ff0000
      &>span
        line-height 1.6
        border-radius 5px
        color #666
        font-size 15px
        display block
        padding 5px 0
        margin 0 10px
        text-align center
        background-color #b9b9b9

  .address_box
    .this
      font-size 14px
      padding 10px
      background: #ffe6d9
      border-bottom: 1px solid #e7e7e7
    .customize
      display none

    .liItem li
      color #333
      padding 10px
      font-size 13px
      border-bottom: 1px solid #e7e7e7
</style>
