<template>
    <div class="content">
        <van-sticky :offset-top="54">
            <ul class="my-ul row no-gutters text-center  pt-3">
                <li class="col-3">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-huwai-copy"></use>
                    </svg>
                    <p>户外</p>
                </li>
                <li class="col-3">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-sheying-copy"></use>
                    </svg>
                    <p>摄影</p>
                </li>
                <li class="col-3">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-qinzi"></use>
                    </svg>
                    <p>亲子</p>
                </li>
                <li class="col-3">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xue"></use>
                    </svg>
                    <p>滑雪</p>
                </li>
            </ul>
        </van-sticky>   
    </div>
</template>
<style>
.content .van-sticky{
    background: #f1f1f1;
}
.content .icon{
   width: 1.6rem;
   height: 1.6rem;
}
</style>