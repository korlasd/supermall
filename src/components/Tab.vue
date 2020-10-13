<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">

    <TabBar>
    <TabBarItem path="/home">
        <template v-slot:item_icon>
            <img src="../assets/img/shouye.svg">
        </template>
        <template v-slot:item_icon_active>
            <img src="../assets/img/shouye_active.svg">
        </template>
        <template v-slot:item_text>
            <div>首页</div>
        </template>
    </TabBarItem>
    <TabBarItem path="/classfi">
        <template v-slot:item_icon>
            <img src="../assets/img/fenlei.svg">
        </template>
        <template v-slot:item_icon_active>
            <img src="../assets/img/fenlei_active.svg">
        </template>
        <template v-slot:item_text>
            <div>分类</div>
        </template>
    </TabBarItem>
    <TabBarItem path="/shopping">
        <template v-slot:item_icon>
            <img src="../assets/img/shopping.svg">
        </template>
        <template v-slot:item_icon_active>
            <img src="../assets/img/shopping_active.svg">
        </template>
        <template v-slot:item_text>
            <div>购物车</div>
        </template>
    </TabBarItem>
    <TabBarItem path="/my">
        <template v-slot:item_icon>
            <img src="../assets/img/my.svg">
        </template>
        <template v-slot:item_icon_active>
            <img src="../assets/img/my_active.svg">
        </template>
        <template v-slot:item_text>
            <div>我的</div>
        </template>
    </TabBarItem>
</TabBar>
</template>
<script>
    import TabBar from '../components/TabBar'
    import TabBarItem from '../components/TabBarItem'
    export default {
        name: "Tab",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>
    .tab_bar_item img{
        width: 24px;
        height: 24px;
    }
</style>