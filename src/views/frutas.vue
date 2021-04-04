<template>
  <div class="frutas d-flex flex-wrap">
    <div class="agregar col-12 d-flex">
          <input class="col-4" placeholder="Inserte una fruta" type="text" v-model="frutaInput">
          <div class="col-5 m-auto">
            <label class="col-2 m-4 text-light" for="cantidad">Cantidad: </label>
            <input class="col-8" name="cantidad" placeholder="Inserte la cantidad" 
            type="number" v-model.number="cantidadInput">
          </div>
          <button class="col" @click="addFruit()">Agregar</button>
    </div>
    <div v-for="(fruta, index) of frutas" :key="fruta.nombre" class="d-flex modulo bg-light p-3">
      <div class="col-8">
        <label hidden>{{index}}</label>
        <h4 class="text-info">{{fruta.nombre}}</h4>
        <h5 class="text-secondary">cantidad: {{fruta.cantidad}}</h5>
        <p v-if="fruta.cantidad <= 20" class="text-secondary">sin descuento</p>
        <p v-if="fruta.cantidad > 20 && fruta.cantidad <= 50" class="text-success">Descuento: 20%</p>
        <p v-if="fruta.cantidad > 50" class="text-success">Descuento: 50%</p>
      </div>
      <div class="col-4 botones d-flex justify-content-center flex-wrap">
        <button @click="fruta.cantidad++" class="mas col-8">+</button>
        <button @click="fruta.cantidad--" class="menos col-8">-</button>
      </div>
      <button @click="delFruit(index)" class="col-1 rojo">x</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      frutas: [
        {nombre: "Fresa", cantidad: 7}, {nombre: "Pera", cantidad: 7}, {nombre: "Limon", cantidad: 7},
        {nombre: "Manzana", cantidad: 12}, {nombre: "Uva", cantidad: 9}, {nombre: "Mango", cantidad: 7},
        {nombre: "Banana", cantidad: 42}, {nombre: "Naranja", cantidad: 31}
      ]
      , frutaInput: "", 
        cantidadInput: 0
    }
  },
  methods:{
    addFruit(){
      this.frutas.push({nombre: this.frutaInput, cantidad: this.cantidadInput});
    },
    delFruit(index){
      let eliminar = prompt(`seguro que desea eliminar este elemento? si esta seguro escriba E`);
      eliminar === "E" || eliminar === "e" ? this.frutas.splice(index, 1) : alert("El elemento no fue eliminado");
    }
  },
  computed:{

  }
}
</script>

<style scoped>
  .frutas {
    padding: 0;
  }
  .modulo {
    width: 20%;
    height: 140px;
    border-right: 3px solid rgb(36, 168, 168);
    border-bottom: 3px solid rgb(36, 168, 168);
  }
  .agregar{
        border-top: 3px solid rgb(36, 168, 168);
        border-left: 0px solid rgb(36, 168, 168);
        border-bottom: 3px solid rgb(36, 168, 168);
        border-right: 3px solid rgb(36, 168, 168);
        min-height: 62px;
  }
  input {
    height: 67%;
    margin: auto;
    background: rgba(26, 128, 128, 0.178);   
    border: 3px solid rgb(38, 141, 145);
    color: rgb(36, 168, 168);
    font-weight: bold;
    padding: 8px;
  }
  input:focus{
    border: 5px solid rgb(36, 168, 168);
  }
  label{
    margin: auto;
    font-weight: bold;
  }
  button {
    height: 67%;
    padding: 4px;
    margin: auto;
    background: rgba(14, 145, 197, 0.671);    
    color: rgb(182, 243, 243);
    border-radius: 4px;
    border: 3px solid transparent;
    font-weight: bold;
    transition: .6s;
  }
  button:hover {
    border: 3px solid  rgb(36, 168, 168);
    background: rgba(240, 251, 255, 0.781);    
    color: rgb(36, 168, 168);
  }
  .mas{
    height: 30px;
    padding: 0;
  }
  .menos{
    height: 30px;
    padding: 0;
  }
  .rojo {
    transform: translate(-3px, -55px);
    border-radius: 1px;
    text-align: center;
    padding: 0;
    height: 27px;
    background: rgb(241, 88, 88);
  }
</style>