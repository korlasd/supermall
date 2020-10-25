<template>
    <div id="list">
       <div class="list-pre">
           <div class="list-pre-item">
            <div class="list-pre-left">
                <img src="../../../assets/img/my/myMessage.svg">
            </div>
           <div class="list-pre-right">
               <span>我的消息</span>
           </div>
           </div>

           <div class="list-pre-item">
               <div class="list-pre-left">
                   <img src="../../../assets/img/my/scoreMall.svg">
               </div>
               <div class="list-pre-right">
                   <span>积分商城</span>
               </div>
           </div>

           <div class="list-pre-item">
               <div class="list-pre-left">
                   <img src="../../../assets/img/my/vip.svg">
               </div>
               <div class="list-pre-right">
                   <span>会员卡</span>
               </div>
           </div>
       </div>
        <div class="list-next">
            <div class="list-pre-item">
                <div class="list-pre-left">
                    <img src="../../../assets/img/my/shoppingCar.svg">
                </div>
                <div class="list-pre-right">
                    <span @click="shopClick">我的购物车</span>
                </div>
            </div>

            <div class="list-pre-item">
                <div class="list-pre-left">
                    <img src="../../../assets/img/my/download.svg">
                </div>
                <div class="list-pre-right">
                    <span>下载购物APP</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ListView",
        methods:{
            shopClick(){
                this.$router.push('/shopping')
            }
        }
    }
</script>

<style scoped>
    #list{
        width: 100%;
    }
    .list-pre{
        width: 100%;
        height: 150px;
        margin-top: 35px;
        position: relative;

    }
    .list-next{
        width: 100%;
        height: 100px;
        margin-top: 20px;
        border-top: 5px solid whitesmoke;
    }
    .list-pre-item{
        width: 100%;
        height: 45px;
        margin-top: 5px;
        /*padding: 6px;*/
    }
    .list-pre-left{
        width: 32px;
        height: 32px;
        margin-left: 5px;
        float: left;
        position: relative;
        top: 6px;
    }
    .list-pre-left img{
        width: 32px;
        height: 32px;
    }
    .list-pre-right{
        width: 330px;
        height: 45px;
        float: left;
        margin-left: 5px;
        line-height: 45px;
        border-bottom: 2px solid whitesmoke;
    }
    .list-pre-right span{
        color: black;
    }
</style>
