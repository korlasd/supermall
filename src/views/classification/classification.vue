<template>
    <div class="wrapper" ref="aaaa">
        <div class="content">
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"></van-card>
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"></van-card>
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"></van-card>
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"></van-card>
            <van-card num="2" price="5.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"></van-card>
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"></van-card>
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"></van-card>
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"></van-card>
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"></van-card>
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"></van-card>
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"></van-card>
            <van-card num="2" price="5.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"></van-card>
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"></van-card>
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"></van-card>
        </div>
        <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="checked">全选</van-checkbox>
            <template #tip>
                你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
            </template>
        </van-submit-bar>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "classification",
        data() {
            return {
                scroll: null
            }
        },
        // 组件创建完后调用
        mounted() {
            this.scroll = new BScroll(this.$refs.aaaa, {
                // probeType: 3,
                // pullUpLoad: true
            })

            this.scroll.on('scroll', (position) => {
                console.log(position);
            })

            this.scroll.on('pullingUp', () => {
                console.log('上啦加载更多');
            })
        },
    }
</script>

<style scoped>
    .wrapper {
        height: 100vh;
        /*background-color: red;*/
        overflow: hidden;
        position: relative;
    }
    .content{
        position: absolute;
        bottom: 200px;
        /*top: 20px;*/
        width: 100%;
    }
</style>