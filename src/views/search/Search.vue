<template>
  <div class="app-2KdnP_1">
    <!---->
    <section class="app-3rytA_1" >
        
     <svg
        @click="$router.go(-1)"
        t="1572918706519"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2088"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="20"
        height="20"
      >
        <path
          d="M766.862 1021.724c-10.24 0-20.594-3.64-28.444-10.922L228.693 538.396c-15.701-14.563-15.701-38.229 0-52.792L738.418 13.198c15.701-14.563 41.187-14.563 56.889 0 15.701 14.564 15.701 38.23 0 52.793L314.027 512l481.28 446.009c15.701 14.563 15.701 38.23 0 52.793-7.851 7.282-18.205 10.922-28.445 10.922z"
          p-id="2089"
        />
      </svg>

      <form class="app-iYo7n_1">
        <svg aria-hidden="true" class="app-2kCc4_1">
          <use xlink:href="#search" />
        </svg>
        <input type="search" placeholder="输入商家、商品名称" class="app-11zxJ_1" v-model="keywords" />
        <button type="submit" class="app-3q7ve_1">搜索</button>
      </form>
    </section>
    
    <!--  历史纪录  -->

      <div geohash="wx4g0bm68wng" userid="6225488146" v-show="!keywords">
        <section>
          <header class="index-22vWR">
            <span>历史搜索</span>
            <div aria-label="清除历史搜索" role="button" class="index-3cPNo">
              <svg>
                <use xlink:href="#bin" />
              </svg>
            </div>
          </header>
          <section class="index-3jzIf">
            <button role="button" class="index-NbBi7">时光小驻</button>
          </section>
        </section>
        <section class="index-1YjCI">
          <header class="index-22vWR">热门搜索</header>
          <section class="index-3jzIf">
            <button role="button" class="index-NbBi7" v-for="(item,index) in hotwords" :key="index" @click="keywords=item.word">{{item.word}}</button>
          </section>
        </section>
      </div>
    <SearchContent v-show="keywords" :searchWords="searchWords" :searchRest="searchRest" :list="dataview.list" @getItem="getitem"></SearchContent>

  </div>
</template>

<script>
import SearchContent from "./SearchContent";
import { hotSearchWords,getSearchlist,getRestaurants } from "../../api/Search";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import { Toast, Indicator } from "mint-ui";
import "mint-ui/lib/style.css";

BScroll.use(Pullup);

export default {
    data () {
        return {
            keywords:"",
            latitude: 34.629495,
            longitude: 112.611363,
            hotwords:[],
            searchRest:[],
            searchWords:[],
            history:[],
            dataview:{
                pageno:1,
                limit:15,
                search_item_type:3,
                is_rewrite:1,
                list:[]
            }
        }
    },
    components: {
        SearchContent
    },
    methods:{
       async getHotWords(){
            let parmas = {
                latitude:this.latitude,
                longitude:this.longitude
            }
            let rs = await hotSearchWords(parmas);
            this.hotwords = rs.data;
           
            
        },
        
    //获取搜索结果（简）
    async SearchList(){
        //kw=鱼%&latitude=39.904179&longitude=116.407387&city_id=3
        let parmas = {
            kw:this.keywords,
            latitude:this.latitude,
            longitude:this.longitude,
            city_id:3
        }
        let rs = await getSearchlist(parmas)
        
        
        this.searchRest = rs.data.restaurants
        this.searchWords = rs.data.words
       
    },
    //搜索到的饭店（Σ(っ °Д °;)っ）
    //?offset=0&limit=15&keyword=%E9%B1%BC&latitude=39.904179&longitude=116.407387&search_item_type=3&is_rewrite=1
    //offset=15&limit=15&keyword=%E9%B1%BC&latitude=39.904179&longitude=116.407387&search_item_type=3&is_rewrite=1&extras[]=activities&extras[]=coupon&terminal=h5
    async ReastaurantList(){
        
        let parmas = {
            offset:0,
            limit:15,
            keyword:this.keywords,
            latitude:this.latitude,
            longitude:this.longitude,
            search_item_type:3,
            is_rewrite:1
    }
    let rs = await getRestaurants(parmas)
    this.dataview.list = rs.data.inside[0].restaurant_with_foods
    
    },
    //获取更多
     async MoreReastaurantList(){
        
        let startIndex = this.dataview.pageno*this.dataview.limit;
        let parmas = {
            offset:startIndex,
            limit:15,
            keyword:"鱼",
            latitude:this.latitude,
            longitude:this.longitude,
            search_item_type:3,
            is_rewrite:1
    }
    Indicator.open();
    let rs = await getRestaurants(parmas)
    
    
    this.dataview.list.push(...rs.data.inside[0].restaurant_with_foods)

    // this.$nextTick(() => {
    //     //当下拉刷新数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载
    //     this.scroll.finishPullUp();
    //     //重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
    //     this.scroll.refresh();
    //   });
    this.$nextTick(()=>{
        this.dataview.pageno++;
    })
    Indicator.close();
      
    },

    getitem(data){
        this.keywords = data.nowKey

    }

    },
    watch: {
        keywords(newval,oldval){
            if(this.keywords){
            this.SearchList();
            this.ReastaurantList();
             
        }else{
            this.$store.commit('CLICKED', false)
        }  
        } 
    },
    mounted () {
        this.getHotWords()
        // this.MoreReastaurantList()
        
    }

}

