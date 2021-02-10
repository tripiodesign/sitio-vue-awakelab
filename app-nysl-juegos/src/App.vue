<template>
  <div id="main" >
    <MenuBar />
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in" >
        <component :is="Component" />
      </transition>
    </router-view>
    <PageFooter class="bg-dark text-light" />
    <br>
    <Footer />
  </div>
</template>

<script>
import MenuBar from '../src/components/MenuBar'
import Footer from '@/components/Footer'
import PageFooter from '@/components/PageFooter'

export default {
  name: 'App',
  components:{
    MenuBar,
    Footer,
    PageFooter,
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
    transform: translateX(100%);
    opacity: 0;
  }
</style>
