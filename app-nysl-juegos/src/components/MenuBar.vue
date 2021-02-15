<template>
<div id="menuBar">
    <nav id="menu" class="navbar navbar-expand-md bg-dark d-flex align-items-end p-0 w-100">

      <div class="" id="contBrand">
        <img src="../assets/img/icono.png" id="logo" alt="" />
      </div>

      <button type="button"  class="btn btn-outline-warning navbar-toggler mr-3 mb-3" data-mdb-toggle="collapse" data-mdb-target="#elMenu" aria-expanded="false">
          <i class="fas fa-bars" style="transform: scale(3)"></i>
      </button>

      <div id="elMenu" class="collapse navbar-collapse position-relative mt-2 w-100 d-md-flex justify-content-end">
        <ul id="menuTab" role="tablist" class="nav nav-tabs text-center d-flex justify-content-center border-0">
          <li class="nav-item" role="navigation">
            <router-link class="nav-link border-warning text-warning" aria-current="page" :to="{name: 'Home'}" exact-active-class="active">Inicio</router-link>
          </li>
          <!-- <li class="nav-item" role="navigation">
            <router-link class="nav-link disabled" aria-current="page" to="/nosotros" exact-active-class="active">Nosotros</router-link>
          </li> -->
          <li class="nav-item" role="navigation">
            <router-link class="nav-link border-warning text-warning" aria-current="page" to="/juegos" exact-active-class="active">Juegos</router-link>
          </li>
          <li class="nav-item" role="navigation">
            <router-link class="nav-link disabled" aria-current="page" to="/contacto" exact-active-class="active">Contacto</router-link>
          </li>
        </ul> 
      </div>

    </nav>
</div>
</template>

<script>
export default {
  name: 'MenuBar',
  props: {
  },
} 
</script>

<style scoped lang="sass">
// #elMenu
//   position-relative
#contBrand
  margin-left: -4px
  // margin-top: -8px
  // padding-bottom: -5px


#logo
  transform: scale()
</style>