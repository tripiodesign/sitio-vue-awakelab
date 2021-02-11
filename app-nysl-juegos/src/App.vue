<template>
  <div id="main" class="position-fixed w-100 bg-light" >
    <MenuBar />
    <router-view v-slot="{ Component }" class="overflow-auto" style="">
      <transition name="slide-fade" mode="in-out" >
        <component :is="Component" />
      </transition>
    </router-view>
    <!-- <PageFooter class="bg-dark text-light" /> -->
    <Footer />
  </div>
</template>

<script>
import MenuBar from '../src/components/MenuBar'
import Footer from '@/components/Footer'
// import PageFooter from '@/components/PageFooter'

export default {
  name: 'App',
  components:{
    MenuBar,
    Footer,
    // PageFooter,
  },
  data() {
    return {
      showModal: false,
    }
  },

}
</script>

<style>
  .slide-fade-enter-active {
    transition: all .4s ease-in-out;
  }
  .slide-fade-leave-active {
    transition: all .4s cubic-bezier(1, 1, 1, 1);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(-100%);
    opacity: 0.5;
  }

#main{
  height: 100vh;
}
</style>
