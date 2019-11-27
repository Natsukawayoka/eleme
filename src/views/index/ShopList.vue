<template>
  <div>
    <section class="index-container" @click="handleClick(item)">
      <div class="index-shopInfo">
        <div class="logo-container">
          <div class="logo-main">
            <img
              alt="滇越乘象云南餐厅(金宝街店)"
              class="logo"
              :src="item.restaurant.image_path|shopurl"
            />
            <!---->
            <!---->
          </div>
          <!---->
        </div>
        <div class="index-main">
          <section class="index-line">
            <h3 class="index-shopname">
              <!---->
              <span>{{item.restaurant.name}}</span>
            </h3>
            <ul class="index-support">
              <!---->
              <span class="index-omit">···</span>
            </ul>
          </section>
          <section class="index-line">
            <div class="index-rateWrap">
              <div class="Rating-wrapper index-stars">
                <div class="Rating-gray">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
                  />
                </div>
                <div class="Rating-actived" style="width: 96%;">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
                  />
                </div>
              </div>
              <span class="index-rate">{{item.restaurant.rating}}</span>
              <span>月销{{item.restaurant.recent_order_num}}</span>
            </div>
            <div class="delivery-delivery">
              <!---->
              <div content="蜂鸟专送" alt="蜂鸟专送" class="delivery-icon-hollow">蜂鸟专送</div>
            </div>
          </section>
          <section class="index-line">
            <div class="index-moneylimit">
              <span>¥{{item.restaurant.piecewise_agent_fee.rules[0].price}}起送</span>|
              <span>配送费¥{{item.restaurant.piecewise_agent_fee.rules[0].fee}}</span>
              <!---->
            </div>
            <div class="index-timedistanceWrap">
              <span class="index-distanceWrap">{{(Math.round(item.restaurant.distance/100)/10).toFixed(1)}}km</span>
              |<span>30分钟</span>
            </div>
          </section>
        </div>
      </div>
      <div class="index-activityWrap">
        <!---->
        <section class="index-tagLine">
          <!---->
          <!-- <span class="mini-tag index-tag" >
            <span
              class="index-tagGhost mini-tag-ghost"
              style="color: rgb(102, 102, 102); border-color: rgb(221, 221, 221);"
            >{{item.restaurant.support_tags[0].text}}</span>
          </span> -->
          <span class="mini-tag index-tag" style="margin:0 20px 0 20px;" v-for="i in item.restaurant.support_tags" :key="i.text">
            <span
              class="index-tagGhost mini-tag-ghost"
              style="color: rgb(51, 51, 51); border-color: rgb(221, 221, 221);"
            >{{i.text}}</span>
          </span>
          <!---->
        </section>
        <span>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4="
            class="index-dashedline_7B79b3W"
          />
        </span>
        <section class="index-activities">
          <div class="index-activityList">
            <div class="index-actRow">
              <span class="index-iconWrap">
                <span class="index-icon" style="background-color: rgb(240, 115, 115);">减</span>
              </span>
              <span class="index-desc">aa</span>
            </div>
            <div class="index-actRow">
              <span class="index-iconWrap">
                <span class="index-icon" style="background-color: rgb(241, 136, 79);">特</span>
              </span>
              <span class="index-desc">超级会员特价商品11.11元起</span>
            </div>
            <div class="index-actRow" style="display: none;">
              <span class="index-iconWrap">
                <span class="index-icon" style="background-color: rgb(112, 188, 70);">首</span>
              </span>
              <span class="index-desc">新用户下单立减12元</span>
            </div>
            <div class="index-actRow" style="display: none;">
              <span class="index-iconWrap">
                <span class="index-icon" style="background-color: rgb(153, 153, 153);">票</span>
              </span>
              <span class="index-desc">该商家支持开发票，请在下单时填写好发票抬头</span>
            </div>
          </div>
          <div class="index-activity">
            <span>4个活动</span>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
              class
            />
          </div>
        </section>
      </div>
      <!---->
    </section>
  </div>
</template>

<script>

