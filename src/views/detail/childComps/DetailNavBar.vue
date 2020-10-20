<template>
    <nav-bar>
        <div class="left" slot="left" @click="backClick">
            <img src="../../../assets/img/common/back.svg">
        </div>
        <div class="center" slot="center">
            <div class="title-item" v-for="item,index in titles" @click="itemClick(index)"
            :class="{active:index===currentIndex}">{{item}}</div>
        </div>
    </nav-bar>
</template>

<script>
    import NavBar from "../../../components/common/navbar/NavBar";

    export default {
        name: "DetailNavBar",
        components:{
            NavBar
        },
        data(){
            return{
                titles:['商品','参数','评论','推荐',],
                currentIndex:0
            }
        },
        methods:{
            itemClick(index){
                this.currentIndex=index
            },
            backClick(){
                this.$router.back()
            }
        }
    }
</script>

<style scoped>
.center{
    display: flex;
    font-size: 13px;
}
.title-item{
        flex: 1;
    }
.active{
    color: var(--color-high-text);

}
.left img{
        margin-top: 12px;
    }
</style>