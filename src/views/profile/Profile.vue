<template>

<div>
    <div class="profile-1vcJW">
      <section @click="handleClick">
        <div class="profile-3g0uv">
          <div class="index-18Ili" style="width: 60px; height: 60px;">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=="
            />
          </div>
          <div class="profile-xfCcC">
            <p class="profile-1_mtk">{{name}}</p>
            <p class="profile-1UP72">
              <svg fill="#fff">
                <use xlink:href="#mobile" />
              </svg>
              <span> {{content}}</span>
              <!---->
            </p>
          </div>
          <span class="profile-2XuMq">
            <svg fill="#fff">
              <use xlink:href="#arrow-right" />
            </svg>
          </span>
        </div>
      </section>
      <div data-spm="maininfo" class="index-1G7HV">
        <a href="javascript:;" class="index-1ryAh">
          <p>
            <svg fill="#ff5f3e" width="24px" height="24px">
             <svg viewBox="0 0 48 48" id="luckybag"><path fill-rule="evenodd" d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm7.6 15H16.4c.1.1.1.2.1.4.4 2.5 3.3 4.3 7.1 4.4 2.4 0 4.8-.6 6.1-1.6.4-.3 1.1-.3 1.4.2.3.5.3 1.1-.2 1.4-1.6 1.3-4.3 2.1-7.1 2.1h-.5c-3.9-.2-7-2-8.3-4.6V32c0 .5.7 1 1.4 1h15.2c.8 0 1.4-.5 1.4-1V16c0-.5-.7-1-1.4-1zM35 32c0 1.7-1.5 3-3.4 3H16.4c-1.9 0-3.4-1.3-3.4-3V16c0-1.4 1-2.5 2.5-2.9h.2c.1-.1.3-.1.4-.1h15.5c1.9 0 3.4 1.3 3.4 3v16z"></path></svg>
            </svg>
          </p>
          <p class="index-3S6cZ">红包</p>
        </a>
        <a href="javascript:;" class="index-1ryAh">
          <p>
            <svg fill="#6ac20b">
              <svg viewBox="0 0 48 48" id="profile-coins"><path fill-rule="evenodd" d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm-9 26.8v3.3c0 1.2 3.6 2.9 9 2.9s9-1.7 9-2.9v-3.3c-2.1 1.3-5.6 1.9-9 1.9-3.4.1-6.9-.6-9-1.9zM24 15c-5.8 0-9 1.8-9 2.8 0 1 3.2 2.8 9 2.8s9-1.8 9-2.8c0-1-3.2-2.8-9-2.8zm-9 5.6V24c0 .9 3.2 2.8 9 2.8s9-1.8 9-2.8v-3.4c-2.1 1.3-5.6 1.9-9 1.9-3.4 0-6.9-.6-9-1.9zM35 24v6.1c0 3.2-5.5 4.9-11 4.9s-11-1.7-11-4.9V17.8c0-3.1 5.5-4.8 11-4.8s11 1.6 11 4.8V24z"></path></svg>
            </svg>
          </p>
          <p class="index-3S6cZ">金币</p>
        </a>
      </div>
      <!---->
      <!---->
      <section class="profile-1reTe">
        <a href="javascript:;" class="index-2MEEn">
          <aside class="index-161Mm">
            <svg fill="#4aa5f0">
              <svg viewBox="0 0 16 16" id="address"><g fill="none" fill-rule="evenodd"><path fill="none" d="M0 0h16v16H0z"></path><path fill="#4AA5F0" d="M8 2.667A2.667 2.667 0 1 1 8 8a2.667 2.667 0 0 1 0-5.333M2.273 6.509a5.48 5.48 0 0 1-.051-.732 5.778 5.778 0 1 1 11.556 0 5.54 5.54 0 0 1-.085.948 5.704 5.704 0 0 1-.258.999 6.565 6.565 0 0 1-.081.22c-.016.039-.03.078-.047.116C11.932 11.45 8 13.778 8 13.778S3.734 11.273 2.535 7.64a5.756 5.756 0 0 1-.262-1.132zm8.584 6.701c2.516.124 5.143.43 5.143 1.068 0 .901-5.233 1.138-8 1.138-2.768 0-8-.237-8-1.138 0-.639 2.627-.944 5.143-1.068 1.22 1.044 2.3 1.61 2.404 1.663.14.07.296.108.453.108.156 0 .314-.038.454-.109.104-.052 1.184-.618 2.403-1.662z"></path></g></svg>
            </svg>
          </aside>
          <div class="index-yydpu">
            我的地址
            <span class="index-3Z8It">
              <svg>
                <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
              </svg>
            </span>
          </div>
        </a>
      </section>
      <section class="profile-1reTe">
        <a href="javascript:;" class="index-2MEEn">
          <aside class="index-161Mm">
            <svg fill="#fc7b53">
              <svg viewBox="0 0 16 16" id="point"><g fill="none" fill-rule="evenodd"><path fill="none" d="M0 0h16v16H0z"></path><path fill="#94D94A" d="M2.257.5h11.486a1 1 0 0 1 .998.936l.757 11.728a2 2 0 0 1-1.996 2.129H2.498a2 2 0 0 1-1.996-2.129L1.26 1.436A1 1 0 0 1 2.257.5zm9.658 3.782C11.82 6.452 10.14 8.18 7.95 8.18c-2.202 0-3.925-1.747-4.003-3.933a.594.594 0 0 1 .36-1.075.596.596 0 1 1 .25 1.14c.109 1.82 1.548 3.26 3.393 3.26 1.853 0 3.263-1.455 3.357-3.287a.595.595 0 0 1 .3-1.113.595.595 0 1 1 .307 1.11z"></path></g></svg>
            </svg>
          </aside>
          <div class="index-yydpu">
            金币商城
            <span class="index-3Z8It">
              <svg>
                <use xlink:href="#arrow-right" />
              </svg>
            </span>
          </div>
        </a>
        <a href="javascript:;" class="index-2MEEn">
          <aside class="index-161Mm">
            <svg fill>
              <svg viewBox="0 0 40 40" id="commend"><g fill="none" fill-rule="evenodd"><path fill="#FC7B53" d="M21 12c-.167-.434-1-1-1-1-.275.437-.767.601-1 1v7H4v-6c0-.843.716-1.562 2-2h6c-1.49.06-2.84-.711-3-2 .06-1.814 1.949-4.528 5-4 2.552.733 4.541 2.943 6 5 1.6-2.094 3.778-4.58 7-5 2.23-.288 4.282 2.198 4 4-.208 1.276-1.582 2.06-3 2h6c1.173.437 1.89 1.156 2 2v6H21v-7zm-7-6c-1.123-.321-1.966.238-3 1 .097.68-.258 1.373 0 2 1.653 1.192 5.452 1.096 8 1-1.202-1.529-2.679-3.07-5-4zm16 3c.726-1.246-1.22-3.714-3-3-2.313 1.075-3.755 2.506-5 4 1.071 0 2.158.023 3 0 1.542-.075 3.965-.16 5-1zM19 36H8c-1.326-.255-2-.907-2-2V20h13v16zm13 0H21V20h13v14c-.47 1.53-1.124 1.745-2 2z"></path></g></svg>
            </svg>
          </aside>
          <div class="index-yydpu">
            分享拿20元现金
            <span class="index-3Z8It">
              <svg>
                <use xlink:href="#arrow-right" />
              </svg>
            </span>
          </div>
        </a>
      </section>
      <section class="profile-1reTe">
        <a href="javascript:;" class="index-2MEEn">
          <aside class="index-161Mm">
            <svg fill="#4aa5f0">
             <svg viewBox="0 0 54 54" id="service"><g fill="none" fill-rule="evenodd"><path stroke="#4DA6F0" stroke-width="3" d="M48 28c0 11.598-9.402 21-21 21"></path><path fill="#4DA6F0" d="M43 40.012v-18h2a9 9 0 0 1 9 9 9 9 0 0 1-9 9h-2zM10 40.012H9a9 9 0 0 1-9-9 9 9 0 0 1 9-9h1v18zM27 46a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path><path fill="#4DA6F0" d="M43 24h6c0-12.426-9.574-23-22-23S4 11.574 4 24h6c0-9.098 7.902-17 17-17 9.097 0 16 7.902 16 17z"></path></g></svg>
            </svg>
          </aside>
          <div class="index-yydpu">
            我的客服
            <span class="index-3Z8It">
              <svg>
                <use xlink:href="#arrow-right" />
              </svg>
            </span>
          </div>
        </a>
        <a href="javascript:;" class="index-2MEEn">
          <aside class="index-161Mm">
            <svg fill="#3cabff">
              <svg viewBox="0 0 40 40" id="download"><path d="M30 5H10c-2.8 0-5 2.2-5 5v20c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5V10c0-2.8-2.2-5-5-5zm-3.9 22.7c-.1.2-.3.4-.6.5-4.3 2.8-10.1 1.6-13-2.8-2.8-4.3-1.6-10.2 2.8-13 4.3-2.8 10.2-1.6 13 2.8.2.2.3.5.4.8.1.2 0 .5-.2.7l-8.8 5.7c-.2.2-.6.1-.7-.2l-.5-.7c-.4-.6-.2-1.5.4-1.9l5.6-3.6c.2-.2.3-.5.2-.7l-.1-.1c-2.2-1.8-5.4-2.1-7.9-.4-3.1 2-4 6.1-2 9.2 2 3.1 6.1 4 9.2 2 .6-.4 1.3-.2 1.7.4l.3.7c.1.2.4.5.2.6zm3.1-4.4l-.9.6c-.2.2-.6.1-.7-.2L26.5 22c-.2-.2-.1-.6.2-.7l1.8-1.1c.2-.2.6-.1.7.2l.6.9c.3.6.1 1.5-.6 2z"></path></svg>
            </svg>
          </aside>
          <div class="index-yydpu">
            下载饿了么APP
            <span class="index-3Z8It">
              <svg>
                <use xlink:href="#arrow-right" />
              </svg>
            </span>
          </div>
        </a>
        <a href="javascript:;" class="index-2MEEn">
          <aside class="index-161Mm">
            <svg fill="#3cabff">
              <svg viewBox="0 0 17 18" id="rule"><g fill="#4DA6F0" fill-rule="evenodd"><path d="M10.389 18H2.444a1.5 1.5 0 0 1-1.5-1.5v-15a1.5 1.5 0 0 1 1.5-1.5h12.112a1.5 1.5 0 0 1 1.5 1.5V12h-4.867a.8.8 0 0 0-.8.8V18zM3.978 4a.2.2 0 0 0-.2.2v.6c0 .11.09.2.2.2h9.044a.2.2 0 0 0 .2-.2v-.6a.2.2 0 0 0-.2-.2H3.978zm0 3a.2.2 0 0 0-.2.2v.6c0 .11.09.2.2.2h9.044a.2.2 0 0 0 .2-.2v-.6a.2.2 0 0 0-.2-.2H3.978z"></path><path d="M15.111 13l-3.778 4v-3.6c0-.22.18-.4.4-.4h3.378z"></path></g></svg>
            </svg>
          </aside>
          <div class="index-yydpu">
            规则中心
            <span class="index-3Z8It">
              <svg>
                <use xlink:href="#arrow-right" />
              </svg>
            </span>
          </div>
        </a>
      </section>
      <div class="profile-2dyk_">
        <a
          href="/service/agreement/#HEAEDER_SHOW=1&amp;initTitle=%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96&amp;key=ruleQue50"
        >隐私政策</a>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            name:"登录/注册",
            content:"登录之后享受更多特权"
        }
    },
    methods: {
        handleClick(){
            let arr = sessionStorage.getItem("user")
            if(arr == this.content){
                this.$router.push('/user')
            }else{
                this.$router.push('/login')
            }
        }
    },
    
    mounted () {
            
    let arr = sessionStorage.getItem("user")
        if(arr){
            this.content = arr;
            this.name = "false";
            console.log("aa");
                
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

.profile-1vcJW {
    min-height: 100vh
}

.profile-3g0uv {
    display: -webkit-flex;
    display: flex;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    padding: .666667rem .4rem;
    padding: 6.666667vw 4vw;
    color: #fff;
    -webkit-align-items: center;
    align-items: center
}

.profile-3g0uv>img {
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    border-radius: 50%;
    width: 1.6rem;
    width: 16vw;
    height: 1.6rem;
    height: 16vw
}

.profile-2XuMq svg {
    width: .266667rem;
    width: 2.666667vw;
    height: .56rem;
    height: 5.6vw
}

.profile-xfCcC {
    overflow: hidden;
    margin-left: .48rem;
    margin-left: 4.8vw;
    -webkit-flex-grow: 1;
    flex-grow: 1
}

.profile-xfCcC p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.profile-1_mtk {
    font-size: 23px;
    margin-bottom: .213333rem;
    margin-bottom: 2.133333vw;
    font-weight: 800;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center
}

.profile-1_mtk img {
    height: .373333rem;
    height: 3.733333vw;
    margin-left: .133333rem;
    margin-left: 1.333333vw
}

.profile-1UP72 {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    font-size:  14px;
}

.profile-1UP72 svg {
    margin-right: .066667rem;
    margin-right: .666667vw;
    width: .186667rem;
    width: 1.866667vw;
    height: .293333rem;
    height: 2.933333vw
}

.profile-1gjgY {
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    font-size:  16px;
    line-height: 1.6rem;
    line-height: 16vw;
    border-radius: 50%;
    background: #fff;
    display: inline-block;
    vertical-align: middle
}

.profile-1gjgY,.profile-1gjgY svg {
    width: 1.6rem;
    width: 16vw;
    height: 1.6rem;
    height: 16vw
}

.profile-1reTe {
    margin-top: .266667rem;
    margin-top: 2.666667vw;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    font-size:  14px;
    line-height: .453333rem;
    line-height: 4.533333vw;
    background: #fff
}

.profile-1nfoQ {
    text-align: center
}

.profile-1nfoQ img {
    width: 9.36rem;
    width: 93.6vw;
    height: 2.706667rem;
    height: 27.066667vw
}

.profile-2dyk_ {
    text-align: center;
    margin: .613333rem auto;
    margin: 6.133333vw auto;
    color: #4da6f0;
    font-size:  14px;
}

.index-2MEEn {
    font-size:  14px;
    color: #333;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    padding-left: .666667rem;
    padding-left: 6.666667vw
}

.index-2MEEn:not(:last-child) .index-yydpu {
    border-bottom: 1px solid #eee
}

.index-161Mm {
    margin-left: -.266667rem;
    margin-left: -2.666667vw;
    margin-right: .266667rem;
    margin-right: 2.666667vw
}

.index-161Mm svg {
    width: .48rem;
    width: 4.8vw;
    height: .48rem;
    height: 4.8vw
}

.index-yydpu {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    width: 100%;
    padding: .373333rem .266667rem .373333rem 0;
    padding: 3.733333vw 2.666667vw 3.733333vw 0
}

.index-3Z8It svg {
    width: .266667rem;
    width: 2.666667vw;
    height: .266667rem;
    height: 2.666667vw;
    fill: #bbb
}

.index-1G7HV {
    display: table;
    width: 100%;
    height: 2.24rem;
    height: 22.4vw;
    border-bottom: 1px solid #ddd;
    background-color: #fff
}

.index-1G7HV svg {
    width: .693333rem;
    width: 6.933333vw;
    height: .693333rem;
    height: 6.933333vw
}

.index-1ryAh {
    display: table-cell;
    width: 33.3333%;
    vertical-align: middle;
    text-align: center
}

.index-1ryAh:not(:last-child) {
    border-right: 1px solid #ddd
}

.index-3S6cZ {
    margin-top: .133333rem;
    margin-top: 1.333333vw;
    font-size:  14px;
    line-height: .373333rem;
    line-height: 3.733333vw;
    font-weight: 500;
    color: #666;
    font-weight: 700
}

.index-2FmrF {
    padding: .453333rem 0 .293333rem;
    padding: 4.533333vw 0 2.933333vw;
    font-size:  14px;
    line-height: .693333rem;
    line-height: 6.933333vw;
    font-weight: 700
}

.index-2V-Hh {
    font-size:  14px;
    line-height: .32rem;
    line-height: 3.2vw
}

.index-9OH4E {
    position: relative;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: center;
    justify-content: center;
    margin-top: .266667rem;
    margin-top: 2.666667vw;
    width: 100%;
    height: 2.133333rem;
    height: 21.333333vw;
    padding: 0 .746667rem;
    padding: 0 7.466667vw;
    background-image: linear-gradient(90deg,#ead68a,#fff4c0 71.7%,#fff4c0)
}

.index-1v3Lc,.index-9OH4E {
    display: -webkit-flex;
    display: flex
}

.index-1v3Lc {
    height: .546667rem;
    height: 5.466667vw;
    -webkit-align-items: center;
    align-items: center
}

.index-1v3Lc>p {
    display: inline;
    font-size:  14px;
    color: #a57c00
}

.index-1v3Lc>p>span {
    color: #955919;
    font-weight: 700
}

.index-3YJpI {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    margin-top: .053333rem;
    margin-top: .533333vw;
    font-size: 14px;
    line-height: .8rem;
    line-height: 8vw;
    color: #6c3b07;
    font-weight: 700
}

.index-3YJpI>span {
    color: #f43730;
    font-weight: bolder
}

.index-3YJpI>svg {
    margin-left: .133333rem;
    margin-left: 1.333333vw;
    width: .186667rem;
    width: 1.866667vw;
    height: .32rem;
    height: 3.2vw
}

.index-3H3Wr {
    width: 2.826667rem;
    width: 28.266667vw;
    height: 2.133333rem;
    height: 21.333333vw;
    position: absolute;
    top: 0;
    right: 0
}

.index-3JbNA {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    margin: .213333rem 0;
    margin: 2.133333vw 0;
    padding: .373333rem 0;
    padding: 3.733333vw 0;
    background: url(//shadow.elemecdn.com/faas/h5/static/supervip-bg.b3ed53c.png) no-repeat;
    background-size: cover
}

.index-3JbNA>svg {
    -webkit-flex: 0 0 2.400000rem;
    -webkit-flex: 0 0 24.000000vw;
    flex: 0 0 2.400000rem;
    flex: 0 0 24.000000vw;
    width: 1.546667rem;
    width: 15.466667vw;
    height: .986667rem;
    height: 9.866667vw;
    opacity: .7
}

.index-3JbNA>div {
    -webkit-flex: 1;
    flex: 1
}

.index-9J3ng>h3 {
    color: #a39a83;
    font-size:  14px;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center
}

.index-9J3ng>h3 img {
    width: .96rem;
    width: 9.6vw;
    height: .32rem;
    height: 3.2vw;
    margin-left: .106667rem;
    margin-left: 1.066667vw
}

.index-3z8sh {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    margin-top: .053333rem;
    margin-top: .533333vw;
    color: #333;
    font-size:  14px;
}

.index-3z8sh span {
    color: #b29000
}

.index-3z8sh>svg {
    width: .266667rem;
    width: 2.666667vw;
    height: .266667rem;
    height: 2.666667vw
}

.index-2CYdD {
    display: -webkit-flex;
    display: flex;
    height: .546667rem;
    height: 5.466667vw;
    -webkit-align-items: center;
    align-items: center;
    font-size:  14px;
    color: #a57c00
}

.index-2CYdD .index-c725M {
    color: #fff3bf;
    font-size: 14px;
    padding: .053333rem;
    padding: .533333vw;
    background: linear-gradient(119deg,#f33131,#fb7228);
    margin-right: .133333rem;
    margin-right: 1.333333vw;
    border-radius: .026667rem;
    border-radius: .266667vw
}

.index-2CYdD .index-2Gjnn {
    font-weight: 600;
    color: #955919
}

</style>