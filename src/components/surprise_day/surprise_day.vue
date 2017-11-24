<template>
  <div class="surprise">
    <div class="surprise_tit">
      <div class="fl tit_img">
        <img src="./fengQiang.png" alt="">
      </div>
      <div class="fl" style="margin-top: 1px;">距本场结束</div>
    </div>
    <div class="surprise_view" ref="surpriseView">
      <div class="surprise_wrapper" ref="wrap_div">

        <div class="sup_item" v-for="(good,index) in goods" :key="index">
          <div class="sup_block">
            <router-link to="/main/surprise">
              <div class="this_view">
                <img :src="good.image" alt="">
              </div>
              <div class="cred ft12">￥ {{good.sale_price}}</div>
              <p class="c999 ft12">{{good.little_price}}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    mounted () {
      if (!this.goods) {
        return
      }

    },
    props: ['goods'],
    watch: {
      goods (newGoods, oldGoods) {
        this.init_scroll()
      }
    },
    methods: {
      init_scroll () {
        this.$nextTick(() => {
          //动态算宽度
          const wrap_div = this.$refs.wrap_div
          const item_width = 98
          const space = 10
          const count = this.goods.length
          const width = (item_width+space) * count - space
          wrap_div.style.width = width +'px'

          this.$nextTick(() => {
            new BScroll(this.$refs.surpriseView, {
              click: true,
              scrollX: true
            })
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.surprise
  .surprise_tit
    width 100%
    height 60px
    padding 10px
    .tit_img
      &>img
        height 24px
        margin-left -20px
    .fl
      float: left

.surprise_view
  padding-left 5px
  margin-bottom 10px
  width 100%
  height 130px
  .surprise_wrapper
    display: flex
    width: 650px
    .sup_item
      flex-shrink 0
      margin-right 10px
      width 98px
      .sup_block
        margin 0 .5em
        &>a
          display: block
          .this_view
            background: url('./bg.png') no-repeat center  #f4f4f4
            background-size: 120px auto
            position: relative
            padding-top: 100%
            &>img
              width 100%
              position: absolute
              top: 0
              left: 0
              display block


          .ft12
            font-size 12px
            text-align center
          .cred
            color red
          .c999
            color: #999

</style>
