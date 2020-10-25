<template>
<div id="my">
    <nav-bar class="nav-bar"><div slot="center">超级商场</div></nav-bar>

    <user-info class="user-info"></user-info>
    <!--2.没有单独封装: 不同的地方太多, 需要传过多的参数-->
    <section class="account">
        <div class="account-item">
            <div class="account-item-top">
                <span style="font-size: 22px;color: red">0</span>
                <span style="font-size: 16px;color: red">.00</span>
                <span style="font-size: 14px; color: black">元</span>
            </div>
            <div class="account-item-bottom">
                <span style="font-size: 14px">我的余额</span>
            </div>
        </div>

        <div class="account-item">
            <div class="account-item-top">
                <span style="font-size: 22px;color: red">0</span>
                <span style="font-size: 14px; color: black">个</span>
            </div>
            <div class="account-item-bottom">
                <span style="font-size: 14px">我的优惠</span>
            </div>
        </div>

        <div class="account-item">
            <div class="account-item-top">
                <span style="font-size: 22px;color: red">0</span>
                <span style="font-size: 14px; color: black">分</span>
            </div>
            <div class="account-item-bottom">
                <span style="font-size: 14px">我的积分</span>
            </div>
        </div>
    </section>
    <!--3.封装成一个整体-->
    <list-view/>

</div>
</template>
<script>


    import NavBar from "../../components/common/navbar/NavBar";
    import UserInfo from "./childComps/UserInfo";
    import ListView from "./childComps/ListView";

    export default {
        name: "my",
        components:{
            NavBar,
            UserInfo,
            ListView
        },
    }
</script>

<style scoped>

.nav-bar{
    background: var(--color-tint);
    color: #ffffff;
}
    .user-info{
       position: relative;
        top: 49px;
    }
    .account{
        width: 100%;
        height: 130px;
        display: flex;
        background: white;
       position: relative;
        top: 35px;
        border-top: 5px solid whitesmoke;
        border-bottom: 5px solid whitesmoke;
    }
    .account-item{
        flex: 1;
        margin-right: 5px;
        text-align: center;

    }
    .account-item-top{
        width: 80px;
        height: 40px;
        position: relative;
        top: 40px;
        left: 20px;
        line-height: 40px;
    }
    .account-item-bottom{
        width: 80px;
        height: 30px;
        position: relative;
        top: 45px;
        left: 20px;
        line-height: 30px;
    }
</style>