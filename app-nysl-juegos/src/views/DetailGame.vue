<template>
  <div class="details">
    <br>
    <div id="contImg1" class="overflow-hidden">
      <img src="../assets/img/soccer-field2.jpg" alt="imgDetail" id='imgDetail' class="d-flex">
    </div>
    <Header titulo='Detalles de los juegos' id="head" class="p-2 bg-warning" />
    <ContainDetail />
    <br>
  </div>
</template>

<script>
import Header from '@/components/Header'
import ContainDetail from '@/components/ContainDetail'

export default {
    name: 'DetailGame',
    components:{
        Header,
        ContainDetail,
    }
}
</script>

<style scoped lang='sass'>
#contImg1
  width: 100%
  max-height: 650px
#imgDetail
  width: 100%
  margin-top: -10%
</style>