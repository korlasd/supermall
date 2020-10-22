<template>
    <div class="check-button" :class="{checked:isChecked}" @click="checkButton">
        <img src="../../../assets/img/Shopping/tick.svg">
    </div>
</template>

<script>
    export default {
        name: "CheckButton",
        props:{
            isChecked:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            checkButton(){
                this.$emit('checkButtonBar')
            }
        }
    }
</script>

<style scoped>
.check-button{
    background: lightgray;
    border-radius: 50%;
    border: 2px solid #aaa;
}
    .checked{
        background: red;
        border-color: red;
    }
</style>