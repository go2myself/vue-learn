<template>
  <div id="app">
      <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './assets/scss/common.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif, '微软雅黑';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  width: 100%;
  height: 100%;
}
</style>
