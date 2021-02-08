<template>
  <div id="containHome" class="">
      <br>
      <h5 id="title1" class="text-right p-2">{{title1}}</h5>
      <p id="pJuegos1" class="mx-auto text-justify px-3">{{infoJuegos}}</p>
      <br>
      <button id="verJuegos" v-on:click='verPartidos()' class="nav-link btn btn-sm btn-outline-success d-block mx-auto py-4 active">Ver próximos partidos...</button>
  </div>
</template>

<script>
export default {
    name: 'ContainHome',
    props: {
        title1: String,
        infoJuegos: String,
    },
    methods: {
        verPartidos(){
            this.$router.push('/Juegos')
        }
    },
}
</script>

<style scoped lang='sass'>
#pJuegos1
    max-width: 800px
    font-size: .8em

button
    min-width: 200px
    max-width: 100%
</style>