</script>

<style lang="scss" scoped>
*{border: none;}
.mini-tag-1Lyw4 {
    position: relative;
    font-size:12px;
    color: transparent;
    white-space: nowrap
}

.mini-tag-1ezSQ {
    position: absolute;
    left: 0;
    top: 0;
    right: -100%;
    bottom: -100%;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    font-size:12px
}

html {
    background-color: #fff
}

.g-highlight {
    color: #999
}

.g-hl-blue {
    color: #118dff
}

.g-hl-black {
    color: #151515
}

.app-2KdnP_1 {
    height: 100vh
}

.app-3GmD-_1 {
    height: calc(100vh - 1.36rem);
    height: calc(100vh - 13.6vw)
}

.app-3GmD-_1.app-2Fwjf_1 {
    height: 100vh
}

.app-3rytA_1 {
    background: #fff;
    position: relative;
    z-index: 52
}

.app-k5tZV_1 {
    visibility: hidden!important
}

.app-3v-C7_1 {
    -webkit-align-items: center;
    align-items: center;
    z-index: 101;
    background: #fff;
    z-index: 52
}

.app-3v-C7_1,.app-iYo7n_1 {
    display: -webkit-flex;
    display: flex;
    position: relative
}

.app-iYo7n_1 {
    -webkit-flex-grow: 1;
    flex-grow: 1;
    padding: .293333rem .293333rem .293333rem 0;
    padding: 2.933333vw 2.933333vw 2.933333vw 0;
    margin-left: .293333rem;
    margin-left: 2.933333vw;
    background-color: #fff;
    z-index: 101
}

.app-21LS3_1 {
    width: .933333rem;
    width: 9.333333vw;
    height: .933333rem;
    height: 9.333333vw;
    fill: #999;
    padding: .133333rem .133333rem .133333rem 0;
    padding: 1.333333vw 1.333333vw 1.333333vw 0
}

.app-11zxJ_1 {
    -webkit-flex-grow: 1;
    flex-grow: 1;
    border-radius: .026667rem;
    border-radius: .266667vw;
    -webkit-appearance: none;
    background-color: #f8f8f8;
    padding: .173333rem .4rem .173333rem .88rem;
    padding: 1.733333vw 4vw 1.733333vw 8.8vw;
    font-size: 12px;
    color: #666
}

.app-11zxJ_1::-webkit-input-placeholder {
    color: #999
}

.app-11zxJ_1::placeholder {
    color: #999
}

.app-2kCc4_1 {
    width: .293333rem;
    width: 2.933333vw;
    height: .293333rem;
    height: 2.933333vw;
    position: absolute;
    top: .533333rem;
    top: 5.333333vw;
    left: .293333rem;
    left: 2.933333vw
}

.app-3q7ve_1 {
    outline: none;
    color: #333;
    font-size: 12px;
    background: #fff;
    font-weight: 700;
    margin-left: .293333rem;
    margin-left: 2.933333vw
}

.app-2edQ4_1 {
    color: #999;
    font-size:12px;
    padding: 0 .426667rem;
    padding: 0 4.266667vw;
    height: 1.173333rem;
    height: 11.733333vw;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center
}

.app-2edQ4_1 .app-3RvEi_1 {
    color: #151515;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-block;
    width: 7.466667rem;
    width: 74.666667vw
}

.app-2edQ4_1 .app-2ooP9_1 {
    height: .32rem;
    height: 3.2vw;
    width: .32rem;
    width: 3.2vw;
    margin-right: .373333rem;
    margin-right: 3.733333vw
}

.app-kApOY_1 {
    display: -webkit-flex;
    display: flex;
    height: 1.173333rem;
    height: 11.733333vw;
    -webkit-align-items: center;
    align-items: center;
    padding: 0 .4rem;
    padding: 0 4vw;
    font-size: 12px;
}

.app-kApOY_1 .app-2ooP9_1 {
    height: .346667rem;
    height: 3.466667vw;
    width: .346667rem;
    width: 3.466667vw;
    margin-right: .32rem;
    margin-right: 3.2vw
}

.app-kApOY_1 .app-1f6Aa_1 {
    -webkit-flex: 1;
    flex: 1;
    height: 1.173333rem;
    height: 11.733333vw;
    line-height: 1.173333rem;
    line-height: 11.733333vw;
    border-bottom: 1px solid #e3e3e3
}

