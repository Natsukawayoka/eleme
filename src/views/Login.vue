<template>
  <div class="App-1EAON">
    <!---->
    <div class="App-3Q8Qb">
      <div class="LoginHeader-1jXn6">
        <img src="//shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" class="LoginHeader-85WpV" />
      </div>
      <!---->
      <div>
        <el-form :model="model" :rules="rules" ref="login_form" class="MessageLogin-iYvWA ">
          <el-form-item class="MessageLogin-FsPlX" prop="username">
            <el-input v-model="model.username" type="tel" maxlength="11" placeholder="手机号" />
            <el-button disabled="disabled" class="CountButton-3e-kd" ubt-click="101161">获取验证码</el-button>
          </el-form-item>
          <el-form-item class="MessageLogin-FsPlX" prop="password">
            <el-input v-model="model.password" type="tel" maxlength="8" placeholder="验证码" />
          </el-form-item>
          <div id="_umfp" style="display: inline; width: 1px; height: 1px; overflow: hidden;"></div>
          <div id="slideVerify" class="nc-container"></div>
          <section class="MessageLogin-15xD9">
            新用户登录即自动注册，并表示已同意
            <a
              href="//h5.ele.me/service/agreement/#initTitle=%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE&amp;key=ruleQue18"
            >《用户服务协议》</a>
            和
            <a
              href="http://terms.alicdn.com/legal-agreement/terms/suit_bu1_other/suit_bu1_other201903051859_43484.html"
            >《隐私权政策》</a>
          </section>
          <el-button class="SubmitButton-2wG4T" @click="handleSubmit">登录</el-button>
        </el-form>
        <!---->
        <a href="javascript:;" class="MessageLogin-31EIr">关于我们</a>
      </div>
    </div>
    <div class="App-OjtAb">
      <div class="LoginFooter-UxQIr">
        <div class="LoginFooter-2KaAB">
          <h2>所有方：上海拉扎斯信息科技有限公司</h2>
          <p>
            增值电信业务许可证 :
            <a
              href="http://www.shca.gov.cn/"
              target="_blank"
              class="LoginFooter-3s25U"
            >沪B2-20150033</a>
            <a
              href="http://www.miibeian.gov.cn/"
              target="_blank"
              class="LoginFooter-3s25U"
            >沪ICP备 09007032</a>
            <a
              href="http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&amp;entyId=20120305173227823"
              target="_blank"
            >上海工商行政管理</a>
            Copyright ©2008-2017 ele.me, All Rights Reserved.
          </p>
          <a
            href="http://www.zx110.org/picp/?sn=310100103568"
            rel="nofollow"
            target="_blank"
            class="LoginFooter-1QHDG"
          >
            <img
              src="data:image/jpeg;base64,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"
              alt="已通过沪公网备案，备案号 310100103568"
              height="30"
            />
          </a>
        </div>
      </div>
      <!---->
    </div>
    <!---->
  </div>
</template>

<script>
import { login } from "../api/Msite";
export default {
    data () {
        return {
            model:{
                username:"",
                password:""
            },
            rules:{
                username:[
                    {
                        required:true,
                        message:"请输入手机号",
                        trigger:"blur"
                    }
                ],
                password:[
                    {
                        required:true,
                        message:"请输入验证码",
                        trigger:"blur"
                    }
                ]
            }
        }
    },
    mounted () {
        //console.log(this.$refs.login_form.validate);
        
    },
    methods: {
        handleSubmit(){
            this.$refs.login_form.validate(async(valid)=>{
                if(valid){
                    let rs = await login(this.model);
                    if(rs.data.code == 1){
                        sessionStorage.setItem('user',rs.data.username)
                         //跳转到首页面
                        this.$router.go(-1)
                        // this.$store.username = rs.data.username
                    }else{
                    this.$message.error(rs.data.message)
                }
                   
                }
                
            })
            
        }
    }
}
</script>

<style lang="scss" scoped>
.App-1EAON {
    width: 100%;
    height: 100%
}

.App-3Q8Qb {
    width: 300px;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: center;
    justify-content: center;
    margin: 0 auto
}

.App-3Q8Qb>div:last-child {
    min-height: 296px
}

.App-PZaG3 .App-3Q8Qb,.App-PZaG3 .App-OjtAb {
    opacity: .4
}

.App-OjtAb {
    -webkit-justify-content: center;
    justify-content: center;
    position: relative;
    width: 100%;
    background: #f5f5f5
}

.App-1EAON,.App-OjtAb {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column
}

.App-1EAON {
    -webkit-align-items: center;
    align-items: center
}

.App-1EAON>div:first-child {
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto
}

.App-1EAON>div:first-child+div {
    -webkit-flex: 0 0 104px;
    flex: 0 0 104px
}

@media (max-width: 768px) {
    .App-1EAON {
        height:auto;
        min-height: 100%;
        padding-top: 40px
    }

    .App-3Q8Qb {
        -webkit-justify-content: flex-start;
        justify-content: flex-start
    }

    .App-OjtAb {
        background: #fff;
        -webkit-justify-content: space-between;
        justify-content: space-between
    }
}

.MessageLogin-31EIr {
    display: none;
    margin-top: 20px;
    text-align: center;
    color: #999
}

@media (max-width: 768px) {
    .MessageLogin-31EIr {
        display:block
    }
}

.MessageLogin-FsPlX {
    position: relative;
    margin-bottom: 16px;
    height: 48px;
    font-size: 14px;
    background: #fff
}

