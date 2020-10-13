<template>
  <div><router-view></router-view>
    <Tab></Tab>
  </div>

</template>
<script>
  import Tab from './components/Tab.vue'
  export default {
    name:'App',
    components:{
      Tab
    }
  }
</script>
