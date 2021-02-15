<template>
  <div id="loadScreen">
      <div id="contenedor-carga" class="w-100 h-100">
        <div id="carga" class="rounded-circle">
        </div>

        <!-- <img src="../assets/img/soccer1.jpg" alt="">
        <img src="../assets/img/soccer1.jpg" alt="">
        <img src="../assets/img/soccer1.jpg" alt="">
        <img src="../assets/img/soccer1.jpg" alt=""> -->
      </div>
  </div>
</template>

<script>
export default {
  name: 'LoadScreen',
  methods: {
    
  },
}


</script>

<style scoped lang="sass">
*,*:after,*:before
  margin: 0
  padding: 0
  box-sizing: border-box

#contenedor-carga
  background-color: rgba(200,200,200,1)
  max-height: 100vh
  z-index: 900
  transition: all 1s ease-in-out
  position: fixed

#carga
  border: 10px solid #000
  border-top-color: yellow
  border-top-style: groove
  height: 100px
  width: 100px

  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  margin: auto

  animation: girar 2s linear infinite

  @keyframes girar
    0%
      transform: rotate(0deg)
    100%
      transform: rotate(360deg)
</style>