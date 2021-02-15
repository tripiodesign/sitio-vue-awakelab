<template>
  <div id="listaPartidos" class="container">
    <div v-for="partido in listadoPartidos" :key="partido.Id" class="d-block mb-3">
        <div class="card border my-2" style="background-color:rgba(200,200,200,.3)">
            <div class="card-head d-flex justify-content-center items-align-center p-2">
                <h5 class="w-100">
                    <span class="badge bg-dark text-light py-3 w-100">
                        {{partido.Equipo1}}{{partido.Id +1}} vs {{partido.Equipo2}}{{partido.Id +1}}
                    </span>
                </h5>
            </div>
            <div class="card-body">
                <div class="d-sm-flex justify-content-around">
                    <div class="d-flex justify-content-around align-items-center ">

                        <button class="btn btn-primary mx-1 disabled" type="button" disabled>
                            Visita: {{partido.Equipo1}}
                        </button>

                    

                        <button class="btn btn-danger mx-1 disabled" type="button" disabled>
                            Local: {{partido.Equipo2}}
                        </button>

                    </div>
                        <br>
                    <div class="d-flex d-sm-block justify-content-around my-sm-auto">
                        <small class="d-block text-secondary"><strong class="text-dark">Fecha:</strong> {{partido.Fecha}}</small>
                        <small class="d-block text-secondary"><strong class="text-dark">Hora:</strong> {{partido.Hora}}</small>
                    </div>
                </div>
                <router-link id="partido.id" :to="{name: 'Detalles', 
                                   params: {
                                        id: partido.Id +1,
                                        equipo1: partido.Equipo1,
                                        equipo2: partido.Equipo2,
                                        fecha: partido.Fecha,
                                        hora: partido.Hora,
                                        lugar: partido.Lugar,
                                        referencia: partido.Referencia,
                                        mapa: partido.Mapa,
                                        descripcion: partido.Descripcion,

                                    }
                }" class="badge bg-warning border border-dark text-dark rounded mx-auto py-1 mt-4 w-50 d-block" style="font-size: 1.02em" exact>ver detalles</router-link>
            </div>
        </div>
    </div>
    
    <div class="d-flex justify-content-between align-items-center">
        <router-link to="/" class="btn btn-sm btn-outline-dark border-0 "><i class="fas fa-chevron-left mr-2"></i>Inicio</router-link>
        <!-- <router-link to="/detalles" class="btn btn-sm btn-outline-dark border-0 ">Detalles<i class="fas fa-chevron-right ml-2"></i></router-link> -->
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
                    Id:0,
                    Equipo1: 'Team A',
                    Equipo2: 'Team B',
                    Hora: '-- : -- hrs',
                    Fecha: '--/--/----',
                    Lugar: 'Calle Uno #1234, Comuna, País',
                    Mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.411965806835!2d-70.61286488504884!3d-33.464623605625306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfed639ab813%3A0xb92488060556a1df!2sEstadio%20Nacional%20Julio%20Mart%C3%ADnez%20Pr%C3%A1danos!5e0!3m2!1ses-419!2scl!4v1613087779983!5m2!1ses-419!2scl',
                    Referencia: 'Lorem ipsum dolor sit amet consectetur adipisicing',
                    Descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus ea beatae corrupti esse officia nemo quas omnis. Doloremque ducimus vero at tenetur, iste aut accusantium aperiam perferendis itaque sapiente!',
                },
                {
                    Id:1,
                    Equipo1: 'Team A',
                    Equipo2: 'Team B',
                    Hora: '-- : -- hrs',
                    Fecha: '--/--/----',
                    Lugar: 'Calle Uno #1234, Comuna, País',
                    Mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.411965806835!2d-70.61286488504884!3d-33.464623605625306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfed639ab813%3A0xb92488060556a1df!2sEstadio%20Nacional%20Julio%20Mart%C3%ADnez%20Pr%C3%A1danos!5e0!3m2!1ses-419!2scl!4v1613087779983!5m2!1ses-419!2scl',
                    Referencia: 'Lorem ipsum dolor sit amet consectetur adipisicing',
                    Descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus ea beatae corrupti esse officia nemo quas omnis. Doloremque ducimus vero at tenetur, iste aut accusantium aperiam perferendis itaque sapiente!',
                },
                {
                    Id:2,
                    Equipo1: 'Team A',
                    Equipo2: 'Team B',
                    Hora: '-- : -- hrs',
                    Fecha: '--/--/----',
                    Lugar: 'Calle Uno #1234, Comuna, País',
                    Mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.411965806835!2d-70.61286488504884!3d-33.464623605625306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfed639ab813%3A0xb92488060556a1df!2sEstadio%20Nacional%20Julio%20Mart%C3%ADnez%20Pr%C3%A1danos!5e0!3m2!1ses-419!2scl!4v1613087779983!5m2!1ses-419!2scl',
                    Referencia: 'Lorem ipsum dolor sit amet consectetur adipisicing',
                    Descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus ea beatae corrupti esse officia nemo quas omnis. Doloremque ducimus vero at tenetur, iste aut accusantium aperiam perferendis itaque sapiente!',
                },
                {
                    Id:3,
                    Equipo1: 'Team A',
                    Equipo2: 'Team B',
                    Hora: '-- : -- hrs',
                    Fecha: '--/--/----',
                    Lugar: 'Calle Uno #1234, Comuna, País',
                    Mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.411965806835!2d-70.61286488504884!3d-33.464623605625306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfed639ab813%3A0xb92488060556a1df!2sEstadio%20Nacional%20Julio%20Mart%C3%ADnez%20Pr%C3%A1danos!5e0!3m2!1ses-419!2scl!4v1613087779983!5m2!1ses-419!2scl',
                    Referencia: 'Lorem ipsum dolor sit amet consectetur adipisicing',
                    Descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus ea beatae corrupti esse officia nemo quas omnis. Doloremque ducimus vero at tenetur, iste aut accusantium aperiam perferendis itaque sapiente!',
                },
                {
                    Id:4,
                    Equipo1: 'Team A',
                    Equipo2: 'Team B',
                    Hora: '-- : -- hrs',
                    Fecha: '--/--/----',
                    Lugar: 'Calle Uno #1234, Comuna, País',
                    Mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.411965806835!2d-70.61286488504884!3d-33.464623605625306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfed639ab813%3A0xb92488060556a1df!2sEstadio%20Nacional%20Julio%20Mart%C3%ADnez%20Pr%C3%A1danos!5e0!3m2!1ses-419!2scl!4v1613087779983!5m2!1ses-419!2scl',
                    Referencia: 'Lorem ipsum dolor sit amet consectetur adipisicing',
                    Descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus ea beatae corrupti esse officia nemo quas omnis. Doloremque ducimus vero at tenetur, iste aut accusantium aperiam perferendis itaque sapiente!',
                },
            ]
        }
    },
}
</script>

<style>

</style>