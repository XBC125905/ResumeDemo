<template>
  <div class="info-unit">
    <main-info-header :mainItem="mainItem" :mainItemIndex="mainItemIndex"></main-info-header>
    <hr>
    <main-info-list  :mainItem="mainItem" :mainItemIndex="mainItemIndex"></main-info-list>
  </div>

</template>

<script>
  import MainInfoList from './MainInfoList'
  import MainInfoHeader from './MainInfoHeader'

  export default {
    components: {
      MainInfoHeader,
      MainInfoList
    },
    name: 'main-info-unit',
    props: {
      mainItem: Object,
      mainItemIndex: Number
    }
  }
</script>

<style scoped>

</style>
