<template>
  <div class="home">
    <br>
    <img src="../assets/img/soccer1.jpg" alt="Portada" id='portada' class="d-flex">
    <Header titulo='Bienvenidos a NYSL' class="py-4 bg-warning border-bottom border-success" />
    <ContainHome
     title1='Informate sobre los juegos...' 
     infoJuegos='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, nihil quod sequi, consequatur suscipit dolores quaerat quia voluptates fugit corporis repellat odio voluptate quisquam eius alias in sapiente, fugiat unde. Eaque tempore explicabo exercitationem omnis quisquam cumque, dolore dolorum, enim est cum nobis ex. Quis, esse. Iste ut libero architecto?'
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
#portada
  width: 100%
  max-height: 800px
</style>