.shopitem-type-8ofQp {
    padding: 0 .426667rem;
    padding: 0 4.266667vw;
    display: -webkit-flex;
    display: flex;
    height: 1.493333rem;
    height: 14.933333vw;
    -webkit-align-items: center;
    align-items: center
}

.shopitem-type-2zQn7 {
    -webkit-flex: none;
    flex: none;
    width: .64rem;
    width: 6.4vw;
    height: .64rem;
    height: 6.4vw;
    margin-right: .426667rem;
    margin-right: 4.266667vw;
    border-radius: .013333rem;
    border-radius: .133333vw
}

.shopitem-type-3mtUY {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    align-items: center;
    -webkit-flex: 1;
    flex: 1;
    height: 1.493333rem;
    height: 14.933333vw;
    border-bottom: 1px solid #e3e3e3
}

.shopitem-type-2aznP {
    color: #999;
    font-size: 12px;
}

.shopitem-type-1GBT2 {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center
}

.shopitem-type-3ZbI8 {
    display: inline-block;
    max-width: 5.6rem;
    max-width: 56vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    color: #333;
    margin-right: .08rem;
    margin-right: .8vw
}

.shopitem-type-16hNi {
    margin-top: .106667rem;
    margin-top: 1.066667vw;
    color: #00e066;
    border: 1px solid #00e066;
    font-size:12px;
    padding: 0 .16rem;
    padding: 0 1.6vw;
    height: .4rem;
    height: 4vw;
    line-height: .4rem;
    line-height: 4vw;
    display: inline-block;
    border-radius: 1.333333rem;
    border-radius: 13.333333vw
}

.shopitem-type-1KYQw {
    color: #fff;
    font-size: 12px;
    border-radius: .053333rem;
    border-radius: .533333vw;
    height: .693333rem;
    height: 6.933333vw;
    line-height: .693333rem;
    line-height: 6.933333vw;
    text-align: center;
    display: inline-block;
    padding: 0 .08rem;
    padding: 0 .8vw;
    margin-left: .08rem;
    margin-left: .8vw;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%
}

.navindex-IgqKR {
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 .066667rem 0 rgba(0,0,0,.1);
    box-shadow: 0 0 .666667vw 0 rgba(0,0,0,.1);
    z-index: 999
}

.navindex-3Uhfu {
    background-color: #2395ff;
    font-size: 12px;
    color: #fff;
    text-align: center;
    height: 1.173333rem;
    height: 11.733333vw;
    display: block;
    border-radius: .026667rem;
    border-radius: .266667vw;
    margin: .213333rem .426667rem;
    margin: 2.133333vw 4.266667vw;
    line-height: 1.173333rem;
    line-height: 11.733333vw;
    font-weight: 500;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center
}

.navindex-3Uhfu>svg {
    width: .533333rem;
    width: 5.333333vw;
    height: .533333rem;
    height: 5.333333vw;
    margin-right: .133333rem;
    margin-right: 1.333333vw
}

.Loading-2RjQo {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    transition: opacity .3s
}

.Loading-2RjQo.Loading-3JiQY {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 8888;
    width: 100%;
    height: 100%
}

.Loading-1eq8D,.Loading-2Dcsa {
    opacity: 1
}

.Loading-34lRq {
    opacity: 0
}

.Loading-3h5w1 {
    position: relative;
    margin-top: .666667rem;
    margin-top: 6.666667vw
}

.Loading-2aU5Y,.Loading-3h5w1 {
    width: 1.333333rem;
    width: 13.333333vw;
    height: 1.333333rem;
    height: 13.333333vw
}

.Loading-2aU5Y {
    position: absolute;
    z-index: 5;
    background-repeat: no-repeat;
    background-size: auto 100%;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    background-position-x: 0;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
    -webkit-animation: Loading-3Gfbr 1.5s normal infinite steps(43);
    animation: Loading-3Gfbr 1.5s normal infinite steps(43)
}

@-webkit-keyframes Loading-3Gfbr {
    0% {
        background-position-x: 0
    }

    to {
        background-position-x: 100%
    }
}

@keyframes Loading-3Gfbr {
    0% {
        background-position-x: 0
    }

    to {
        background-position-x: 100%
    }
}

.index-22vWR {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    font-size: 12px;
    padding: .2rem .333333rem;
    padding: 2vw 3.333333vw;
    color: #666;
    font-weight: 700
}

.index-1YjCI {
    margin-top: .4rem;
    margin-top: 4vw
}

.index-3cPNo {
    display: block;
    padding-top: .053333rem;
    padding-top: .533333vw
}

.index-3cPNo svg {
    height: .32rem;
    height: 3.2vw;
    width: .32rem;
    width: 3.2vw;
    color: #cecece;
    fill: currentColor
}

