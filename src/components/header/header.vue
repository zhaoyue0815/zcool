<template>
  <div class="indexHeader">
    <div class="main">
      <div class="epet_search">
        <div class="line">
          <div class="place">
            <router-link to="/place" >
              <span class="fonts">狗狗站</span>&nbsp;|
              <span class="fonts my_place">{{id}}</span>
            </router-link>
          </div>
          <div class="search-text">
            <router-link to="/search">
              <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
              <span class="search_icon"></span>
            </router-link>
          </div>
          <router-link to="/user" class="dope">
            <img src="../../common/img/mydope.png" alt="">
          </router-link>
        </div>
      </div>
      <div class="find_nav">
        <div class="nav_wrapper" ref="navWrapper">
          <ul class="navList" ref="navList">
            <li :class="index===0 ? 'on':''" v-for="(menu,index) in menus" :key="index">
              <router-link :to="menu.menu_target">
                <span class="rela">
                    <span>{{menu.menu_name}}</span>
                    <i></i>
                  </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    mounted () {
      // 判断数据是否已经更新
      if (!this.menus) {
        return
      }
    },
    data () {
      return {
        id: '重庆'
      }
    },
    props: {
      menus: Array
    },
    watch: {
      menus (newMenus, oldMenus) {
        // 监视menus更新时 创建BScroll对象
        this.init_scroll()
      }
    },
    methods: {
      init_scroll () {
        this.$nextTick(() => {
          // 动态指定头部nav的宽度
          const liWidth = 75
          const space = 6
          const navList = this.$refs.navList
          const navCount = this.menus.length
          const width = (liWidth+space) * navCount - space
          navList.style.width = width + 'px'

          new BScroll(this.$refs.navWrapper, {
            scrollX: true,
            click: true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.indexHeader
  position fixed
  left 0
  top 0
  z-index 10
  background-color white
  width 100%
  .epet_search
    padding 5px 10px
    .line
      font-size 14px
      padding 8px 0
      display flex
      .place
        margin-right 20px
      .search-text
        width 200px
        a
          input
            width: 100%;
            border: 0;
            height: 25px;
            background: #e9e9e9;
            border-radius: 4px;
            color: #bcbcbc;
            text-indent: 10px;
            font-size: 13px;
            outline: 0;
      .dope
        &>img
          width: 25px;
          vertical-align: middle;
          margin-left: 10px;

  .find_nav
    width: 100%;
    height: 35px;
    min-width: 320px;
    .nav_wrapper
      width: 100%
      overflow: hidden
      white-space: nowrap
      .navList
        width 575px
        font-size: 0
        &>li
          display: inline-block
          margin-right: 6px
          width: 75px
          height: 36px
          &.on
            i
              background: #459d36;
              bottom -7px
          &>a
            display: block;
            width: 100%;
            height: 100%;
            line-height: 36px;
            font-size: 14px;
            text-align: center;
            color: #666
            .rela
              position: relative
              &>i
                position: absolute;
                /*bottom: 1px;*/
                left: -10%;
                width: 120%;
                height: 2px;
          &:last-child
            margin: 0
</style>
