<template>
  <div>
    <Banner></Banner>
    <Icon></Icon>
    <Tabs></Tabs>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from "../components/home/Banner";
import Icon from "../components/home/Icon";
import Footer from "../components/home/Footer";
import Tabs from "../components/home/Tabs";
import Content from "../components/home/Content";
export default {
  components: {
    Banner,
    Icon,
    Footer,
    Tabs,
    Content,
  }
};
</script>