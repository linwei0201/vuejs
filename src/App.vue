<template>
  <div id="app">
    <sidebar class="page-nav" ></sidebar>
    <router-view class="page-content" />
  </div>
</template>

<script>
import Sidebar from '@/components/SideBar'

export default {
  name: 'app',
  components: {
    Sidebar
  }
}
</script>

<style lang="less">
html, body, ul {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  .page-nav {
    flex: 0 0 300px;
    background: #01a2a6;
    color: #fff;
    height: 100vh;
    overflow-y: auto;
  }
  .page-content {
    flex: 1 1 auto;
  }
}
</style>