export default {
  props: ["item"],
  methods: {
    handleClick(item){
      this.$router.push({name:"detail",query:{item}})
    }
  }

}
</script>

<style lang="scss" scoped>
.index-container {
  position: relative;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  color: #666;
  padding: 14px 0;
  list-style: none;
  font-size: 13px;
  line-height: normal;
  width: 90%;

  .index-shopInfo {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    .logo-container {
      position: relative;
      flex: none;
      z-index: 0;
      .logo-main {
        position: relative;
        width: 80px;
        height: 80px;
        .logo {
          box-sizing: border-box;
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 5px;
          border: 1px solid rgba(0, 0, 0, 0.08);
        }
      }
    }

    .index-main {
      width: 100%;
      .index-line {
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        width: 100%;

        .index-shopname {
          display: flex;
          margin: 0;
          padding: 0;
          color: #333;
          font-weight: 700;
          font-size: 14px;
          overflow: hidden;
          align-items: center;
          line-height: 26px;
          span {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }

        .index-support {
          align-items: center;
          margin-left: 13px;
          .index-omit {
            margin-left: 30px;
            padding: 0 15px;
          }
        }
        .index-rateWrap {
          display: flex;
          align-items: center;
          .index-stars {
            margin-right: 8px;
          }
          .Rating-wrapper {
            position: relative;
            overflow: hidden;
            display: inline-block;
            vertical-align: middle;
            .Rating-gray {
              display: flex;
              img {
                width: 70px;
                height: 15px;
                flex: none;
                max-width: none;
              }
            }
            .Rating-actived {
              position: absolute;
              top: 0;
              left: 0;
              overflow: hidden;
              img {
                width: 70px;
                height: 15px;
                flex: none;
                max-width: none;
              }
            }
          }
          .index-rate {
            margin-right: 10px;
          }
        }

        .delivery-delivery {
          display: flex;
          align-items: center;
          .delivery-icon-hollow {
            margin-left: 5px;
            position: relative;
            padding: 3px;
            color: transparent;
            white-space: nowrap;
            font-size: 16px;
            border: 1 solid transparent;
            border-radius: 5px;
            line-height: 1.2;
          }
          .delivery-icon-hollow:after {
            color: #fff;
            border: 1px solid #0097ff;
            border: 1px solid #0097ff;
            background-image: linear-gradient(45deg, #0085ff, #0af);
            position: absolute;
            left: 0;
            top: 0;
            z-index: 0;
            white-space: nowrap;
            content: attr(content);
            font-size: 20px;
            padding: 4px;
            border-radius: 5px;
            transform: scale(0.5);
          }
        }
      }
    }
  }
  .index-activityWrap {
    list-style: none;
    font-size: 12px;
    line-height: normal;
    color: #666;
    padding-left: 80px;

    .index-tagLine {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      // margin: 10px 10px 0 0;

      .mini-tag {
        position: relative;
        font-size: 12px;
        color: transparent;
        white-space: nowrap;
      }
      .index-tag {
        padding: 5px;
      }

      .mini-tag-ghost {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        top: 0;
        right: -100%;
        bottom: -100%;
        transform: scale(0.5);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        font-size: 20px;
      }
    }
    .index-tagLine > span {
      margin-right: 5px;
      // margin-bottom: 8px;
    }
    .index-activities,
    .index-supportWrap {
      display: flex;
    }
    .index-activities {
      display: flex;
      justify-content: space-between;
      align-content: stretch;
      overflow: hidden;
      .index-activityList {
        flex: 1;
        overflow: hidden;
        padding-right: 10px;

        .index-actRow {
          display: flex;
          align-items: center;
          font-size: 12px;
          line-height: 15px;

           .index-iconWrap {
            display: inline-block;
            position: relative;
            margin-right: 8px;
            height: 20px;
            width: 20px;
            vertical-align: middle;
          }
           .index-icon {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 0;
            height: 30px;
            width: 30px;
            font-size: 16px;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            transform: scale(0.5);
            transform-origin: 0 0;
          }
           .index-desc {
            display: inline-block;
            flex: 1;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            vertical-align: middle;
          }
        }

      }
    }
  }
}
</style>