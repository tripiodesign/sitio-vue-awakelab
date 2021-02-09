<template>
  <div id="containHome" class="card">
      <br>
      <div class="container d-sm-flex justify-content-center justify-content-around align-items-center w-100">
        <div id="cardHome" class="card mx-auto mx-sm-2 my-1">
            <img src="../assets/img/calendario2.jpg" id="imgCard1" class="card-img-top" alt="">
            <div class="card-body">
                <h5 id="title1" class="card-title text-right p-2">{{title1}}</h5>
                <p id="pJuegos1" class="card-text mx-auto text-justify px-3">{{infoJuegos}}</p>
                <router-link to="/Juegos" class="btn btn-sm btn-success mx-auto d-block">Ver partidos de temporada...</router-link>
            </div>
        </div>
        <div id="cardHome" class="card mx-auto mx-sm-2 my-1">
            <img src="../assets/img/soccer3.jpg" id="imgCard1" class="card-img-top" alt="">
            <div class="card-body">
                <h5 id="title1" class="card-title text-right p-2">{{title2}}</h5>
                <p id="pJuegos1" class="card-text mx-auto text-justify px-3">{{infoJuegos}}</p>
                <router-link to="/detalles" class="btn btn-sm btn-success mx-auto d-block">Ver detalles de juegos...</router-link>
            </div>
        </div>
        <div id="cardHome" class="card mx-auto mx-sm-2 my-1">
            <img src="../assets/img/soccer-event1.jpg" id="imgCard1" class="card-img-top" alt="">
            <div class="card-body">
                <h5 id="title1" class="card-title text-right p-2">{{title3}}</h5>
                <p id="pJuegos1" class="card-text mx-auto text-justify px-3">{{infoJuegos}}</p>
                <router-link to="" class="btn btn-sm btn-outline-secondary mx-auto d-block disabled">Disponible próximamente...</router-link>
            </div>
        </div>
        
      </div>
  </div>
</template>

<script>
export default {
    name: 'ContainHome',
    props: {
        title1: String,
        title2: String,
        title3: String,
        infoJuegos: String,
    },
    methods: {
        // verPartidos(){
        //     this.$router.push('/Juegos')
        // }
    },
}
</script>

<style scoped lang='sass'>
#cardHome
    min-width: 200px
    max-width: 300px
#imgCard1
    width: 100%
    height: auto
#pJuegos1
    max-width: 800px
    font-size: .8em

button
    min-width: 200px
    max-width: 100%
</style>