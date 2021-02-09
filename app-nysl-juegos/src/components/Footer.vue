<template>
  <div id="footer" class="p-2 fixed-bottom bg-white border-top">
      <p class="d-block m-auto"><router-link to="/" class="text-success">NYSL</router-link> | Todos los derechos son reservados &#0174;</p>
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