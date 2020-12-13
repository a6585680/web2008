<template>
  <div class="tabs">
    <van-tabs swipeable @click="change">
      <!-- 周边短途 -->
      <van-tab title="周边短途" name="1">
        <ul class="row no-gutters bg-white">
          <li class="col-4 p-1" v-for="(route, index) of shorts" :key="index">
            <div>
              <img v-lazy="route.rimage" class="w-100" />
              <div class="star_time text-white mb-0">
                {{ route.days }}天·{{ route.sname }}出发
              </div>
            </div>
            <div class="tabs_font">
              <p class="font_title mb-0 pl-1 font-weight-bold">
                {{ route.sname }}
              </p>
              <p>
                <span class="font_price">￥{{ route.price }}</span
                >起
              </p>
            </div>
          </li>
        </ul>
      </van-tab>
      <!--国内长途-->
      <van-tab title="国内长途" name="2">
        <ul class="row no-gutters bg-white">
          <li class="col-4 p-1" v-for="(route, index) of longs" :key="index">
            <div>
              <img v-lazy="route.rimage" class="w-100" />
              <div class="star_time text-white mb-0">
                {{ route.days }}天·{{ route.sname }}出发
              </div>
            </div>
            <div class="tabs_font">
              <p class="font_title mb-0 pl-1 font-weight-bold">
                {{ route.sname }}
              </p>
              <p>
                <span class="font_price">￥{{ route.price }}</span
                >起
              </p>
            </div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>
<style>
.tabs .font_title {
  font-size: 0.9rem;
}
.tabs .font_price {
  font-size: 1.2rem;
  color: orange;
}
.tabs .tabs_font {
  position: relative;
  top: -1rem;
}
.tabs .star_time {
  position: relative;
  font-size: 0.8rem;
  top: -1.2rem;
  padding-left: 0.2rem;
  background: rgba(0, 0, 0, 0.5);
}
.tabs .van-tab__text {
  font: bolder !important;
}
.tabs .van-tabs__line {
  background: orange;
}
</style>

<script>
export default {
  data() {
    return {
      tnames: [],
      shorts: [],
      longs: [],
      active: 1,
    };
  },
  methods: {
    change(name) {
      this.axios
        .get("/route", {
          params: {
            tid: name,
          },
        })
        .then((res) => {
          let routes = res.data.results;
          routes.forEach((route) => {
            if (route.rimage != null) {
              route.rimage = require("@/assets/" + route.rimage);
            }
            this.longs.push(route);
          });
        });
    },
  },
  mounted() {
    this.axios
      .get("/route", {
        params: {
          tid: this.active,
        },
      })
      .then((res) => {
        let routes = res.data.results;
        routes.forEach((route) => {
          if (route.rimage != null) {
            route.rimage = require("@/assets/" + route.rimage);
          }
          this.shorts.push(route);
        });
      });
  },
};
</script>