<template>
  <div id="header">
      <h2 id="pHeader" class="mb-2 p-2 bg-warning text-center d-block m-auto">{{titulo}}</h2>
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