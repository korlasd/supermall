<template>
    <div class="bottom-menu">
        <check-button class="select-all" :is-checked="isSelectAll" @checkButtonBar="checkButtonBar"></check-button>
        <span>全选</span>
        <span class="total-price">合计: ¥{{totalPrice}}</span>
        <span class="buy-product" @click="computeButton">去计算({{$store.getters.cartLength}})</span>
        <van-dialog v-model="show" message="是否确认购买以下商品" show-cancel-button>
        </van-dialog>
    </div>
</template>

<script>

    import CheckButton from "../../../components/content/checkButton/CheckButton";

    export default {
        name: "shoppingBottom",
        components:{
            CheckButton
        },
        data(){
            return{
                checked:false,
                show:false
            }
        },
        computed:{
            totalPrice(){
                return this.$store.state.cartList.filter(item =>{
                    return item.checked
                }).reduce((preValue,item) =>{
                    return preValue+item.price*item.count.toFixed(2)
                },0)
            },
            isSelectAll(){
                if(this.$store.state.cartList.length===0) return false

                return this.$store.getters.cartList.find(item => item.checked === false) === undefined;
            }
        },
        methods:{
            checkButtonBar(){
                // console.log('sss');
                if(this.isSelectAll){
                    return this.$store.state.cartList.forEach(item => item.checked=false)
                }
                else {
                    return this.$store.state.cartList.forEach(item => item.checked=true)
                }
            },
            computeButton(){
                this.show=!this.show
            }
        }
    }
</script>

<style scoped>
    .bottom-menu {
        width: 100%;
        height: 44px;
        background-color: #eee;
        position: fixed;
        bottom: 50px;
        left: 0;
        box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
        font-size: 14px;
        color: #888;
        line-height: 44px;
        padding-left: 35px;
        box-sizing: border-box;
    }

    .bottom-menu .select-all {
        position: absolute;
        line-height: 0;
        left: 12px;
        top: 13px;
    }

    .bottom-menu .total-price {
        margin-left: 15px;
        font-size: 16px;
        color: #666;
    }

    .bottom-menu .buy-product {
        background-color: orangered;
        color: #fff;
        width: 100px;
        height: 44px;
        text-align: center;
        line-height: 44px;
        float: right;
    }
</style>