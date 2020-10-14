<template>
    <div class="tab_bar_item" @click="choseclick">
        <div v-if="!isActive"><slot name="item_icon"></slot></div>
        <div v-else><slot name="item_icon_active"></slot></div>
        <div :style="activeStyle"><slot name="item_text"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
            path:String,
            activeColor:{
                type:String,
                default:'red'
            }
        },
        data(){
            return{

            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path)!==-1
            },
            activeStyle(){
                return this.isActive ? {color:this.activeColor} :{}
            }
        },
        methods:{
            choseclick(){
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
    .tab_bar_item{
          flex: 1;
          text-align: center;
          height: 49px;
          font-size: 16px;
          vertical-align: middle;
      }
    .tab_bar_item img{
        width: 24px;
        height: 24px;
    }
    .tab_bar_item img{
        width: 24px;
        height: 24px;
    }
    .active{
        color: red;
    }
</style>