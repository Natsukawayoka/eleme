<template>
  <div id="box" class="box">
    <div id="scroll">
      <div class="foodentry" v-show="!$store.state.zongheRank">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <FoodList v-for="i in links.coming.slice(0,10)" :key="i.id" :item="i"></FoodList>
          </div>
          <div class="swiper-slide foodlist-r">
            <div>
              <FoodList v-for="i in links.coming.slice(10,15)" :key="i.id" :item="i"></FoodList>
            </div>
          </div>
        </div>

        <!-- <div class="mint-swipe-indicators" style>
        <div class="mint-swipe-indicator is-active"></div>
        <div class="mint-swipe-indicator"></div>
        </div>-->
        <div class="swiper-pagination"></div>
      </div>

      <div v-show="!$store.state.zongheRank">
        <!---->
        <!---->
        <div class="suit">
          <section id="activity-lego">
            <div class="suit_top">
              <div class="suit_top_con">
                <h3 class="h3">品质套餐</h3>
                <div class="con">搭配齐全吃得好</div>
                <div class="buy">
                  <!---->
                  立即抢购 &gt;
                </div>
                <img
                  src="https://cube.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?x-oss-process=image/format,webp/resize,w_282,h_188,m_fixed"
                />
              </div>
              <!---->
            </div>
          </section>
          <div class="suit_bot">
            <div class="suit_bot_con">
              <img
                alt
                class="bot_img"
                src="https://cube.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?x-oss-process=image/format,webp/resize,w_34"
              />
              <span class="bot_title">超级会员</span>
              <span class="bot_con">
                <b></b>每月领20元红包
              </span>
            </div>
            <a href="javascript:" ubt-click="101933" ubt-data-type="1" class="index-1-R5E_0">
              <b class="index-4F0aw_0"></b>立即开通
            </a>
          </div>
          <!---->
          <!---->
        </div>
        <div class="backtop BackTop-wrapper_3XDbcaq" style="display: none;">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOCAxMSkiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgeD0iMi4yMzkiIHdpZHRoPSI5OC41MjIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDkwIDUxLjUgNjIuNDE3KSIgeD0iNi43MTciIHk9IjU3Ljk1OCIgd2lkdGg9Ijg5LjU2NSIgaGVpZ2h0PSI4LjkxNyIgcng9IjQuNDU4Ii8+PHJlY3QgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSByb3RhdGUoNDUgMCAtMjUuNzU3KSIgeD0iLTYuNjcxIiB5PSI0MC4xNzEiIHdpZHRoPSI3MS42NTIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDczLjkzOCA0NC42MykiIHg9IjM4LjExMiIgeT0iNDAuMTcxIiB3aWR0aD0iNzEuNjUyIiBoZWlnaHQ9IjguOTE3IiByeD0iNC40NTgiLz48L2c+PC9zdmc+"
            class="BackTop-icon_2Js4K94"
          />
        </div>
        <!---->
      </div>

      <div id="shoplist-title" class="shoplist-title" v-show="!$store.state.zongheRank">推荐商家</div>
      <div class="home-filter">
        <aside data-v-a5cc4024 class="filter" style="top: 0px;">
          <div data-v-a5cc4024 class="filter-header">
            <a
              data-v-a5cc4024
              href="javascript:"
              class="filter-nav"
              data-spm-anchor-id="a2ogi.13147251.0.0"
              @click="allRank"
            >
              <span data-v-a5cc4024 data-spm-anchor-id="a2ogi.13147251.0.i8">综合排序</span>
              <svg data-v-a5cc4024 viewBox="0 0 72 32" class="dropdown-icon">
                <path data-v-a5cc4024 d="M36 32l36-32h-72z" />
              </svg>
            </a>
            <a
              data-v-a5cc4024
              href="javascript:"
              ubt-click="104723"
              ubt-data-type="1"
              ubt-data-is_svip="true"
              class="filter-nav"
              data-spm-anchor-id="a2ogi.13147251.0.0"
            >
              <span data-v-a5cc4024 data-spm-anchor-id="a2ogi.13147251.0.i6">距离最近</span>
            </a>
            <a
              data-v-a5cc4024
              href="javascript:"
              ubt-click="104723"
              ubt-data-type="3"
              class="filter-nav active"
              data-spm-anchor-id="a2ogi.13147251.0.0"
            >
              <span data-v-a5cc4024 data-spm-anchor-id="a2ogi.13147251.0.i7">品质联盟</span>
            </a>
            <!---->
            <a data-v-a5cc4024 ubt-click="104725" href="javascript:" class="filter-nav-more">
              <span data-v-a5cc4024>筛选</span>
            </a>
          </div>
        </aside>
      </div>
      <!-- 综合排序列表 -->
      <div class="blackbord" v-show="$store.state.zongheRank" @click="goback">
        <section  class="filter-extend" >
        <ul>
          <li v-for="(item,index) in ranklist" :key="index">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </section>
      </div>
      

      <!-- 商品列表 -->
      <section v-if="!($store.state.islogin)">
        <shoplist class="Shoplist" v-for=" i in restaurant.items" :key="i.restaurant.id" :item="i"></shoplist>
      </section>
      <!-- 登录 -->
      <section v-if="$store.state.islogin" class="NoDataTip-wrapper">
        <img src="//fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png" />
        <h3>没有结果</h3>
        <p>登录后查看更多商家</p>
        <button @click="$router.push('/login')">登录</button>
      </section>
    </div>
  </div>
