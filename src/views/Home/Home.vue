<template>
    <div id="home">
        <nav-bar class="home_nav_bar">
            <div slot="center">
                Super Mall
            </div>
        </nav-bar>
        <home-swiper :banner="banner"></home-swiper>
        <recommend-view :recommend="recommend"></recommend-view>
        <feature-view></feature-view>
        <tab-control class="tab-control" :title="['流行','新款','精选']"></tab-control>
        <ul>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
            <li>4545</li>
        </ul>
    </div>

</template>

<script>
    import {getHomeMultidata} from '../../network/home'
    import NavBar from '../../components/common/navbar/NavBar'

    import HomeSwiper from "./childComps/HomeSwiper";
    import RecommendView from "./childComps/RecommendView";
    import FeatureView from "./childComps/FeatureView";

    import TabControl from "../../components/content/TabControl/TabControl";




    export default {
        name: "Home",
        components:{
            'nav-bar':NavBar,
            HomeSwiper,
            RecommendView,
            FeatureView,
            TabControl
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
                    'news':{
                        page:0,
                        list:[]
                    },
                    'sell':{
                        page:0,
                        list:[]
                    }
                }
            }
        },
        created() {
            getHomeMultidata().then(res =>{
                this.banner=res.data.banner.list
                this.recommend=res.data.recommend.list

            })
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
}
    .tab-control{
        position: sticky;
        top: 44px;
    }
</style>