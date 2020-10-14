<template>
    <div id="TabBar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
    body{
        padding: 0px;
        margin: 0px;
    }
    #TabBar{
        display: flex;
        background: #f6f6f6;
        position: fixed;
        left: 0px;
        right: 0px;
        bottom: 0;
        box-shadow: 0 -2px 1px rgba(100,100,100,.3);
    }

</style>