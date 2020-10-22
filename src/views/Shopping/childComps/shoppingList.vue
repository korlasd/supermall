<template>
    <scroll ref="scroll">
    <div class="shoppingList">
    <shopping-list-item v-for="item in cartList" :item-info="item" :key="item.iid"></shopping-list-item>
    </div>
    </scroll>
</template>

<script>
    import {mapGetters} from 'vuex'
    import shoppingListItem from "./shoppingListItem";
    import Scroll from "../../../components/common/scroll/Scroll";
    export default {
        name: "shoppingList",
        components:{
            Scroll,
            shoppingListItem
        },
        computed:{
            ...mapGetters(['cartList'])
        },
        activated() {
            this.$refs.scroll.refresh()
        }
    }
</script>

<style scoped>

</style>