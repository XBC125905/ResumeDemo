<template>
  <div>
    <div class="container">
      <side></side>
      <main-content></main-content>
    </div>
    <div class="overlay" :style="{display:this.$store.state.showOverlay}"></div>
    <div class="overlay-wrapper":style="{display:this.$store.state.showOverlay}" v-on:click="closeEditPanal">
      <div class="overlay-wrapper-panal":style="{display:this.$store.state.editPortraitImg}">
        <span>
          <span contenteditable="false">请选择头像图片：</span>
          <input type="file" placeholder="请选择头像" accept="image/*" v-on:change="handleFiles($event,'portrait')" >
        </span>
      </div>
      <div class="overlay-wrapper-panal":style="{display:this.$store.state.editWeixinImg}">
        <span>
          <span contenteditable="false">请选择微信图片：</span>
          <input type="file" placeholder="请选择头像" accept="image/*" v-on:change="handleFiles($event,'weixin')" >
        </span>
      </div>
    </div>
  </div>

</template>

<script>
  import Side from './Side'
  import {mapMutations} from 'vuex'
  import MainContent from './MainContent'

  export default {
    components: {
      MainContent,
      Side},
    name: 'Index',
    methods: {
      ...mapMutations({
        showOverlay: 'showOverlay',
        editPortraitImg: 'editPortraitImg',
        editWeixinImg: 'editWeixinImg',
        setWeixinImg: 'setWeixinImg',
        setPortraitImg: 'setPortraitImg'
      }),
      closeEditPanal: function (e) {
        if (e.target.className === 'overlay-wrapper') {
          this.showOverlay('none')
        }
      },
      handleFiles: function (e, bs) {
        let src = this.getSrcFromInput_file({obj: e.target})
        if (bs === 'weixin') {
          this.setWeixinImg(src)
        } else if (bs === 'portrait') {
          this.setPortraitImg(src)
        }
        this.showOverlay('none')
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
