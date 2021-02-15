<template>
  <div id="containHome" class="">   
    <ul class="nav nav-tabs" id="tab" role="tablist">
        <li class="nav-item" role="presentation">
            <router-link to="" 
            id="games-tab" 
            class="nav-link active" 
            href="#games"
            data-mdb-toggle="tab" 
            aria-controls="games-tab" 
            aria-selected="true"
            role="tab"
            >Juegos</router-link>
        </li>
        <li class="nav-item" role="presentation">
            <router-link to="" 
            id="info-tab" 
            class="nav-link" 
            data-mdb-toggle="tab" 
            href="#info" 
            aria-controls="info-tab" 
            aria-selected="false"
            role="tab" 
            >Info. General</router-link>
        </li>
        <li class="nav-item" role="presentation">
            <router-link to="" 
            id="events-tab" 
            class="nav-link" 
            data-mdb-toggle="tab" 
            href="#events" 
            aria-controls="events-tab" 
            aria-selected="false"
            role="tab" 
            >Eventos</router-link>
        </li>

    </ul>

    <div class="tab-content" id="tabContent">
        <div 
        id="games" 
        class="tab-pane fade show active" 
        role="tabpanel" 
        aria-mdb-labelledby="games-tab">
            <div 
            id="imgTop1" 
            class="w-100" 
            style="height:150px">
            </div>

            <div class="container mt-4 w-100">
                <div class="row">
                    <div class="col-12 col-sm-10">
                        <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit facere reiciendis mollitia cum iure tempore, at ratione ab odio nemo assumenda ad neque id velit esse aliquam autem saepe ipsa.</small></p>
                    </div>

                    <div class="col-12 col-sm d-flex">
                        <router-link id="btn-go" class="btn btn-sm btn-outline-success rounded-circle" :to="{name: 'Juegos'}"><i class="fas fa-chevron-right m-auto"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
        <div 
        id="info" 
        class="tab-pane fade" 
        role="tabpanel" 
        aria-mdb-labelledby="info-tab">
            <div 
            id="imgTop2" 
            class="w-100" 
            style="height:150px">
            </div>

            <div class="container row mt-4">
                <div class="col-12 col-sm-10">
                    <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit facere reiciendis mollitia cum iure tempore, at ratione ab odio nemo assumenda ad neque id velit esse aliquam autem saepe ipsa.</small></p>
                </div>

                <div class="col-12 col-sm d-flex">
                    <router-link id="btn-go" class="btn btn-sm btn-outline-success rounded-circle" :to="{name: 'Juegos'}"><i class="fas fa-chevron-right m-auto"></i></router-link>
                </div>
            </div>
        </div>
        <div 
        id="events" 
        class="tab-pane fade" 
        role="tabpanel" 
        aria-mdb-labelledby="events-tab">
            <div 
            id="imgTop3" 
            class="w-100" 
            style="height:150px">
            </div>

            <div class="container row mt-4">
                <div class="col-12 col-sm-10">
                    <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit facere reiciendis mollitia cum iure tempore, at ratione ab odio nemo assumenda ad neque id velit esse aliquam autem saepe ipsa.</small></p>
                </div>

                <div class="col-12 col-sm d-flex">
                    <router-link id="btn-go" class="btn btn-sm btn-outline-success rounded-circle" :to="{name: 'Juegos'}"><i class="fas fa-chevron-right m-auto"></i></router-link>
                </div>
            </div>
        </div>




    </div>

    <!-- <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div> -->
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
#imgTop1
    background-image: url(../assets/img/calendario2.jpg)
    background-position: fixed
    background-position-y: 60%
    background-size: 100%
    background-repeat: no-repeat
#imgTop2
    background-image: url(../assets/img/soccer3.jpg)
    background-position: center
    // background-position-y: -200px
    background-size: 100%
    background-repeat: no-repeat
#imgTop3
    background-image: url(../assets/img/soccer-event1.jpg)
    background-position: center
    background-size: 100%
    background-repeat: no-repeat
img
    width: 100%
    
#pJuegos1, #pJuegos2, #pJuegos3 
    max-width: 800px
    font-size: .7em


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