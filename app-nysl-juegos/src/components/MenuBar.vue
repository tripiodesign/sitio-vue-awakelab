<template>
<div id="menuBar">
        <nav id="menu" class="container-fluid m-0 p-0 navbar navbar-expand-lg bg-dark navbar-dark d-flex">

            <div class="d-flex justify-content-start align-items-center" id="contBrand">
              <img src="../assets/img/icono.png" id="logo" alt="" class="">
              <!-- <p class="text-light d-block">NYSL</p> -->
            </div>

            <button type="button"  class="btn navbar-toggler mr-3" data-toggle="collapse" data-target="#elMenu" aria-expanded="false">
                <span class="navbar-toggler-icon" ></span>
            </button>

            <div id="elMenu" class="collapse navbar-collapse w-100 d-lg-flex justify-content-end">
              <ul class="navbar-nav text-center">
                <li><router-link class="nav-item text-warning nav-link" to="/"><i class="fas fa-home mr-2"></i>Inicio</router-link></li>
                <li><router-link class="nav-item text-warning nav-link" to="/Juegos"><i class="far fa-calendar-alt mr-2"></i>Juegos</router-link></li>
            </ul> 
            </div>

        </nav>
</div>
</template>

<script>
export default {
    name: 'MenuBar',
} 
</script>

<style scoped lang='sass'>
#contBrand
  margin-left: -4px
  // margin-top: -8px
  // padding-bottom: -5px

#menu
  z-index: 1000
  position: fixed
  width: 100%

#logo
  transform: scale()
</style>