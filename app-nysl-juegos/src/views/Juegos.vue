<template>
  <div class="juegos overflow-auto vh-100 pb-5">

    <div id="contImg" class="bg-dark w-100">
      <img src="../assets/img/calendario4-large.jpg" alt="Calendario" id='imgCalendar' class="d-flex rounded w-100">
    </div>    
    <Header id="headTitle" titulo='Juegos de la temporada' class="bg-warning p-2" />
    <ListaPartidos />
    <!-- <ContainJuegos /> -->
    <br><br>
  </div>
</template>

<script>
import Header from '@/components/Header'
import ListaPartidos from '@/components/ListaPartidos'
// import ContainJuegos from '@/components/ContainJuegos'

export default {
    name: 'Juegos',
    components: {
      Header,
      ListaPartidos,
      // ContainJuegos,
    }
}
</script>

<style scoped lang='sass'>

#imgCalendar
  // width: 800px
  display: block
  margin: 0 auto
  // max-width: 100vw

</style>