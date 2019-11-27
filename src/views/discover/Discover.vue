<template>
  <div>
    <div class="discover">
      <!--top-->
      <section class="parts unmerge">
        <div class="entry list3">
          <a ubt-click="1757" :ubt-data-url="item.content_url" class v-for="(item,index) in toplist" :key="index">
            <div class="content-wrapper">
              <p class="title" style="color: rgb(255, 153, 0);">{{item.title}}</p>
              <p class="tips">{{item.subtitle}}</p>
            </div>
            <img
              loading
              class="icon"
              :src="item.main_pic_hash|shopurl"
            />
            <img style="display: none;" />
          </a>
          
        </div>
        <!---->
      </section>
      <!--suppose-->
      <section>
        <div class="activity-header">
          <span class="line left"></span>
          <svg class="activity-icon">
            <use xlink:href="#nice" />
          </svg>
          为你推荐
          <span class="line right"></span>
        </div>
        <p class="activity-sub-title">你的口味，我都懂得</p>
        <!-- 内容 -->
        <div class="activity-recommend wall-16TaH">
          <section
            boot-event="function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}"
            ubt-click="2689"
            ubt-data-restaurant_id="E2444200599114585977"
            ubt-data-dish_id="761481576"
            ubt-data-sort_index="0"
            scandata="[object Object]"
            class="recommend-36uLI"
          >
            <img
              class="recommend-2Mcp6"
              src="https://cube.elemecdn.com/a/fe/ef359cc567baeeefc94824bdea608png.png?x-oss-process=image/format,webp/resize,w_345,h_345,m_fixed"
            />
            <aside class="recommend-1NWp9">您可能感兴趣的美食</aside>
            <div class="recommend-2_Rj-">
              <h4 class="recommend-3MjdR">非矾油条</h4>
              <div class="recommend-2wozE">月售184份 好评率100%</div>
            </div>
            <div class="recommend-2HWZI">
              <div class="price-1qtfb recommend-2lnd7">
                <span class="price-1bP9Q">
                  <i aria-hidden="true">¥</i>
                  <span>7</span>
                </span>
                <!---->
              </div>
              <div class="recommend-2Nr2c">
                <span>满28减5</span>
              </div>
            </div>
            <div class="recommend-1XTm_">
              <div class="recommend-evJyV">
                <svg>
                  <use xlink:href="#shop" />
                </svg>
                <span>永和大王（北京站广场BJ058）</span>
              </div>
            </div>
          </section>
          
          
        </div>
        <!---->
        <p class="activity-more">
          查看更多
          <svg class="svg-next">
            <use xlink:href="#tab_found_next_page" />
          </svg>
        </p>
      </section>
      <!---->
      <!--limitedtime-->
      <section>
        <div class="activity-header">
          <span class="line left"></span>
          <svg class="activity-icon">
            <use xlink:href="#alarm" />
          </svg>
          限时好礼
          <span class="line right"></span>
        </div>
        <p class="activity-sub-title">金币换豪礼</p>
        <div class="activity-body">
          <a
            ubt-data-title="限时好礼"
            ubt-click="951"
            ubt-data-sort_index="0"
            ubt-data-requrest_id
            class="discover-food"
          >
            <img
              src="https://cube.elemecdn.com/e/02/d86b57a31e7a0740ab3af99bdd97cjpeg.jpeg?x-oss-process=image/format,webp"
              width="324"
              height="322"
            />
            <div>
              <p class="food-name ui-ellipsis">3元品质联盟红包</p>
              <div class="food-info clearfix">
                <div class="food-price">
                  <span class="price ui-ellipsis">
                    <span>90金币</span>
                    <!---->
                  </span>
                  <del class="original-price ui-ellipsis">¥3</del>
                </div>
              </div>
            </div>
            <span class="discount">限时优惠</span>
          </a>
          
        </div>
        <div class="activity-recommend wall-16TaH"></div>
        <!---->
        <p class="activity-more">
          查看更多
          <svg class="svg-next">
            <use xlink:href="#tab_found_next_page" />
          </svg>
        </p>
      </section>
    </div>
  </div>
