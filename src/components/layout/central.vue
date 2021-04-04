<template>
  <main class="principal">
      <frutas/>
  </main>
</template>

<script>
import frutas from "./../frutas"
export default {
    components: {
        frutas
    }
}
</script>

<style>
    .principal {
        border-top: 0px solid rgb(36, 168, 168);
        border-left: 3px solid rgb(36, 168, 168);
        border-bottom: 3px solid rgb(36, 168, 168);
        border-right: 3px solid rgb(36, 168, 168);
        min-height: 650px;
        padding: 0;
    }
</style>