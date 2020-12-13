<template>
  <div class="banner">
    <!-- 顶部搜索框 -->
    <div class="banner-header row no-gutters align-items-center">
      <div class="top-left col-3 text-center">
        <router-link tag="div" to="/city">
          {{ this.$store.state.cityName }}
          <i class="iconfont ml-1">&#xe658;</i>
        </router-link>
      </div>
      <van-search class="top-search col-8" placeholder="请输入搜索关键词" />
    </div>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        ><img src="../../assets/img/banner1.png" class="w-100"
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../../assets/img/banner2.png" class="w-100"
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../../assets/img/banner3.png" class="w-100"
      /></van-swipe-item>
    </van-swipe>
  </div>
</template>
<style>
.banner .banner-header {
  background-color: orange;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999;
}
.banner .top-search {
  background-color: orange;
}
.banner .top-left,
.banner .top-right {
  padding: 0.2rem 0.4rem;
}
.banner .van-search__content {
  border-radius: 1rem;
}
</style>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {},
};
</script>