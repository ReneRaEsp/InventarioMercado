<template>
  <div class="m-auto bg-light container-fluid" id="app">
      <cabecero class="row"/>
      <section class="row">
        <lateral class="col-1"/><central class="col-11"/>
      </section>
  </div>
</template>

<script>
import cabecero from "./components/cabecero"
import lateral from "./components/lateral"
import central from "./components/central"
export default {
  name: 'App',
  components: {
    cabecero, lateral, central
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: rgb(241, 232, 232);
  margin: 0;
  padding: 0;
}
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 1500px;
  min-height: 650px;
  background: rgb(175, 170, 170);
}*/
</style>
