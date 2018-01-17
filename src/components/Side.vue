<template>
    <div class="side">
      <me></me>
      <side-info-unit v-for="(item,key) in this.$store.state.sideItems" :sideItem="item" :sideItemIndex="key" :key="key">
      </side-info-unit>
    </div>
</template>

<script>
    import Me from './Me'
    import SideInfoUnit from './SideInfoUnit'

    export default {
      components: {
        SideInfoUnit,
        Me},
      name: 'side'
    }
</script>

<style scoped>

</style>
