<template>
  <div id="containDetail" class="container-fluid">
    <div id="lstDetalles" class="">
      <br>
      <div class="container d-flex justify-content-between align-items-center">

        <small class="badge badge-success p-2">{{$route.params.id}}</small>

        <h5 class="p-2">{{$route.params.equipo1}} vs {{$route.params.equipo2}}</h5>

        <small class="text-info p-2"><small><small>{{$route.params.fecha}} | {{$route.params.hora}}</small></small></small>

      </div>
      <div class="row">
        <div class="col-12 col-sm-6">
          <p class="text-secondary p-2"><small>{{$route.params.descripcion}}</small></p>
          <div class="alert alert-secondary d-flex justify-content-between align-items-center mt-4 w-100">
            <p class="form-check-label d-block my-auto">{{$route.params.lugar}}</p>
            <div class="form-check form-check-inline" id="check-mapa">
              <label for="switchMapa" class="btn btn-outline-success" style="min-width: 45px; min-height: 40px"><i id="contMapa" class="fas fa-map-marked-alt"></i></label>
              <input class="form-check-input btn-check d-none" type="checkbox" data-bs-target="#contMapa" data-bs-toggle="collapse" aria-expanded="false" id="switchMapa">
            </div>
          </div>
        </div>

        <div class="collapse fade col-12 col-sm my-auto">
          <span class="alert alert-warning show">hola</span>
        </div>
        <div id="contMapa" class="collapse fade col-12 col-sm my-auto">
          <p><strong>Referencia: </strong>{{$route.params.referencia}}</p>

          <iframe :src="$route.params.mapa" class="w-100 h-100 m-auto d-block" frameborder="0" style="border:0; max-height:450px;" allowfullscreen="" aria-hidden="" tabindex="0"></iframe>
        </div>
      </div>

    </div>

    <div class="d-flex justify-content-between align-items-center">
        <router-link to="/juegos" class="btn btn-sm btn-outline-success border-0 "><i class="fas fa-chevron-left mr-2"></i>Juegos</router-link>
        <router-link to="/" class="btn btn-sm btn-outline-success border-0 ">Inicio<i class="fas fa-chevron-right ml-2"></i></router-link>
    </div>
  </div>
</template>

<script>
export default {
    // name: 'ContainDetail',
    created() {
      console.log(this.$route.params)
    },
}
</script>

<style scoped lang='sass'>


</style>