<template>
  <aside class="">
      <div v-for="item of items" :key="item.name">
          <h5 class="col-12 item p-1 text-center"><router-link class="itemI text-decoration-none text-info" v-bind:to="item.link"><b class="text-light">{{item.name}}</b></router-link></h5>
      </div> 
  </aside>
</template>

<script>
export default {
    data(){
        return {
            items: [
                {name: "Frutas", link: "/Frutas"},{name: "Carnes", link: "/Carnes"},
                {name: "Verduras", link: "/Verduras"},{name: "Cereales", link: "/Cereales"},
                {name: "Limpieza", link: "/Limpieza"},{name: "Hogar", link: "/Hogar"},
                {name: "Jardin", link: "/Jardin"}
            ]
        }
    }
}
</script>

<style scoped>
    .aside {
        border-top: 0px solid rgb(36, 168, 168);
        border-left: 3px solid rgb(36, 168, 168);
        border-bottom: 3px solid rgb(36, 168, 168);
        border-right: 0px solid rgb(36, 168, 168);
        min-height: 650px;
        padding: 0;
    }
    .item {
        border-top: 0px solid rgb(36, 168, 168);
        border-left: 0px solid rgb(36, 168, 168);
        border-bottom: 3px solid rgb(36, 168, 168);
        border-right: 0px solid rgb(36, 168, 168);
        transition: .78s;
        margin-bottom: 0;
        cursor: pointer;
        color: rgb(36, 168, 168);
    }
    .item:hover{
        background: rgba(13, 113, 126, 0.664);
        color: rgb(188, 221, 255);
    }
    .itemI:hover{
        color: rgb(60, 154, 241);
    }
</style>