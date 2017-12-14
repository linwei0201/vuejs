<template>
  <ul class="sidebar">
    <li
      v-for="route in routes"
      v-if="route.show !== false"
    >
      <router-link :to="route.path">{{route.name}}</router-link>
    </li>
  </ul>
</template>

<script>
  import routes from '@/router'
  export default {
    data () {
      return {
        routes: routes.options.routes
      }
    }
  }
</script>

<style lang="less" scoped>
  ul, li {
    list-style: none;
  }

  .sidebar {
    padding: 20px;
    text-align: left;
    li {
      padding: 10px 0;
      line-height: 1;
      a {
        color: #fff;
        font-weight: bold;
        font-size: 14px;
        text-decoration: none;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>