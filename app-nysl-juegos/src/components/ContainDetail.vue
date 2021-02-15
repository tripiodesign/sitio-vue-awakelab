<template>
  <div id="containDetail" class="container-fluid">
    <div id="lstDetalles" class="mb-3">
      <br>
      <div class="container d-flex justify-content-between align-items-center" >

        <small class="badge bg-success p-3">{{$route.params.id}}</small>

        <h5 class="d-block my-auto">{{$route.params.equipo1}} vs {{$route.params.equipo2}}</h5>

        <small class="badge bg-info p-2"><small>{{$route.params.fecha}}</small> | <small>{{$route.params.hora}}</small></small>

      </div>
      <br>
      <div class="d-sm-flex row">
        <div class="col fade show">
          <p class="p-2" style="color: rgb(180,180,180)"><small>{{$route.params.descripcion}}</small></p>
          <div class="alert alert-dark d-flex justify-content-between align-items-center mt-4 w-100">
            <p class="form-check-label d-block my-auto">{{$route.params.lugar}}</p>

            <div class="form-check form-check-inline" id="check-mapa">
              <div class="overflow-hidden" style="width: 62px; height: 40px">
                <label id="contMapa" for="switchMapa" tabindex="0" class="collapse btn btn-outline-success" style="min-width: 45px; min-height: 40px; transition: all .01s ease"><i  class=" fas fa-map-marked-alt"></i></label>
                <label id="contMapa" for="switchMapa" tabindex="1" class="show btn btn-outline-danger" style="min-width: 45px; min-height: 40px; transition: all .01s ease"><i class=" fas fa-map-marked-alt"></i></label>
              </div>

              <input class="form-check-input btn-check d-none" type="checkbox" data-mdb-target="#contMapa" data-mdb-toggle="collapse" aria-expanded="false" id="switchMapa">
            </div>

          </div>
        </div>

        <div id="contMapa" class="collapse col-sm-5 fade mx-2 my-auto ">
          <p><strong>Referencia: </strong>{{$route.params.referencia}}</p>

          <iframe :src="$route.params.mapa" class="w-100 h-100 m-auto d-block" frameborder="0" style="border:0; max-height:450px;" allowfullscreen="true" aria-hidden="" tabindex="0"></iframe>
        </div>
      </div>

    </div>

    <div class="d-flex justify-content-between align-items-center py-2">
        <router-link to="/juegos" class="btn btn-sm btn-outline-dark border-0 "><i class="fas fa-chevron-left mr-2"></i>Juegos</router-link>
        <router-link to="/" class="btn btn-sm btn-outline-dark border-0 ">Inicio<i class="fas fa-chevron-right ml-2"></i></router-link>
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