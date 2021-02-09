<template>
  <div class="home">
    <br>
    <div id="contImg1" class="overflow-hidden">
      <img src="../assets/img/soccer2.jpg" alt="Portada" id='portada' class="d-flex">
    </div>
    <Header titulo='Bienvenidos a NYSL' class="p-2 bg-warning" />
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
#contImg1
  width: 100%
  max-height: 650px
#portada
  width: 100%
  margin-top: -10%
</style>