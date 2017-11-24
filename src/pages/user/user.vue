<template>
  <div>
    <!-- 登录页面 -->
    <div class="one" v-show="!isRegister">
      <div class="user_header">
        <div class="top">
          <a href="javascript:void(0)" onclick="history.go(-1)" class="goBack"></a>
          <div class="ft16" @click="register"><a href="#" class="">注册</a></div>
        </div>
        <div class="middle">
          <img src="./ec.png" alt="">
        </div>
        <div class="bottom">
          <ul class="login">
            <li @click="toggleShow(true)">普通登录<i v-show="isShow"></i></li>
            <li @click="toggleShow(false)">手机动态密码登录<i v-show="!isShow"></i></li>
          </ul>
          <!--<mt-navbar v-model="selected" class="login">
            <mt-tab-item id="1">普通登录</mt-tab-item>
            <mt-tab-item id="2">手机动态密码登录</mt-tab-item>
          </mt-navbar>

          <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
              <mt-cell v-for="n in 10" :title="'content ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <mt-cell v-for="n in 4" :title="'content ' + n" />
            </mt-tab-container-item>
          </mt-tab-container>-->
        </div>
      </div>
      <div class="bgfff">
        <div class="formbox">
          <ul v-show="isShow" class="myform">
            <li>
              <span class="myName"></span>
              <input type="text" placeholder="手机号/邮箱/用户名" class="text" name="username" id="username">
            </li>
            <li>
              <span class="mypassword"></span>
              <input type="password" placeholder="输入密码" class="text" name="password" id="password">
            </li>
          </ul>
          <ul v-show="!isShow" class="myform">
            <li>
              <span class="myName"></span>
              <input type="text" placeholder="已注册的手机号" class="text" name="username" id="phone">
            </li>
            <li>
              <span class="mypassword"></span>
              <input type="text" placeholder="请输入图片内容" class="text" name="password" id="varify">
              <span style="display:block;position: absolute;top:5px;right:0px;">
              <img src="./yanzheng.png" alt="">
            </span>
            </li>
            <li>
              <span class="mypassword"></span>
              <input type="text" placeholder="动态密码" class="text" name="password" id="code">
              <a href="javascript:;" class="activecode" id="scodebtn">获取动态密码</a>
            </li>
          </ul>

        </div>
        <div class="forget">
          <a href="#">忘記密碼 ?</a>
        </div>
        <div class="loginbtn">
          <a href="#">登录</a>
        </div>
        <div style="height:7em"></div>
        <div class="other_login">
          <div class="partners"><b>合作网站登录</b></div>
          <ul class="others">
            <li>
              <img src="./zhi.png" alt="">
            </li>
            <li>
              <img src="./qq.png" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 手机注册 -->
    <div class="two" v-show="isRegister">
      <div class="bgfff">
        <div class="formbox">
          <ul class="myform">
            <li>
              <span class="myName"></span>
              <input type="text" placeholder="请输入手机号码" class="text" name="username" id="getphone">
            </li>
          </ul>
        </div>
        <div class="loginbtn">
          <a href="#">注册</a>
        </div>
      </div>
    </div>

    <!-- 注册信息填写 -->
    <div class="three" v-show="false">
      <div class="bgfff">
        <div class="formbox">
          <ul class="myform">
            <li>
              <span class="myName"></span>
              <input type="text" placeholder="13865549909" class="text" name="username" id="rphone">
            </li>
            <li>
              <span class="mypassword"></span>
              <input type="text" placeholder="图片验证码" class="text" name="password" id="rvarify">
              <span style="display:block;position: absolute;top:5px;right:0px;">
              <img src="./yanzheng.png" alt="">
            </span>
            </li>
            <li>
              <span class="mypassword"></span>
              <input type="text" placeholder="验证码" class="text" name="password" id="rcode">
              <a href="javascript:;" class="activecode" id="rscodebtn">获取短信验证码</a>
            </li>
            <li>
              <span class="myName"></span>
              <input type="text" placeholder="你的昵称" class="text" name="username" id="nicheng">
            </li>
            <li>
              <span class="myName"></span>
              <input type="password" placeholder="请设置密码" class="text" name="username" id="rpassword">
            </li>
            <li>
              <span class="myName"></span>
              <input type="password" placeholder="请确认密码" class="text" name="username" id="repassword">
            </li>
          </ul>
        </div>
        <div class="loginbtn">
          <a href="#">下一步</a>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        isShow: true,
        isRegister: false
      }
    },
    methods: {
      toggleShow (bool) {
        this.isShow = bool
      },
      register () {
        this.isRegister = !this.isRegister
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
*
  box-sizing border-box

  .user_header
    background-size 100% 100%
    background url("./bg.png") no-repeat
    .top
      line-height 50px
      text-align center
      padding 0 12px
      height 50px
      position relative
      .goBack
        width 20px
        height 20px
        position absolute
        display block
        background url("./back2.png") no-repeat
        margin-top 16px
        background-size 10px 17px
      .ft16
        position absolute
        top: 3px
        right 10px
        font-size 16px
        &>a
          color white

    .middle
      padding 12px 0 24px 0
      &>img
        display block
        width 20%
        margin 0 auto
        vertical-align middle
    .bottom
      background-color: rgba(255,255,255,0.3)
      .login
        overflow hidden
        &>li
          float left
          color white
          width 50%
          text-align center
          height 44px
          line-height 44px
          position relative
          &>i
            display: block;
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid #fff;
            position: absolute;
            bottom: 0px;
            left: 0;
            right: 0;
            margin: auto;
  .bgfff
    background-color #fff
    .formbox
      padding 0 1.6%
      margin 0 4% 12px 4%
      .myform
        &>li
          border-bottom: #e2e2e2 solid 1px;
          padding: 12px 0 12px 30px;
          position: relative;
          &>input
            display: block;
            height: 21px;
            width: 100%;
            font-size: 15px;
            border: none;
            padding: 0px;
            color: #666;
            font-family: "Microsoft Yahei",tahoma,arial;
            outline: none;
            -webkit-appearance: none;
          .activecode
            background: #fff;
            color: #ff4259;
            border: 1px solid #eb4c33;
            position: absolute;
            right: 0;
            top: 10px;
            font-size 12px
            border-radius: 3px;
            width: 100px;
            text-align: center;
            padding: 0.6em 0;
    .forget
      padding-left: 2em;
      padding-right: 2em;
      &>a
        color: #898989;
        font-size 16px
        float right
    .loginbtn
      padding-top 28px
      &>a
        display: block;
        letter-spacing: 5px;
        margin: 0 4%;
        border-radius: 5px;
        background: #2ec975;
        font-size: 15px;
        padding: .6em 0;
        color white
        text-align: center;

    .other_login
      .partners
        color: #d7d7d7;
        margin-top: 0.5em;
        font-size 18px
        text-align center
      .others
        overflow hidden
        padding 18px 0
        &>li
          width: 33.3%;
          padding: 0 18px;
          float: left;
          display: inline;
          &>img
            width: 60%;
            height: auto;
            display: block;
            margin: auto;
            max-width: 176px;

</style>
