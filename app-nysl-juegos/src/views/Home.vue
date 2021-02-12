<template>
  <div class="home overflow-auto vh-100 pb-5">

    <div id="contImg" class="bg-dark w-100">
      <img src="../assets/img/soccer2-large.jpg" alt="Portada" id='imgPortada' class="d-flex rounded w-100">
    </div>
    <Header titulo='Bienvenidos a NYSL' class="bg-warning" />
    <ContainHome
      title1='Programación' 
      title2='Detalles' 
      title3='Eventos' 
      infoJuegos='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, nihil quod sequi, consequatur suscipit dolores quaerat quia voluptates fugit corporis repellat odio voluptate quisquam eius'
      class="pb-5"
    />
  </div>
</template>

<script>
import Header from '@/components/Header'
import ContainHome from '@/components/ContainHome'

export default {
  name: 'Home',
  components: {
    Header,
    ContainHome,
  },
}
</script>

<style scoped lang="sass">
#imgPortada
  // width: 800px
  display: block
  margin: 0 auto
  // max-width: 100vw
  
</style>