</template>

<script>
import FoodList from "./FoodList";
import shoplist from "./ShopList";
import { getLinkList, getRestaurants,getRank } from "../../api/Msite";
import Swiper from "swiper";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import { Toast, Indicator } from "mint-ui";
import "mint-ui/lib/style.css";

BScroll.use(Pullup);

export default {
  data() {
    return {
      ranklist:[],
      links: {
        coming: [],
        title: []
      },
      restaurant: {
        pageno: 1,
        latitude: 34.629495,
        longitude: 112.611363,
        limit: 8,
        items: [],
        resId: [],
        isover: ""
      }
    };
  },
  components: {
    FoodList,
    shoplist
  },
  methods: {
    //首次获取
    async restaurantList() {
      let parmas = {
        latitude: this.restaurant.latitude,
        longitude: this.restaurant.longitude,
        offset: 0,
        limit: this.restaurant.limit
      };
      let rs = await getRestaurants(parmas);

      this.restaurant.items = rs.data.items;
    },

    //获取更多
    async MorerestaurantList() {
      if (this.restaurant.isover === "false") {
        Toast({
          message: "没有更多了",
          position: "bottom",
          duration: 2000
        });
        //关闭pullup事件
        this.scroll.finishPullUp();
        return;
      }
      let startIndex = this.restaurant.pageno * this.restaurant.limit;
      // let endIndex = startIndex + this.restaurant.limit;

      let parmas = {
        latitude: this.restaurant.latitude,
        longitude: this.restaurant.longitude,
        offset: startIndex,
        limit: this.restaurant.limit
      };

      Indicator.open();
      let rs = await getRestaurants(parmas);
      this.restaurant.items.push(...rs.data.items);
      this.restaurant.isover = rs.data.has_next;

      this.$nextTick(() => {
        //当下拉刷新数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载
        this.scroll.finishPullUp();
        //重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
        this.scroll.refresh();
      });
      Indicator.close();
      this.restaurant.pageno++;
    },

    //点击综合排序
    async allRank(){
       this.$store.commit("ZONGHE_RANK",true)
       let rs = await getRank()
       this.ranklist = rs.data.outside.inside_sort_filter;
       console.log(this.ranklist);
       
    },
     //点击蒙版返回主页
    goback(){
      this.$store.commit("ZONGHE_RANK",false)
    },
   
  },
  created() {
    //获取餐厅列表
    this.restaurantList();
  },
  async mounted() {
    let rs = await getLinkList();
    // console.log(rs);
    this.links.coming = rs.data[0].entries;
    var mySwiper = new Swiper(".foodentry", {
      pagination: {
        el: ".swiper-pagination"
      }
    });
    //判断是否登录
    if (sessionStorage.getItem("user")) {
      this.$store.commit("ISLOGIN", false);
    } else {
      this.$store.commit("ISLOGIN", true);
    }

    //滚动
    this.$nextTick(() => {
      this.scroll = new BScroll("#box", {
        scrollY: true,
        pullUpLoad: true,
        click:true
      });
      //滑动到最下方触发事件
      this.scroll.on("pullingUp", () => {
        console.log("pullingUp");
        this.MorerestaurantList();
      });
      
         //手指离开
      this.scroll.on("touchEnd", e => {
        // console.log(e.y);
        if (e.y < -100) { 
          this.$store.commit("PULLUP", false); 
          
        } else {
          this.$store.commit("PULLUP", true);
        }
      });
      
      
    });
    
  }
};
</script>

