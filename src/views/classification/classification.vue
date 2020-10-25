<template>
<div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
        <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
        <scroll id="tab-content" :data="[categoryData]"
                :pull-up-load="true"
                :prop-type="3"
                ref="scroll"
                @pullingUp="loadMore"
        >
            <div>
                <tab-content-category :subcategories="ShowSubcategories"></tab-content-category>
                <tab-control :title="['综合','新品','销量']" @tabclick="tabClick"></tab-control>
                <tab-content-detail :category-detail="showCategoryDetail"></tab-content-detail>
            </div>
        </scroll>
    </div>
</div>
</template>

<script>

    import NavBar from "../../components/common/navbar/NavBar";
    import {getCategory,getSubcategory,getCategoryDetail} from "../../network/cartory";
    import {tabControlMixin} from '../../common/mixin'
    import TabMenu from "./childComps/TabMenu";
    import {NEW, POP, SELL} from "../../common/const";
    import Scroll from "../../components/common/scroll/Scroll";
    import TabContentCategory from "./childComps/TabContentCategory";
    import TabControl from "../../components/content/TabControl/TabControl";
    import TabContentDetail from "./childComps/TabContentDetail";

    export default {
        name: "classification",
        components:{
            Scroll,
            NavBar,
            TabMenu,
            TabContentCategory,
            TabControl,
            TabContentDetail
        },
        mixins: [tabControlMixin],
        data(){
            return{
                categories:[],
                categoryData:{},
                currentIndex: -1

            }
        },
        created(){
            //1.请求分类数据
            this.getCateGory()
        },
        activated(){
           this.$refs.scroll.refresh()
        },
        computed:{
            ShowSubcategories(){
                if(this.currentIndex===-1) return {}
                return this.categoryData[this.currentIndex].subcategories
            },
            showCategoryDetail(){
                if(this.currentIndex===-1) return []
                return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
            }
        },
        methods:{
            getCateGory(){
                getCategory().then(res =>{
                    //1.请求分类数据
                    this.categories=res.data.category.list
                    //2.初始化每个类别的子数据
                    for(let i=0;i<this.categories.length;i++){
                        this.categoryData[i]={
                            subcategories:{},
                            categoryDetail:{
                                'pop':[],
                                'new':[],
                                'sell':[]
                            }
                        }
                    }
                    //3.请求第一个分类的数据
                    this.getSubcateGories(0)
                })
            },
            getSubcateGories(index){
                this.currentIndex=index
                const mailKey=this.categories[index].maitKey
             getSubcategory(mailKey).then(res =>{
                this.categoryData[index].subcategories=res.data
                 this.categoryData={...this.categoryData}
                 this.getCategoryDetails(POP)
                 this.getCategoryDetails(NEW)
                 this.getCategoryDetails(SELL)

             })
            },
            getCategoryDetails(type){
                //1.获取请求的miniWallkey
                const miniWallkey=this.categories[this.currentIndex].miniWallkey
                //2.发送请求，传入miniWallkey和type
                getCategoryDetail(miniWallkey,type).then(res =>{
                    //3.保存数据
                    // console.log(res);
                    this.categoryData[this.currentIndex].categoryDetail[type]=res
                    this.categoryData={...this.categoryData}
                })
            },
            /**
             * 事件响应相关的方法
             */
            selectItem(index) {
                this.getSubcateGories(index)
            },
            loadMore(){
                this.getCategoryDetails(this.currentType)
                console.log(this.getCategoryDetails(this.currentType));
            }
        }
    }
</script>

<style scoped>
#category{
    height: 100vh;
}
    .nav-bar{
        background: var(--color-tint);
        color: #ffffff;
        z-index: 10;
    }
.content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    display: flex;
}
#tab-content {
    height: 100%;
    flex: 1;
}
</style>