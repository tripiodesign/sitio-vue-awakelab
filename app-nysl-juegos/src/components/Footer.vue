<template>
    <div id="footer" class="container-fluid bg-dark border-top p-0" >
            <div class="w-100 p-0 m-0" id="contBtn1">
                <button id="btnFooter" data-bs-toggle="collapse" data-bs-target="#contFooter" aria-expanded="false" type="button" class="btn btn-sm rounded-0 bg-white w-100">
                    <router-link to="/" class="text-success">NYSL</router-link> | Todos los derechos son reservados &#0174;
                </button>
            </div>
            <div class="collapse" id="contFooter">
                <div class="bg-success border-top">
                    <div class="container-fluid bg-warning">
                        <div class="py-1 d-flex align-items-center mx-auto" id="divRRSS">
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
                        <div class="col-md-5 mx-auto mb-4">
                            <h6 class="text-uppercase font-weight-bold text-light">NYSL Ltda.</h6>
                            <ul class="list-unstyled">
                                <li class="divider bg-success rounded pt-1"></li>
                            </ul>

                            <p class="d-none d-md-block mt-2 p-2 bg-secondary text-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat obcaecati vel earum aspernatur sit impedit? Quod modi, rerum, fugit accusantium quo nihil velit deserunt ex beatae odio, facere vero at!</p>
                            <p class="mt-2 p-2 text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat obcaecati vel earum aspernatur sit impedit? Quod modi, rerum, fugit accusantium quo nihil velit deserunt ex beatae odio, facere vero at!</p>
                        </div>
                        
                        <div class="col-md-2 mx-auto mb-4">
                            <h6 class="text-uppercase font-weight-bold text-light">Eventos</h6>
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
                            <h6 class="text-uppercase font-weight-bold text-light">Mas Visitados</h6>
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
                            <h6 class="text-uppercase font-weight-bold text-light">Contacto</h6>
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
#contBtn1
    margin-top: -4px
#footer
    font-size: .8em
    text-align: center

#divRRSS
    font-size: 1.8em
    max-width: 300px
</style>