<template>
    <div id="TabControl">
        <div v-for="item,index in title" class="TabControl_item"
        :class="{active:index===currentIndex}" @click="changecurrentIndex(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props:{
            title:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return{
                currentIndex:0
            }
        },
        methods:{
            changecurrentIndex(index){
                this.currentIndex=index
            }
        }
    }
</script>

<style scoped>
#TabControl{
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: white;
}
 .TabControl_item{
        flex: 1;

    }
.TabControl_item span{
    padding: 5px;
}
.active {
    color: var(--color-high-text);
}

.active span {
    border-bottom: 3px solid var(--color-tint);
}
</style>