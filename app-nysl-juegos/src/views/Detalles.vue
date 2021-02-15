<template>
  <div id="detalles" class="h">
    <!-- <LoadScreen /> -->
    <div id="contImg1" class="bg-dark w-100">
      <img src="../assets/img/soccer-field2-large.jpg" alt="imgDetail" id='imgDetail' class="d-flex">
    </div>
    <Header titulo='Detalles de los juegos' id="head" class="p-2 bg-warning" />
    <ContainDetail />
  </div>
</template>

<script>
import Header from '@/components/Header'
import ContainDetail from '@/components/ContainDetail'
// import LoadScreen from '@/components/LoadScreen'

export default {
    name: 'Detalles',
    components:{
      // LoadScreen,
      Header,
      ContainDetail,
    }
}

// window.onload = function(){
//   var contenedor = document.getElementById('contenedor-carga');
//   contenedor.style.visibility = 'hidden';
//   contenedor.style.opacity = '0';
// }
</script>

<style scoped lang='sass'>
#contImg1
  width: 100%
  max-height: 650px
#imgDetail
  width: 100%
  margin-top: -10%
</style>