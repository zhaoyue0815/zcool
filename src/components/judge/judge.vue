<template>
  <div>
    <div class="judge">
      <div class="tit_judge">
        <div class="ftc">
          <img src="./judge.png" alt="">
        </div>
        <div class="right_text">
          <a href="javascript:;">好评率99.64%</a>
        </div>
      </div>
      <div class="div_judge">
        <ul class="judgeList clearfix">
          <li class="fl" v-for="(rating, index) in ratings" :key="index">
            <a href="javascript:;">
              <div class="fl_item">
                <div class="main_img">
                  <img :src="rating.image" alt="">
                  <div class="join_time">{{rating.time}}</div>
                </div>
                <div class="ft12">
                  <span class="fl">{{rating.username}}</span>
                  <span class="fr">{{rating.ownpet}}</span>
                </div>
                <div class="ft15">{{rating.text}}</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    /*data () {
      return {
        ratings: [
          {
            username: '盒**喵',
            ownpet: '中华田园猫',
            time: '加入E宠2年2月',
            text: '不知不觉，陪伴E宠三年多了。我家盒小喵也三岁多了。在这里购物，我觉得放心，安心，省心。质量有保障，售货服务也很贴心，及时。这不仅仅是个购物平台，更是爱猫人的天地。祝福E宠可以越走越好，有更多丰富的商品',
            image: 'https://img1.epetbar.com/2017-11/18/18/86ffc605cb5b19593b0b48eece20c4bc.jpg'
          },
          {
            username: '盒**喵',
            ownpet: '博美',
            time: '加入E宠2年2月',
            text: '不知不觉，陪伴E宠三年多了。我家盒小喵也三岁多了。在这里购物，我觉得放心，安心，省心。质量有保障，售货服务也很贴心，及时。这不仅仅是个购物平台，更是爱猫人的天地。祝福E宠可以越走越好，有更多丰富的商品',
            image: 'https://img1.epetbar.com/2017-09/18/15/71f6e192d9138b2dbeadf65a040d4a1c.jpg'
          },
          {
            username: '盒**喵',
            ownpet: '狸花猫',
            time: '加入E宠2年2月',
            text: '不知不觉，陪伴E宠三年多了。我家盒小喵也三岁多了。在这里购物，我觉得放心，安心，省心。质量有保障，售货服务也很贴心，及时。这不仅仅是个购物平台，更是爱猫人的天地。祝福E宠可以越走越好，有更多丰富的商品',
            image: 'https://img1.epetbar.com/2017-11/17/23/2633abab95daccd7f25e7ee744760072.jpg'
          },
          {
            username: '盒**喵',
            ownpet: '喜乐蒂',
            time: '加入e宠5年1月',
            text: '不知不觉，陪伴E宠三年多了。我家盒小喵也三岁多了。在这里购物，我觉得放心，安心，省心。质量有保障，售货服务也很贴心，及时。这不仅仅是个购物平台，更是爱猫人的天地。祝福E宠可以越走越好，有更多丰富的商品',
            image: 'https://img1.epetbar.com/2017-11/16/19/6e274aeb23338d1c569046e775cef8f9.jpg'
          }
        ]
      }
    },*/
    props: ['ratings']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.judge
  .tit_judge
    position relative
    .ftc
      text-align center
      img
        max-width 50%
        max-height 73px
        margin 0 auto
    .right_text
      position absolute
      top 20px
      right 0px
      background-image url("./i_right.png")
      background-repeat no-repeat
      background-size 8px 9px
      background-position-x right
      background-position-y center
      padding-right 10px
      color #999
      transform scale(0.84)
      font-size 12px
  .div_judge
    padding 0 10px 10px 0
    .judgeList
      overflow hidden
      .fl
        float left
        width 50%
        .fl_item
          background-color #f5f5f5
          padding-bottom 15px
          margin 10px 0 0 10px
          .main_img
            position relative
            overflow hidden
            height 150px
            &>img
              vertical-align middle
              width 100%
            .join_time
              width 100%
              position absolute
              bottom 0
              left 0
              color: #fff
              font-size 12px
              text-align center
              background-color rgba(0,0,0,0.4)

          .ft12
            margin-top 5px
            padding 0 5px 0
            font-size 12px
            overflow hidden
            .fl
              float left
            .fr
              float right
          .ft15
            margin-top 5px
            padding 0 5px 0
            font-size 13px
            color #999
            height 60px
            overflow hidden
</style>
