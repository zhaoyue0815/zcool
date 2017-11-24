<template>
  <div id="indexbox" class="main">
    <epet_header :menus="main.menus"/>

    <scroller style="padding-top: 86px">
      <div class="allmodule">
        <epet_banner/>
        <split/>
        <column_nav :navs="main.navs"/>
        <split/>
        <surprise_day :goods="main.goods"/>
        <hot :hots="main.hot_content"/>
        <split/>
        <fashion_video :video="main.video"/>
        <band :bands="main.bands"/>
        <judge :ratings="main.ratings"/>
        <split/>
        <epet_footer/>
        <br>
        <br>
        <br>
        <br>
        <br>
      </div>
    </scroller>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import header from '../../components/header/header.vue'
  import banner from '../../components/banner/banner.vue'
  import split from '../../components/split/split.vue'
  import columnNav from '../../components/column_nav/column_nav.vue'
  import surpriseDay from '../../components/surprise_day/surprise_day.vue'
  import hot from '../../components/hot/hot.vue'
  import fashionvideo from '../../components/fashion_video/fashion_video.vue'
  import band from '../../components/band/band.vue'
  import judge from '../../components/judge/judge.vue'
  import footer from '../../components/footer/footer.vue'
  export default {
    mounted () {
      this.$store.dispatch('getMain')

    },

    computed: {
      ...mapState(['main'])
    },
    components: {
      'epet_header': header,
      'epet_banner': banner,
      split,
      'column_nav': columnNav,
      'surprise_day': surpriseDay,
      hot,
      'fashion_video': fashionvideo,
      band,
      judge,
      'epet_footer': footer
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
*
  box-sizing border-box
  line-height 1.6


</style>