.index-3jzIf {
    padding: 0 .333333rem .333333rem;
    padding: 0 3.333333vw 3.333333vw
}

.index-NbBi7 {
    display: inline-block;
    border-radius: .066667rem;
    border-radius: .666667vw;
    padding: .2rem .266667rem;
    padding: 2vw 2.666667vw;
    font-size: 12px;
    margin-right: .333333rem;
    margin-right: 3.333333vw;
    margin-top: .333333rem;
    margin-top: 3.333333vw;
    color: #666;
    background-color: #f7f7f7
}

.shop-3SsDF {
    height: 100%
}

.shop-2WUef,.shop-3SsDF {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column
}

.shop-2WUef {
    height: 100vh
}

.shop-3WuEw:not(:last-child) {
    padding-bottom: .213333rem;
    padding-bottom: 2.133333vw;
    background-color: #f5f5f5
}

.shop-2BIW5 {
    border-bottom: 1px solid hsla(0,0%,89%,.5);
    position: relative;
    z-index: 51
}

.shop-314af {
    border-bottom: none!important
}

.shop-3XmEa {
    -webkit-flex: 1;
    flex: 1;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch
}

.shop-33fYg {
    display: -webkit-flex;
    display: flex;
    height: 1.36rem;
    height: 13.6vw;
    -webkit-align-items: center;
    align-items: center;
    padding: 0 .426667rem;
    padding: 0 4.266667vw;
    font-size: 12px;
}

.shop-33fYg .shop-2IyeO {
    height: .666667rem;
    height: 6.666667vw;
    width: .666667rem;
    width: 6.666667vw;
    margin-right: .4rem;
    margin-right: 4vw
}

.shop-33fYg .shop-1VWIr {
    color: #118dff;
    font-weight: 700;
    margin: 0 .08rem;
    margin: 0 .8vw;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 4.533333rem;
    max-width: 45.333333vw;
    white-space: nowrap
}

.shop-3XvCP {
    width: 1.6rem;
    width: 16vw;
    height: .533333rem;
    height: 5.333333vw;
    line-height: .533333rem;
    line-height: 5.333333vw;
    color: #fff;
    margin: 0 auto;
    background-color: #56d176;
    border-radius: .053333rem;
    border-radius: .533333vw;
    text-align: center;
    font-size: 12px;
    margin-bottom: .266667rem;
    margin-bottom: 2.666667vw
}

.shop-7RC41 {
    text-align: center;
    font-size: 12px;
    color: #666;
    margin: .266667rem 0;
    margin: 2.666667vw 0
}

.loadMore-S4ll- {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    min-height: 1.066667rem;
    min-height: 10.666667vw;
    background-color: #fff;
    color: #555;
    font-size: 12px;
}

.loadMore-QFxty {
    display: block;
    margin-right: .2rem;
    margin-right: 2vw;
    width: .4rem;
    width: 4vw;
    height: .4rem;
    height: 4vw;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-animation: loadMore-3Zah4 1s linear infinite;
    animation: loadMore-3Zah4 1s linear infinite
}

