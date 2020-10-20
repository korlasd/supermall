<template>
    <div id="home">
        <nav-bar class="home_nav_bar">
            <div slot="center">
                Super Mall
            </div>
        </nav-bar>
        <tab-control class="tab-control" :title="['流行','新款','精选']" @tabclick="tabclick"
        v-show="isTabFixed" ref="tabControl1"></tab-control>
        <scroll class="content" ref="scroll"
                :prop-type="3" @scroll="isShowTop"
                :pull-up-load="true" @pullingUp="loadMore"
        >
            <home-swiper :banner="banner" @swiperImageLoad="swiperImageLoad"></home-swiper>
            <recommend-view :recommend="recommend"></recommend-view>
            <feature-view></feature-view>
            <tab-control :title="['流行','新款','精选']" @tabclick="tabclick" ref="tabControl2"></tab-control>
            <goods-list :goods="showGoods"/>
        </scroll>
        <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
    </div>

</template>

<script>
    import {getHomeGoods, getHomeMultidata} from '../../network/home'
    import NavBar from '../../components/common/navbar/NavBar'

    import HomeSwiper from "./childComps/HomeSwiper";
    import RecommendView from "./childComps/RecommendView";
    import FeatureView from "./childComps/FeatureView";

    import TabControl from "../../components/content/TabControl/TabControl";
    import GoodsList from "../../components/content/goods/GoodsList";

    import Scroll from "../../components/common/scroll/Scroll";
    import BackTop from "../../components/content/backtop/BackTop";
    import {debounce} from "../../components/unilts/debounce";


    export default {
        name: "Home",
        components:{
            'nav-bar':NavBar,
            HomeSwiper,
            RecommendView,
            FeatureView,
            TabControl,
            GoodsList,
            Scroll,
            BackTop
        },
        data(){
            return{
                banner:[],
                recommend:[],
                goods:{
                    'pop':{
                        page:0,
                        list:[]
                    },
                    'new':{
                        page:0,
                        list:[]
                    },
                    'sell':{
                        page:0,
                        list:[]
                    }
                },
                currentType:'pop',
                isShowBackTop:false,
                tabOffsetTop:0,
                isTabFixed:false,
                saveY:0
            }
        },
        created() {
            // 1.请求多个数据
            this.getHomeMultidata()
            // 2.请求商品数据
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')

        },
        mounted(){
            //3.图片加载问题
            const refresh=debounce(this.$refs.scroll.refresh,200)
            this.$bus.$on('ItemImgLoad',() =>{
                refresh();
            })
        },
        activated(){
            this.$refs.scroll.refresh()
            this.$refs.scroll.scrollTo(0,this.saveY,0)

        },
        deactivated(){
           this.saveY=this.$refs.scroll.getScrollY()
        },
        computed:{
            showGoods(){
                return this.goods[this.currentType].list
            }
        },
        methods:{
            /***
             * 事件监听
             */
            tabclick(index) {
                switch (index) {
                    case 0:
                        this.currentType='pop'
                        break
                    case 1:
                        this.currentType='new'
                        break
                    case 2:
                        this.currentType='sell'
                        break
                }
                this.$refs.tabControl1.currentIndex = index;
                this.$refs.tabControl2.currentIndex = index;
            },
            backTopClick(){
               this.$refs.scroll.scrollTo(0,0,500)
            },
            isShowTop(position){
                // 1.判断BackTop是否显示
                this.isShowBackTop=position.y < -1000
                // console.log(this.isShowBackTop);
                // 2.决定tabControl是否吸顶(position: fixed)
                this.isTabFixed = (-position.y) > this.tabOffsetTop
            },
            loadMore(){
                this.getHomeGoods(this.currentType)
            },
            swiperImageLoad(){
                this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop;
                // console.log(this.$refs.tabControl2.$el.offsetTop);
            },
            /***
             * 网络请求
             */
            // 1.请求多个数据
            getHomeMultidata(){
                getHomeMultidata().then(res =>{
                    this.banner=res.data.banner.list
                    this.recommend=res.data.recommend.list

                })
            }
           ,
            // 2.请求商品数据
            getHomeGoods(type){
                const page=this.goods[type].page+1
                getHomeGoods(type,page).then(res =>{
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page+=1
                    this.$refs.scroll.finishPullUp()
                })
            }
        }
    }
</script>

<style scoped>
.home_nav_bar{
    color: white;
    background-color: var(--color-tint);
    z-index: 100;

}
#home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
}
.tab-control{
        position: relative;
        z-index: 9;
    }
.content{
  position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
}
</style>