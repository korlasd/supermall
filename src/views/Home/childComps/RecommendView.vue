<template>
    <div id="recommendview">
        <div class="recommend" v-for="item,index in recommend" :key="index">
            <a :href="item.link">
                <img :src="item.image">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RecommendView",
        props:{
            recommend:{
                type:Array,
                default() {
                    return [];
                }
            }
        }
    }
</script>

<style scoped>
#recommendview{
    width: 100%;
    display: flex;
    font-size: 12px;
    text-align: center;
    border-bottom: 8px solid #eee;
}
.recommend{
    flex: 1;
    margin-top: 10px;
}
.recommend img{
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
}
</style>