<template>
  <div id="home">
    <!-- <LoadScreen /> -->
    <div id="contImg" class="bg-dark w-100">
      <img src="../assets/img/soccer2-large.jpg" alt="Portada" id='imgPortada' class="d-flex rounded w-100">
    </div>
    <Header titulo='Bienvenidos a NYSL' class="bg-warning" />
    <ContainHome
      title1='Programación' 
      title2='Detalles' 
      title3='Eventos' 
      infoJuegos='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, nihil quod sequi, consequatur suscipit dolores quaerat quia voluptates fugit corporis repellat odio voluptate quisquam eius'
      class=""
    />
  </div>
</template>

<script>
import Header from '@/components/Header'
import ContainHome from '@/components/ContainHome'
// import LoadScreen from '@/components/LoadScreen'

export default {
  name: 'Home',
  components: {
    // LoadScreen,
    Header,
    ContainHome,
  },
}

// window.onload = function(){
//   var contenedor = document.getElementById('contenedor-carga');
//   contenedor.style.visibility = 'hidden';
//   contenedor.style.opacity = '0';
// }
</script>

<style scoped lang="sass">
#imgPortada
  // width: 800px
  display: block
  margin: 0 auto
  // max-width: 100vw
  
</style>