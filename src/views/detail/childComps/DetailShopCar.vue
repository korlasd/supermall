<template>
    <van-goods-action style="z-index: 12">
        <van-goods-action-icon icon="chat-o" text="客服" dot />
        <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
        <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
        <van-goods-action-button type="warning" @click="addShopCar" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
</template>

<script>
    import Vue from 'vue'
    import { Toast } from 'vant';
    Vue.use(Toast);
    Toast.setDefaultOptions({ duration: 1000 });

    export default {
        name: "DetailShopCar",
        methods:{
            addShopCar(){
               this.$emit('addCar')
                this.$toast.success('加入购物车成功');
            }
        }
    }
</script>

<style scoped>

</style>