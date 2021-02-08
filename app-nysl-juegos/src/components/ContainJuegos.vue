<template>
  <div id="containJuegos" class="">
      <br>
    <ul class="list-group mx-auto" id="groupJuegos">
        <li class="list-group-item flex-column">
            <div class="d-flex w-100 justify-content-between">
                <h6>Primera Fecha</h6>
                <small class="text-info">--/--/---- | --:-- hrs</small>
            </div>
            <p class="text-success d-flex justify-content-center m-3"><strong>Team A1 V/S Team B1.</strong></p>    
            <small class="mb-1"><strong>Lugar del encuentro:</strong> Calle Equis #1234, Ygriega, Zeta.</small>
        </li>
        <li class="list-group-item flex-column">
            <div class="d-flex w-100 justify-content-between">
                <h6>Segunda Fecha</h6>
                <small class="text-info">--/--/---- | --:-- hrs</small>
            </div>
            <p class="text-success d-flex justify-content-center m-3"><strong>Team A2 V/S Team B2.</strong></p>    
            <small class="mb-1"><strong>Lugar del encuentro:</strong> Calle Equis #1234, Ygriega, Zeta.</small>
        </li>
        <li class="list-group-item flex-column">
            <div class="d-flex w-100 justify-content-between">
                <h6>Tercera Fecha</h6>
                <small class="text-info">--/--/---- | --:-- hrs</small>
            </div>
            <p class="text-success d-flex justify-content-center m-3"><strong>Team A3 V/S Team B3.</strong></p>    
            <small class="mb-1"><strong>Lugar del encuentro:</strong> Calle Equis #1234, Ygriega, Zeta.</small>
        </li>
        <li class="list-group-item flex-column">
            <div class="d-flex w-100 justify-content-between">
                <h6>Cuarta Fecha</h6>
                <small class="text-info">--/--/---- | --:-- hrs</small>
            </div>
            <p class="text-success d-flex justify-content-center m-3"><strong>Team A4 V/S Team B4.</strong></p>    
            <small class="mb-1"><strong>Lugar del encuentro:</strong> Calle Equis #1234, Ygriega, Zeta.</small>
        </li>
        <li class="list-group-item flex-column">
            <div class="d-flex w-100 justify-content-between">
                <h6>Quinta Fecha</h6>
                <small class="text-info">--/--/---- | --:-- hrs</small>
            </div>
            <p class="text-success d-flex justify-content-center m-3"><strong>Team A5 V/S Team B5.</strong></p>    
            <small class="mb-1"><strong>Lugar del encuentro:</strong> Calle Equis #1234, Ygriega, Zeta.</small>
        </li>
    </ul>
    <br>
    <button id="verDetail" v-on:click='showDetails()' class=" btn btn-sm btn-outline-success d-block mx-auto mt-3 py-4 active">Ver detalles de los partidos</button>
    <button id="" class="btn btn-sm btn-outline-success d-block mx-auto mt-3 py-3 active"><router-link to="/" class="nav-link text-light">Volver al inicio</router-link></button>
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
#groupJuegos
    max-width: 500px
#verDetail
  max-width: 500px

button
    min-width: 200px
    max-width: 100%
</style>