<template>
  <div id="main" >
    <MenuBar />
    <router-view/>
    <PageFooter class="bg-dark text-light" />
    <br>
    <Footer />
  </div>
</template>

<script>
// import '../src/assets/icomoon/estilos.css'
import MenuBar from '../src/components/MenuBar'
import Footer from '@/components/Footer'
import PageFooter from '@/components/PageFooter'

export default {
  name: 'App',
  components:{
    MenuBar,
    Footer,
    PageFooter,
  }

}
</script>

<style lang='sass'>
*
  margin: 0
  padding: 0

</style>
