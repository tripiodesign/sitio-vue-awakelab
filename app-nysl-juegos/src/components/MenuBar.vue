<template>
<div id="menuBar">
    <nav id="menu" class="m-0 p-0 navbar navbar-expand-md bg-dark navbar-dark d-flex align-items-end w-100">

        <div class="d-flex justify-content-start align-items-center" id="contBrand">
          <img src="../assets/img/icono.png" id="logo" alt="" />
        </div>

        <button type="button"  class="btn navbar-toggler mr-3 mb-2" data-toggle="collapse" data-target="#elMenu" aria-expanded="false">
            <span class="navbar-toggler-icon" ></span>
        </button>

        <div id="elMenu" class="collapse navbar-collapse position-relative mt-2 w-100 d-md-flex justify-content-end">
          <ul id="menuTab" role="tablist" class="nav nav-tabs text-center d-flex justify-content-center border-0">
            <li class="nav-item" role="navigation">
              <router-link class="nav-link btn-outline-warning" aria-current="page" to="/" exact exact-active-class="active">Inicio</router-link>
            </li>
            <li class="nav-item" role="navigation">
              <router-link class="nav-link disabled" aria-current="page" to="/nosotros" exact exact-active-class="active">Nosotros</router-link>
            </li>
            <li class="nav-item" role="navigation">
              <router-link class="nav-link btn-outline-warning" aria-current="page" to="/juegos" exact exact-active-class="active">Juegos</router-link>
            </li>
            <li class="nav-item" role="navigation">
              <router-link class="nav-link disabled" aria-current="page" to="/contacto" exact exact-active-class="active">Contacto</router-link>
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