<template>
  <header class="header d-flex justify-content-center align-items-center">
      <h1 class="text-light text-center">{{titulo}}</h1>
  </header>
</template>

<script>
export default {
    data(){
        return {
            titulo: `Mercado Inventario App`
        }
    }
}
</script>

<style>
    .header {
        background: rgb(36, 168, 168);
        border: 3px solid rgb(36, 168, 168);
        min-height: 100px;
    }
</style>