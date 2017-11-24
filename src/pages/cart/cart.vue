<template>
  <div>
    <div class="cart">
      <div class="cart_header">
        <router-link to="/main" class="goBack"></router-link>
        <span class="ft18">购物车</span>
        <div class="ft16">
          <router-link to="/cart/editCart">编辑</router-link>
        </div>
        <span class="pull_nav"></span>
      </div>
      <div class="cart_box">
        <div class="mycart">
          <div class="allprice"></div>
          <div class="mycart_li">
            <router-link to="/goodList">
              <div class="buy">
                <div class="joinbuy">
                  <p class="ft12">再买33.00元，即享58元包邮，真的不去凑个单？（顺丰、EMS不包邮）</p>
                </div>
                <div class="joinbuy-more ft12">去凑单&gt;&gt;</div>
              </div>
            </router-link>
            <div class="cart_tit">
              <input type="checkbox" id="checkboxInputWid58" checked class="checked">
              <label for="checkboxInputWid58">
                <span>东部大仓</span>
              </label>
            </div>
            <!-- 根据数据遍历生成的结构 -->
            <div class="order">
              <div class="pd12">
                <input type="checkbox" value="196576" name="goods" checked="" id="goodsCheck196576">
                <div class="cart_item">
                  <div class="single">
                    <div class="single_img">
                      <img src="" alt="">
                    </div>
                    <div class="single_cont">
                      <h1 class="h37">雷米高 驱虫一粒清 0.2g*4片</h1>
                      <p class="ft16">￥25</p>
                    </div>
                  </div>
                  <div class="count">
                    <div class="add">
                      <span>-</span>
                      <span>2</span>
                      <span class="last">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cart_header
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
    .ft16
      position absolute
      top 0
      right 2.5em
      color: #333
      font-size 16px
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


  .cart_box

    .mycart_li
      &>a
        height 50px
        display block
        .buy
          display table
          color red
          width 100%
          background-color #fff7ea
          .ft12
            font-size 12px
          .joinbuy
            margin 5px
            box-sizing border-box
          .joinbuy-more
            width 75px
            vertical-align middle
            display table-cell

      .cart_tit
        width 100%
        border-bottom 1px solid #ddd
        padding 12px
        span
          display inline-block
          background-color #26c269
          margin-left 20px
          height: 25px
          line-height 25px
          font-size 13px
          color: #fff
          padding 0 5px
          box-sizing border-box
        .checked
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 1px solid #26c269;
          border-radius: 50%;
          float: left;
          outline: 0!important;
          -webkit-appearance: none
          background: #26c269;

      .order
        border-bottom 1px solid #ddd
        div
          box-sizing border-box
        .pd12
          display flex
          width 100%
          padding-left 12px
          &>input
            background-color #26c269
            display inline-block
            width 20px
            height 20px
            border-radius 50%
            -webkit-appearance: none
            margin-top 40px
          .cart_item
            margin-left 30px
            padding 12px 0 12px
            .single
              display flex
              .single_img
                height 100px
                width 100px
                &>img
                  border: 1px solid #d7d7d7
                  height 100px
                  width 100px

              .single_cont
                margin-left 12px
                padding-right 12px
                .h37
                  font-size 13px
                  height 37px
                .ft16
                  color red
                  margin-top 20px
                  font-weight 600
                  font-size 16px

            .count
              width 100%
              .add
                border-top: 1px solid #d7d7d7
                border-bottom: 1px solid #d7d7d7
                margin-top 10px
                width 104px
                &>span
                  display: inline-block;
                  height: 25px;
                  line-height: 25px;
                  width: 30px;
                  text-align: center;
                  border-left: 1px solid #d7d7d7;
                .last
                  border-right 1px solid #d7d7d7
                  color red
</style>