<style lang="scss" scoped>
.blackbord{
  background: rgba(0, 0, 0, 0.3);
    height: 100%;
    position: absolute;
    z-index: 1000;
    pointer-events: auto;
    width: 100%;
}
.box {
  height: 100%;
  overflow: hidden;
  flex: 1;
  position: relative;
}



.foodentry {
  overflow: hidden;
  height: 160px;
  background: #fff;
  text-align: center;
  margin-bottom: 15px;
  position: relative;
  .swiper-wrapper {
    width: 375px * 2;
    height: 160px;
  }
  .swiper-slide {
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
    height: 160px;
    float: left;
  }
  .foodlist-r {
    display: flex;
    justify-content: start;
    align-items: flex-start;
  }
  .swiper-pagination {
    height: 20px;
  }
  .mint-swipe-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    .wrapper .mint-swipe-indicator.is-active {
      background-color: #fe7100;
    }
  }
}

.suit {
  margin-bottom: 5px;
  padding: 0 5px;
  #activity-lego {
    background: rgb(246, 244, 244);
    position: relative;
    .suit_top {
      display: flex;
      margin-bottom: 3px;
      .suit_top_con {
        height: 100px;
        padding: 10px 0 0 10px;
        .h3 {
          font-weight: 700;
          color: #000;
          font-size: 16px;
          margin-bottom: 13px;
          margin-top: 10px;
        }
        .con {
          color: #777;
          font-size: 12px;
          margin-bottom: 13px;
        }
        .buy {
          color: #af8260;
          font-weight: 700;
          font-size: 12px;
        }
        img {
          position: absolute;
          width: 140px;
          bottom: -4px;
          right: 5px;
        }
      }
    }
  }
  .suit_bot {
    height: 40px;
    background-image: linear-gradient(90deg, #ffefc4, #f3dda0);
    border-radius: 5px;
    display: flex;
    color: #644f1b;
    font-size: 12px;
    align-items: center;
    padding: 0 20px;

    .bot_img {
      width: 15px;
      height: 15px;
      margin-right: 10px;
    }
    .bot_title {
      font-size: 14px;
      font-weight: 700;
    }
    .index-1-R5E_0 {
      height: 100%;
      color: #644f1b;
      align-items: center;
      display: flex;
      margin-left: 90px;
    }
    .index-1-R5E_0:after {
      display: block;
      content: "";
      border-right: 1px solid #8c632b;
      border-bottom: 1px solid #8c632b;
      transform: rotate(-45deg);
      margin-left: 5px;
      width: 5px;
      height: 5px;
    }
  }
}

.shoplist-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  font-size: 16px;
}
.shoplist-title:before,
.shoplist-title:after {
  display: block;
  content: "";
  width: 13px;
  height: 1px;
  background-color: #999;
  margin-right: 5px;
}
.shoplist-title:after {
  margin-left: 5px;
}

.home-filter {
  position: sticky;
  top: 0px;
  z-index: 100;
  height: 40px;
  .filter {
    position: relative;
    line-height: 40px;
    z-index: 101;
    height: 40px;
    .filter-header {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 4;
      background-color: #fff;
      .filter-nav {
        flex: 1;
        text-align: center;
        color: #666;
        position: relative;
        font-size: 14px;
        z-index: 101;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 30px;
        .dropdown-icon {
          width: 5px;
          margin-bottom: 5px;
          fill: #333;
          will-change: transform;
          transition: transform 0.3s, -webkit-transform 0.3s;
        }
      }
      .filter-nav-more {
        width: 70px;
        color: #666;
        font-size: 14px;
        position: relative;
        display: inline-block;
        height: 30px;
      }
      .filter-nav-more__icon {
        margin-left: 5px;
        width: 10px;
        height: 10px;
        fill: #666;
      }
    }
  }
}
.filter-extend {
   display: flex;
    flex-direction: column;
    align-content: center;
    position: absolute;
    z-index: 999;
    background: #fff;
    width: 100%;
  
   li {
    position: relative;
    padding-left: 30px;
    line-height: 20px;
    font-size: 13px;
    color: #333;
    margin: 20px 0;
}
}


.NoDataTip-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
  .img {
    width: 50px;
    display: block;
  }
  h3 {
    color: #6a6a6a;
    font-weight: 400;
    font-size: 16px;
    margin: 10px 30px;
  }
  p {
    color: #999;
    font-size: 13px;
    margin-bottom: 10px;
  }
  button {
    padding: 13px;
    width: 130px;
    border: none;
    border-radius: 3px;
    background-color: #56d176;
    color: #fff;
    text-align: center;
    font-size: 12px;
    font-family: inherit;
  }
}
.Shoplist {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
}
</style>