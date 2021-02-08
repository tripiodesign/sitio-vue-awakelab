<template>
  <div class="details">
    <br>
    <img src="../assets/img/soccer-field1.jpg" alt="imgDetail" id='imgDetail' class="d-flex">
    <Header titulo='Detalles de los juegos' id="head" class="py-4 px-2 bg-warning" />
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
#imgDetail
  width: 100%
  max-height: 800px
</style>