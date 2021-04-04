<template>
  <div class="bg-dark d-flex justify-content-start flex-wrap flex-row" id="app">
    <Cabecero class="col-12"/>
    <Lateral class="col-2"/>
    <Central class="col-10"/>
  </div>
</template>

<script>
import Lateral from "./components/layout/lateral.vue"
import Cabecero from "./components/layout/cabecero.vue"
import Central from "./components/layout/central.vue"

export default {
  components:{
    Cabecero,
    Lateral,
    Central
  }
}

</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
