<template>
    <div class="detail-swiper">
        <van-swipe indicator-color="red" :autoplay="2000" class="detail-swiper-van">
            <van-swipe-item v-for="(item, index) in topImages" :key="index">
                <img v-lazy="item" />
            </van-swipe-item>

            <!--//改变指示器样式-->
            <!--<template #indicator>-->
                <!--<div class="custom-indicator">-->
                    <!--<div class="custom-indicator-span" v-for="item,index in topImages" :key="index"-->
                    <!--:class="{active:index===currentIndex}"></div>-->
                <!--</div>-->
            <!--</template>-->
        </van-swipe>
    </div>
</template>

<script>
    // import {Swiper,SwiperItem} from '../../../components/common/swiper/index'
    import Vue from 'vue';
    import { Lazyload } from 'vant';

    Vue.use(Lazyload);
    export default {
        name: "DetailSwiper",
        components:{
            // Swiper,
            // SwiperItem
        },
        props:{
            topImages:{
                type:Array,
                default(){
                    return []
                }
            },

        },
        // data(){
        //     return{
        //         currentIndex:0
        //     }
        // },
        // methods:{
        //     onchange(index){
        //         this.currentIndex=index
        //
        //     }
        //
        // }
    }
</script>

<style scoped>
.detail-swiper{
   display: flex;
    /*overflow: hidden;*/
}
    .detail-swiper-van{
        height: 300px;
        flex: 1;
        /*margin-top: 44px;*/
        position: relative;
    }
.detail-swiper-van img{
    height: 300px;
    flex: 1;
    width: 100%;
}
/*.custom-indicator{*/
    /*width: 60%;*/
    /*height: 30px;*/
    /*!*background: red;*!*/
    /*z-index: 10;*/
    /*position: absolute;*/
    /*bottom: 10px;*/
    /*left: 20%;*/
    /*padding-left: 15%;*/
    /*padding-right: 15%;*/
/*overflow: hidden;*/
/*}*/
/*.custom-indicator-span{*/
        /*width: 12px;*/
        /*height: 12px;*/
        /*border-radius: 50%;*/
        /*border: 1px solid black;*/
        /*line-height: 30px;*/
        /*margin-left: 5px;*/
        /*background: white;*/
        /*float: left;*/
        /*margin-top: 15px;*/

    /*}*/
    /*.active{*/
        /*background: red;*/
    /*}*/
</style>