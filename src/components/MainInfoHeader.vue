<template>
  <h2 class="info-header" v-on:mouseover="overShow($event,-1)" v-on:mouseout="outHide($event,-1)">
    <i v-bind:class="mainItem.class" v-on:mouseover="overShow($event,0)" v-on:mouseout="outHide($event,0)"></i>
    <span class="info-title" contenteditable="true" v-on:mouseover="overShow($event,0)"
          v-on:mouseout="outHide($event,0)">{{mainItem.title}}</span>
    <span class="item-add" style="visibility: hidden;" v-on:mouseover="overShow($event,0)"
          v-on:mouseout="outHide($event,0)"  v-on:click="addMainItemValue($event,mainItemIndex)">
        <i class="iconfont icon-playlistadd" v-on:mouseover="overShow($event,1)" v-on:mouseout="outHide($event,1)"></i>
      </span>
    <span class="unit-remove" style="visibility: hidden;" v-on:mouseover="overShow($event,0)"
          v-on:mouseout="outHide($event,0)" v-on:click="deleteMainItem($event,mainItemIndex)">
        <i class="iconfont icon-delete" v-on:mouseover="overShow($event,1)" v-on:mouseout="outHide($event,1)"></i>
      </span>
  </h2>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: 'main-info-header',
    props: {
      mainItem: Object,
      mainItemIndex: Number
    },
    methods: {
      ...mapMutations({
        dltMainItemsItem: 'dltMainItemsItem',
        addMainItemsItemValue: 'addMainItemsItemValue'
      }),
      deleteMainItem (event, mainItemsIndex) {
        this.dltMainItemsItem(mainItemsIndex)
      },
      addMainItemValue (event, mainItemsIndex) {
        this.addMainItemsItemValue(mainItemsIndex)
      },
      hideAllItem_romeve () {
        let ele = document.querySelectorAll('span[class=item-remove]')
        for (let i = 0; i < ele.length; i++) {
          ele[i].style.visibility = 'hidden'
        }
      },
      overShow (event, bs) {
        let ele1, ele2
        if (bs === -1) {
          ele1 = event.target.querySelectorAll('span[class=item-add]')
          ele2 = event.target.querySelectorAll('span[class=unit-remove]')
        } else if (bs === 0) {
          ele1 = event.target.parentNode.querySelectorAll('span[class=item-add]')
          ele2 = event.target.parentNode.querySelectorAll('span[class=unit-remove]')
        } else if (bs === 1) {
          ele1 = event.target.parentNode.parentNode.querySelectorAll('span[class=item-add]')
          ele2 = event.target.parentNode.parentNode.querySelectorAll('span[class=unit-remove]')
        }

        for (let i = 0; i < ele1.length; i++) {
          if (ele1[i]) {
            if (ele1[i].parentNode.parentNode.querySelectorAll('p[class=maincontent-content]').length <= 0) {
              this.hideAllItem_romeve()
              ele1[i].style.visibility = 'visible'
            } else {
              ele1[i].style.display = 'none'
            }
          }
        }
        for (let i = 0; i < ele2.length; i++) {
          if (ele2[i]) {
            ele2[i].style.visibility = 'visible'
          }
        }
      },
      outHide (event, bs) {
        let ele1, ele2

        if (bs === -1) {
          ele1 = event.target.querySelectorAll('span[class=item-add]')
          ele2 = event.target.querySelectorAll('span[class=unit-remove]')
        } else if (bs === 0) {
          ele1 = event.target.parentNode.querySelectorAll('span[class=item-add]')
          ele2 = event.target.parentNode.querySelectorAll('span[class=unit-remove]')
        } else if (bs === 1) {
          ele1 = event.target.parentNode.parentNode.querySelectorAll('span[class=item-add]')
          ele2 = event.target.parentNode.parentNode.querySelectorAll('span[class=unit-remove]')
        }

        for (let i = 0; i < ele1.length; i++) {
          if (ele1[i] && !this.isMouseInDIV(event, ele1[i].parentNode)) {
            ele1[i].style.visibility = 'hidden'
          }
        }
        for (let i = 0; i < ele2.length; i++) {
          if (ele2[i] && !this.isMouseInDIV(event, ele2[i].parentNode)) {
            ele2[i].style.visibility = 'hidden'
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
