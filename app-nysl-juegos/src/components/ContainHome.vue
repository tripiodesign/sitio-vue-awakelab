<template>
  <div id="containHome">   
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
            <div class="row overflow-hidden" style="height:150px;">
                <img src="../assets/img/calendario2.jpg" alt="" style="margin-top: -100px">
            </div>
            <div class="row mt-4">
                <div class="col-12 col-sm-10">
                    <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit facere reiciendis mollitia cum iure tempore, at ratione ab odio nemo assumenda ad neque id velit esse aliquam autem saepe ipsa.</small></p>
                </div>

                <div class="col-12 col-sm d-flex">
                    <router-link id="btn-go" class="btn btn-sm btn-outline-success rounded-circle" :to="{name: 'Juegos'}"><i class="fas fa-chevron-right m-auto"></i></router-link>
                </div>
            </div>
        </div>
        <div class="tab-pane fade p-4" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div class="row overflow-hidden" style="height:150px;">
                <img src="../assets/img/soccer3.jpg" alt="" style="margin-top: -50px">
            </div>
            <div class="row mt-4">
                <p class="col-12 col-sm-10"><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit facere reiciendis mollitia cum iure tempore, at ratione ab odio nemo assumenda ad neque id velit esse aliquam autem saepe ipsa.</small></p>

                <div class="col-12 col-sm d-flex">
                    <router-link id="btn-go" class="btn btn-sm btn-outline-success rounded-circle" :to="{name: 'Detalles'}"><i class="fas fa-chevron-right m-auto"></i></router-link>
                </div>
            </div>
        </div>
        <div class="tab-pane fade p-4" id="events" role="tabpanel" aria-labelledby="events-tab">
            <div class="row overflow-hidden" style="height:150px;">
                <img src="../assets/img/soccer-event1.jpg" alt="" style="margin-top: -40px">
            </div>
            <div class="row mt-4">
                <div class="col-12 col-sm-10">
                    <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit facere reiciendis mollitia cum iure tempore, at ratione ab odio nemo assumenda ad neque id velit esse aliquam autem saepe ipsa.</small></p>
                </div>
                
                <div class="col-12 col-sm d-flex">
                    <router-link id="btn-go" class="btn btn-sm btn-outline-success rounded-circle my-auto disabled" :to="{}"><i class="fas fa-chevron-right m-auto"></i></router-link>
                </div>
            </div>
        </div>
    </div>

    <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>

    <!-- <div class="d-flex justify-content-end align-items-center">
        <router-link to="/juegos" class="btn btn-sm btn-outline-success border-0 ">Juegos</router-link>
        <router-link to="/detalles" class="btn btn-sm btn-outline-success border-0 ">Detalles<i class="fas fa-chevron-right ml-2"></i></router-link>
    </div> -->
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