<template>
  <div class="me">
    <div class="portrait" v-on:click="openPortraitEditPanal">
      <a><img :src='this.$store.state.portraitImg' alt="小白菜"></a>
    </div>

    <h1 contenteditable="true">小白菜</h1>
    <h4 contenteditable="true">开发设计 / 数据处理</h4>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: 'me',
    methods: {
      ...mapMutations({
        showOverlay: 'showOverlay',
        editPortraitImg: 'editPortraitImg',
        editWeixinImg: 'editWeixinImg'
      }),
      openPortraitEditPanal: function () {
        this.editWeixinImg('none')
        this.editPortraitImg('inline-block')
        this.showOverlay('block')
      }
    }
  }
</script>

<style scoped>
  img:hover {
    transform: scale(1.3);
  }
</style>