@-webkit-keyframes loadMore-3Zah4 {
    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

@keyframes loadMore-3Zah4 {
    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

.filter[data-v-5ef01ae7] {
    position: relative;
    border-bottom: 1px solid #ddd;
    line-height: 1.04rem;
    line-height: 10.4vw;
    z-index: 101;
    height: 1.066667rem;
    height: 10.666667vw
}

.filter-header[data-v-5ef01ae7] {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 1.053333rem;
    height: 10.533333vw;
    display: -webkit-flex;
    display: flex;
    z-index: 4;
    background-color: #fff
}

.filter-nav[data-v-5ef01ae7] {
    -webkit-flex: 1;
    flex: 1;
    text-align: center;
    color: #666;
    position: relative;
    font-size:12px;
    z-index: 101
}

.filter-nav.active[data-v-5ef01ae7] {
    color: #333;
    font-weight: 700
}

.filter-nav.active .dropdown-icon[data-v-5ef01ae7] {
    fill: currentColor
}

.filter-nav.open[data-v-5ef01ae7] {
    color: #3190e8;
    font-weight: 700
}

.filter-nav.open .dropdown-icon[data-v-5ef01ae7] {
    fill: currentColor
}

.filter-nav .dropdown-icon[data-v-5ef01ae7] {
    width: .16rem;
    width: 1.6vw;
    height: .08rem;
    height: .8vw;
    margin-left: .133333rem;
    margin-left: 1.333333vw;
    margin-bottom: .053333rem;
    margin-bottom: .533333vw;
    fill: #333;
    will-change: transform;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s
}

.filter-nav-more[data-v-5ef01ae7] {
    width: 2.133333rem;
    width: 21.333333vw;
    height: 1.066667rem;
    height: 10.666667vw;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    color: #666;
    font-size: 12px;
    position: relative
}

.filter-nav-more.open[data-v-5ef01ae7] {
    color: #3190e8;
    font-weight: 700
}

.filter-nav-more.open .filter-nav-more__icon[data-v-5ef01ae7] {
    fill: currentColor
}

.filter-nav-more.active[data-v-5ef01ae7] {
    color: #333;
    font-weight: 700
}

.filter-nav-more.active .filter-nav-more__icon[data-v-5ef01ae7] {
    fill: currentColor
}

.filter-nav-more__icon[data-v-5ef01ae7] {
    margin-left: .053333rem;
    margin-left: .533333vw;
    width: .346667rem;
    width: 3.466667vw;
    height: .346667rem;
    height: 3.466667vw;
    fill: #666
}

.filter-nav-arrow[data-v-5ef01ae7] {
    display: inline-block;
    vertical-align: middle;
    width: .24rem;
    width: 2.4vw
}

.filter-extend[data-v-5ef01ae7] {
    left: 0;
    right: 0;
    top: 1.053333rem;
    top: 10.533333vw;
    border-top: 1px solid #ddd;
    position: absolute;
    max-height: 0;
    background-color: #fff;
    transition: all .2s ease-in-out;
    visibility: hidden;
    overflow: auto;
    opacity: 0;
    z-index: 4
}

.filter-extend.open[data-v-5ef01ae7] {
    opacity: 1;
    visibility: visible;
    max-height: 1500%
}

.filter-nav__icon[data-v-5ef01ae7] {
    width: .346667rem;
    width: 3.466667vw;
    height: .293333rem;
    height: 2.933333vw;
    margin-right: .053333rem;
    margin-right: .533333vw
}

.filtermodal[data-v-5ef01ae7] {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
    background: rgba(0,0,0,.5);
    transition: all .3s ease-in-out;
    -webkit-backdrop-filter: blur(.133333rem);
    -webkit-backdrop-filter: blur(1.333333vw);
    backdrop-filter: blur(.133333rem);
    backdrop-filter: blur(1.333333vw)
}

.morefilter-2etYY {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    height: 10em;
    color: #999
}

.morefilter-3-5h6 {
    overflow: auto;
    height: 100%;
    padding: 0 .266667rem;
    padding: 0 2.666667vw;
    background: #fff;
    -webkit-overflow-scrolling: touch;
    line-height: normal
}

.morefilter-3-5h6 dl {
    margin: .266667rem 0;
    margin: 2.666667vw 0;
    overflow: hidden
}

.morefilter-3-5h6 dt {
    margin-left: 1%;
    margin-bottom: .2rem;
    margin-bottom: 2vw;
    color: #666
}

.morefilter-3-5h6 dd {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    background: #fff;
    position: relative
}

.morefilter-3GXUR {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-flex: 0 0 31.33%;
    flex: 0 0 31.33%;
    height: .933333rem;
    height: 9.333333vw;
    font-size: 12px;
    margin: .08rem 1%;
    margin: .8vw 1%;
    background: #fafafa
}

.morefilter-3GXUR .morefilter-l3S4A {
    white-space: nowrap
}

.morefilter-3GXUR span {
    margin-left: 2%;
    vertical-align: middle
}

.morefilter-3GXUR .morefilter-2JyrM {
    width: .346667rem;
    width: 3.466667vw;
    height: .346667rem;
    height: 3.466667vw;
    vertical-align: middle;
    margin-right: .08rem;
    margin-right: .8vw
}

.morefilter-3GXUR.morefilter-3emCs {
    font-weight: 700;
    color: #3190e8;
    background-color: #edf5ff
}

.morefilter-2DLty {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;
    -webkit-align-items: center;
    align-items: center;
    background-color: #fafafa;
    box-shadow: 0 -.026667rem .053333rem 0 #ededed;
    box-shadow: 0 -.266667vw .533333vw 0 #ededed;
    line-height: 1.146667rem;
    line-height: 11.466667vw
}

.morefilter-2DLty .morefilter-16ilq,.morefilter-2DLty .morefilter-39NFb {
    font-size: 12px;
    text-align: center;
    text-decoration: none;
    -webkit-flex: 1;
    flex: 1
}

.morefilter-2DLty .morefilter-39NFb {
    background-color: #fff;
    color: #ddd
}

.morefilter-2DLty .morefilter-39NFb.morefilter-2Dfps {
    color: #333
}

.morefilter-2DLty .morefilter-16ilq {
    opacity: .5;
    color: #fff;
    background-color: #00d762;
    border: .013333rem solid #00d762;
    border: .133333vw solid #00d762
}

.morefilter-2DLty .morefilter-16ilq.morefilter-2Dfps {
    opacity: 1
}

.morefilter-2DLty i,.morefilter-2DLty i:after,.morefilter-2DLty i:before {
    display: inline-block;
    width: .133333rem;
    width: 1.333333vw;
    height: .133333rem;
    height: 1.333333vw;
    border-radius: 50%;
    background: #fff;
    opacity: .8;
    position: relative
}

.morefilter-2DLty i:after,.morefilter-2DLty i:before {
    content: "";
    position: absolute;
    top: 0
}

.morefilter-2DLty i:before {
    left: -.266667rem;
    left: -2.666667vw;
    opacity: .5
}

.morefilter-2DLty i:after {
    right: -.266667rem;
    right: -2.666667vw;
    opacity: 1
}

ul[data-v-bc8dac82] {
    list-style: none;
    margin: 0;
    padding: 0
}

.filter-sort[data-v-bc8dac82] {
    padding-top: .213333rem;
    padding-top: 2.133333vw;
    padding-bottom: .32rem;
    padding-bottom: 3.2vw;
    font-size: 12px;
    color: #333
}

.filter-sort li[data-v-bc8dac82] {
    position: relative;
    padding-left: .533333rem;
    padding-left: 5.333333vw;
    line-height: 1.066667rem;
    line-height: 10.666667vw
}

.filter-sort li.active[data-v-bc8dac82] {
    color: #3190e8;
    font-weight: 700
}

.filter-sort li.active .selected[data-v-bc8dac82] {
    display: block
}

.filter-sort .selected[data-v-bc8dac82] {
    position: absolute;
    right: .373333rem;
    right: 3.733333vw;
    top: 50%;
    width: .4rem;
    width: 4vw;
    height: .4rem;
    height: 4vw;
    display: none;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

.recommend-SoDSD {
    background: #f5f5f5
}

.recommend-NAxY4 {
    height: 1.28rem;
    height: 12.8vw;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    color: #333
}

.recommend-NAxY4 svg {
    width: .373333rem;
    width: 3.733333vw;
    height: .373333rem;
    height: 3.733333vw;
    margin-right: .133333rem;
    margin-right: 1.333333vw
}

.recommend-NAxY4:after,.recommend-NAxY4:before {
    display: block;
    content: "";
    width: .213333rem;
    width: 2.133333vw;
    height: .026667rem;
    height: .266667vw;
    background-color: #999
}

.recommend-NAxY4:before {
    margin-right: .133333rem;
    margin-right: 1.333333vw
}

.recommend-NAxY4:after {
    margin-left: .133333rem;
    margin-left: 1.333333vw
}

.recommend-FEHNE {
    margin-bottom: .213333rem;
    margin-bottom: 2.133333vw
}

.no-result-2cFwZ {
    height: 3.146667rem;
    height: 31.466667vw;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    background-color: #fff
}

.no-result-gcdee {
    width: 2.4rem;
    width: 24vw;
    height: 1.76rem;
    height: 17.6vw;
    -webkit-flex: none;
    flex: none
}

.no-result-Cl76e {
    color: #666;
    font-size:12px;
    margin-bottom: .16rem;
    margin-bottom: 1.6vw
}

.no-result-3JpVA {
    color: #999;
    font-size: 12px;
}

.shopitem-1vZmH {
    display: -webkit-flex;
    display: flex;
    background-color: #fff;
    padding-left: 2.346667rem;
    padding-left: 23.466667vw
}

.shopitem-aFg1- {
    border-bottom: none
}

.shopitem-bejnG {
    background-color: #fff;
    height: 1.066667rem;
    height: 10.666667vw;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    font-size: 12px;
    padding-left: 2.346667rem;
    padding-left: 23.466667vw
}

.shopitem-bejnG svg {
    width: .24rem;
    width: 2.4vw;
    margin-left: .16rem;
    margin-left: 1.6vw
}

.shopitem-KZ9a2 {
    width: 2.346667rem;
    width: 23.466667vw;
    -webkit-flex: none;
    flex: none;
    margin-right: .08rem;
    margin-right: .8vw
}

.shopitem-KZ9a2 .shopitem-1xTsP {
    width: 2.346667rem;
    width: 23.466667vw;
    height: 2.346667rem;
    height: 23.466667vw
}

.shopitem-23ZxE {
    padding-left: 2.346667rem;
    padding-left: 23.466667vw;
    padding-right: .426667rem;
    padding-right: 4.266667vw;
    background-color: #fff
}

.shopitem-23ZxE>div {
    height: 1.413333rem;
    height: 14.133333vw;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: center;
    justify-content: center
}

.shopitem-1Y_Ew {
    color: #999;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
}

.shopitem-1NBf_ {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: space-between;
    justify-content: space-between
}

.shopitem-1NBf_ .shopitem-2OSAh {
    font-size: 12px;
    color: #999
}

.shopitem-14ziR {
    color: #ff5339;
    font-size:14px;
    height: .773333rem;
    height: 7.733333vw;
    line-height: .773333rem;
    line-height: 7.733333vw
}

.shopitem-14ziR .shopitem-2xZ8d {
    font-size: 12px;
}

.fooditem-8Wd41 {
    background-color: #fff
}

.fooditem-1PklT {
    height: 1.706667rem;
    height: 17.066667vw;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    border-bottom: 1px solid hsla(0,0%,89%,.5);
    padding: 0 .426667rem;
    padding: 0 4.266667vw
}

.fooditem-1PklT .fooditem-2qlxF {
    color: #333;
    font-size:12px;
    max-width: 4.133333rem;
    max-width: 41.333333vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.fooditem-1PklT .fooditem-sMLyo {
    -webkit-justify-content: space-between;
    justify-content: space-between
}

.fooditem-1PklT .fooditem-38htv,.fooditem-1PklT .fooditem-sMLyo {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center
}

.fooditem-1PklT .fooditem-3qYv7 {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    font-size: 12px;
    color: #666;
    margin-top: .106667rem;
    margin-top: 1.066667vw
}

.fooditem-1PklT .fooditem-3qYv7 span+span:before {
    margin: .08rem;
    margin: .8vw;
    color: #ddd;
    content: "|"
}

.fooditem-1PklT .fooditem-1ad7e {
    border-radius: .026667rem;
    border-radius: .266667vw;
    font-size: 12px;
    color: #fff;
    height: .346667rem;
    height: 3.466667vw;
    line-height: .346667rem;
    line-height: 3.466667vw;
    padding: 0 .053333rem;
    padding: 0 .533333vw;
    margin-left: .186667rem;
    margin-left: 1.866667vw;
    white-space: nowrap
}

.fooditem-1PklT .fooditem-1ad7e.fooditem-11PZa {
    background-image: linear-gradient(-90deg,#ff8b6b,#ff5339)
}

.fooditem-1PklT .fooditem-1ad7e.fooditem-y7uNx {
    background-image: linear-gradient(-135deg,#7ae236,#00c180)
}

.fooditem-1GIc7 {
    -webkit-flex: 1;
    flex: 1;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: space-between;
    justify-content: space-between
}

.fooditem-1GIc7,.fooditem-lTDjj {
    height: .853333rem;
    height: 8.533333vw
}

.fooditem-lTDjj {
    width: .853333rem;
    width: 8.533333vw;
    margin-right: .16rem;
    margin-right: 1.6vw
}

.fooditem-2XxMg {
    width: 1.706667rem;
    width: 17.066667vw;
    height: 1.706667rem;
    height: 17.066667vw;
    margin-right: .213333rem;
    margin-right: 2.133333vw
}

.fooditem-YcLXb {
    padding: 0 .426667rem;
    padding: 0 4.266667vw
}

.fooditem-1gz-7:before {
    margin-right: .133333rem;
    margin-right: 1.333333vw;
    padding: 0 .066667rem;
    padding: 0 .666667vw;
    height: .4rem;
    height: 4vw;
    line-height: .4rem;
    line-height: 4vw;
    border-radius: .053333rem;
    border-radius: .533333vw;
    background-image: linear-gradient(-139deg,#fff100,#ffe339);
    color: #6f3f15;
    content: "\54C1\724C";
    text-align: center;
    white-space: nowrap;
    font-weight: 700;
    font-size:12px;
    -webkit-flex: none;
    flex: none
}

.fooditem-3kUct {
    height: 2.346667rem;
    height: 23.466667vw;
    padding: .32rem 0;
    padding: 3.2vw 0;
    border-bottom: 1px solid hsla(0,0%,89%,.5);
    display: -webkit-flex;
    display: flex
}

.fooditem-3kUct .fooditem-2qlxF {
    font-size:12px;
    color: #100
}

.fooditem-3kUct .fooditem-3Vn-y {
    color: #666;
    font-size: 12px;
}

.fooditem-3kUct .fooditem-MwQbr {
    font-size: 14px;
    color: #ff5339
}

.fooditem-3kUct .fooditem-MwQbr:before {
    content: "\A5";
    display: inline;
    font-size: 12px;
    margin-right: .053333rem;
    margin-right: .533333vw
}

.fooditem-3kUct .fooditem-2740z {
    font-size: 12px;
    color: #666;
    margin-left: .106667rem;
    margin-left: 1.066667vw
}

.fooditem-3kUct .fooditem-1gD8c {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center
}

.fooditem-3eVtw {
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: space-between;
    justify-content: space-between
}

.fooditem-3eVtw,.fooditem-3LvVZ {
    display: -webkit-flex;
    display: flex
}

.fooditem-3LvVZ {
    background-color: #fff;
    height: 1.066667rem;
    height: 10.666667vw;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    font-size: 12px;
}

.fooditem-3LvVZ svg {
    width: .24rem;
    width: 2.4vw;
    margin-left: .16rem;
    margin-left: 1.6vw
}

.fooditem-2ncia {
    height: .346667rem;
    height: 3.466667vw;
    width: 1.253333rem;
    width: 12.533333vw;
    margin-left: .106667rem;
    margin-left: 1.066667vw
}

.fooditem-2F7fl {
    border-radius: .026667rem;
    border-radius: .266667vw;
    background-image: linear-gradient(45deg,#0085ff,#0af);
    color: #fff
}

.fooditem-zzI38 {
    height: .373333rem;
    height: 3.733333vw;
    margin-left: .16rem;
    margin-left: 1.6vw;
    display: inline-block;
    padding: 0 .053333rem;
    padding: 0 .533333vw
}

.fooditem-1ltm5 {
    width: .48rem;
    width: 4.8vw;
    height: .293333rem;
    height: 2.933333vw
}

.fooditem-1Qeve {
    font-size: 12px!important;
    color: #ccc;
    border-radius: .026667rem;
    border-radius: .266667vw;
    border: 1px solid #eee;
    line-height: normal
}

.fooditem-3q4IH {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: flex-end;
    align-items: flex-end
}

.brand-top-cLR8_:after {
    display: block;
    content: "";
    height: .24rem;
    height: 2.4vw;
    background-color: #f0f0f0
}

.brand-top-3uQ53 {
    margin-right: .266667rem;
    margin-right: 2.666667vw
}

.brand-top-3uQ53,.brand-top-sdPDy {
    width: 1.066667rem;
    width: 10.666667vw;
    height: 1.066667rem;
    height: 10.666667vw
}

.brand-top-sdPDy {
    border-radius: 50%
}

.brand-top-2kPBu {
    position: relative;
    display: -webkit-flex;
    display: flex;
    padding: .16rem .266667rem;
    padding: 1.6vw 2.666667vw;
    color: #666
}

.brand-top-3P2PP {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: space-between;
    justify-content: space-between
}

.brand-top-xll_2 {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center
}

.brand-top-3IiaR {
    color: #333;
    font-size: 14px;
}

.brand-top-Kxfo6 {
    display: inline-block;
    width: 1px;
    height: .16rem;
    height: 1.6vw;
    margin: 0 .16rem;
    margin: 0 1.6vw;
    background-color: #ddd
}

.brand-top-33q3W {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    padding: .16rem 0 .24rem;
    padding: 1.6vw 0 2.4vw
}

.brand-top-1APF4 {
    width: 9.466667rem;
    width: 94.666667vw;
    height: 2.4rem;
    height: 24vw;
    border-radius: .08rem;
    border-radius: .8vw
}

.brand-top-3pVEE {
    fill: #d1d1d6;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    width: .426667rem;
    width: 4.266667vw;
    height: .426667rem;
    height: 4.266667vw;
    position: absolute;
    right: .266667rem;
    right: 2.666667vw;
    top: .48rem;
    top: 4.8vw
}

.brand-top-1XvT-,.brand-top-ncesU {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    display: -webkit-flex;
    display: flex;
    padding-left: .266667rem;
    padding-left: 2.666667vw
}

.brand-top-3lEu7 {
    display: -webkit-flex;
    display: flex;
    -webkit-flex: none;
    flex: none
}

.brand-top-3lEu7::-webkit-scrollbar {
    display: none
}

.brand-top-2Ar1R {
    margin-right: .24rem;
    margin-right: 2.4vw;
    font-size: 12px;
}

.brand-top-18XeS {
    width: 3.2rem;
    width: 32vw;
    height: 3.2rem;
    height: 32vw;
    border-radius: .08rem;
    border-radius: .8vw
}

.brand-top-1KcTl {
    padding: .293333rem 0 0 .24rem;
    padding: 2.933333vw 0 0 2.4vw
}

.brand-top-1WSsO {
    margin-right: .24rem;
    margin-right: 2.4vw;
    text-align: center;
    font-size:12px;
}

.brand-top-3mRLR {
    width: 2.16rem;
    width: 21.6vw;
    height: 2.16rem;
    height: 21.6vw
}

.brand-top-10wDK {
    width: 2.16rem;
    width: 21.6vw;
    padding: .24rem 0 .4rem;
    padding: 2.4vw 0 4vw;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.brand-top-6HMlc {
    color: #1aac7a;
    padding: .213333rem 0 .293333rem .24rem;
    padding: 2.133333vw 0 2.933333vw 2.4vw;
    font-weight: 700
}

.brand-top-6HMlc del {
    color: #999;
    font-weight: 400
}

.brand-top-COvx0 {
    font-size:14px;
}

svg {
  fill: #999;
  padding: 10px 10px 10px 8px;
}
</style>