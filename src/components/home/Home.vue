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
import Banner from './Banner'
import Icon from './Icon'
import Content from './Content'
import Tabs from './Tabs'
import Footer from './Footer'
export default {
    components:{
        Banner,
        Icon,
        Content,
        Tabs,
        Footer
    },
}
</script>