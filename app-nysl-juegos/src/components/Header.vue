<template>
  <div id="header">
      <h2 id="pHeader" class="pb-2 text-center d-block m-auto">{{titulo}}</h2>
  </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        titulo: String,
    }
}
</script>

<style scoped lang='sass'>

</style>