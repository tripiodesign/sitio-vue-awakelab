<template>
  <div id="containJuegos" class="">
      <br>
    <div id="contLista" class="d-md-flex justify-content-md-center mx-auto">
        <img src="../assets/img/estadio1.jpg" id="imgAside" class="d-none d-md-block w-md-50" alt="">
        <ul class="list-group mx-auto w-md-50" id="groupJuegos">
            <li class="list-group-item flex-column">
                <div class="d-flex w-100 justify-content-between p-2">
                    <h6>Primera Fecha</h6>
                    <small class="text-info">--/--/---- | --:-- hrs</small>
                </div>
                <p class="text-success d-flex justify-content-center m-3"><strong>Team A1 V/S Team B1.</strong></p>  
                <p><small class="mb-1"><strong>Lugar del encuentro:</strong> Calle Equis #1234, Ygriega, Zeta.</small></p>
                
            </li>
            <li class="list-group-item flex-column">
                <div class="d-flex w-100 justify-content-between p-2">
                    <h6>Segunda Fecha</h6>
                    <small class="text-info">--/--/---- | --:-- hrs</small>
                </div>
                <p class="text-success d-flex justify-content-center m-3"><strong>Team A2 V/S Team B2.</strong></p>    
                <p><small class="mb-1"><strong>Lugar del encuentro:</strong> Calle Equis #1234, Ygriega, Zeta.</small></p>
                <button v-on:click='showDetails()' class="btn btn-sm btn-outline-success text-secondary mx-auto d-block p-0">ver detalles</button>
            </li>
            <li class="list-group-item flex-column">
                <div class="d-flex w-100 justify-content-between p-2">
                    <h6>Tercera Fecha</h6>
                    <small class="text-info">--/--/---- | --:-- hrs</small>
                </div>
                <p class="text-success d-flex justify-content-center m-3"><strong>Team A3 V/S Team B3.</strong></p>    
                <p><small class="mb-1"><strong>Lugar del encuentro:</strong> Calle Equis #1234, Ygriega, Zeta.</small></p>
                <button v-on:click='showDetails()' class="btn btn-sm btn-outline-success text-secondary mx-auto d-block p-0">ver detalles</button>
            </li>
            <li class="list-group-item flex-column">
                <div class="d-flex w-100 justify-content-between p-2">
                    <h6>Cuarta Fecha</h6>
                    <small class="text-info">--/--/---- | --:-- hrs</small>
                </div>
                <p class="text-success d-flex justify-content-center m-3"><strong>Team A4 V/S Team B4.</strong></p>    
                <p><small class="mb-1"><strong>Lugar del encuentro:</strong> Calle Equis #1234, Ygriega, Zeta.</small></p>
                <button v-on:click='showDetails()' class="btn btn-sm btn-outline-success text-secondary mx-auto d-block p-0">ver detalles</button>
            </li>
            <li class="list-group-item flex-column">
                <div class="d-flex w-100 justify-content-between p-2">
                    <h6>Quinta Fecha</h6>
                    <small class="text-info">--/--/---- | --:-- hrs</small>
                </div>
                <p class="text-success d-flex justify-content-center m-3"><strong>Team A5 V/S Team B5.</strong></p>    
                <p><small class="mb-1"><strong>Lugar del encuentro:</strong> Calle Equis #1234, Ygriega, Zeta.</small></p>
                <button v-on:click='showDetails()' class="btn btn-sm btn-outline-success text-secondary mx-auto d-block p-0">ver detalles</button>
            </li>
        </ul>
    </div>
    <br>
    
    <div class="d-flex justify-content-between align-items-center">
        <router-link to="/" class="btn btn-sm btn-outline-success border-0 "><i class="fas fa-chevron-left mr-2"></i>Inicio</router-link>
        <router-link to="/juegos" class="btn btn-sm btn-outline-success border-0 ">Juegos<i class="fas fa-chevron-right ml-2"></i></router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ContainJuegos',
    methods: {
      showDetails(){
        this.$router.push('/detalles')      }
    },
}
</script>

<style scoped lang='sass'>
#contLista
    max-width: 90%
#imgAside
    max-width: 500px
    max-height: 610px
#groupJuegos
    max-width: 500px
#verDetail
  max-width: 500px

button
    min-width: 200px
    max-width: 100%
</style>