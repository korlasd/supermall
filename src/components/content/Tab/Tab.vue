<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">

    <TabBar>
    <TabBarItem path="/home">
        <template v-slot:item_icon>
            <img src="../../../assets/img/TabBar/shouye.svg">
        </template>
        <template v-slot:item_icon_active>
            <img src="../../../assets/img/TabBar/shouye_active.svg">
        </template>
        <template v-slot:item_text>
            <div>首页</div>
        </template>
    </TabBarItem>
    <TabBarItem path="/classfi">
        <template v-slot:item_icon>
            <img src="../../../assets/img/TabBar/fenlei.svg">
        </template>
        <template v-slot:item_icon_active>
            <img src="../../../assets/img/TabBar/fenlei_active.svg">
        </template>
        <template v-slot:item_text>
            <div>分类</div>
        </template>
    </TabBarItem>
    <TabBarItem path="/shopping">
        <template v-slot:item_icon>
            <img src="../../../assets/img/TabBar/shopping.svg">
        </template>
        <template v-slot:item_icon_active>
            <img src="../../../assets/img/TabBar/shopping_active.svg">
        </template>
        <template v-slot:item_text>
            <div>购物车</div>
        </template>
    </TabBarItem>
    <TabBarItem path="/my">
        <template v-slot:item_icon>
            <img src="../../../assets/img/TabBar/my.svg">
        </template>
        <template v-slot:item_icon_active>
            <img src="../../../assets/img/TabBar/my_active.svg">
        </template>
        <template v-slot:item_text>
            <div>我的</div>
        </template>
    </TabBarItem>
</TabBar>
</template>
<script>
    import TabBar from '../../common/tabbar/TabBar'
    import TabBarItem from '../../common/tabbar/TabBarItem'
    export default {
        name: "Tab",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>