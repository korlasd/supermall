<template>
  <div>
    <keep-alive exclude="Detail">
    <router-view></router-view>
    </keep-alive>
    <Tab></Tab>
  </div>

</template>
<script>
  import Tab from './components/content/Tab/Tab.vue'
  export default {
    name:'App',
    components:{
      Tab
    }
  }
</script>
<style scoped>
@import "assets/css/base.css";
</style>