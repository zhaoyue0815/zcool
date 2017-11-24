<template>
  <div>
    <div class="category">
      <div class="allkind">
        <div class="header">
          <div class="sort ft">
            <!--<router-link to="/category/tab1"><span class="on">分类</span></router-link>-->
            <a @click="toggleShow" href="javascript:;" :class="isShow ? 'on':''"><span >分类</span></a>
          </div>
          <div class="brand ft">
           <!-- <router-link to="/category/tab2"><span>品牌</span></router-link>-->
            <a @click="toggleShow" href="javascript:;" :class="!isShow ? 'on':''"><span>品牌</span></a>
          </div>
        </div>
        <div id="tab1" v-show="isShow" class="kindbox">
            <div class="leftbox">
              <ul class="sortList">
                <li v-for="(tip, index) in category" :key="index"
                    :class="defaultIndex==index ? 'on': ''" @click="changeIndex(index)">
                  {{tip.title}}
                </li>
              </ul>
            </div>
            <div class="rightbox">
              <!-- 得到默认index的数组，遍历得到右侧显示的对应对象 -->
              <div class="sort-detail-list" v-for="(viewSort, index) in viewSorts" :key="index">
                <div class="sort-recom">
                  <!-- 根据得到右侧显示的对象的type属性遍历生成右侧页面的上下结构 -->
                  <div class="hot-recom" v-for="(recom, index) in viewSort.type">
                    <router-link to="/goodlist">
                      {{recom.title}}
                      <img src="" alt="">
                    </router-link>
                    <!-- 判断是商品列表还是品牌列表 -->
                    <ul class="goodList" :class="index===0 ? 'goodList':'bandList'">
                      <li class="fl" v-for="(li, index) in recom.list" :key="index">
                        <div class="img_wrap">
                          <img :src="li.avator" alt="">
                        </div>
                        <p>{{li.name}}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div v-show="!isShow" id="tab2" class="brandsbox">
          <div class="brandList" v-for="(brand, index) in brands" :key="index">
            <div class="tit">
              <span class="c999">—— {{brand.title}} ——</span>
            </div>
            <div class="list">
              <ul>
                <li class="fl" v-for="(li, index) in brand.list">
                  <div class="fl_img">
                    <img :src="li.avator" alt="">
                  </div>
                  <p class="ft13">{{li.name}}</p>
                  <p class="ft12">{{li.guojia}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import axios from 'axios'
  export default {
    mounted () {
      axios.get('/api/category')
        .then(response => {
          const res = response.data
          if (res.code === 0){
            const category = res.data
            this.category = category
          }
        })
      axios.get('/api/brands')
        .then(response => {
          const res = response.data
          if (res.code === 0){
            const brands = res.data
            this.brands = brands
          }
        })
    },
    data () {
      return {
        defaultSort: [],
        defaultIndex: 1,
        category: [],
        isShow: true,
        brands: []
      }
    },
    computed: {
      viewSorts () {
        return this.category.filter((item, index) => {
          return this.defaultIndex === index
        })
      }
    },
    methods: {
      toggleShow () {
        this.isShow = !this.isShow
      },
      changeIndex (newIndex) {
        this.defaultIndex = newIndex
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
*
  box-sizing border-box

.allkind

  .header
    position fixed
    top 0
    left 0
    right 0
    padding 0 15px
    background-color #fff
    border-bottom 1px solid #cbcbcb
    height 40px
    .ft
      float left
      height 40px
      line-height 40px
      font-size 13px
      font-weight 700
      width 50%
      box-sizing border-box
      &>a
        display inline-block
        &.on
          color #ed4404
          border-bottom solid 2px #ed4404
        &>span
          font-weight 700
          display inline-block
          height 28px
    .sort
      padding-right 5%
      text-align right

    .brand
      padding-left 5%


  .kindbox
    display flex
    overflow hidden
    margin-top 43px
    .leftbox
      float left
      .sortList
        width 70px
        &>li
          box-sizing border-box
          height 50px
          width 70px
          padding 15px 0
          text-align center
          background-color #fff
          font-size 13px
          border-bottom 1px solid #f3f4f5
          &.on
            color red
            background #f3f4f5
    .rightbox
      background: #f3f4f5
      float left
      /*background-color #fff*/
      /*margin-left 75px*/
      .sort-detail-list
        .sort-recom
          background-color #fff
          .hot-recom
            font-size 12px
            padding 15px 5px 20px
            &.a
              display block
              font-size 12px
              padding-left 5px
              margin-top 10px
              color #999
            .goodList
              overflow hidden
              &>li
                box-sizing border-box
                width 33.33%
                float left
                margin-top 10px
                padding 0 5px
                .img_wrap
                  &>img
                    vertical-align middle
                    width 100%
                &>p
                  height 20px
                  color: #333
                  font-size 12px
                  text-align center
                  margin-top 10px

            .bandList
              overflow hidden
              &>li
                box-sizing border-box
                width 50%
                float left
                margin-top 10px
                padding 0 5px
                .img_wrap
                  &>img
                    transform scale(0.85)
                    vertical-align middle
                    max-width 100%
                    height 45px
                &>p
                  height 20px
                  color: #333
                  font-size 12px
                  text-align center
                  margin-top 10px

  .brandsbox
    .brandList
      background: #f3f4f5
      padding: 45px 0 0
      .tit
        font-size 12px
        color: #999
        background-color #fff
        text-align center
        padding-top 20px
      .list
        padding 0 5px
        &>ul
          background-color #fff
          overflow hidden
          .fl
            width 33.3%
            padding 0 5px
            float left
            margin-top 20px
            .fl_img
              border 1px #e2e2e2 solid
              &>img
                vertical-align middle
                height 40px
                margin 10px auto 0
                max-width 90%


            .ft13
              height:20px
              font-size 13px
              text-align center
              margin-top 5px
              color: #333
            .ft12
              height:20px
              font-size 12px
              text-align center
              margin-top 5px
              color: #999

</style>
