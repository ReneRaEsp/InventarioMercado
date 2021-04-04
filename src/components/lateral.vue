<template>
  <aside class="aside">
      <div v-for="item of items" :key="item.name">
          <h5 class="col-12 item p-2 text-center"><b>{{item.name}}</b></h5>
      </div> 
  </aside>
</template>

<script>
export default {
    data(){
        return {
            items: [
                {name: "Frutas"},{name: "Carnes"},
                {name: "Verduras"},{name: "Cereales"},
                {name: "Limpieza"},{name: "Hogar"},
                {name: "Jardin"}
            ]
        }
    }
}
</script>

<style>
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
</style>