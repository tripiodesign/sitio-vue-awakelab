<template>
  <div class="juegos ">
    <br>
    <div id="contImg1" class="overflow-hidden">
      <img src="../assets/img/calendario4.jpg" alt="Calendario" id='imgCalendar' class="d-flex">
    </div>
    <Header id="headTitle" titulo='Juegos de la temporada' class="bg-warning p-2" />
    <ContainJuegos />
    <br>
  </div>
</template>

<script>
import Header from '@/components/Header'
import ContainJuegos from '@/components/ContainJuegos'

export default {
    name: 'Juegos',
    components: {
      Header,
      ContainJuegos,
    }
}
</script>

<style scoped lang='sass'>
#contImg1
  width: 100%
  max-height: 650px
#imgCalendar
  width: 100%
  margin-top: -10%
</style>