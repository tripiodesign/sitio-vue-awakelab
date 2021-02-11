<template>
  <div id="containHome">   
    <!-- <div class="accordion accordion-flush" id="accordeon1">

        <div class="accordion-item">
            <h5 id="head1" class="accordion-header">
                <button class="accordion-button collapsed p-2" type="button" data-bs-toggle="collapse" data-bs-target="#accordBody1" aria-expanded="false" aria-controls="accordBody1">
                    {{title1}}</button>
            </h5>

            <div id="accordBody1" class="accordion-collapse collapse" aria-labelledby="head1" data-bs-parent="#accordeon1">
                <img src="../assets/img/calendario2.jpg" id="imgCard1" class="d-none d-md-block" alt="">
                <div class="accordion-body row mx-auto">
                    <p id="pJuegos1" class="col-12 col-sm-8 m-auto text-justify px-3">{{infoJuegos}}</p>
                    <button :to="{name: 'Juegos'}" class="col-12 col-sm btn btn-sm btn-outline-success mx-auto d-block ">Ver juegos</button>
                </div>
            </div>
        </div>

        <div class="accordion-item">
            <h5 id="head2" class="accordion-header">
                <button class="accordion-button collapsed p-2" type="button" data-bs-toggle="collapse" data-bs-target="#accordBody2" aria-expanded="false" aria-controls="accordBody2">
                    {{title2}}</button>
            </h5>

            <div id="accordBody2" class="accordion-collapse collapse" aria-labelledby="head2" data-bs-parent="#accordeon1">
                <img src="../assets/img/soccer3.jpg" id="imgCard2" class="d-none d-md-block" alt="">
                <div class="accordion-body row mx-auto">
                    <p id="pJuegos2" class="col-12 col-sm-8 m-auto text-justify px-3">{{infoJuegos}}</p>
                    <button :to="{name: 'Detalles'}" class="col-12 col-sm btn btn-sm btn-outline-success mx-auto d-block ">Ver detalles</button>
                </div>
            </div>
        </div>

        <div class="accordion-item">
            <h5 id="head3" class="accordion-header">
                <button class="accordion-button collapsed p-2" type="button" data-bs-toggle="collapse" data-bs-target="#accordBody3" aria-expanded="false" aria-controls="accordBody3">
                    {{title3}}</button>
            </h5>

            <div id="accordBody3" class="accordion-collapse collapse" aria-labelledby="head3" data-bs-parent="#accordeon1">
                <img src="../assets/img/soccer3.jpg" id="imgCard3" class="d-none d-md-block" alt="">
                <div class="accordion-body row mx-auto">
                    <p id="pJuegos3" class="col-12 col-sm-8 m-auto text-justify px-3">{{infoJuegos}}</p>
                    <button :to="{}" class="col-12 col-sm btn btn-sm btn-outline-success mx-auto d-block disabled">Ver eventos</button>
                </div>
            </div>
        </div>

    </div> -->
  
    <ul class="nav nav-tabs" id="tab" role="tablist">
        <li class="nav-item" role="presentation">
            <a class="nav-link btn btn-outline-dark rounded-0 active" id="games-tab" data-bs-toggle="tab" data-bs-target="#games" type="button" role="tab" aria-controls="games" aria-selected="true">Juegos</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link btn btn-outline-dark rounded-0" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="details" aria-selected="false">Detalles</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link btn btn-outline-dark rounded-0" id="events-tab" data-bs-toggle="tab" data-bs-target="#events" type="button" role="tab" aria-controls="events" aria-selected="false">Eventos</a>
        </li>
    </ul>

    <div class="tab-content" id="tabContent">
        <div class="tab-pane fade p-4 show active" id="games" role="tabpanel" aria-labelledby="games-tab">
            <div class="row">
                <div class="col-12 col-sm-10">
                    <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit facere reiciendis mollitia cum iure tempore, at ratione ab odio nemo assumenda ad neque id velit esse aliquam autem saepe ipsa.</small></p>
                </div>

                <div class="col-12 col-sm">
                    <router-link id="btn-go" class="btn btn-sm btn-outline-success rounded-circle" :to="{name: 'Juegos'}"><i class="fas fa-chevron-right m-auto"></i></router-link>
                </div>
            </div>
        </div>
        <div class="tab-pane fade p-4" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div class="row">
                <p class="col-12 col-sm-10"><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit facere reiciendis mollitia cum iure tempore, at ratione ab odio nemo assumenda ad neque id velit esse aliquam autem saepe ipsa.</small></p>

                <div class="col-12 col-sm">
                    <router-link id="btn-go" class="btn btn-sm btn-outline-success rounded-circle" :to="{name: 'Detalles'}"><i class="fas fa-chevron-right m-auto"></i></router-link>
                </div>
            </div>
        </div>
        <div class="tab-pane fade p-4" id="events" role="tabpanel" aria-labelledby="events-tab">
            <div class="row">
                <p class="col-12 col-sm-10"><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit facere reiciendis mollitia cum iure tempore, at ratione ab odio nemo assumenda ad neque id velit esse aliquam autem saepe ipsa.</small></p>
                
                <div class="col-12 col-sm">
                    <router-link id="btn-go" class="btn btn-sm btn-outline-success rounded-circle disabled" :to="{}"><i class="fas fa-chevron-right m-auto"></i></router-link>
                </div>
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
img
    width: 100%
#pJuegos1, #pJuegos2, #pJuegos3 
    max-width: 800px
    font-size: .7em

button
    min-width: 200px
    max-width: 100%

.accordion-item
    width: 800px
    max-width: 100%

#btn-go
    width: 50px
    height: 50px
    display: flex
    justify-content: center
    align-items: center
    margin: auto
</style>