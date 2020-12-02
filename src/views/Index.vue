<template>
    <div>主页</div>
</template>
<script>
export default {
    mounted(){
        this.axios.get('/index').then(result=>{
            console.log(result.data);
        })
    }
}
</script>