<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav-bar" @itemClick="itemClick" ref="nav"></detail-nav-bar>
        <scroll class="content" ref="scroll"
                :prop-type="3" @scroll="contentScroll" :pull-up-load="true"
        >
        <detail-swiper :topImages="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
        <detail-param-info ref="params" :param-info="paramInfo"></detail-param-info>
        <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
        <goods-list ref="recommend" :goods="recommends"></goods-list>
        </scroll>
        <back-top @click.native="backTopClick" v-show="isShowBackTop" class="detailback-top"></back-top>
        <detail-shop-car @addCar="addToCar"></detail-shop-car>
    </div>
</template>

<script>
    import DetailNavBar from "./childComps/DetailNavBar";
    import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "../../network/detail";
    import DetailSwiper from "./childComps/DetailSwiper";
    import DetailBaseInfo from "./childComps/DetailBaseInfo";
    import DetailShopCar from "./childComps/DetailShopCar";
    import DetailShopInfo from "./childComps/DetailShopInfo";
    import Scroll from "../../components/common/scroll/Scroll";
    import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
    import DetailParamInfo from "./childComps/DetailParamInfo";
    import DetailCommentInfo from "./childComps/DetailCommentInfo";
    import GoodsList from "../../components/content/goods/GoodsList";
    import {debounce} from "../../components/unilts/debounce";
    import BackTop from "../../components/content/backtop/BackTop";
    export default {
        name: "Detail",
        components:{
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopCar,
            DetailShopInfo,
            Scroll,
            BackTop,
            DetailGoodsInfo,
            DetailParamInfo,
            DetailCommentInfo,
            GoodsList
        },
        data(){
            return{
                iid:null,
                topImages:[],
                goods:{},
                shop: {},
                detailInfo:{},
                paramInfo:{},
                commentInfo:{},
                recommends:[],
                themeTopY:[],
                getThemeTopY:null,
                currentIndex:0,
                isShowBackTop:false
            }
        },
        created() {
            //1.获取商品id
            this.iid = this.$route.params.iid
            getDetail(this.iid).then(res => {
                // 2.获取顶部的图片轮播数据
                const data = res.result;
                this.topImages = data.itemInfo.topImages
                //3.获取商品信息
                this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
                // 4.创建店铺信息的对象
                this.shop = new Shop(data.shopInfo)
                // 5.保存商品的详情数据
                this.detailInfo = data.detailInfo;
                // 6.获取参数的信息
                this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
                //7.获取评论信息
                if(data.rate.cRate!==0){
                    this.commentInfo=data.rate.list[0]
                }
                //8.详情页标签切换
                this.getThemeTopY=debounce(() =>{
                    this.themeTopY=[]
                    this.themeTopY.push(0)
                    this.themeTopY.push(this.$refs.params.$el.offsetTop)
                    this.themeTopY.push(this.$refs.comment.$el.offsetTop)
                    this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
                    // console.log(this.themeTopY);
                })
            })
            getRecommend().then(res =>{
                this.recommends=res.data.list
                // console.log(res.data.list);
            })
        },
        // mounted(){
        //     const refresh=debounce(this.$refs.scroll.refresh,10)
        //     this.$bus.$on('detailItemImgLoad',() =>{
        //         refresh()
        //     })
        // },
        methods:{
            imageLoad(){
                this.$refs.scroll.refresh()
                //详情页标签切换
                this.getThemeTopY()
            },
            itemClick(index){
               this.$refs.scroll.scrollTo(0,-this.themeTopY[index],100)
            },
            contentScroll(position){
                //1.判断back-top的显示
                this.isShowBackTop=position.y < -1000
                //2.判断DetailNavBar标签的切换
                const positionY = -position.y
                let length=this.themeTopY.length
                for(let i=0;i<length;i++){
                    if(this.currentIndex!==i&&((i<length-1&&positionY>=this.themeTopY[i]&&positionY<=this.themeTopY[i+1])
                        ||(i===length-1&&positionY>this.themeTopY[i]))){
                        this.currentIndex=i
                        this.$refs.nav.currentIndex=this.currentIndex
                    }
                }
            },
            backTopClick(){
                this.$refs.scroll.scrollTo(0,0,500)
            },
            //添加购物车
            addToCar(){
                const product={}
                product.image=this.topImages[0]
                product.title=this.goods.title
                product.desc=this.goods.desc
                product.price=this.goods.realPrice
                product.iid=this.iid
                product.oldPrice=this.oldPrice

                this.$store.commit('addCart',product)

            }
        }
    }
</script>

<style scoped>
#detail{
position: relative;
    height: 100vh;

}
    .content{
        height: calc(100% - 44px - 49px);
        overflow: hidden;
    }
    .detail-nav-bar{
        position: relative;
        z-index: 10;
        background: #ffffff;
    }
    .back-top{
        z-index: 13;
    }
    .detailback-top{
        z-index: 13;
    }
</style>