</template>

<script>
import { getTopList,getSuppose,getLimTime } from "../../api/Discover";
export default {
    data () {
        return {
            toplist:[],
            latitude: 34.629495,
            longitude: 112.611363,
            suppose:{
                list:[],
                limit:6
            }
        }
    },
    methods: {
        //?platform=1&block_index=0&latitude=39.904179&longitude=116.407387
       async getTopList(){
            let params = {
              platform:1,
              block_index:0,
              latitude:this.latitude,
              longitude:this.longitude
        }
        let rs = await getTopList(params)
        
        this.toplist = rs.data[1]
        // console.log(this.toplist);
        
        },
        async getSuppose(){
            //latitude=39.904179&longitude=116.407387&offset=0&limit=6&user_id=6225488146
            let params = {
              latitude:39.904179,
              longitude:116.407387,
              offset:0,
              limit:this.suppose.limit,
              user_id:6225488146
            }
            let rs = await getSuppose(params)

            this.suppose.list = rs.data
            console.log(rs);
            
        },
        //https://h5.ele.me/restapi/member/gifts/suggest
        
    },
    mounted () {
        this.getTopList()
        this.getSuppose()
        getLimTime()
    }
}
</script>

<style lang="scss" scoped>
.discover {
    background: rgb(243, 239, 239);
    padding-bottom: .013333rem;
    padding-bottom: .133333vw
}

section {
    margin-bottom: .28rem;
    margin-bottom: 2.8vw;
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: .013333rem solid #eee;
    border-bottom: .133333vw solid #eee
}

section.parts {
    border-bottom: none;
    background: transparent none repeat 0 0/auto auto padding-box border-box scroll;
    background: initial
}

.unmerge>.entry:first-child {
    margin-bottom: .28rem;
    margin-bottom: 2.8vw
}

.unmerge>.entry:last-child {
    border-top: 1px solid #ededed
}

.entry {
    border-width: 1px 0;
    box-sizing: border-box;
    overflow: hidden;
    display: -webkit-flex;
    display: flex;
    background: #fff;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap
}

.entry:first-child {
    border-top: 0
}

.entry .content-wrapper {
    max-width: 3rem;
    max-width: 30vw
}

.entry a {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    align-items: center;
    width: 100%;
    height: 2.133333rem;
    height: 21.333333vw;
    padding: 0 .4rem;
    padding: 0 4vw;
    border-bottom: 1px solid #ededed
}

.entry .sub-pic-hash {
    height: 2.4rem;
    height: 24vw;
    padding: 0
}

.entry .sub-pic-hash img {
    width: 100%
}

.entry .icon {
    width: 1.6rem;
    width: 16vw
}

