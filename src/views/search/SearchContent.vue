<template>
  <div class="app-3GmD-_1" style="padding-bottom: 0px;">
    <!-- 非详细查询 -->
    <div v-show="!$store.state.clicked">
      <p role="button" class="app-2edQ4_1" style="display: none;">
        <svg class="app-2ooP9_1">
          <use xlink:href="#search" />
        </svg>
        查找
        <span class="app-3RvEi_1">“”</span>
      </p>
      <ul>
        <li role="button" v-for="(item,index) in searchRest" :key="index">
          <div class="shopitem-type-8ofQp">
            <img class="shopitem-type-2zQn7" :src="item.image_path|shopurl" />
            <div class="shopitem-type-3mtUY">
              <div>
                <p class="shopitem-type-1GBT2">
                  <span class="shopitem-type-3ZbI8">{{item.name}}</span>
                  <span
                    v-for="(s,i) in item.tags"
                    :key="i"
                    class="shopitem-type-1KYQw"
                    style="background-color: rgb(250, 112, 71); margin-right: -0.5em;"
                  >{{s.name}}</span>
                </p>
              </div>
              <span class="shopitem-type-2aznP">评价{{item.rating}}</span>
            </div>
          </div>
        </li>
        <li
          role="button"
          class="app-kApOY_1"
          v-for="(item,index) in searchWords"
          :key="index"
          @click="handleClick(item)"
        >
          <svg class="app-2ooP9_1">
            <use xlink:href="#search" />
          </svg>
          <p class="app-1f6Aa_1">{{item}}</p>
        </li>
      </ul>
    </div>

    <!-- 详细结果 -->
    <div class="shop-3SsDF" keywords v-show="$store.state.clicked">
      <div>
        <div class="home-filter">
        <aside data-v-a5cc4024 class="filter" style="top: 0px;">
          <div data-v-a5cc4024 class="filter-header">
            <a
              data-v-a5cc4024
              href="javascript:"
              class="filter-nav"
              data-spm-anchor-id="a2ogi.13147251.0.0"
              
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
      </div>
      <div id="shop-3XmEa" class="shop-3XmEa">
        <div>
          <!---->
          <!---->
          <div foodamount="2" class="shop-3WuEw" v-for="(item,index) in list" :key="index">
            <section class="index-container_10L_lQb shopitem-aFg1-">
              <div class="index-shopInfo_1RRTZ0d">
                <div class="logo-container_XoH2Vit_0">
                  <div class="logo-main_21aInWJ_0">
                    <img
                      alt="鱼你在一起(东城搜秀店)"
                      class="logo-logo_3S1eSkn_0"
                      :src="item.restaurant.image_path|shopurl"
                    />
                    <!---->
                    <span
                      class="logo-statusTip_1CEG6F-_0 logo-statusTipSmall_3tjsgtJ_0"
                      style="background-color: rgb(84, 206, 117);"
                    >
                      <span content=" 今天10:30开始配送" class="logo-statusTipText_1Dx4kZS_0">今天10:30开始配送</span>
                    </span>
                  </div>
                  <!---->
                </div>
                <div class="index-main_N3FfcSz">
                  <section class="index-line_2-iYR1A">
                    <h3 class="index-shopname_39Y7e3U">
                      <!---->
                      <span>{{item.restaurant.name}}</span>
                    </h3>
                    <ul class="index-supportWrap_2lTcxr2">
                      <!---->
                      <li content="保"></li>
                    </ul>
                  </section>
                  <section class="index-line_2-iYR1A">
                    <div class="index-rateWrap_39dWx_g">
                      <div class="Rating-wrapper_TYbDrku_0 index-stars_vPkk9Vv">
                        <div class="Rating-gray_1kpffd5_0">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
                          />
                        </div>
                        <div class="Rating-actived_GBtiHkB_0" style="width: 94%;">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeDI9IjEwMCUiIHkyPSI1MCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZERTAwIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGQjAwMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
                          />
                        </div>
                      </div>
                      <span class="index-rate_WsK58g8">4.7</span>
                      <span>月售1184单</span>
                    </div>
                    <div class="delivery-delivery_3gyT50e_0">
                      <!---->
                      <div content="蜂鸟专送" alt="蜂鸟专送" class="delivery-icon-hollow_3q8_B5r_0">蜂鸟专送</div>
                    </div>
                  </section>
                  <section class="index-line_2-iYR1A">
                    <div class="index-moneylimit_2fCq9W5">
                      <span>¥20起送</span>
                      <span>配送费¥2.5</span>
                      <!---->
                    </div>
                    <div class="index-timedistanceWrap_2Dp_kzY">
                      <span class="index-distanceWrap_1EPAlti">1.86km</span>
                      <span>30分钟</span>
                    </div>
                  </section>
                </div>
              </div>
              <div class="index-activityWrap_3mo1GyG">
                <!---->
                <section class="index-tagLine_1rJw_lq">
                  <!---->
                  <span class="mini-tag-tag_3Tm_6bw_0 index-tag_3oprLi5">
                    川湘菜
                    <span
                      class="index-tagGhost_1KCu_KY mini-tag-ghost_3DwLU8E_0"
                      style="color: rgb(102, 102, 102); border-color: rgb(221, 221, 221);"
                    >川湘菜</span>
                  </span>
                  <span class="mini-tag-tag_3Tm_6bw_0 index-tag_3oprLi5">
                    品质联盟
                    <span
                      class="index-tagGhost_1KCu_KY mini-tag-ghost_3DwLU8E_0"
                      style="color: rgb(51, 51, 51); border-color: rgb(221, 221, 221);"
                    >品质联盟</span>
                  </span>
                  <!---->
                </section>
                <span>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4="
                    class="index-dashedline_7B79b3W"
                  />
                </span>
                <section class="index-activities_25AUDsx">
                  <div class="index-activityList_1wvwwUY">
                    <div class="index-actRow_2f_uNNA">
                      <span class="index-iconWrap_1xJuKaY">
                        <span
                          class="index-icon_1fBCxBk"
                          style="background-color: rgb(240, 115, 115);"
                        >减</span>
                      </span>
                      <span class="index-desc_JLha7Vr">满20减12，满65减20，满110减30</span>
                    </div>
                    <div class="index-actRow_2f_uNNA">
                      <span class="index-iconWrap_1xJuKaY">
                        <span
                          class="index-icon_1fBCxBk"
                          style="background-color: rgb(112, 188, 70);"
                        >首</span>
                      </span>
                      <span class="index-desc_JLha7Vr">新用户下单立减12元</span>
                    </div>
                  </div>
                  <!---->
                </section>
              </div>
              <!---->
            </section>
            <div class="shopitem-1vZmH">
              <div class="shopitem-KZ9a2">
                <img
                  class="shopitem-1xTsP"
                  src="https://cube.elemecdn.com/3/93/3261bcbe4c80a3b19eddc04b3a283jpeg.jpeg?x-oss-process=image/format,webp/resize,w_176"
                />
                <p class="shopitem-1Y_Ew">
                  老坛酸菜
                  <span class="g-hl-black">鱼</span>单人份+2份配菜+米饭
                </p>
                <p class="shopitem-14ziR">
                  <span class="shopitem-2xZ8d">¥</span>39.9
                </p>
              </div>
              <div class="shopitem-KZ9a2">
                <img
                  class="shopitem-1xTsP"
                  src="https://cube.elemecdn.com/9/60/fa04e964c20542d727f10de3cd014jpeg.jpeg?x-oss-process=image/format,webp/resize,w_176"
                />
                <p class="shopitem-1Y_Ew">
                  青花椒酸菜
                  <span class="g-hl-black">鱼</span>单人份＋2份配菜+米饭
                </p>
                <p class="shopitem-14ziR">
                  <span class="shopitem-2xZ8d">¥</span>39.9
                </p>
              </div>
              <div class="shopitem-KZ9a2">
                <img
                  class="shopitem-1xTsP"
                  src="https://cube.elemecdn.com/e/fb/98fcc11a1c4313c4eedd9f456f955jpeg.jpeg?x-oss-process=image/format,webp/resize,w_176"
                />
                <p class="shopitem-1Y_Ew">
                  公举番茄
                  <span class="g-hl-black">鱼</span>单人份＋2份配菜+米饭
                </p>
                <p class="shopitem-14ziR">
                  <span class="shopitem-2xZ8d">¥</span>39.9
                </p>
              </div>
            </div>
            <div class="shopitem-23ZxE" style="display: none;">
              <div>
                <p class="shopitem-1NBf_">
                  <span class="shopitem-1Y_Ew">
                    金汤酸菜
                    <span class="g-hl-black">鱼</span>单人份＋2份配菜+米饭
                  </span>
                  <span class="shopitem-2OSAh">月售213份</span>
                </p>
                <p class="shopitem-14ziR">
                  <span class="shopitem-2xZ8d">¥</span>39.9
                </p>
              </div>
              <div>
                <p class="shopitem-1NBf_">
                  <span class="shopitem-1Y_Ew">
                    老坛酸菜
                    <span class="g-hl-black">鱼</span>双人份+4份配菜+2份米饭
                  </span>
                  <span class="shopitem-2OSAh">月售75份</span>
                </p>
                <p class="shopitem-14ziR">
                  <span class="shopitem-2xZ8d">¥</span>65.8
                </p>
              </div>
              <div>
                <p class="shopitem-1NBf_">
                  <span class="shopitem-1Y_Ew">
                    金汤酸菜
                    <span class="g-hl-black">鱼</span>双人份+4份配菜+2份米饭
                  </span>
                  <span class="shopitem-2OSAh">月售44份</span>
                </p>
                <p class="shopitem-14ziR">
                  <span class="shopitem-2xZ8d">¥</span>65.8
                </p>
              </div>
            </div>
            <div class="shopitem-bejnG">
              查看其他相关商品 3 个
              <svg>
                <use xlink:href="#arrow_down" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import { Toast, Indicator } from "mint-ui";
