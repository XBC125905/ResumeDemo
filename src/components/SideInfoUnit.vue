<template>
  <div class="info-unit">
    <side-info-header :sideItem="sideItem" :sideItemIndex="sideItemIndex"></side-info-header>
    <hr>
    <side-info-list :sideItem="sideItem" :sideItemIndex="sideItemIndex"></side-info-list>
  </div>

</template>

<script>
  import SideInfoList from './SideInfoList'
  import SideInfoHeader from './SideInfoHeader'

  export default {
    components: {
      SideInfoHeader,
      SideInfoList
    },
    name: 'side-info-unit',
    props: {
      sideItem: Object,
      sideItemIndex: Number
    }
  }
</script>

<style scoped>

</style>