.MessageLogin-FsPlX>* {
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 10px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

.MessageLogin-FsPlX>input {
    width: 100%;
    height: 100%;
    left: 0;
    padding-left: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #333;
    -webkit-appearance: none
}

.MessageLogin-FsPlX>input::-webkit-input-placeholder {
    color: #999
}

.MessageLogin-FsPlX>input::placeholder {
    color: #999
}

.MessageLogin-FsPlX>input:focus {
    border-color: #0089dc
}

.MessageLogin-1LX22 {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center
}

.MessageLogin-1LX22 img {
    display: block;
    width: 85px;
    height: 32px
}

.MessageLogin-12c03 {
    margin-left: 10px;
    color: #666;
    font-size: 12px;
    line-height: 14px
}

.MessageLogin-12c03>span {
    color: #2395ff;
    cursor: pointer
}

.MessageLogin-15xD9 {
    margin-top: 12px;
    color: #999;
    font-size: 14px;
    line-height: 20px
}

.MessageLogin-15xD9 a {
    color: #2395ff
}

.MessageLogin-iYvWA {
    margin-top: 16px
}

.CountButton-3e-kd {
    padding: 0;
    border-radius: 6px;
    color: #2395ff;
    background: transparent;
    text-align: center;
    font-size: 14px
}

.CountButton-3e-kd[disabled] {
    color: #ccc
}

.SubmitButton-2wG4T {
    display: block;
    width: 100%;
    height: 42px;
    margin-top: 30px;
    border-radius: 4px;
    background: #4cd96f;
    color: #fff;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    // line-height: 42px
}

.SubmitButton-2wG4T[disabled] {
    background: #ccc
}

.SubmitButton-2wG4T:focus,.SubmitButton-2wG4T:hover {
    background: #4cd964
}

.SubmitButton-2wG4T:disabled {
    background: #ccc
}

.form-Kr7wg {
    display: none;
    margin-top: 20px;
    text-align: center;
    color: #999
}

@media (max-width: 768px) {
    .form-Kr7wg {
        display:block
    }
}

.form-b6px1 {
    position: relative;
    margin-bottom: 16px;
    height: 48px;
    font-size: 14px;
    background: #fff
}

.form-b6px1>* {
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 10px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

.form-b6px1>input {
    width: 100%;
    height: 100%;
    left: 0;
    padding-left: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #333;
    -webkit-appearance: none
}

.form-b6px1>input::-webkit-input-placeholder {
    color: #999
}

.form-b6px1>input::placeholder {
    color: #999
}

.form-b6px1>input:focus {
    border-color: #0089dc
}

.form-2o2sO {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center
}

.form-2o2sO img {
    display: block;
    width: 85px;
    height: 32px
}

.form-2DBWI {
    margin-left: 10px;
    color: #666;
    font-size: 12px;
    line-height: 14px
}

.form-2DBWI>span {
    color: var(--global-blue-color);
    cursor: pointer
}

.SwitchButton-2b6RO {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    padding: 0 6px;
    width: 40px;
    height: 16px;
    color: #999;
    font-size: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: background-color .3s,border-color .3s
}

.SwitchButton-1rBfm {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 16px;
    height: 16px;
    border: 1px solid #ddd;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s
}

.SwitchButton-3wLB9 {
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    color: #fff;
    border-color: #3190e8;
    background: #3190e8
}

.SwitchButton-3wLB9 .SwitchButton-1rBfm {
    -webkit-transform: translate3d(24px,0,0);
    transform: translate3d(24px,0,0)
}

.SwitchButton-3BmOw {
    -webkit-justify-content: flex-end;
    justify-content: flex-end
}

.LoginFooter-UxQIr {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center
}

.LoginFooter-2KaAB {
    line-height: 16px;
    color: #999;
    line-height: 18px;
    text-align: center
}

.LoginFooter-2KaAB>h2 {
    font-size: 12px;
    color: #555
}

.LoginFooter-2KaAB>.LoginFooter-1QHDG {
    display: inline-block;
    margin-top: 12px
}

.LoginFooter-3s25U:after {
    content: "|";
    padding: 0 4px
}

@media (max-width: 768px) {
    .LoginFooter-2KaAB {
        display:none
    }
}

.LoginHeader-1jXn6 {
    text-align: center
}

.LoginHeader-1jXn6 .LoginHeader-85WpV {
    height: 56px
}

.LoginHeader-22Up7 {
    margin-top: 40px;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center
}

.LoginHeader-22Up7>a {
    font-size: 14px;
    padding-bottom: 4px;
    cursor: pointer;
    display: block;
    width: 58px;
    margin: 0 20px
}

.LoginHeader-22Up7>a:focus,.LoginHeader-22Up7>a:hover {
    color: #000
}

.LoginHeader-22Up7>a.LoginHeader-33EiC {
    color: #2395ff;
    font-weight: 700;
    border-bottom: 2px solid #2395ff
}

.AlipayLogin-2XPS- {
    border-top: 1px solid #eee;
    text-align: center;
    padding-bottom: 15px;
    background-color: #fafafa;
    padding: 16px 0;
    width: 100%
}

.AlipayLogin-2XPS-.AlipayLogin-3h4HY {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0" /></filter></svg>#filter');
    -webkit-filter: grayscale(1);
    filter: grayscale(1)
}

.AlipayLogin-3B7m1 {
    color: #666
}

.AlipayLogin-1gWwX {
    width: 300px;
    margin: 0 auto;
    padding: 12px 0;
    border: 1px solid #ddd;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    border-radius: 2px;
    font-size: 16px;
    color: #25abee
}

.AlipayLogin-3BwhX {
    width: 18px;
    height: 18px;
    margin-right: 6px
}

.AlipayLogin-25u8B {
    font-size: 13px;
    color: #999;
    margin-top: 12px
}
</style>