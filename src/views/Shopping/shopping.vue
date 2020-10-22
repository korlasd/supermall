<template>
    <div class="shopping">
        <nav-bar class="nav-bar">
            <div slot="center">
                购物车({{length}})
            </div>
        </nav-bar>
            <shopping-list class="shopping-list"></shopping-list>
            <shopping-bottom class="shopping-bottom"></shopping-bottom>
    </div>
</template>

<script>
    import Scroll from "../../components/common/scroll/Scroll";
    import NavBar from "../../components/common/navbar/NavBar";
    import {mapGetters} from 'vuex'
    import shoppingList from "./childComps/shoppingList";
    import shoppingBottom from "./childComps/shoppingBottom";
    export default {
        name: "shopping",
        components:{
            NavBar,
            Scroll,
            shoppingList,
            shoppingBottom
        },
        computed:{
            ...mapGetters({
                length:'cartLength'
            })
        },

    }
</script>

<style scoped>
    .shopping{
        /*position: relative;*/
        height: 100vh;

    }
    .nav-bar{
        background: var(--color-tint);
        color: #ffffff;
        z-index: 15;
    }
    .shopping-list{
        position: absolute;
        top: 44px;
        bottom: 49px;
        width: 100%;
    }

</style>