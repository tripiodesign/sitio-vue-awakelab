<template>
<div id="menuBar">
        <nav id="menu" class="navbar navbar-expand-lg bg-dark navbar-dark">

            <a class="navbar-brand ju" href="#">
                <img src="../assets/img/logo.png" id="logo" alt="" class="d-inline-block align-top ml-2 mt-1 mb-2 mr-4 my-auto d-inline-block">
            NYSL
            </a>

            <button type="button"  class="btn navbar-toggler" data-toggle="collapse" data-target="#elMenu" aria-expanded="false">
                <span class="navbar-toggler-icon" ></span>
            </button>

            <div id="elMenu" class="collapse navbar-collapse w-100 d-lg-flex justify-content-end">
              <ul class="navbar-nav text-center">
                <li><router-link class="nav-item text-warning nav-link" to="/">Inicio</router-link></li>
                <li><router-link class="nav-item text-warning nav-link" to="/Juegos">Juegos</router-link></li>
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
#menu
  z-index: 1000
  position: fixed
  width: 100%

#logo
  max-width: 20%
  transform: scale(1.9)
</style>