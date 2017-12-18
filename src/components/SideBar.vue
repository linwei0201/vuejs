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

  const {hash} = location;

  export default {
    data () {
      return {
        path: hash.slice(1),
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
    padding: 20px 0;
    text-align: left;
    li {
      padding: 10px 20px;
      line-height: 1;
      &.active{
        background: #29d9c2;
      }
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