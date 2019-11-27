<template>
  <div>
    <div>
      <div class="Load-wrapper_3h35P-W Load-fixed_1L8WA4k" style="display: none;">
        <div class="Load-loading-main_1LVs9py">
          <div class="Load-loading-icon_2LvpNhI"></div>
        </div>
      </div>
      <div>
        <ul class="main-22cQX">
          <li class="main-3Idiu main-2OSrE">
            <b>头像</b>
            <span class="main-nwHdE">
              <input type="file" accept="image/jpeg, image/jpg, image/png" class="main-1mfZE" />
              <div class="index-18Ili" style="width: 60.107px; height: 60.107px;">
                <span style="background-position: 0px 0px; background-size: 120.107px;"></span>
              </div>
              <svg class="main-1kNSK">
                <use xlink:href="#arrow" />
              </svg>
            </span>
          </li>
          <li class="main-3Idiu">
            <b>用户名</b>
            <span class="main-2cJz_">
              44e5bd53e3a
              <svg class="main-1kNSK">
                <use xlink:href="#arrow" />
              </svg>
            </span>
          </li>
        </ul>
        <h2 class="main-1OkSR">账号绑定</h2>
        <ul class="main-22cQX">
          <li class="main-3Idiu">
            <span>
              <i class="main-2X7GQ">
                <svg class="main-oBMZZ">
                  <use xlink:href="#mobile" />
                </svg>
              </i>
              <b>手机</b>
            </span>
            <span>
              <span class="main-2cJz_">136****9601</span>
              <svg class="main-1kNSK">
                <use xlink:href="#arrow" />
              </svg>
            </span>
          </li>
        </ul>
        <h2 class="main-1OkSR">安全设置</h2>
        <ul class="main-22cQX">
          <li class="main-3Idiu">
            <span>登录密码</span>
            <span class="main-2cJz_">
              <span class="main-3ED6M">未设置</span>
              <svg class="main-1kNSK">
                <use xlink:href="#arrow" />
              </svg>
            </span>
          </li>
          <!---->
        </ul>
        <button type="button" class="main-aGw6s" @click="handleClick">退出登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        handleClick(){
            sessionStorage.removeItem("user")
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="scss" scoped>
.index-18Ili {
    border-radius: 50%
}

.index-18Ili>img,.index-18Ili>span {
    border-radius: 50%;
    width: 100%;
    height: 100%
}

.index-18Ili>span {
    display: inline-block;
    background: url(//shadow.elemecdn.com/faas/h5/static/sprite.3ffb5d8.png)
}

.main-22cQX {
    background-color: #fff;
    width: 100%;
    font-size: 14px;
    color: #333
}

.main-3Idiu {
    padding: .266667rem .373333rem;
    padding: 2.666667vw 3.733333vw;
    cursor: pointer;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    align-items: center
}

.main-3Idiu:last-child {
    padding: .373333rem;
    padding: 3.733333vw;
    border-top: 1px solid #eee
}

.main-2OSrE {
    position: relative
}

.main-nwHdE {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center
}

.main-1kNSK {
    fill: #ddd;
    height: .48rem;
    height: 4.8vw;
    width: .48rem;
    width: 4.8vw;
    display: inline-block;
    line-height: 1.2rem;
    line-height: 12vw;
    padding-top: .133333rem;
    padding-top: 1.333333vw
}

.main-2X7GQ {
    padding: .053333rem;
    padding: .533333vw;
    border-radius: .106667rem;
    border-radius: 1.066667vw;
    margin-right: .133333rem;
    margin-right: 1.333333vw;
    vertical-align: middle
}

.main-oBMZZ {
    height: .426667rem;
    height: 4.266667vw;
    width: .426667rem;
    width: 4.266667vw
}

.main-1mfZE {
    display: block;
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.main-2cJz_ {
    color: #666
}

.main-27dMr {
    height: 1.333333rem;
    height: 13.333333vw;
    width: 1.333333rem;
    width: 13.333333vw;
    border-radius: .6rem;
    border-radius: 6vw
}

.main-27dMr>svg {
    width: 100%;
    height: 100%
}

.main-1OkSR {
    margin: .426667rem 0 .186667rem .373333rem;
    margin: 4.266667vw 0 1.866667vw 3.733333vw;
    font-size: 14px;
    color: #999
}

.main-3ED6M {
    color: #0097ff
}

.main-aGw6s {
    display: block;
    width: 100%;
    text-align: center;
    padding: .373333rem 0;
    padding: 3.733333vw 0;
    margin: .533333rem 0;
    margin: 5.333333vw 0;
    color: #ff5339;
    border-radius: .08rem;
    border-radius: .8vw;
    font-size:  14px;
    font-weight: 700;
    background-color: #fff
}

.changepw-3LrxS {
    background-color: #fff;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    width: 100%;
    padding: .266667rem .266667rem 0;
    padding: 2.666667vw 2.666667vw 0
}

.changepw-lCnqr {
    margin-bottom: .266667rem;
    margin-bottom: 2.666667vw
}

.changepw-3bmr- {
    display: block;
    margin-bottom: .133333rem;
    margin-bottom: 1.333333vw;
    width: 100%;
    padding: .213333rem .106667rem;
    padding: 2.133333vw 1.066667vw;
    background: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: .026667rem;
    border-radius: .266667vw;
    font-size: 14px;
}

.changepw-3bmr-:hover {
    border: 1px solid #3199e8
}

.changepw-1GfOJ {
    display: block;
    text-align: center;
    padding: .293333rem 0;
    padding: 2.933333vw 0;
    margin: .4rem auto;
    margin: 4vw auto;
    color: #fff;
    border-radius: .08rem;
    border-radius: .8vw;
    font-size: 14px;
    font-weight: 800;
    background-color: #3199e8;
    width: 95%
}

.changepw-1GfOJ[disabled] {
    background-color: #ccc
}

.changepw-378Bw {
    display: -webkit-flex;
    display: flex;
    -webkit-align-content: center;
    align-content: center;
    -webkit-justify-content: center;
    justify-content: center;
    padding: 1.6rem 0 .426667rem;
    padding: 16vw 0 4.266667vw
}

.changepw-1OY0R {
    color: #ea3106;
    font-size:  14px;
}

.changepw-2pPz5 {
    border: 1px solid #ea3106
}

svg {
    height: 1.6rem;
    height: 16vw;
    width: 1.6rem;
    width: 16vw
}

.changepw-_2Y8Z {
    font-size:  14px;
    color: #666;
    padding: .133333rem;
    padding: 1.333333vw;
    text-align: center
}

.changepw-2TVn_ {
    display: block;
    text-align: center;
    padding: .293333rem 0;
    padding: 2.933333vw 0;
    margin: .4rem auto;
    margin: 4vw auto;
    color: #fff;
    border-radius: .08rem;
    border-radius: .8vw;
    font-size:  14px;
    font-weight: 800;
    background-color: #3199e8;
    width: 60%
}

.changepw-1hXB4 {
    color: #ea3106;
    background-color: #fffeea;
    border-bottom: 1px solid #ddd;
    font-size:  14px;
    padding: .266667rem;
    padding: 2.666667vw
}

.username-3qH12 {
    padding-top: .4rem;
    padding-top: 4vw
}

.username-3fn_k {
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: .013333rem solid #eee;
    border-bottom: .133333vw solid #eee
}

.username-3fn_k input {
    font-size: 14px;
    width: 100%;
    height: 1.173333rem;
    height: 11.733333vw
}

.username-1oSHV,.username-3fn_k input {
    padding: 0 .4rem;
    padding: 0 4vw
}

.username-39myV {
    display: block;
    outline: none;
    -webkit-appearance: none;
    color: #fff;
    width: 100%;
    height: 1.28rem;
    height: 12.8vw;
    font-size:  14px;
    font-weight: 700;
    border-radius: .16rem;
    border-radius: 1.6vw;
    background-color: #00d762
}

.username-39myV.username-3erKU {
    background-color: #c7c7c7
}

.username-2fjrW {
    margin: .266667rem 0;
    margin: 2.666667vw 0;
    color: #a9a9a9;
    font-size:  14px;
}

body,html {
    width: 100%;
    height: 100%
}

.index-32XvY {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    margin-top: .266667rem;
    margin-top: 2.666667vw;
    padding: .266667rem .4rem;
    padding: 2.666667vw 4vw;
    width: 100%;
    height: 1.173333rem;
    height: 11.733333vw;
    background: #fff
}

.index-32XvY>p {
    line-height: .64rem;
    line-height: 6.4vw;
    font-size:  14px;
    color: #333
}

.index-32XvY svg {
    margin-left: .133333rem;
    margin-left: 1.333333vw;
    width: .293333rem;
    width: 2.933333vw;
    height: .293333rem;
    height: 2.933333vw
}

.index-2VZDn {
    position: relative;
    width: 1.12rem;
    width: 11.2vw;
    border: 1px solid #e5e5e5;
    border-radius: 1.333333rem;
    border-radius: 13.333333vw
}

.index-2VZDn,.index-2VZDn:after {
    height: 100%;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s
}

.index-2VZDn:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: .613333rem;
    width: 6.133333vw;
    background: #fff;
    box-shadow: 0 .026667rem .08rem 0 rgba(0,0,0,.3);
    box-shadow: 0 .266667vw .8vw 0 rgba(0,0,0,.3);
    border-radius: 100%
}

.index-2VZDn.index-lt_Ql {
    background: #4cd964;
    border: none
}

.index-2VZDn.index-lt_Ql:after {
    -webkit-transform: translate3d(.533333rem,0,0);
    -webkit-transform: translate3d(5.333333vw,0,0);
    transform: translate3d(.533333rem,0,0);
    transform: translate3d(5.333333vw,0,0)
}

.index-3PEjb {
    display: -webkit-flex;
    display: flex;
    position: fixed;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-flex-direction: column;
    flex-direction: column;
    padding: 0 .8rem;
    padding: 0 8vw;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    background: rgba(0,0,0,.8)
}

.index-3PEjb>h3 {
    margin-bottom: .346667rem;
    margin-bottom: 3.466667vw;
    font-size:  14px;
    font-weight: 700
}

.index-3PEjb>li {
    margin-top: .533333rem;
    margin-top: 5.333333vw;
    width: 100%;
    line-height: 1.4;
    font-size:  14px;
    text-align: left
}

.index-3G0WD {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    margin-top: 4.826667rem;
    margin-top: 48.266667vw;
    width: 1.2rem;
    width: 12vw;
    height: 1.2rem;
    height: 12vw;
    border: 2px solid #7b7b7b;
    border-radius: 50%
}

.index-3G0WD>svg {
    width: .6rem;
    width: 6vw;
    height: .6rem;
    height: 6vw
}

</style>