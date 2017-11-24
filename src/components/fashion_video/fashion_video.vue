<template>
  <div v-if="video">
    <div class="fashion_video" >
      <div class="tit_video">
        <div class="ftc">
          <img :src="video.tit1.center_image" alt="">
        </div>
        <div class="more">
          <router-link to="/main/menu">
            <img :src="video.tit1.right_image" alt="">
          </router-link>
        </div>
      </div>
      <div class="cont_video">
        <ul class="videoList">
          <li>
            <router-link to="/video">
              <div class="video_box">
                <img :src="video.value.image" alt="">
                <span class="video_play"></span>
              </div>
            </router-link>
            <div class="pad10">
              <div class="text">{{video.value.title}}</div>
              <div>
                <span class="eye"></span>
                <i>7397</i>
                <span class="mr10">|</span>{{video.value.time}}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <split/>
    <div class="custom">
      <div class="tit_custom">
        <div class="ftc">
          <img :src="video.tit2.center_img" alt="">
        </div>
        <div class="more">
          <router-link to="/main/menu">
            <img :src="video.tit2.right_img" alt="">
          </router-link>
        </div>
      </div>
      <div class="item_custom">
        <router-link to="/main/trial">
          <img :src="video.value.tiyan_img" alt="">
        </router-link>
      </div>
    </div>
    <split/>
  </div>
</template>

<script>
  import split from '../split/split.vue'
  export default {
    components: {
      split
    },
    props: ['video']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.fashion_video
  width 100%
  .tit_video
    position relative
    .ftc
      text-align center
      img
        max-width 50%
        max-height 73px
        margin 0 auto
    .more
      position absolute
      text-align right
      right 0
      top 2px
      &>a
        display block
        &>img
          vertical-align middle
          width 50%
  .cont_video
    width 100%
    a
      display block
      .video_box
        position relative
        &>img
          vertical-align middle
          display block
          width 100%
        .video_play
          position absolute
          top 50%
          left 50%
          width 20px
          height 20px
          background-repeat no-repeat
          background-size contain
          margin-left -10px
          margin-top -10px
          background-image url("./play.png")


    .pad10
      font-size 12px
      color #999
      text-align center
      padding 10px
      .text
        color: #333
      .eye
        display: inline-block;
        width: 10px;
        height: 9px;
        background: url('./eye.png') 0 0 no-repeat;
        background-size: contain;
      i
        font-style normal
      .mr10
        margin-left 10px
        margin-right 10px
.custom
  .tit_custom
    position relative
    .ftc
      text-align center
      img
        max-width 50%
        max-height 73px
        margin 0 auto
    .more
      position absolute
      text-align right
      right 0
      top 2px
      &>a
        display block
        &>img
          vertical-align middle
          width 50%
  .item_custom
    width 100%
    &>a
      display block
      img
        vertical-align middle
        width 100%
</style>
