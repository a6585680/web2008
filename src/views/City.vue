<template>
  <div class="city">
    <div class="top text-center pt-3">
      <router-link tag="div" to="/">
        <i class="iconfont to_back">&#xe611;</i>
      </router-link>
      <p class="title">选择定位城市</p>
    </div>
    <van-tabs background="#f1f1f1">
      <van-tab title="境内" class="mb-2">
        <p class="muted mb-0 mt-3 ml-2">定位/附近城市</p>
        <ul class="row no-gutters text-center justify-content-bettween">
          <li class="col-4 postion">
            <p @click="choose">
              <i class="iconfont">&#xe632;</i>
              {{ this.$store.state.cityName }}
            </p>
          </li>
        </ul>
        <p class="muted my-3 ml-2">一级站点</p>
        <ul class="row no-gutters text-center justify-content-bettween">
          <li class="col-4" v-for="(city, index) of city_1" :key="index">
            <p @click="choose">{{ city.city_name }}</p>
          </li>
        </ul>
        <p class="muted my-3 ml-2">二级站点</p>
        <ul class="row no-gutters text-center justify-content-bettween">
          <li class="col-4" v-for="(city, index) of city_2" :key="index">
            <p @click="choose">{{ city.city_name }}</p>
          </li>
        </ul>
        <p class="muted my-3 ml-2">热门玩乐城市</p>
        <ul class="row no-gutters text-center justify-content-bettween">
          <li class="col-4" v-for="(city, index) of city_3" :key="index">
            <p @click="choose">{{ city.city_name }}</p>
          </li>
        </ul>
      </van-tab>
      <van-tab title="境外">
        <p class="muted my-3 ml-2">境外热门城市</p>
        <ul class="row no-gutters text-center justify-content-bettween">
          <li class="col-4" v-for="(city, index) of city_4" :key="index">
            <p @click="choose">{{ city.city_name }}</p>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      city_1: [],
      city_2: [],
      city_3: [],
      city_4: [],

    };
  },
  mounted() {
    this.axios.get("/city", {
        params: {
          id: 1,
        },
      }).then((res) => {
        this.city_1 = res.data.results;
      });
    this.axios.get("/city", {
        params: {
          id: 2,
        },
      }).then((res) => {
        this.city_2 = res.data.results;
      });
    this.axios.get("/city", {
        params: {
          id: 3,
        },
      }).then((res) => {
        this.city_3 = res.data.results;
      });
    this.axios.get("/city", {
        params: {
          id: 4,
        },
      }).then((res) => {
        this.city_4 = res.data.results;
      });
  },
  methods:{
      choose(e){
          let val = e.target.innerHTML;
          this.$store.commit('changeCityMutation',val);
          this.$router.push('/');
      }
  }
};
</script>
<style>
.city .to_back {
  position: absolute;
  left: 0.5rem;
  top: 0.666rem;
  font-size: 1.5rem;
}
.city .title {
  font-weight: bolder;
  font-size: 18px;
}
.city .top {
  padding: 0.625rem;
}

.city ul > li > p {
  border: 1px solid gray;
  border-radius: 0.2rem;
  padding: 0.2rem;
  margin: 0.4rem;
}
.city .van-tabs__line {
  background: orange;
}
.city .top,.city{
  background: #f1f1f1;
}
</style>