.entry .title {
    line-height: 1.2;
    font-size: 14px;
    margin-bottom: .16rem;
    margin-bottom: 1.6vw;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.entry .title img {
    width: .48rem;
    width: 4.8vw;
    margin-right: .066667rem;
    margin-right: .666667vw;
    vertical-align: middle
}

.entry .tips {
    line-height: 1.2;
    font-size:  14px;
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.entry.list2 a:first-child,.entry.list3 a:first-child {
    border-right: 1px solid #ededed
}

.entry.list2 a {
    width: 50%;
    float: left
}

.entry.list2 a:nth-child(odd) {
    border-right: 1px solid #ededed
}

.entry.list2 .icon {
    width: 1.2rem;
    width: 12vw
}

.entry.list3 {
    position: relative
}

.entry.list3 a {
    width: 50%
}

.entry.list3 a:nth-child(3n+1) {
    border-right: 1px solid #ededed
}

.entry.list3 .icon {
    width: 1.2rem;
    width: 12vw
}

.entry.list3 a:first-child {
    position: absolute;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    -webkit-align-items: normal;
    align-items: normal;
    height: 4.266667rem;
    height: 42.666667vw;
    padding: .586667rem .293333rem .16rem .426667rem;
    padding: 2.866667vw 0 1.6vw 2.266667vw
}

.entry.list3 a:first-child .icon {
    -webkit-align-self: flex-end;
    align-self: flex-end;
    width: 2rem;
    width: 20vw
}

.entry.list3 a:nth-child(2),.entry.list3 a:nth-child(3) {
    margin-left: 52%
}

.entry.list2 .sub-pic-hash,.entry.list3 .sub-pic-hash {
    width: 100%
}

.activity-header {
    padding-top: .52rem;
    padding-top: 5.2vw;
    text-align: center;
    font-size:  14px;
    font-weight: 700;
    color: #333
}

.activity-icon {
    position: relative;
    top: .053333rem;
    top: .533333vw;
    width: .44rem;
    width: 4.4vw;
    height: .44rem;
    height: 4.4vw
}

.line {
    display: inline-block;
    margin: .213333rem .093333rem .173333rem;
    margin: 2.133333vw .933333vw 1.733333vw;
    border: 1px solid #333;
    width: .4rem;
    width: 4vw;
    height: 0;
    position: relative
}

.line:after {
    position: absolute;
    top: -.066667rem;
    top: -.666667vw;
    content: "";
    background: #333;
    height: .133333rem;
    height: 1.333333vw;
    width: .133333rem;
    width: 1.333333vw;
    border-radius: 50%
}

.line.left:after {
    right: -.066667rem;
    right: -.666667vw
}

.line.right:after {
    left: -.066667rem;
    left: -.666667vw
}

.activity-sub-title {
    font-size:  12px;
    color: #999;
    text-align: center;
    padding-bottom: .213333rem;
    padding-bottom: 2.133333vw
}

.activity-more,.gift-list-more {
    font-size:  14px;
    color: #999;
    text-align: center;
    padding: .4rem 0 .48rem;
    padding: 4vw 0 4.8vw
}

.activity-more {
    padding-top: 0
}

.activity-body {
    padding: .32rem 0 .4rem .4rem;
    padding: 3.2vw 0 4vw 4vw;
    white-space: nowrap
}

.discover-food {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: 2.96rem;
    width: 29.6vw;
    margin-right: .16rem;
    margin-right: 1.6vw
}

.discover-food img {
    width: 4.32rem;
    width: 43.2vw;
    height: 2.933333rem;
    height: 29.333333vw;
    margin-bottom: .253333rem;
    margin-bottom: 2.533333vw
}

.discover-food .discount {
    position: absolute;
    top: 0;
    left: 0;
    font-size:  14px;
    color: #fff;
    background: #413d3c;
    padding: .066667rem;
    padding: .666667vw
}

.discover-food .food-name {
    font-size: 14px;
    color: #333;
    margin-bottom: .133333rem;
    margin-bottom: 1.333333vw
}

.discover-food .food-price {
    height: .64rem;
    height: 6.4vw;
    line-height: .64rem;
    line-height: 6.4vw
}

.discover-food .price {
    font-size: 14px;
    height: .48rem;
    height: 4.8vw;
    line-height: .48rem;
    line-height: 4.8vw;
    color: #ff5339;
    margin-right: .093333rem;
    margin-right: .933333vw;
    max-width: 1.333333rem;
    max-width: 13.333333vw;
    display: inline-block;
    vertical-align: middle
}

.discover-food .price .yuan {
    font-size: 14px;
}

.discover-food .original-price {
    font-size: 14px;
    color: #aaa;
    max-width: 1.066667rem;
    max-width: 10.666667vw;
    display: inline-block;
    vertical-align: middle
}

.discover-food .grab {
    float: right;
    font-size: 14px;
    color: #fff;
    background: #f94843;
    padding: .12rem .333333rem;
    padding: 1.2vw 3.333333vw;
    border-radius: .08rem;
    border-radius: .8vw;
    line-height: .4rem;
    line-height: 4vw
}

.clearfix:after,.clearfix:before {
    display: table;
    line-height: 0;
    content: "";
    clear: both
}

.svg-next {
    height: .24rem;
    height: 2.4vw;
    width: .133333rem;
    width: 1.333333vw;
    margin-left: .146667rem;
    margin-left: 1.466667vw
}

.swipe {
    height: 2.866667rem;
    height: 28.666667vw;
    color: #fff
}

.swipe img {
    width: 100%
}

.ui-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.activity-recommend {
    padding-bottom: .4rem;
    padding-bottom: 4vw
}

.top-banner {
    line-height: 1;
    width: 100%;
    display: block
}

body[data-v-1421ee24],html[data-v-1421ee24] {
    -webkit-text-size-adjust: 100%
}

.order-item[data-v-1421ee24] {
    display: -webkit-flex;
    display: flex;
    background: #fff;
    padding: .4rem;
    padding: 4vw
}

.order-owner[data-v-1421ee24] {
    margin-right: .2rem;
    margin-right: 2vw;
    padding-top: .026667rem;
    padding-top: .266667vw
}

.order-owner img[data-v-1421ee24] {
    width: .8rem;
    width: 8vw;
    border-radius: 50%
}

.order-detail[data-v-1421ee24] {
    -webkit-flex: 1;
    flex: 1
}

.owner-name[data-v-1421ee24] {
    font-size: 0;
    color: #666;
    margin-bottom: .08rem;
    margin-bottom: .8vw;
    padding-left: .266667rem;
    padding-left: 2.666667vw
}

.owner-name .name[data-v-1421ee24] {
    font-size: 14px;
    font-weight: 700
}

.owner-name .tag[data-v-1421ee24] {
    display: inline-block;
    margin-left: .12rem;
    margin-left: 1.2vw;
    font-size: 14px;
    color: #f94843;
    border: 1px solid #fda4a2;
    border-radius: .026667rem;
    border-radius: .266667vw;
    padding: 0 .053333rem;
    padding: 0 .533333vw
}

.rating[data-v-1421ee24] {
    font-size: 14px;
    color: #999;
    padding: 0 .266667rem;
    padding: 0 2.666667vw
}

.rating .rating-star[data-v-1421ee24] {
    margin-right: .133333rem;
    margin-right: 1.333333vw;
    position: relative;
    top: .026667rem;
    top: .266667vw
}

.rating .rating-star .star[data-v-1421ee24] {
    fill: #ff9a0d;
    width: .28rem;
    width: 2.8vw;
    height: .28rem;
    height: 2.8vw
}

.comment[data-v-1421ee24] {
    font-size: 14px;
    color: #666;
    padding: 0 .266667rem;
    padding: 0 2.666667vw;
    margin-top: .213333rem;
    margin-top: 2.133333vw;
    margin-bottom: .32rem;
    margin-bottom: 3.2vw;
    word-break: break-all
}

.comment .ellipsis[data-v-1421ee24] {
    display: none
}

.comment .unfold[data-v-1421ee24] {
    color: #3190e8;
    cursor: pointer;
    margin-top: .066667rem;
    margin-top: .666667vw;
    display: inline-block
}

.comment.overflow .ellipsis[data-v-1421ee24] {
    display: inline;
    display: initial
}

.comment.overflow .unfold[data-v-1421ee24] {
    display: inline-block
}

.comment.overflow .sub-text[data-v-1421ee24] {
    display: none
}

.foods[data-v-1421ee24] {
    border-bottom: .026667rem solid #eee;
    border-bottom: .266667vw solid #eee;
    padding: .266667rem .133333rem 0 .266667rem;
    padding: 2.666667vw 1.333333vw 0 2.666667vw;
    background: #f9f9f9
}

.foods .restaurant[data-v-1421ee24] {
    font-size: 14px;
    color: #999;
    margin-bottom: .266667rem;
    margin-bottom: 2.666667vw
}

.foods .restaurant .shop-icon[data-v-1421ee24] {
    position: relative;
    top: .026667rem;
    top: .266667vw;
    margin-right: .08rem;
    margin-right: .8vw;
    width: .226667rem;
    width: 2.266667vw;
    height: .226667rem;
    height: 2.266667vw
}

.foods .restaurant .restaurant-name[data-v-1421ee24] {
    font-weight: 700;
    color: #888
}

.foods .restaurant .restaurant-data[data-v-1421ee24] {
    float: right
}

.foods .food[data-v-1421ee24] {
    display: inline-block;
    position: relative;
    margin-right: .133333rem;
    margin-right: 1.333333vw;
    margin-bottom: .266667rem;
    margin-bottom: 2.666667vw;
    width: 2.466667rem;
    width: 24.666667vw;
    height: 2.466667rem;
    height: 24.666667vw;
    min-width: 31%
}

.foods .food .food-amount[data-v-1421ee24] {
    position: absolute;
    right: 0;
    top: 0;
    background: rgba(0,0,0,.7);
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    padding: 0 .053333rem;
    padding: 0 .533333vw;
    border-bottom-left-radius: .08rem;
    border-bottom-left-radius: .8vw
}

.foods .food img[data-v-1421ee24] {
    width: 100%;
    height: 100%;
    max-height: 2.48rem;
    max-height: 24.8vw;
    margin: 0
}

.foods .food .food-name[data-v-1421ee24] {
    position: absolute;
    width: 100%;
    bottom: 0;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAABaCAYAAACSa4e+AAAAAXNSR0IArs4c6QAAAUFJREFUKBVVUkuug0AMC0lA9ALsOQXL3v843fFpy7OdMughtRqc+JMwcZ6nd3jSzPz5fFosy9LP8+w5TVO8Xi/zdV3j8Xh4juPo+753/vl8chgGz23bvO97Yyne77cl/gJalt/vVwc2Bx4XAvRMII6DJdwDEt3dDLEgmvAJNpPOhMmERIrVvBIF6RzHoYPLnTGuuShoikEJ6cDUGIM9xYKy5mLmaHnULEHUAwRzKDNPkE5j0+oUjD3NlM3U4aSdmqUDuBbOKYF0Ci8dItJhD146eql8WwDmSynzoLnIVONlypFPOnMbyRITaOTaD0o1eztQA7/6cDiI3rZBVn0mbYwsums/YkGeyKmRW7N6UNdc9ycgItYvYbst90241qLVlVdjcT/a8w/5zyKz7tjlXuHBSoVHmestU+m0cQCXV0Murz+WU14hDV2l3wAAAABJRU5ErkJggg==);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    padding: .56rem .12rem .133333rem;
    padding: 5.6vw 1.2vw 1.333333vw;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.order-footer[data-v-1421ee24] {
    position: relative;
    padding: .266667rem;
    padding: 2.666667vw;
    background: #fcfcfc;
    min-height: 1.333333rem;
    min-height: 13.333333vw
}

.price[data-v-1421ee24] {
    background: #fcfcfc;
    font-size: 14px;
    font-weight: 700;
    color: #666;
    margin-top: .133333rem;
    margin-top: 1.333333vw
}

.price .amount[data-v-1421ee24] {
    position: relative;
    top: .026667rem;
    top: .266667vw;
    font-size: 14px;
    color: #ff6000;
    margin: 0 .133333rem;
    margin: 0 1.333333vw
}

.price .reduce[data-v-1421ee24] {
    font-size: 14px;
    color: #ff6000
}

.benefit[data-v-1421ee24] {
    font-size: 14px;
    color: #666;
    max-width: 4.8rem;
    max-width: 48vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.benefit span[data-v-1421ee24] {
    line-height: .266667rem;
    line-height: 2.666667vw;
    display: inline-block;
    padding: .04rem;
    padding: .4vw;
    margin-right: .133333rem;
    margin-right: 1.333333vw;
    border-radius: .053333rem;
    border-radius: .533333vw;
    background-color: #f88615;
    color: #fff
}

.buy[data-v-1421ee24] {
    display: block;
    position: absolute;
    right: .333333rem;
    right: 3.333333vw;
    top: .266667rem;
    top: 2.666667vw;
    padding: .133333rem .533333rem;
    padding: 1.333333vw 5.333333vw;
    border: 1px solid #3190e8;
    border-radius: .053333rem;
    border-radius: .533333vw;
    font-size: 14px;
    color: #3190e8
}

.recommend-36uLI {
    display: inline-block;
    position: relative;
    width: 4.6rem;
    width: 46vw;
    background: #fff;
    border: 1px solid #eee;
    text-align: left
}

.recommend-36uLI:active {
    opacity: .9
}

.recommend-2Mcp6 {
    display: block;
    width: 4.6rem;
    width: 46vw;
    height: 4.6rem;
    height: 46vw
}

.recommend-1NWp9 {
    position: absolute;
    top: 4.066667rem;
    top: 40.666667vw;
    left: 0;
    right: 0;
    height: .533333rem;
    height: 5.333333vw;
    line-height: .533333rem;
    line-height: 5.333333vw;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background-color: rgba(0,0,0,.6)
}

.recommend-1XTm_,.recommend-2_Rj-,.recommend-2HWZI {
    margin: 0 .213333rem 0 .266667rem;
    margin: 0 2.133333vw 0 2.666667vw
}

.recommend-2_Rj- {
    padding-top: .106667rem;
    padding-top: 1.066667vw
}

.recommend-2HWZI {
    padding-bottom: .08rem;
    padding-bottom: .8vw
}

.recommend-3MjdR {
    overflow: hidden;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 700;
    font-size: 14px;
}

.recommend-2wozE {
    margin-top: .08rem;
    margin-top: .8vw;
    color: #666;
    font-size: 14px;
}

.recommend-2HWZI {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center
}

.recommend-2lnd7 {
    font-size: 14px;
}

.recommend-2Nr2c {
    margin-left: .133333rem;
    margin-left: 1.333333vw;
    padding: 0 .053333rem;
    padding: 0 .533333vw;
    border: 1px solid #f66d6b;
    border-radius: .053333rem;
    border-radius: .533333vw;
    color: #f66d6b;
    font-size: 14px;
}

.recommend-1XTm_,.recommend-2Nr2c {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center
}

.recommend-1XTm_ {
    height: .88rem;
    height: 8.8vw;
    border-top: 1px dashed #ccc
}

.recommend-evJyV {
    display: -webkit-flex;
    display: flex;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-align-items: center;
    align-items: center;
    overflow: hidden
}

.recommend-evJyV svg {
    display: block;
    -webkit-flex: 0 0 0.266667rem;
    -webkit-flex: 0 0 2.666667vw;
    flex: 0 0 0.266667rem;
    flex: 0 0 2.666667vw;
    width: .266667rem;
    width: 2.666667vw;
    height: .266667rem;
    height: 2.666667vw;
    fill: #bbb
}

.recommend-evJyV span {
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    overflow: hidden;
    margin-left: .16rem;
    margin-left: 1.6vw;
    color: #999;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
}

.price-1qtfb {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: baseline;
    align-items: baseline
}

.price-1qtfb i {
    margin-right: .04rem;
    margin-right: .4vw;
    font-style: normal
}

.price-1bP9Q {
    color: #ff6000;
    font-size:18px;
}

.price-1bP9Q i {
    font-size: 12px;
}

.price-1bP9Q span {
    font-weight: 700
}

.price-cQGHJ {
    margin-left: .106667rem;
    margin-left: 1.066667vw;
    color: #999;
    font-size: 14px;
}

.wall-16TaH {
    padding-left: .133333rem;
    padding-left: 1.333333vw
}

.wall-16TaH>* {
    margin: .12rem;
    margin: 1.2vw
}

/*# sourceMappingURL=https://pages.elenet.me/perf-sentry-sourcemaps/h5/1528181816934/discover.e156827.css.map*/

</style>