import "mint-ui/lib/style.css";

BScroll.use(Pullup);

export default {
  props: ["searchWords", "searchRest", "list"],
  methods: {
    //搜索结果显示隐藏
    handleClick(val) {
      this.$store.commit("CLICKED", true);
      // this.$parent.ReastaurantList();
      let obj = {
        nowKey: val
      };
      this.$emit("getItem", obj);
    }
  },
  
  mounted() {
    console.log("aa");

    this.scroll = new BScroll("#shop-3XmEa", {
      scrollY: true,
      pullUpLoad: true,
      click: true
    });
    //滑动到最下方触发事件
    this.scroll.on("pullingUp", () => {
      console.log("pullingUp");
      this.$parent.MoreReastaurantList();
      this.$nextTick(() => {
        //当下拉刷新数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载
        this.scroll.finishPullUp();
        //重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
        this.scroll.refresh();
      });
    });
  }
};
</script>

<style lang="scss" scoped>

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

.mini-tag-1Lyw4 {
  position: relative;
  font-size: 12px;
  color: transparent;
  white-space: nowrap;
}

.mini-tag-1ezSQ {
  position: absolute;
  left: 0;
  top: 0;
  right: -100%;
  bottom: -100%;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  font-size: 12px;
}

html {
  background-color: #fff;
}

.g-highlight {
  color: #999;
}

.g-hl-blue {
  color: #118dff;
}

.g-hl-black {
  color: #151515;
}

.app-2KdnP_1 {
  height: 100vh;
}

.app-3GmD-_1 {
  height: calc(100vh - 1.36rem);
  height: calc(100vh - 13.6vw);
}

.app-3GmD-_1.app-2Fwjf_1 {
  height: 100vh;
}

.app-3rytA_1 {
  background: #fff;
  position: relative;
  z-index: 52;
}

.app-k5tZV_1 {
  visibility: hidden !important;
}

.app-3v-C7_1 {
  -webkit-align-items: center;
  align-items: center;
  z-index: 101;
  background: #fff;
  z-index: 52;
}

.app-3v-C7_1,
.app-iYo7n_1 {
  display: -webkit-flex;
  display: flex;
  position: relative;
}

.app-iYo7n_1 {
  -webkit-flex-grow: 1;
  flex-grow: 1;
  padding: 0.293333rem 0.293333rem 0.293333rem 0;
  padding: 2.933333vw 2.933333vw 2.933333vw 0;
  margin-left: 0.293333rem;
  margin-left: 2.933333vw;
  background-color: #fff;
  z-index: 101;
}

.app-21LS3_1 {
  width: 0.933333rem;
  width: 9.333333vw;
  height: 0.933333rem;
  height: 9.333333vw;
  fill: #999;
  padding: 0.133333rem 0.133333rem 0.133333rem 0;
  padding: 1.333333vw 1.333333vw 1.333333vw 0;
}

.app-11zxJ_1 {
  -webkit-flex-grow: 1;
  flex-grow: 1;
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
  -webkit-appearance: none;
  background-color: #f8f8f8;
  padding: 0.173333rem 0.4rem 0.173333rem 0.88rem;
  padding: 1.733333vw 4vw 1.733333vw 8.8vw;
  font-size: 12px;
  color: #666;
}

.app-11zxJ_1::-webkit-input-placeholder {
  color: #999;
}

.app-11zxJ_1::placeholder {
  color: #999;
}

.app-2kCc4_1 {
  width: 0.293333rem;
  width: 2.933333vw;
  height: 0.293333rem;
  height: 2.933333vw;
  position: absolute;
  top: 0.533333rem;
  top: 5.333333vw;
  left: 0.293333rem;
  left: 2.933333vw;
}

.app-3q7ve_1 {
  outline: none;
  color: #333;
  font-size: 12px;
  background: #fff;
  font-weight: 700;
  margin-left: 0.293333rem;
  margin-left: 2.933333vw;
}

.app-2edQ4_1 {
  color: #999;
  font-size: 12px;
  padding: 0 0.426667rem;
  padding: 0 4.266667vw;
  height: 1.173333rem;
  height: 11.733333vw;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}

.app-2edQ4_1 .app-3RvEi_1 {
  color: #151515;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
  width: 7.466667rem;
  width: 74.666667vw;
}

.app-2edQ4_1 .app-2ooP9_1 {
  height: 0.32rem;
  height: 3.2vw;
  width: 0.32rem;
  width: 3.2vw;
  margin-right: 0.373333rem;
  margin-right: 3.733333vw;
}

.app-kApOY_1 {
  display: -webkit-flex;
  display: flex;
  height: 1.173333rem;
  height: 11.733333vw;
  -webkit-align-items: center;
  align-items: center;
  padding: 0 0.4rem;
  padding: 0 4vw;
  font-size: 12px;
}

.app-kApOY_1 .app-2ooP9_1 {
  height: 0.346667rem;
  height: 3.466667vw;
  width: 0.346667rem;
  width: 3.466667vw;
  margin-right: 0.32rem;
  margin-right: 3.2vw;
}

.app-kApOY_1 .app-1f6Aa_1 {
  -webkit-flex: 1;
  flex: 1;
  height: 1.173333rem;
  height: 11.733333vw;
  line-height: 1.173333rem;
  line-height: 11.733333vw;
  border-bottom: 1px solid #e3e3e3;
}

.shopitem-type-8ofQp {
  padding: 0 0.426667rem;
  padding: 0 4.266667vw;
  display: -webkit-flex;
  display: flex;
  height: 1.493333rem;
  height: 14.933333vw;
  -webkit-align-items: center;
  align-items: center;
}

.shopitem-type-2zQn7 {
  -webkit-flex: none;
  flex: none;
  width: 0.64rem;
  width: 6.4vw;
  height: 0.64rem;
  height: 6.4vw;
  margin-right: 0.426667rem;
  margin-right: 4.266667vw;
  border-radius: 0.013333rem;
  border-radius: 0.133333vw;
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
  border-bottom: 1px solid #e3e3e3;
}

.shopitem-type-2aznP {
  color: #999;
  font-size: 12px;
}

.shopitem-type-1GBT2 {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
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
  margin-right: 0.08rem;
  margin-right: 0.8vw;
}

.shopitem-type-16hNi {
  margin-top: 0.106667rem;
  margin-top: 1.066667vw;
  color: #00e066;
  border: 1px solid #00e066;
  font-size: 12px;
  padding: 0 0.16rem;
  padding: 0 1.6vw;
  height: 0.4rem;
  height: 4vw;
  line-height: 0.4rem;
  line-height: 4vw;
  display: inline-block;
  border-radius: 1.333333rem;
  border-radius: 13.333333vw;
}

.shopitem-type-1KYQw {
  color: #fff;
  font-size: 12px;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  height: 0.693333rem;
  height: 6.933333vw;
  line-height: 0.693333rem;
  line-height: 6.933333vw;
  text-align: center;
  display: inline-block;
  padding: 0 0.08rem;
  padding: 0 0.8vw;
  margin-left: 0.08rem;
  margin-left: 0.8vw;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 50%;
  transform-origin: 0 50%;
}

