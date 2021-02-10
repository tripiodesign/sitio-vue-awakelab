<template>
    <div id="footer" class="p-2 fixed-bottom bg-white border-top">
        <button type="button" class="btn btn-sm d-block m-auto" data-toggle="collapse" data-target="#contFooter"><router-link to="/" class="text-success">NYSL</router-link> | Todos los derechos son reservados &#0174;</button>
        <div class="collapse">
            <div class="bg-success border-top">
                <div class="container-fluid bg-warning">
                    <div class="row py-3 d-flex align-items-center mx-auto" id="divRRSS">
                        <div class="col-md-12 text-center d-flex justify-content-around">
                            <a href="#" class="mr-2 text-success"><i class="fab fa-facebook"></i></a>
                            <a href="#" class="mr-2 text-success"><i class="fab fa-twitter"></i></a>
                            <a href="#" class=" text-success"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container text-center text-md-left mt-5">
                <div class="row">
                    <div class="col-md-3 mx-auto mb-4">
                        <h6 class="text-uppercase font-weight-bold text-info">NYSL Ltda.</h6>
                        <ul class="list-unstyled">
                            <li class="divider bg-success rounded pt-1"></li>
                        </ul>

                        <p class="mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat obcaecati vel earum aspernatur sit impedit? Quod modi, rerum, fugit accusantium quo nihil velit deserunt ex beatae odio, facere vero at!</p>
                    </div>
                    
                    <div class="col-md-2 mx-auto mb-4">
                        <h6 class="text-uppercase font-weight-bold text-info">Eventos</h6>
                        <ul class="list-unstyled">
                            <li class="divider bg-success rounded pt-1"></li>
                        </ul>

                        <ul class="list-unstyled" id="opcEventos">
                            <li class="my-2"><router-link to="/Juegos" class="nav-link text-secondary">Eventos Verano</router-link></li>
                            <li class="my-2"><router-link to="" class="nav-link text-secondary">Eventos Invierno</router-link></li>
                            <li class="my-2"><router-link to="/" class="nav-link text-secondary">Eventos Navidad</router-link></li>
                            <li class="my-2"><router-link to="" class="nav-link text-secondary">Eventos Año Nuevo</router-link></li>
                        </ul>
                    </div>
                    
                    <div class="col-md-2 mx-auto mb-4">
                        <h6 class="text-uppercase font-weight-bold text-info">Mas Visitados</h6>
                        <ul class="list-unstyled">
                            <li class="divider bg-success rounded pt-1"></li>
                        </ul>
                        
                        <ul class="list-unstyled" id="opcVisitados">
                            <li class="my-2"><router-link to="/" class="nav-link text-secondary">Inicio</router-link></li>
                            <li class="my-2 disabled"><router-link to="" class="nav-link text-secondary">Nosotros</router-link></li>
                            <li class="my-2 "><router-link to="/Juegos" class="nav-link text-secondary">Juegos</router-link></li>
                            <li class="my-2 disabled"><router-link to="" class="nav-link text-secondary">Eventos</router-link></li>
                        </ul>
                    </div>
                    
                    <div class="col-md-3 mx-auto mb-4">
                        <h6 class="text-uppercase font-weight-bold text-info">Contacto</h6>
                        <ul class="list-unstyled">
                            <li class="divider bg-success rounded pt-1"></li>
                        </ul>
                        
                        <ul class="list-unstyled" id="opcContacto">
                            <li class="my-2"><router-link to="/" class="nav-link text-warning disabled"><i class="fas fa-map-marker-alt mr-2"></i>Calle Equis #1234, Ygriega, Zeta.</router-link></li>
                            <li class="my-2 "><router-link to="" class="nav-link text-warning disabled"><i class="fas fa-mobile-alt mr-2"></i>(+56) 9 8765 4321</router-link></li>
                            <li class="my-2"><router-link to="/Juegos" class="nav-link text-warning disabled"><i class="fas fa-envelope mr-2"></i>info@tgif.net</router-link></li>
                            <li class="my-2 "><router-link to="" class="nav-link text-warning disabled"><i class="fas fa-inbox mr-2"></i>Formulario Contacto</router-link></li>
                        </ul>
                    <!-- </div> -->
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped lang='sass'>
#footer
    font-size: .8em
    text-align: center
</style>