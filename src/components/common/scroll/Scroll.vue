<template>
    <div class="wrapper" ref="aaa">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "Scroll",
        data(){
            return{
                scroll:null,

            }

        },
        props:{
            PropType:{
                type:Number,
                default:0
            },
            pullUpLoad:{
                type:Boolean,
                default: false
            }
        },
        mounted() {
            this.scroll=new BScroll(this.$refs.aaa,{
                PropType:this.PropType,
                pullUpLoad:this.pullUpLoad,
                click:true
            })
            this.scroll.on('scroll',(position) =>{
                this.$emit('scroll',position)

            })
            this.scroll.on('pullingUp',() =>{
                this.$emit('pullingUp')
            })
        },
        methods:{
            finishPullUp() {
                this.scroll.finishPullUp()
            },
            refresh(){
                this.scroll.refresh()

            }
        }

    }
</script>

<style scoped>

</style>