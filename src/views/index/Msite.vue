<template>
  <div class="index">
    <header class="header" v-show="$store.state.pullUp&&!$store.state.zongheRank">
      <div class="address">
        <div role="button" class="address-con">
          
            <svg class="icon" width="24px" height="24px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g fill="#fff">
            <path d="M808.6 403.2c0-178.8-129.8-308.5-308.5-308.5-170.1 0-308.5 138.4-308.5 308.5 0 125.6 170.6 338.3 262.3 452.6l6.8 8.4c9.6 12 24 18.9 39.5 18.9 15.4 0 29.8-6.9 39.5-18.9l6.8-8.4c91.5-114.3 262.1-327 262.1-452.6z m-310.1 89.4c-62.9 0-114-51.1-114-114s51.1-114 114-114 114 51.1 114 114-51.1 114-114 114z" fill="#FFFFFF" p-id="6564"></path>
        
            </g>
            </svg>

          <span class="address-name">北京瑞安宾馆</span>

          <svg class="icon" width="15px" height="15px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g fill="#fff">
          <path  d="M543.744 647.68c-7.168 7.168-16.896 13.824-26.112 11.776-9.216 1.536-17.92-5.632-25.088-11.776L270.848 424.96c-11.264-11.264-11.264-29.696 0-40.96s29.696-11.264 40.96 0l206.336 211.968L724.992 384c11.264-11.264 29.696-11.264 40.96 0s11.264 29.696 0 40.96L543.744 647.68z" />
          </g>
          </svg>

        </div>
      </div>
    </header>

    <div class="search" @click="handleClick">
        <a class="content">
            <img src="../../assets/images/fangdajing.png" alt="">
            <span>搜索饿了么商家、商品名称</span>
        </a>
    </div>

    <MsiteContent></MsiteContent>
  </div>
</template>

<script>
import MsiteContent from "./MsiteContent";
export default {
  components: {
    MsiteContent
  },
  methods: {
    handleClick(){
      this.$router.push({path:'/search'})
    }
  }
}
</script>

<style lang="scss" scoped>
.index{
    height: 100%;
    font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
    // overflow-y: scroll;
    display: flex;
    flex-direction: column;
    .header{
    background: linear-gradient(90deg,#0af,#0085ff);

    color: #fff;
    padding:10px 10px;
    height:30px;

    .address{
        display: flex;
        align-items: center;

        .address-con{
            width: 60%;
            font-weight: 700;
           
            .address-name{
                line-height:35px;
                font-size: 17px;
                margin:0 5px;
                max-width: 80%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
         }
    }

    
}

}

.search{
  background: linear-gradient(90deg,#0af,#0085ff);
  height: 50px;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   position: sticky;
    z-index: 999;
    top: 0;
  .content{
    display: flex;
    width: 90%;
    height: 35px;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background: #fff;
    color: #999;
    font-size: 13px;

    img{
      width: 15px;
      margin-right: 3px;
      
    }
  }
}
 .search:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    top: -1px;
}

</style>