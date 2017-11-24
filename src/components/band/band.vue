<template>
  <div>
    <div class="band">
      <div class="tit_band">
        <div class="ftc">
          <img src="./band.png" alt="">
        </div>
      </div>
      <div class="single_div" v-for="(band, index) in bands" :key="index">
        <div class="pd10">
          <span class="ft15">{{band.title}}</span>
          <span class="ft12">{{band.desc}}</span>
        </div>
        <div class="loading">
          <router-link to="/sale">
            <img :src="band.image" alt="">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    /*data () {
      return {
        bands: [
          {
            title: '谷登新品',
            desc: '5折限量',
            image: 'https://img2.epetbar.com/nowater/2017-11/17/18/c1d2ddcc28b959fde8a6c4b413bfa858.jpg'
          },
          {
            title: 'NexGard尼可信',
            desc: '',
            image: 'https://img2.epetbar.com/nowater/2017-11/20/10/7c30b558f0e5026cc47605ea877dd1de.jpg'
          },
          {
            title: '冠能',
            desc: '满399送智能碗',
            image: 'https://img2.epetbar.com/nowater/2017-10/19/09/407f8316833a3bd928ac31f5e4d14dc3.jpg'
          },
          {
            title: '优卡',
            desc: '只为爱宠卓越表现',
            image: 'https://img2.epetbar.com/nowater/2017-09/20/13/1b18c703af536f15160beb1d0de06275.jpg'
          },
          {
            title: '临期不改好货本质',
            desc: '进口好货，低至1折！',
            image: 'https://img2.epetbar.com/nowater/2017-10/12/14/66de171f32497dbc764417cb09c63247.jpg'
          }
        ]
      }
    },*/
    props: ['bands']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.band
  .tit_band
    .ftc
      text-align center
      img
        max-width 50%
        max-height 73px
        margin 0 auto
  .single_div
    .pd10
      padding 10px
      .ft15
        font-size 15px
      .ft12
        margin-left 5px
        color #999
        font-size 12px

    .loading
      width  100%
      &>a
        display block
        &>img
          width 100%
          vertical-align middle
</style>