.navindex-IgqKR {
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 0.066667rem 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0.666667vw 0 rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.navindex-3Uhfu {
  background-color: #2395ff;
  font-size: 12px;
  color: #fff;
  text-align: center;
  height: 1.173333rem;
  height: 11.733333vw;
  display: block;
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
  margin: 0.213333rem 0.426667rem;
  margin: 2.133333vw 4.266667vw;
  line-height: 1.173333rem;
  line-height: 11.733333vw;
  font-weight: 500;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.navindex-3Uhfu > svg {
  width: 0.533333rem;
  width: 5.333333vw;
  height: 0.533333rem;
  height: 5.333333vw;
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
}

.Loading-2RjQo {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  transition: opacity 0.3s;
}

.Loading-2RjQo.Loading-3JiQY {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8888;
  width: 100%;
  height: 100%;
}

.Loading-1eq8D,
.Loading-2Dcsa {
  opacity: 1;
}

.Loading-34lRq {
  opacity: 0;
}

.Loading-3h5w1 {
  position: relative;
  margin-top: 0.666667rem;
  margin-top: 6.666667vw;
}

.Loading-2aU5Y,
.Loading-3h5w1 {
  width: 1.333333rem;
  width: 13.333333vw;
  height: 1.333333rem;
  height: 13.333333vw;
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
  animation: Loading-3Gfbr 1.5s normal infinite steps(43);
}

@-webkit-keyframes Loading-3Gfbr {
  0% {
    background-position-x: 0;
  }

  to {
    background-position-x: 100%;
  }
}

@keyframes Loading-3Gfbr {
  0% {
    background-position-x: 0;
  }

  to {
    background-position-x: 100%;
  }
}

.index-22vWR {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  font-size: 12px;
  padding: 0.2rem 0.333333rem;
  padding: 2vw 3.333333vw;
  color: #666;
  font-weight: 700;
}

.index-1YjCI {
  margin-top: 0.4rem;
  margin-top: 4vw;
}

.index-3cPNo {
  display: block;
  padding-top: 0.053333rem;
  padding-top: 0.533333vw;
}

.index-3cPNo svg {
  height: 0.32rem;
  height: 3.2vw;
  width: 0.32rem;
  width: 3.2vw;
  color: #cecece;
  fill: currentColor;
}

.index-3jzIf {
  padding: 0 0.333333rem 0.333333rem;
  padding: 0 3.333333vw 3.333333vw;
}

.index-NbBi7 {
  display: inline-block;
  border-radius: 0.066667rem;
  border-radius: 0.666667vw;
  padding: 0.2rem 0.266667rem;
  padding: 2vw 2.666667vw;
  font-size: 12px;
  margin-right: 0.333333rem;
  margin-right: 3.333333vw;
  margin-top: 0.333333rem;
  margin-top: 3.333333vw;
  color: #666;
  background-color: #f7f7f7;
}

.shop-3SsDF {
  height: 100%;
}

.shop-2WUef,
.shop-3SsDF {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
}

.shop-2WUef {
  height: 100vh;
}

.shop-3WuEw:not(:last-child) {
  padding-bottom: 0.213333rem;
  padding-bottom: 2.133333vw;
  background-color: #f5f5f5;
}

.shop-2BIW5 {
  border-bottom: 1px solid hsla(0, 0%, 89%, 0.5);
  position: relative;
  z-index: 51;
}

.shop-314af {
  border-bottom: none !important;
}

.shop-3XmEa {
  -webkit-flex: 1;
  flex: 1;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.shop-33fYg {
  display: -webkit-flex;
  display: flex;
  height: 1.36rem;
  height: 13.6vw;
  -webkit-align-items: center;
  align-items: center;
  padding: 0 0.426667rem;
  padding: 0 4.266667vw;
  font-size: 12px;
}

.shop-33fYg .shop-2IyeO {
  height: 0.666667rem;
  height: 6.666667vw;
  width: 0.666667rem;
  width: 6.666667vw;
  margin-right: 0.4rem;
  margin-right: 4vw;
}

.shop-33fYg .shop-1VWIr {
  color: #118dff;
  font-weight: 700;
  margin: 0 0.08rem;
  margin: 0 0.8vw;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 4.533333rem;
  max-width: 45.333333vw;
  white-space: nowrap;
}

.shop-3XvCP {
  width: 1.6rem;
  width: 16vw;
  height: 0.533333rem;
  height: 5.333333vw;
  line-height: 0.533333rem;
  line-height: 5.333333vw;
  color: #fff;
  margin: 0 auto;
  background-color: #56d176;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  text-align: center;
  font-size: 12px;
  margin-bottom: 0.266667rem;
  margin-bottom: 2.666667vw;
}

.shop-7RC41 {
  text-align: center;
  font-size: 12px;
  color: #666;
  margin: 0.266667rem 0;
  margin: 2.666667vw 0;
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
  margin-right: 0.2rem;
  margin-right: 2vw;
  width: 0.4rem;
  width: 4vw;
  height: 0.4rem;
  height: 4vw;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-animation: loadMore-3Zah4 1s linear infinite;
  animation: loadMore-3Zah4 1s linear infinite;
}

@-webkit-keyframes loadMore-3Zah4 {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes loadMore-3Zah4 {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

.filter[data-v-5ef01ae7] {
  position: relative;
  border-bottom: 1px solid #ddd;
  line-height: 1.04rem;
  line-height: 10.4vw;
  z-index: 101;
  height: 1.066667rem;
  height: 10.666667vw;
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
  background-color: #fff;
}

.filter-nav[data-v-5ef01ae7] {
  -webkit-flex: 1;
  flex: 1;
  text-align: center;
  color: #666;
  position: relative;
  font-size: 12px;
  z-index: 101;
}

.filter-nav.active[data-v-5ef01ae7] {
  color: #333;
  font-weight: 700;
}

.filter-nav.active .dropdown-icon[data-v-5ef01ae7] {
  fill: currentColor;
}

.filter-nav.open[data-v-5ef01ae7] {
  color: #3190e8;
  font-weight: 700;
}

.filter-nav.open .dropdown-icon[data-v-5ef01ae7] {
  fill: currentColor;
}

.filter-nav .dropdown-icon[data-v-5ef01ae7] {
  width: 0.16rem;
  width: 1.6vw;
  height: 0.08rem;
  height: 0.8vw;
  margin-left: 0.133333rem;
  margin-left: 1.333333vw;
  margin-bottom: 0.053333rem;
  margin-bottom: 0.533333vw;
  fill: #333;
  will-change: transform;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
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
  position: relative;
}

.filter-nav-more.open[data-v-5ef01ae7] {
  color: #3190e8;
  font-weight: 700;
}

.filter-nav-more.open .filter-nav-more__icon[data-v-5ef01ae7] {
  fill: currentColor;
}

.filter-nav-more.active[data-v-5ef01ae7] {
  color: #333;
  font-weight: 700;
}

.filter-nav-more.active .filter-nav-more__icon[data-v-5ef01ae7] {
  fill: currentColor;
}

.filter-nav-more__icon[data-v-5ef01ae7] {
  margin-left: 0.053333rem;
  margin-left: 0.533333vw;
  width: 0.346667rem;
  width: 3.466667vw;
  height: 0.346667rem;
  height: 3.466667vw;
  fill: #666;
}

.filter-nav-arrow[data-v-5ef01ae7] {
  display: inline-block;
  vertical-align: middle;
  width: 0.24rem;
  width: 2.4vw;
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
  transition: all 0.2s ease-in-out;
  visibility: hidden;
  overflow: auto;
  opacity: 0;
  z-index: 4;
}

.filter-extend.open[data-v-5ef01ae7] {
  opacity: 1;
  visibility: visible;
  max-height: 1500%;
}

.filter-nav__icon[data-v-5ef01ae7] {
  width: 0.346667rem;
  width: 3.466667vw;
  height: 0.293333rem;
  height: 2.933333vw;
  margin-right: 0.053333rem;
  margin-right: 0.533333vw;
}

.filtermodal[data-v-5ef01ae7] {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  -webkit-backdrop-filter: blur(0.133333rem);
  -webkit-backdrop-filter: blur(1.333333vw);
  backdrop-filter: blur(0.133333rem);
  backdrop-filter: blur(1.333333vw);
}

.morefilter-2etYY {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  height: 10em;
  color: #999;
}

.morefilter-3-5h6 {
  overflow: auto;
  height: 100%;
  padding: 0 0.266667rem;
  padding: 0 2.666667vw;
  background: #fff;
  -webkit-overflow-scrolling: touch;
  line-height: normal;
}

.morefilter-3-5h6 dl {
  margin: 0.266667rem 0;
  margin: 2.666667vw 0;
  overflow: hidden;
}

.morefilter-3-5h6 dt {
  margin-left: 1%;
  margin-bottom: 0.2rem;
  margin-bottom: 2vw;
  color: #666;
}

.morefilter-3-5h6 dd {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  background: #fff;
  position: relative;
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
  height: 0.933333rem;
  height: 9.333333vw;
  font-size: 12px;
  margin: 0.08rem 1%;
  margin: 0.8vw 1%;
  background: #fafafa;
}

.morefilter-3GXUR .morefilter-l3S4A {
  white-space: nowrap;
}

.morefilter-3GXUR span {
  margin-left: 2%;
  vertical-align: middle;
}

.morefilter-3GXUR .morefilter-2JyrM {
  width: 0.346667rem;
  width: 3.466667vw;
  height: 0.346667rem;
  height: 3.466667vw;
  vertical-align: middle;
  margin-right: 0.08rem;
  margin-right: 0.8vw;
}

.morefilter-3GXUR.morefilter-3emCs {
  font-weight: 700;
  color: #3190e8;
  background-color: #edf5ff;
}

.morefilter-2DLty {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  -webkit-align-items: center;
  align-items: center;
  background-color: #fafafa;
  box-shadow: 0 -0.026667rem 0.053333rem 0 #ededed;
  box-shadow: 0 -0.266667vw 0.533333vw 0 #ededed;
  line-height: 1.146667rem;
  line-height: 11.466667vw;
}

.morefilter-2DLty .morefilter-16ilq,
.morefilter-2DLty .morefilter-39NFb {
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  -webkit-flex: 1;
  flex: 1;
}

.morefilter-2DLty .morefilter-39NFb {
  background-color: #fff;
  color: #ddd;
}

.morefilter-2DLty .morefilter-39NFb.morefilter-2Dfps {
  color: #333;
}

.morefilter-2DLty .morefilter-16ilq {
  opacity: 0.5;
  color: #fff;
  background-color: #00d762;
  border: 0.013333rem solid #00d762;
  border: 0.133333vw solid #00d762;
}

.morefilter-2DLty .morefilter-16ilq.morefilter-2Dfps {
  opacity: 1;
}

.morefilter-2DLty i,
.morefilter-2DLty i:after,
.morefilter-2DLty i:before {
  display: inline-block;
  width: 0.133333rem;
  width: 1.333333vw;
  height: 0.133333rem;
  height: 1.333333vw;
  border-radius: 50%;
  background: #fff;
  opacity: 0.8;
  position: relative;
}

.morefilter-2DLty i:after,
.morefilter-2DLty i:before {
  content: "";
  position: absolute;
  top: 0;
}

.morefilter-2DLty i:before {
  left: -0.266667rem;
  left: -2.666667vw;
  opacity: 0.5;
}

.morefilter-2DLty i:after {
  right: -0.266667rem;
  right: -2.666667vw;
  opacity: 1;
}

ul[data-v-bc8dac82] {
  list-style: none;
  margin: 0;
  padding: 0;
}

.filter-sort[data-v-bc8dac82] {
  padding-top: 0.213333rem;
  padding-top: 2.133333vw;
  padding-bottom: 0.32rem;
  padding-bottom: 3.2vw;
  font-size: 12px;
  color: #333;
}

.filter-sort li[data-v-bc8dac82] {
  position: relative;
  padding-left: 0.533333rem;
  padding-left: 5.333333vw;
  line-height: 1.066667rem;
  line-height: 10.666667vw;
}

.filter-sort li.active[data-v-bc8dac82] {
  color: #3190e8;
  font-weight: 700;
}

.filter-sort li.active .selected[data-v-bc8dac82] {
  display: block;
}

.filter-sort .selected[data-v-bc8dac82] {
  position: absolute;
  right: 0.373333rem;
  right: 3.733333vw;
  top: 50%;
  width: 0.4rem;
  width: 4vw;
  height: 0.4rem;
  height: 4vw;
  display: none;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.recommend-SoDSD {
  background: #f5f5f5;
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
  color: #333;
}

.recommend-NAxY4 svg {
  width: 0.373333rem;
  width: 3.733333vw;
  height: 0.373333rem;
  height: 3.733333vw;
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
}

.recommend-NAxY4:after,
.recommend-NAxY4:before {
  display: block;
  content: "";
  width: 0.213333rem;
  width: 2.133333vw;
  height: 0.026667rem;
  height: 0.266667vw;
  background-color: #999;
}

.recommend-NAxY4:before {
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
}

.recommend-NAxY4:after {
  margin-left: 0.133333rem;
  margin-left: 1.333333vw;
}

.recommend-FEHNE {
  margin-bottom: 0.213333rem;
  margin-bottom: 2.133333vw;
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
  background-color: #fff;
}

.no-result-gcdee {
  width: 2.4rem;
  width: 24vw;
  height: 1.76rem;
  height: 17.6vw;
  -webkit-flex: none;
  flex: none;
}

.no-result-Cl76e {
  color: #666;
  font-size: 12px;
  margin-bottom: 0.16rem;
  margin-bottom: 1.6vw;
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
  padding-left: 23.466667vw;
}

.shopitem-aFg1- {
  border-bottom: none;
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
  padding-left: 23.466667vw;
}

.shopitem-bejnG svg {
  width: 0.24rem;
  width: 2.4vw;
  margin-left: 0.16rem;
  margin-left: 1.6vw;
}

.shopitem-KZ9a2 {
  width: 2.346667rem;
  width: 23.466667vw;
  -webkit-flex: none;
  flex: none;
  margin-right: 0.08rem;
  margin-right: 0.8vw;
}

.shopitem-KZ9a2 .shopitem-1xTsP {
  width: 2.346667rem;
  width: 23.466667vw;
  height: 2.346667rem;
  height: 23.466667vw;
}

.shopitem-23ZxE {
  padding-left: 2.346667rem;
  padding-left: 23.466667vw;
  padding-right: 0.426667rem;
  padding-right: 4.266667vw;
  background-color: #fff;
}

.shopitem-23ZxE > div {
  height: 1.413333rem;
  height: 14.133333vw;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: center;
  justify-content: center;
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
  justify-content: space-between;
}

.shopitem-1NBf_ .shopitem-2OSAh {
  font-size: 12px;
  color: #999;
}

.shopitem-14ziR {
  color: #ff5339;
  font-size: 14px;
  height: 0.773333rem;
  height: 7.733333vw;
  line-height: 0.773333rem;
  line-height: 7.733333vw;
}

.shopitem-14ziR .shopitem-2xZ8d {
  font-size: 12px;
}

.fooditem-8Wd41 {
  background-color: #fff;
}

.fooditem-1PklT {
  height: 1.706667rem;
  height: 17.066667vw;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  border-bottom: 1px solid hsla(0, 0%, 89%, 0.5);
  padding: 0 0.426667rem;
  padding: 0 4.266667vw;
}

.fooditem-1PklT .fooditem-2qlxF {
  color: #333;
  font-size: 12px;
  max-width: 4.133333rem;
  max-width: 41.333333vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fooditem-1PklT .fooditem-sMLyo {
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

.fooditem-1PklT .fooditem-38htv,
.fooditem-1PklT .fooditem-sMLyo {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}

.fooditem-1PklT .fooditem-3qYv7 {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
  margin-top: 0.106667rem;
  margin-top: 1.066667vw;
}

.fooditem-1PklT .fooditem-3qYv7 span + span:before {
  margin: 0.08rem;
  margin: 0.8vw;
  color: #ddd;
  content: "|";
}

.fooditem-1PklT .fooditem-1ad7e {
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
  font-size: 12px;
  color: #fff;
  height: 0.346667rem;
  height: 3.466667vw;
  line-height: 0.346667rem;
  line-height: 3.466667vw;
  padding: 0 0.053333rem;
  padding: 0 0.533333vw;
  margin-left: 0.186667rem;
  margin-left: 1.866667vw;
  white-space: nowrap;
}

.fooditem-1PklT .fooditem-1ad7e.fooditem-11PZa {
  background-image: linear-gradient(-90deg, #ff8b6b, #ff5339);
}

.fooditem-1PklT .fooditem-1ad7e.fooditem-y7uNx {
  background-image: linear-gradient(-135deg, #7ae236, #00c180);
}

.fooditem-1GIc7 {
  -webkit-flex: 1;
  flex: 1;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

.fooditem-1GIc7,
.fooditem-lTDjj {
  height: 0.853333rem;
  height: 8.533333vw;
}

.fooditem-lTDjj {
  width: 0.853333rem;
  width: 8.533333vw;
  margin-right: 0.16rem;
  margin-right: 1.6vw;
}

.fooditem-2XxMg {
  width: 1.706667rem;
  width: 17.066667vw;
  height: 1.706667rem;
  height: 17.066667vw;
  margin-right: 0.213333rem;
  margin-right: 2.133333vw;
}

.fooditem-YcLXb {
  padding: 0 0.426667rem;
  padding: 0 4.266667vw;
}

.fooditem-1gz-7:before {
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
  padding: 0 0.066667rem;
  padding: 0 0.666667vw;
  height: 0.4rem;
  height: 4vw;
  line-height: 0.4rem;
  line-height: 4vw;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  background-image: linear-gradient(-139deg, #fff100, #ffe339);
  color: #6f3f15;
  content: "\54C1\724C";
  text-align: center;
  white-space: nowrap;
  font-weight: 700;
  font-size: 12px;
  -webkit-flex: none;
  flex: none;
}

.fooditem-3kUct {
  height: 2.346667rem;
  height: 23.466667vw;
  padding: 0.32rem 0;
  padding: 3.2vw 0;
  border-bottom: 1px solid hsla(0, 0%, 89%, 0.5);
  display: -webkit-flex;
  display: flex;
}

.fooditem-3kUct .fooditem-2qlxF {
  font-size: 12px;
  color: #100;
}

.fooditem-3kUct .fooditem-3Vn-y {
  color: #666;
  font-size: 12px;
}

.fooditem-3kUct .fooditem-MwQbr {
  font-size: 14px;
  color: #ff5339;
}

.fooditem-3kUct .fooditem-MwQbr:before {
  content: "\A5";
  display: inline;
  font-size: 12px;
  margin-right: 0.053333rem;
  margin-right: 0.533333vw;
}

.fooditem-3kUct .fooditem-2740z {
  font-size: 12px;
  color: #666;
  margin-left: 0.106667rem;
  margin-left: 1.066667vw;
}

.fooditem-3kUct .fooditem-1gD8c {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}

.fooditem-3eVtw {
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

.fooditem-3eVtw,
.fooditem-3LvVZ {
  display: -webkit-flex;
  display: flex;
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
  width: 0.24rem;
  width: 2.4vw;
  margin-left: 0.16rem;
  margin-left: 1.6vw;
}

.fooditem-2ncia {
  height: 0.346667rem;
  height: 3.466667vw;
  width: 1.253333rem;
  width: 12.533333vw;
  margin-left: 0.106667rem;
  margin-left: 1.066667vw;
}

.fooditem-2F7fl {
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
  background-image: linear-gradient(45deg, #0085ff, #0af);
  color: #fff;
}

.fooditem-zzI38 {
  height: 0.373333rem;
  height: 3.733333vw;
  margin-left: 0.16rem;
  margin-left: 1.6vw;
  display: inline-block;
  padding: 0 0.053333rem;
  padding: 0 0.533333vw;
}

.fooditem-1ltm5 {
  width: 0.48rem;
  width: 4.8vw;
  height: 0.293333rem;
  height: 2.933333vw;
}

.fooditem-1Qeve {
  font-size: 12px !important;
  color: #ccc;
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
  border: 1px solid #eee;
  line-height: normal;
}

.fooditem-3q4IH {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: flex-end;
  align-items: flex-end;
}

.brand-top-cLR8_:after {
  display: block;
  content: "";
  height: 0.24rem;
  height: 2.4vw;
  background-color: #f0f0f0;
}

.brand-top-3uQ53 {
  margin-right: 0.266667rem;
  margin-right: 2.666667vw;
}

.brand-top-3uQ53,
.brand-top-sdPDy {
  width: 1.066667rem;
  width: 10.666667vw;
  height: 1.066667rem;
  height: 10.666667vw;
}

.brand-top-sdPDy {
  border-radius: 50%;
}

.brand-top-2kPBu {
  position: relative;
  display: -webkit-flex;
  display: flex;
  padding: 0.16rem 0.266667rem;
  padding: 1.6vw 2.666667vw;
  color: #666;
}

.brand-top-3P2PP {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

.brand-top-xll_2 {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}

.brand-top-3IiaR {
  color: #333;
  font-size: 14px;
}

.brand-top-Kxfo6 {
  display: inline-block;
  width: 1px;
  height: 0.16rem;
  height: 1.6vw;
  margin: 0 0.16rem;
  margin: 0 1.6vw;
  background-color: #ddd;
}

.brand-top-33q3W {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  padding: 0.16rem 0 0.24rem;
  padding: 1.6vw 0 2.4vw;
}

.brand-top-1APF4 {
  width: 9.466667rem;
  width: 94.666667vw;
  height: 2.4rem;
  height: 24vw;
  border-radius: 0.08rem;
  border-radius: 0.8vw;
}

.brand-top-3pVEE {
  fill: #d1d1d6;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  width: 0.426667rem;
  width: 4.266667vw;
  height: 0.426667rem;
  height: 4.266667vw;
  position: absolute;
  right: 0.266667rem;
  right: 2.666667vw;
  top: 0.48rem;
  top: 4.8vw;
}

.brand-top-1XvT-,
.brand-top-ncesU {
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  display: -webkit-flex;
  display: flex;
  padding-left: 0.266667rem;
  padding-left: 2.666667vw;
}

.brand-top-3lEu7 {
  display: -webkit-flex;
  display: flex;
  -webkit-flex: none;
  flex: none;
}

.brand-top-3lEu7::-webkit-scrollbar {
  display: none;
}

.brand-top-2Ar1R {
  margin-right: 0.24rem;
  margin-right: 2.4vw;
  font-size: 12px;
}

.brand-top-18XeS {
  width: 3.2rem;
  width: 32vw;
  height: 3.2rem;
  height: 32vw;
  border-radius: 0.08rem;
  border-radius: 0.8vw;
}

.brand-top-1KcTl {
  padding: 0.293333rem 0 0 0.24rem;
  padding: 2.933333vw 0 0 2.4vw;
}

.brand-top-1WSsO {
  margin-right: 0.24rem;
  margin-right: 2.4vw;
  text-align: center;
  font-size: 12px;
}

.brand-top-3mRLR {
  width: 2.16rem;
  width: 21.6vw;
  height: 2.16rem;
  height: 21.6vw;
}

.brand-top-10wDK {
  width: 2.16rem;
  width: 21.6vw;
  padding: 0.24rem 0 0.4rem;
  padding: 2.4vw 0 4vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.brand-top-6HMlc {
  color: #1aac7a;
  padding: 0.213333rem 0 0.293333rem 0.24rem;
  padding: 2.133333vw 0 2.933333vw 2.4vw;
  font-weight: 700;
}

.brand-top-6HMlc del {
  color: #999;
  font-weight: 400;
}

.brand-top-COvx0 {
  font-size: 14px;
}
/*# sourceMappingURL=https://pages.elenet.me/perf-sentry-sourcemaps/h5/1567095478946/search.44c5a5c.css.map*/
.index-container_10L_lQb {
  position: relative;
  border-bottom: 0.013333rem solid #eee;
  border-bottom: 0.133333vw solid #eee;
  background-color: #fff;
  color: #666;
  padding: 0.4rem 0;
  padding: 4vw 0;
  list-style: none;
  font-size: 14px;
  line-height: normal;
}

.index-shopInfo_1RRTZ0d {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-align-items: stretch;
  align-items: stretch;
  padding: 0 0.266667rem;
  padding: 0 2.666667vw;
}

.index-main_N3FfcSz {
  -webkit-flex-grow: 1;
  flex-grow: 1;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-user-select: none;
  user-select: none;
  padding-left: 0.266667rem;
  padding-left: 2.666667vw;
}

.index-line_2-iYR1A,
.index-main_N3FfcSz {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  overflow: hidden;
}

.index-line_2-iYR1A,
.index-shopname_39Y7e3U {
  -webkit-align-items: center;
  align-items: center;
}

.index-shopname_39Y7e3U {
  display: -webkit-flex;
  display: flex;
  margin: 0;
  padding: 0;
  color: #333;
  font-weight: 700;
  font-size: 16px;
  overflow: hidden;
}

.index-shopname_39Y7e3U span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.index-premium_39rl0v9 {
  position: relative;
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
  padding: 0.026667rem 0.066667rem;
  padding: 0.266667vw 0.666667vw;
  color: transparent;
  text-align: center;
  white-space: nowrap;
  font-weight: 700;
  font-size: 14px;
  font-style: normal;
  line-height: normal;
}

.index-premium_39rl0v9:after {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  content: attr(content);
  padding: 0.053333rem 0.133333rem;
  padding: 0.533333vw 1.333333vw;
  color: #6f3f15;
  font-weight: 700;
  font-size: 18px;
  border-radius: 0.106667rem;
  border-radius: 1.066667vw;
  background-image: linear-gradient(-139deg, #fff100, #ffe339);
  white-space: nowrap;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}

.index-rateWrap_39dWx_g {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}

.index-rate_WsK58g8,
.index-stars_vPkk9Vv {
  margin-right: 0.106667rem;
  margin-right: 1.066667vw;
}

.index-moneylimit_2fCq9W5 {
  display: -webkit-flex;
  display: flex;
  -webkit-align-content: center;
  align-content: center;
}

.index-moneylimit_2fCq9W5 span + span:before {
  margin: 0 0.08rem;
  margin: 0 0.8vw;
  color: #ddd;
  content: "|";
}

.index-moneylimit_2fCq9W5 span:nth-of-type(2) {
  overflow: hidden;
  max-width: 2.666667rem;
  max-width: 26.666667vw;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.index-activityWrap_3mo1GyG {
  padding-left: 2.266667rem;
  padding-left: 22.666667vw;
}

.index-tagLine_1rJw_lq,
.index-tagsSlot_3bpWx9O {
  margin: 0.266667rem 0.266667rem 0 0;
  margin: 2.666667vw 2.666667vw 0 0;
}

.index-tagLine_1rJw_lq {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-align-items: center;
  align-items: center;
}

.index-tagLine_1rJw_lq > span {
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
  margin-bottom: 0.106667rem;
  margin-bottom: 1.066667vw;
}

.index-activities_25AUDsx {
  position: relative;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-content: stretch;
  align-content: stretch;
  overflow: hidden;
}

.index-supportWrap_2lTcxr2 {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  margin-left: 0.266667rem;
  margin-left: 2.666667vw;
}

.index-supportWrap_2lTcxr2 > li {
  position: relative;
  height: 0.346667rem;
  height: 3.466667vw;
  width: 0.346667rem;
  width: 3.466667vw;
  margin-left: 0.08rem;
  margin-left: 0.8vw;
}

.index-supportWrap_2lTcxr2 > li:after {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  font-size: 14px;
  color: #999;
  content: attr(content);
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
  width: 0.693333rem;
  width: 6.933333vw;
  height: 0.693333rem;
  height: 6.933333vw;
  line-height: normal;
  border: 0.013333rem solid #ddd;
  border: 0.133333vw solid #ddd;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}

.index-supportWrap_2lTcxr2 > li:last-child {
  margin-right: 0.013333rem;
  margin-right: 0.133333vw;
}

.index-supportWrap_2lTcxr2 > li.index-ad_2AGWmo_ {
  height: 0.293333rem;
  height: 2.933333vw;
  width: 0.48rem;
  width: 4.8vw;
}

.index-supportWrap_2lTcxr2 > li.index-ad_2AGWmo_:after {
  color: #ccc;
  font-size: 14px;
  width: 0.96rem;
  width: 9.6vw;
  height: 0.586667rem;
  height: 5.866667vw;
  border: 0.013333rem solid #eee;
  border: 0.133333vw solid #eee;
}

.index-supportWrap_2lTcxr2 .index-omit_1q3Tw0_ {
  margin-left: 0.266667rem;
  margin-left: 2.666667vw;
  padding: 0 0.133333rem;
  padding: 0 1.333333vw;
}

.index-timedistanceWrap_2Dp_kzY {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  color: #999;
}

.index-timedistanceWrap_2Dp_kzY span:after {
  margin: 0 0.08rem;
  margin: 0 0.8vw;
  color: #ddd;
  content: "|";
}

.index-timedistanceWrap_2Dp_kzY span:last-child:after {
  display: none;
}

.index-distanceWrap_1EPAlti > span {
  display: inline-block;
  -webkit-transform: scale(0.85);
  transform: scale(0.85);
}

.index-activityList_1wvwwUY {
  -webkit-flex: 1;
  flex: 1;
  padding-right: 0.266667rem;
  padding-right: 2.666667vw;
  overflow: hidden;
}

.index-activityList_1wvwwUY > div:not(:first-child) {
  margin-top: 0.066667rem;
  margin-top: 0.666667vw;
}

.index-activityBtn_tMk-e1C {
  padding: 0.08rem 0.266667rem 0 0;
  padding: 0.8vw 2.666667vw 0 0;
  color: #999;
  text-align: right;
  font-size: 14px;
  line-height: 1;
}

.index-activityBtn_tMk-e1C span {
  vertical-align: middle;
}

.index-activityBtn_tMk-e1C img {
  width: 0.173333rem;
  width: 1.733333vw;
  opacity: 0.9;
  margin-left: 0.106667rem;
  margin-left: 1.066667vw;
  transition: all 0.3s ease-in-out;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  fill: currentColor;
  will-change: transform;
  vertical-align: middle;
  position: relative;
  z-index: 1;
}

.index-activityBtn_tMk-e1C img.index-open_33dKeGm {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.index-recommendTag__2apOBL {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  border-radius: 0.013333rem;
  border-radius: 0.133333vw;
  font-size: 14px;
  color: #666;
  height: 0.4rem;
  height: 4vw;
  padding: 0 0.106667rem;
  padding: 0 1.066667vw;
  color: #e8470b;
}

.index-recommendTag__2apOBL img {
  margin-top: 0.04rem;
  margin-top: 0.4vw;
  height: 0.266667rem;
  height: 2.666667vw;
  width: 0.266667rem;
  width: 2.666667vw;
  margin-right: 0.08rem;
  margin-right: 0.8vw;
}

.index-tag_3oprLi5 {
  padding: 0 0.106667rem;
  padding: 0 1.066667vw;
}

.index-tagGhost_1KCu_KY {
  border: 0.026667rem solid #ddd;
  border: 0.266667vw solid #ddd;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  padding: 0 0.213333rem;
  padding: 0 2.133333vw;
}

.index-dashedline_7B79b3W {
  width: 100%;
  height: 0.013333rem;
  height: 0.133333vw;
  padding-right: 0.266667rem;
  padding-right: 2.666667vw;
}

.index-actRow_2f_uNNA {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  font-size: 14px;
  line-height: 0.48rem;
  line-height: 4.8vw;
}

.index-actRow_2f_uNNA .index-iconWrap_1xJuKaY {
  display: inline-block;
  position: relative;
  margin-right: 0.16rem;
  margin-right: 1.6vw;
  height: 0.373333rem;
  height: 3.733333vw;
  width: 0.373333rem;
  width: 3.733333vw;
  vertical-align: middle;
}

.index-actRow_2f_uNNA .index-icon_1fBCxBk {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  height: 0.746667rem;
  height: 7.466667vw;
  width: 0.746667rem;
  width: 7.466667vw;
  font-size: 14px;
  color: #fff;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  border-radius: 0.106667rem;
  border-radius: 1.066667vw;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}

.index-actRow_2f_uNNA .index-desc_JLha7Vr {
  display: inline-block;
  -webkit-flex: 1;
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
}

.index-adLite_35BlsGa {
  text-align: center;
  display: inline-block;
  height: 0.426667rem;
  height: 4.266667vw;
  width: 0.746667rem;
  width: 7.466667vw;
  position: relative;
  font-size: 14px;
  color: transparent;
}

.index-adLite_35BlsGa:after {
  content: attr(content);
  position: absolute;
  top: 0;
  left: 0;
  font-size: 14px;
  color: #d8d8d9;
  white-space: nowrap;
  height: 0.853333rem;
  height: 8.533333vw;
  width: 1.493333rem;
  width: 14.933333vw;
  line-height: 0.853333rem;
  line-height: 8.533333vw;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  border: 0.013333rem solid #c9c8c8;
  border: 0.133333vw solid #c9c8c8;
  border-radius: 0.106667rem;
  border-radius: 1.066667vw;
}

.index-dislikeModal_1am3w6C {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.index-dislike_2_wUsCr {
  width: 1.333333rem;
  width: 13.333333vw;
  height: 1.333333rem;
  height: 13.333333vw;
  border-radius: 50%;
  background: #fff;
  line-height: 1.333333rem;
  line-height: 13.333333vw;
  text-align: center;
  color: #333;
}

.index-aliday_1m1a-Gy {
  display: inline-block;
  height: 0.373333rem;
  height: 3.733333vw;
  width: 0.853333rem;
  width: 8.533333vw;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}

.Rating-wrapper_TYbDrku_0 {
  position: relative;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
}

.Rating-actived_GBtiHkB_0,
.Rating-gray_1kpffd5_0 {
  display: -webkit-flex;
  display: flex;
}

.Rating-actived_GBtiHkB_0 img,
.Rating-gray_1kpffd5_0 img {
  width: 1.493333rem;
  width: 14.933333vw;
  height: 0.266667rem;
  height: 2.666667vw;
  -webkit-flex: none;
  flex: none;
  max-width: none;
}

.Rating-actived_GBtiHkB_0 {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}

.logo-container_XoH2Vit_0 {
  position: relative;
  -webkit-flex: none;
  flex: none;
  z-index: 0;
}

.logo-main_21aInWJ_0 {
  position: relative;
  width: 1.733333rem;
  width: 17.333333vw;
  height: 1.733333rem;
  height: 17.333333vw;
}

.logo-logo_3S1eSkn_0 {
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  border: 0.013333rem solid rgba(0, 0, 0, 0.08);
  border: 0.133333vw solid rgba(0, 0, 0, 0.08);
}

.logo-statusTip_1CEG6F-_0 {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  overflow: hidden;
  border-bottom-right-radius: 0.053333rem;
  border-bottom-right-radius: 0.533333vw;
  border-bottom-left-radius: 0.053333rem;
  border-bottom-left-radius: 0.533333vw;
  text-align: center;
  white-space: nowrap;
}

.logo-statusTipText_1Dx4kZS_0 {
  color: #fff;
  font-size: 14px;
  padding: 0.013333rem 0;
  padding: 0.133333vw 0;
  position: relative;
  color: transparent;
  white-space: nowrap;
}

.logo-statusTipText_1Dx4kZS_0:after {
  content: attr(content);
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  font-size: 14px;
  color: #fff;
  padding: 0.026667rem 0;
  padding: 0.266667vw 0;
  white-space: nowrap;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}

.logo-statusTipSmall_3tjsgtJ_0 {
  font-size: 14px;
}

.logo-newShop_PI2TWde_0 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
  width: 0.853333rem;
  width: 8.533333vw;
  height: 0.853333rem;
  height: 8.533333vw;
  background-image: linear-gradient(
    135deg,
    #26ce61,
    #26ce61 50%,
    transparent 0
  );
  font-size: 13px;
}

.logo-newShop_PI2TWde_0 span {
  position: absolute;
  top: 0.133333rem;
  top: 1.333333vw;
  left: 0.026667rem;
  left: 0.266667vw;
  display: block;
  color: #fff;
  font-weight: 700;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.logo-categoryQuantity_uaoPHzl_0 {
  position: absolute;
  right: -0.186667rem;
  right: -1.866667vw;
  top: -0.186667rem;
  top: -1.866667vw;
  color: #fff;
  background-image: linear-gradient(-90deg, #ff7416, #ff3c15 98%);
  border-radius: 0.2rem;
  border-radius: 2vw;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  min-width: 0.373333rem;
  min-width: 3.733333vw;
  padding: 0 0.106667rem;
  padding: 0 1.066667vw;
  line-height: 0.373333rem;
  line-height: 3.733333vw;
}

.delivery-delivery_3gyT50e_0 {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}

.delivery-icon-delivery_2nSP7AC_0,
.delivery-icon-hollow_3q8_B5r_0 {
  position: relative;
  padding: 0 0.04rem;
  padding: 0 0.4vw;
  color: transparent;
  white-space: nowrap;
  font-size: 14px;
  border: 0.013333rem solid transparent;
  border: 0.133333vw solid transparent;
  border-radius: 0.04rem;
  border-radius: 0.4vw;
  line-height: 1.2;
}

.delivery-icon-delivery_2nSP7AC_0:after,
.delivery-icon-hollow_3q8_B5r_0:after {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  white-space: nowrap;
  content: attr(content);
  font-size: 14px;
  padding: 0 0.053333rem;
  padding: 0 0.533333vw;
  border-radius: 0.08rem;
  border-radius: 0.8vw;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}

.delivery-icon-delivery_2nSP7AC_0:after {
  color: #0097ff;
  border: 0.013333rem solid #0097ff;
  border: 0.133333vw solid #0097ff;
}

.delivery-icon-hollow_3q8_B5r_0:after {
  color: #fff;
  border: 0.013333rem solid #0097ff;
  border: 0.133333vw solid #0097ff;
  background-image: linear-gradient(45deg, #0085ff, #0af);
}

.delivery-icon-hollow_3q8_B5r_0 {
  margin-left: 0.106667rem;
  margin-left: 1.066667vw;
}

.mini-tag-tag_3Tm_6bw_0 {
  position: relative;
  font-size: 14px;
  color: transparent;
  white-space: nowrap;
}

.mini-tag-ghost_3DwLU8E_0 {
  position: absolute;
  left: 0;
  top: 0;
  right: -100%;
  bottom: -100%;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  font-size: 16px;
}

.FixedBar-wrapper_2ylMXSJ {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2333;
  width: 100%;
}

.FixedBar-enter-active_2B20loD {
  transition: opacity 1s;
}

.FixedBar-leave-active_pkF41EV {
  transition: opacity 0.5s;
}

.FixedBar-enter_2gRJgB2,
.FixedBar-leave-active_pkF41EV {
  opacity: 0;
}

.LoadMore-wrapper_3WFhfHy {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  min-height: 1.066667rem;
  min-height: 10.666667vw;
  background-color: #fff;
  color: #666;
  font-size: 14px;
}

.LoadMore-loading_1ZyT4BS {
  position: relative;
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
}

.LoadMore-loading_1ZyT4BS,
.LoadMore-loading_1ZyT4BS:after {
  width: 0.4rem;
  width: 4vw;
  height: 0.4rem;
  height: 4vw;
  border-radius: 100%;
  border: 0.04rem solid #eee;
  border: 0.4vw solid #eee;
}

.LoadMore-loading_1ZyT4BS:after {
  content: "";
  position: absolute;
  left: -0.04rem;
  left: -0.4vw;
  top: -0.04rem;
  top: -0.4vw;
  border-top-color: #0089dc;
  -webkit-animation: LoadMore-rotate_vodZFdH 1s linear infinite;
  animation: LoadMore-rotate_vodZFdH 1s linear infinite;
}

@-webkit-keyframes LoadMore-rotate_vodZFdH {
  0% {
    transfrom: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes LoadMore-rotate_vodZFdH {
  0% {
    transfrom: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

.SwitchTab-wrapper_1K5DMvd {
  position: relative;
}

.SwitchTab-transition_1naNOOT {
  transition: opacity 0.5s cubic-bezier(0.55, 0, 0.1, 1),
    -webkit-transform 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  transition: opacity 0.5s cubic-bezier(0.55, 0, 0.1, 1),
    transform 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  transition: opacity 0.5s cubic-bezier(0.55, 0, 0.1, 1),
    transform 0.5s cubic-bezier(0.55, 0, 0.1, 1),
    -webkit-transform 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.SwitchTab-next-enter-active_X56hiu7,
.SwitchTab-next-enter___6xIN9,
.SwitchTab-next-leave-active_2bk9nNX,
.SwitchTab-next-leave_3jKLHuc,
.SwitchTab-prev-enter-active_19mgJnf,
.SwitchTab-prev-enter_12e1KZz,
.SwitchTab-prev-leave-active_h6Ak61K,
.SwitchTab-prev-leave_HOy2tpF {
  position: absolute;
}

.SwitchTab-next-leave-active_2bk9nNX,
.SwitchTab-prev-enter_12e1KZz {
  opacity: 0;
  -webkit-transform: translate(-0.4rem);
  -webkit-transform: translate(-4vw);
  transform: translate(-0.4rem);
  transform: translate(-4vw);
}

.SwitchTab-next-enter___6xIN9,
.SwitchTab-prev-leave-active_h6Ak61K {
  opacity: 0;
  -webkit-transform: translate(0.4rem);
  -webkit-transform: translate(4vw);
  transform: translate(0.4rem);
  transform: translate(4vw);
}

.TouchBar-wrapper_3AxAZxu {
  position: relative;
  width: 100%;
}

.TouchBar-list_1f4YgNb {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  line-height: 0;
  -webkit-overflow-scrolling: touch;
}

.TouchBar-list_1f4YgNb li {
  display: inline-block;
  overflow: hidden;
}

.TouchBar-list_1f4YgNb::-webkit-scrollbar {
  display: none;
}

.TouchBar-align_1wyOisV {
  line-height: 0;
}

.TouchBar-align_1wyOisV ul {
  position: static;
  display: inline-block;
}

.Popup-mask_2vJ_ko7 {
  position: fixed;
  top: 0;
  left: 0;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  width: 100%;
  width: 100vw;
  height: 100%;
  height: 100vh;
  transition-property: opacity;
  will-change: transform;
}

.Popup-wrapper_2IImAZj {
  position: relative;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  will-change: transform;
}

.Popup-close_2ubCStW {
  position: absolute;
  top: -1.2rem;
  top: -12vw;
  right: -0.133333rem;
  right: -1.333333vw;
  z-index: 233;
  padding: 0.133333rem;
  padding: 1.333333vw;
}

.Popup-close_2ubCStW svg {
  display: block;
  width: 0.8rem;
  width: 8vw;
  height: 0.8rem;
  height: 8vw;
}

.Popup-center-wrapper_29jr-9C {
  margin-top: -20%;
}

.Popup-mask-enter_qsQRhJA,
.Popup-mask-leave-active_zmQ0FSR {
  opacity: 0;
}

.Popup-mask-enter_qsQRhJA .Popup-center-wrapper_29jr-9C,
.Popup-mask-leave-active_zmQ0FSR .Popup-center-wrapper_29jr-9C {
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
}

.Popup-mask-enter_qsQRhJA .Popup-bottom-wrapper_1GLew3-,
.Popup-mask-leave-active_zmQ0FSR .Popup-bottom-wrapper_1GLew3- {
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}

.Popup-mask-enter_qsQRhJA .Popup-top-wrapper_37npiN2 {
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}

.Popup-mask-enter_qsQRhJA .Popup-bottom-wrapper_1GLew3- {
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}

.Dialogue-wrapper_1c-lP67 {
  padding: 0.533333rem 0.4rem;
  padding: 5.333333vw 4vw;
  width: 8.533333rem;
  width: 85.333333vw;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  background: #fff;
}

.Dialogue-title_3apUe-w {
  margin: 0 auto 0.426667rem;
  margin: 0 auto 4.266667vw;
  color: #333;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 0.666667rem;
  line-height: 6.666667vw;
}

.Dialogue-content_3oyn5c6 {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  max-height: 50vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.Dialogue-content_3oyn5c6 b {
  color: #333;
  font-weight: 700;
}

.Dialogue-buttons_3Q2BV0T {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  margin-top: 0.346667rem;
  margin-top: 3.466667vw;
}

.Dialogue-buttons_3Q2BV0T button {
  -webkit-flex: 1;
  flex: 1;
  padding: 0;
  height: 1.173333rem;
  height: 11.733333vw;
  border: 0.013333rem solid #ccc;
  border: 0.133333vw solid #ccc;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  background: none;
  color: #333;
  font-size: 14px;
  font-weight: 500;
}

.Dialogue-buttons_3Q2BV0T button:active {
  opacity: 0.7;
}

.Dialogue-buttons_3Q2BV0T .Dialogue-highlight_WRW2YrD {
  border: 0 none;
  background: #2396ff;
  color: #fff;
}

.Dialogue-buttons_3Q2BV0T button + button {
  margin-left: 0.266667rem;
  margin-left: 2.666667vw;
}

.MessageDialog-box_3zL04f3 {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  margin-top: 0.2rem;
  margin-top: 2vw;
  padding: 0 0.266667rem;
  padding: 0 2.666667vw;
  height: 1.2rem;
  height: 12vw;
  border: 0.013333rem solid #ddd;
  border: 0.133333vw solid #ddd;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  font-size: 14px;
}

.MessageDialog-box_3zL04f3 input {
  -webkit-flex-grow: 1;
  flex-grow: 1;
  padding: 0.133333rem 0;
  padding: 1.333333vw 0;
  height: 0.8rem;
  height: 8vw;
  color: #333;
  line-height: 0.533333rem;
  line-height: 5.333333vw;
}

.MessageDialog-box_3zL04f3 input::-webkit-input-placeholder {
  color: #ccc;
}

.MessageDialog-box_3zL04f3 input::placeholder {
  color: #ccc;
}

.MessageDialog-promptError_2ORWJDP {
  margin-top: 0.133333rem;
  margin-top: 1.333333vw;
  font-size: 14px;
  color: #ff5339;
}

.MessageToast-wrapper_1b8l3iQ {
  position: fixed;
  bottom: 2.56rem;
  bottom: 25.6vw;
  word-break: break-word;
  left: 50%;
  z-index: 9999;
  padding: 0.266667rem 0.533333rem;
  padding: 2.666667vw 5.333333vw;
  border-radius: 0.533333rem;
  border-radius: 5.333333vw;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 14px;
  line-height: 1.2;
  transition: opacity 0.5s;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  pointer-events: none;
}

.MessageToast-enter_2wapAlH,
.MessageToast-leave-active_3JFUzDj {
  opacity: 0;
}

.ActionSheet-sheet_Y7oj4qk {
  width: 10rem;
  width: 100vw;
  background-color: #f5f5f5;
  transition: -webkit-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.ActionSheet-list_1z4rCYY {
  margin-bottom: 0.266667rem;
  margin-bottom: 2.666667vw;
}

.ActionSheet-item_29fdQVa {
  border-bottom: 0.013333rem solid #f2f2f2;
  border-bottom: 0.133333vw solid #f2f2f2;
}

.ActionSheet-item_29fdQVa:active {
  background-color: #f8f8f8;
}

.ActionSheet-button_3Q8lBsA,
.ActionSheet-item_29fdQVa {
  display: block;
  width: 100%;
  height: 1.466667rem;
  height: 14.666667vw;
  background-color: #fff;
  color: #3e3e3e;
  text-align: center;
  font-size: 14px;
  line-height: 1.466667rem;
  line-height: 14.666667vw;
}

.ActionSheet-button_3Q8lBsA:active,
.ActionSheet-item_29fdQVa:active {
  opacity: 0.7;
}

.ps-captcha {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  display: none;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.ps-captcha.is-show {
  display: -webkit-flex;
  display: flex;
}

.ps-captcha-dialog {
  width: 85%;
  max-width: 380px;
  padding-top: 15px;
  border-radius: 7px;
  background-color: #fff;
}

.ps-captcha.is-show .ps-captcha-dialog {
  -webkit-animation: captchaDialogZoomIn 0.3s ease-in;
  animation: captchaDialogZoomIn 0.3s ease-in;
}

.ps-captcha-title {
  padding: 6px 15px 15px;
  text-align: center;
  line-height: 1;
  font-size: 18px;
  color: #000;
}

.ps-captcha-content {
  padding: 0 15px 20px;
  font-size: 14px;
  line-height: 1.5;
}

.ps-captcha-input {
  position: relative;
  margin: 0 15px 15px;
  border: 0.013333rem solid #ddd;
  border: 0.133333vw solid #ddd;
}

.ps-captcha-input,
.ps-captcha-input input {
  box-sizing: border-box;
}

.ps-captcha-input input {
  display: block;
  width: 100%;
  height: 40px;
  padding: 0 12px;
  font-size: 15px;
  outline: none;
  border: 0;
}

.ps-captcha-input img {
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  height: 40px;
}

.ps-captcha-buttons {
  -ms-flex-align: center;
  -ms-flex-pack: center;
  border-top: 0.013333rem solid #ddd;
  border-top: 0.133333vw solid #ddd;
}

.ps-captcha-buttons,
.ps-captcha-buttons a {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.ps-captcha-buttons a {
  -webkit-flex: 1 1;
  flex: 1 1;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  height: 42px;
  font-size: 16px;
}

.ps-captcha-buttons a:first-child {
  border-right: 0.013333rem solid #ddd;
  border-right: 0.133333vw solid #ddd;
}

@-webkit-keyframes captchaDialogZoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

#_ele_nc {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  width: 100%;
}

#_ele_nc * {
  outline: none;
  -webkit-tab-highlight-color: transparent;
}

#_ele_nc .nc_scale {
  height: 52px;
  box-shadow: 0 0 3px #9f9f9f;
}

#_ele_nc .nc-lang-cnt {
  padding-left: 24px;
  height: 52px;
  line-height: 52px;
  font-size: 16px;
  box-sizing: border-box;
}

#_ele_nc .nc_scale .btn_slide {
  width: 52px;
  height: 52px;
  line-height: 50px;
  font-size: 24px;
  color: #dbdbdb;
  border: 0;
}

.vw .ps-captcha-dialog {
  max-width: 101.333vw;
  padding-top: 4vw;
  border-radius: 1.867vw;
}

.vw .ps-captcha-title {
  padding: 1.6vw 4vw 4vw;
  font-size: 14px;

  .vw .ps-captcha-content {
    padding: 0 4vw 4vw;
    font-size: 14px;
  }

  .vw .ps-captcha-input {
    margin: 0 4vw 4vw;
  }

  .vw .ps-captcha-input input {
    height: 10.667vw;
    padding: 0 3.2vw;
    font-size: 14px;
  }

  .vw .ps-captcha-input img {
    height: 10.667vw;
  }

  .vw .ps-captcha-buttons a {
    font-size: 14px;
    height: 11.2vw;
  }

  .vw ._nc {
    font-size: 14px;
  }

  .vw ._nc .icon {
    width: 8vw;
    height: 8vw;
  }

  .vw ._nc .icon-close,
  .vw ._nc .icon-ok,
  .vw ._nc .icon-slide-arrow {
    font-size: 16px;
  }

  .vw ._nc .icon-load-c {
    font-size: 14px;
    padding-top: 0.533vw;
  }

  .vw ._nc .icon-notclick,
  .vw ._nc .icon-onclick {
    font-size: 14px;
  }

  .vw ._nc .stage {
    padding: 0 4vw;
  }

  .vw ._nc .stage1 {
    height: 14.667vw;
  }

  .vw ._nc .stage1 .slider {
    height: 13.867vw;
    box-shadow: 0 0 0.8vw #999;
    left: 4vw;
    right: 4vw;
  }

  .vw ._nc .stage1 .label,
  .vw ._nc .stage1 .track div {
    line-height: 13.867vw;
    height: 13.867vw;
    font-size: 14px;
  }

  .vw ._nc .stage1 .button {
    width: 13.867vw;
    height: 13.867vw;
  }

  .vw ._nc .stage1 .icon {
    left: 2.667vw;
  }

  .vw ._nc .stage1 .icon.nc-loading {
    -webkit-animation: _nc_rotate 1s linear infinite;
  }

  .vw ._nc .stage1 .icon.yes {
    background-position: -16vw 0;
  }

  .vw ._nc .stage1 .icon.no {
    background-position: -24vw 0;
  }

  @media only screen and (min-device-width: 640px) and (max-device-height: 1136px) and (-webkit-device-pixel-ratio: 2) {
    .vw ._nc .stage1 .icon {
      bottom: 0.373333rem;
      bottom: 3.733333vw;
    }
  }

  .vw ._nc .stage1 .click2slider {
    box-shadow: 0 0 0.8vw #999;
    border-radius: 1.067vw;
    height: 14.667vw;
  }

  .vw ._nc .stage1 .click2slider .click2slide-btn {
    width: 13.867vw;
    height: 13.867vw;
  }

  .vw ._nc .stage1 .click2slider .click2slider-label {
    line-height: 13.867vw;
    height: 13.867vw;
    font-size: 14px;
  }

  .vw
    ._nc
    .stage1
    .click2slider
    .click2slider-label
    .nc-iconfont.icon-left-triangle {
    left: -2.667vw;
  }

  .vw ._nc .stage1 .click2slider .slider-holder {
    height: 13.867vw;
    margin-left: 10.667vw;
  }

  .vw ._nc .stage1 .click2slider .slider-holder .button,
  .vw ._nc .stage1 .click2slider .slider-holder .label,
  .vw ._nc .stage1 .click2slider .slider-holder .slider {
    height: 11.467vw;
  }

  .vw ._nc .stage1 .click2slider .slider-holder .button {
    width: 11.467vw;
  }

  .vw ._nc .stage1 .click2slider .slider-holder .button .icon {
    left: 1.6vw;
  }

  .vw ._nc .stage1 .click2slider .slider-holder .label {
    line-height: 11.467vw;
  }

  .vw ._nc .stage1 .click2slider .slider-holder .bg-green,
  .vw ._nc .stage1 .click2slider .slider-holder .bg-red {
    line-height: 11.467vw;
    height: 11.467vw;
  }

  .vw ._nc .stage2 .textbox {
    height: 13.867vw;
    border-radius: 1.6vw;
  }

  .vw ._nc .stage2 .textbox .input {
    left: 13.333vw;
    top: 1.6vw;
    width: 37.333vw;
    height: 10.667vw;
    font-size: 14px;
  }

  .vw ._nc .stage2 .textbox .placeholder {
    left: 13.867vw;
    top: 3.733vw;
    font-size: 14px;
  }

  .vw ._nc .stage2 .textbox .code {
    right: 13.333vw;
    top: 3.2vw;
  }

  .vw ._nc .stage2 .icon {
    top: 2.933vw;
    font-size: 8vw;
  }

  .vw ._nc .stage2 .icon.tip {
    left: 2.667vw;
  }

  .vw ._nc .stage2 .icon.clear {
    left: 32.533vw;
  }

  .vw ._nc .stage2 .icon.refresh {
    right: 2.933vw;
  }

  @media only screen and (min-device-width: 640px) and (max-device-height: 1136px) and (-webkit-device-pixel-ratio: 2) {
    .vw ._nc .stage2 .icon {
      top: 0.106667rem;
      top: 1.066667vw;
    }
  }

  .vw ._nc .stage2 .btn-ok,
  .vw ._nc .stage2 .tips {
    height: 12.267vw;
    margin-top: 4.8vw;
    border-radius: 1.333vw;
    font-size: 5.333vw;
  }

  .vw ._nc .stage2 .tips {
    line-height: 12.267vw;
  }

  .vw ._nc .stage3 {
    height: 40vw;
  }

  .vw ._nc .stage3 .title {
    font-size: 5.333vw;
    margin: 10.667vw 0 5.333vw;
  }

  .vw ._nc .stage3 .menu .label {
    font-size: 4.267vw;
    height: 8.533vw;
    line-height: 8.533vw;
    top: -2.133vw;
  }

  .vw ._nc .stage3 .menu .icon {
    margin-right: 2.667vw;
    font-size: 8vw;
  }

  .vw ._nc .stage3 .menu.refresh .icon {
    background-position: -32vw 0;
  }

  .vw ._nc .stage3 .menu.feedback .icon {
    background-position: -40vw 0;
  }

  .vw ._nc .stage3 .menu.nc-sep {
    height: 8.533vw;
  }

  .vw .nc-h5-overlay {
    font-size: 4.267vw;
  }

  .vw .nc-h5-overlay div.info {
    padding: 4vw 2.667vw;
  }

  .vw ._nc.nc-h5-overlay .stage2.stage div.ope {
    padding: 0 4vw;
  }
}
</style>