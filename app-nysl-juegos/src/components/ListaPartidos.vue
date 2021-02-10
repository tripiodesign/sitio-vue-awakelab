<template>
  <div id="listaPartidos" class="container">
    <div v-for="partido in listadoPartidos" :key="partido.id" class="d-block">
        <div class="card my-2">
            <div class="card-head d-flex justify-content-center items-align-center p-2">
                <h5 class="card-title text-success">{{partido.Equipo1}}{{partido.id +1}} vs {{partido.Equipo2}}{{partido.id +1}}</h5>
            </div>
            <div class="card-body">
                <div class="d-sm-flex justify-content-around">
                    <div class="d-flex d-sm-block justify-content-around">
                        <p class="card-text">Visita: {{partido.Equipo1}}</p>
                        <p class="card-text">Local: {{partido.Equipo2}}</p>
                    </div>
                    <div class="d-flex d-sm-block justify-content-around my-sm-auto">
                        <small class="d-block text-info"><strong class="text-dark">Fecha:</strong> {{partido.Fecha}}</small>
                        <small class="d-block text-info"><strong class="text-dark">Hora:</strong> {{partido.Hora}}</small>
                    </div>
                </div>
                <router-link :to="{name: 'Detalles', 
                                   params: {
                                        lugar: partido.Lugar,
                                        referencia: partido.Referencia,
                                        mapa: partido.Mapa,
                                        descripcion: partido.Descripcion,

                                    }
                }" class="btn btn-sm btn-outline-secondary mx-auto mt-4 d-block">ver detalles</router-link>
            </div>
        </div>
    </div>

    <div class="d-flex justify-content-between align-items-center">
        <router-link to="/" class="btn btn-sm btn-outline-success border-0 "><i class="fas fa-chevron-left mr-2"></i>Inicio</router-link>
        <router-link to="/detalles" class="btn btn-sm btn-outline-success border-0 ">Detalles<i class="fas fa-chevron-right ml-2"></i></router-link>
    </div>

  </div>
</template>

<script>
export default {
    name: 'ListaPartidos',
    data(){
        return {
            listadoPartidos: [
                {
                    id:0,
                    Equipo1: 'Team A',
                    Equipo2: 'Team B',
                    Hora: '-- : -- hrs',
                    Fecha: '--/--/----',
                    Lugar0: String,
                    Mapa: String,
                    Referencia: '-----',
                    Descripcion: String,
                },
                {
                    id:1,
                    Equipos: 'this.Equipo1, this.Equipo2',
                    Equipo1: 'Team A',
                    Equipo2: 'Team B',
                    Hora: '-- : -- hrs',
                    Fecha: '--/--/----',
                    Lugar: String,
                    Mapa: String,
                    Referencia: '-----',
                    Descripcion: String,
                },
                {
                    id:2,
                    Equipos: [this.Equipo1, this.Equipo2],
                    Equipo1: 'Team A',
                    Equipo2: 'Team B',
                    Hora: '-- : -- hrs',
                    Fecha: '--/--/----',
                    Lugar: String,
                    Mapa: String,
                    Referencia: '-----',
                    Descripcion: String,
                },
                {
                    id:3,
                    Equipos: [this.Equipo1, this.Equipo2],
                    Equipo1: 'Team A',
                    Equipo2: 'Team B',
                    Hora: '-- : -- hrs',
                    Fecha: '--/--/----',
                    Lugar: String,
                    Mapa: String,
                    Referencia: '-----',
                    Descripcion: String,
                },
                {
                    id:4,
                    Equipos: [this.Equipo1, this.Equipo2],
                    Equipo1: 'Team A',
                    Equipo2: 'Team B',
                    Hora: '-- : -- hrs',
                    Fecha: '--/--/----',
                    Lugar: String,
                    Mapa: String,
                    Referencia: '-----',
                    Descripcion: String,
                },
            ]
        }
    },
}
</script>

<style>

</style>