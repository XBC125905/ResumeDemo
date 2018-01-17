<template>
  <div class="main">
    <main-info-unit v-for="(item,key) in this.$store.state.mainItems" :mainItem="item" :mainItemIndex="key" :key="key"></main-info-unit>
  </div>
</template>

<script>
    import MainInfoUnit from './MainInfoUnit'

    export default {
      components: {MainInfoUnit},
      name: 'main-content'
    }
</script>

<style scoped>

</style>
