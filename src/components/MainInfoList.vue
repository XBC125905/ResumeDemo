<template>
  <ul class="experience-list"  v-if="mainItem.bs==='li'">
    <li v-for="(value,key,index) in mainItem" v-if="['class','title','bs'].indexOf(key) === -1"  v-on:mouseover="overShow($event,-1)" v-on:mouseout="outHide($event,-1)">
      <h3 contenteditable="true" v-on:mouseover="overShow($event,0)"
          v-on:mouseout="outHide($event,0)">{{key}}</h3>
      <p contenteditable="true" v-on:mouseover="overShow($event,0)"
         v-on:mouseout="outHide($event,0)">{{value}}</p>
      <span class="item-remove" style="visibility: hidden;" v-on:mouseover="overShow($event,0)"
            v-on:mouseout="outHide($event,0)"><i class="iconfont icon-delete" v-on:mouseover="overShow($event,1)"
                                                 v-on:mouseout="outHide($event,1)" v-on:click="deleteMainItemValue($event,mainItemIndex,key)"></i></span></li>
  </ul>
  <p contenteditable="true"  class="maincontent-content" v-else-if="mainItem.bs==='p'">
    {{mainItem.content}}
  </p>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: 'main-info-list',
    props: {
      mainItem: Object,
      mainItemIndex: Number
    },
    methods: {
      ...mapMutations({
        dltMainItemsItemValue: 'dltMainItemsItemValue',
        editMainItemsItemValue: 'editMainItemsItemValue'
      }),
      deleteMainItemValue (event, mainItemIndex, Index) {
        this.dltMainItemsItemValue({itemsIndex: mainItemIndex, valueIndex: Index})
      },
      changeMainItemsItemValue (event, mainItemIndex, Index) {
        console.log(this.sideItem)
        let value = event.offsetX / event.target.clientWidth / 0.8 * event.target.max
        this.editMainItemsItemValue({itemsIndex: mainItemIndex, valueIndex: Index, value: value})
        console.log(this.sideItem)
      },
      hideAllItem_romeve () {
        let ele = document.querySelectorAll('span[class=item-remove]')
        for (let i = 0; i < ele.length; i++) {
          ele[i].style.visibility = 'hidden'
        }
      },
      hideAllHeaderControl () {
        let ele1 = document.querySelectorAll('span[class=item-add]')
        let ele2 = document.querySelectorAll('span[class=unit-remove]')
        for (let i = 0; i < ele1.length; i++) {
          ele1[i].style.visibility = 'hidden'
        }
        for (let i = 0; i < ele2.length; i++) {
          ele2[i].style.visibility = 'hidden'
        }
      },
      overShow (event, bs) {
        let ele1
        if (bs === -1) {
          ele1 = event.target.querySelectorAll('span[class=item-remove]')
        } else if (bs === 0) {
          ele1 = event.target.parentNode.querySelectorAll('span[class=item-remove]')
        } else if (bs === 1) {
          ele1 = event.target.parentNode.parentNode.querySelectorAll('span[class=item-remove]')
        }

        for (let i = 0; i < ele1.length; i++) {
          if (ele1[i]) {
            this.hideAllHeaderControl()
            this.hideAllItem_romeve()
            ele1[i].style.visibility = 'visible'
          }
        }
      },
      outHide (event, bs) {
        let ele1
        if (bs === -1) {
          ele1 = event.target.querySelectorAll('span[class=item-remove]')
        } else if (bs === 0) {
          ele1 = event.target.parentNode.querySelectorAll('span[class=item-remove]')
        } else if (bs === 1) {
          ele1 = event.target.parentNode.parentNode.querySelectorAll('span[class=item-remove]')
        }

        for (let i = 0; i < ele1.length; i++) {
          if (ele1[i] && !this.isMouseInDIV(event, ele1[i].parentNode)) {
            ele1[i].style.visibility = 'hidden'
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
