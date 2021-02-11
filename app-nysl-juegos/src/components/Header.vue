<template>
  <div id="header">
      <h2 id="pHeader" class="p-1 bg-warning opacity-75 text-center d-block m-auto">{{titulo}}</h2>
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