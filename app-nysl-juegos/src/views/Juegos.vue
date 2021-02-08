<template>
  <div class="juegos ">
    <br>
    <img src="../assets/img/calendario2.jpg" alt="Calendario" id='imgCalendar' class="d-flex">
    <Header titulo='Juegos de la temporada' class="bg-warning py-4" />
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
#imgCalendar
  width: 100%
</style>